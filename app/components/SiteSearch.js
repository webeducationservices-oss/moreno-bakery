"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  BAKERY_CATEGORIES,
  FOOD_CATEGORIES,
  CATERING_CATEGORIES,
} from "../data/menu";
import styles from "./SiteSearch.module.css";

function buildIndex() {
  const rows = [];
  const add = (cats, menuLabel, path) => {
    cats.forEach((cat) => {
      const items = cat.subcategories
        ? cat.subcategories.flatMap((s) => s.items)
        : cat.items || [];
      items.forEach((item) => {
        rows.push({
          name: item.name,
          description: item.description || "",
          price: item.price || "",
          menuLabel,
          categoryName: cat.name,
          href: `${path}#${cat.id}`,
          haystack: `${item.name} ${item.description || ""} ${cat.name}`.toLowerCase(),
        });
      });
    });
  };
  add(BAKERY_CATEGORIES, "Bakery Menu", "/menu/bakery");
  add(FOOD_CATEGORIES, "Food Menu", "/menu/food");
  add(CATERING_CATEGORIES, "Catering Menu", "/menu/catering");
  return rows;
}

function buildCategoryGroups() {
  const group = (cats, menuLabel, path) => ({
    menuLabel,
    categories: cats.map((cat) => ({
      name: cat.name,
      menuLabel,
      href: `${path}#${cat.id}`,
    })),
  });
  return [
    group(BAKERY_CATEGORIES, "Bakery Menu", "/menu/bakery"),
    group(FOOD_CATEGORIES, "Food Menu", "/menu/food"),
    group(CATERING_CATEGORIES, "Catering Menu", "/menu/catering"),
  ];
}

export default function SiteSearch({ onNavigate, variant = "bar" }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const index = useMemo(buildIndex, []);
  const categoryGroups = useMemo(buildCategoryGroups, []);

  useEffect(() => {
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (q.length < 2) return [];
    const words = q.split(/\s+/);
    return index
      .filter((r) => words.every((w) => r.haystack.includes(w)))
      .sort((a, b) => {
        const an = a.name.toLowerCase().includes(q) ? 0 : 1;
        const bn = b.name.toLowerCase().includes(q) ? 0 : 1;
        return an - bn;
      })
      .slice(0, 8);
  }, [q, index]);

  const close = () => {
    setOpen(false);
    setQuery("");
    if (onNavigate) onNavigate();
  };

  return (
    <div
      ref={wrapRef}
      className={`${styles.wrap} ${variant === "mobile" ? styles.wrapMobile : ""} ${variant === "nav" ? styles.wrapNav : ""}`}
      role="search"
    >
      <svg className={styles.icon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input
        type="search"
        className={styles.input}
        placeholder="Search the menu"
        aria-label="Search the menu"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
          if (e.key === "Enter" && results[0]) {
            window.location.href = results[0].href;
          }
        }}
      />
      {open && q.length >= 2 && (
        <div className={styles.results}>
          {results.length === 0 ? (
            <div className={styles.empty}>No matches. Try another word, or call us at (813) 689-0320.</div>
          ) : (
            <ul>
              {results.map((r, i) => (
                <li key={`${r.menuLabel}-${r.name}-${i}`}>
                  <Link href={r.href} className={styles.result} onClick={close}>
                    <span className={styles.resultName}>{r.name}</span>
                    <span className={styles.resultMeta}>
                      {r.menuLabel} · {r.categoryName}
                      {r.price ? ` · ${r.price}` : ""}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
