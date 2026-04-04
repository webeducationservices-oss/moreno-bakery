"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BAKERY_CATEGORIES } from "../../data/menu";
import styles from "../menu.module.css";

export default function BakeryMenuPage() {
  const [activeCategory, setActiveCategory] = useState(BAKERY_CATEGORIES[0]?.id);

  useEffect(() => {
    const sections = BAKERY_CATEGORIES.map((c) =>
      document.getElementById(c.id)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-200px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const totalItems = BAKERY_CATEGORIES.reduce(
    (sum, c) => sum + c.items.length,
    0
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.menuHero}>
        <div className="container">
          <h1>Bakery Menu</h1>
          <p className={styles.menuHeroSub}>
            {totalItems}+ handmade items baked fresh daily — cupcakes, cakes,
            pies, cookies, pastries, and Cuban breads.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div style={{ background: "var(--color-bg-alt)" }}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/menu">Menu</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
            <span className={styles.breadcrumbCurrent}>Bakery</span>
          </nav>
        </div>
      </div>

      {/* ── Sticky Category Nav ───────────────────────────── */}
      <nav className={styles.categoryNav} aria-label="Bakery categories">
        <div className={styles.categoryNavInner}>
          {BAKERY_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`${styles.categoryTab} ${
                activeCategory === cat.id ? styles.categoryTabActive : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(cat.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {cat.name}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Category Sections ─────────────────────────────── */}
      {BAKERY_CATEGORIES.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className={styles.categorySection}
        >
          <div className="container">
            <div className={styles.categorySectionHeader}>
              <h2>
                {cat.name}
                <span className={styles.itemCount}>{cat.items.length}</span>
              </h2>
              <p>{cat.description}</p>
            </div>

            <div className={styles.itemGrid}>
              {cat.items.map((item) => (
                <div key={item.name} className={styles.itemCard}>
                  <div className={styles.itemImageWrap}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={280}
                        height={280}
                        className={styles.itemImage}
                        loading="lazy"
                      />
                    ) : (
                      <div className={styles.itemPlaceholder} aria-hidden="true">
                        🍰
                      </div>
                    )}
                    {item.tag && (
                      <span className={styles.itemTag}>{item.tag}</span>
                    )}
                  </div>
                  <div className={styles.itemBody}>
                    <div className={styles.itemName}>{item.name}</div>
                    {item.size && (
                      <div className={styles.itemSize}>{item.size}</div>
                    )}
                    {item.description && (
                      <div className={styles.itemDesc}>{item.description}</div>
                    )}
                    {item.price && (
                      <div className={styles.itemPrice}>{item.price}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Order CTA Band ────────────────────────────────── */}
      <section className={styles.orderBand} aria-label="Order now">
        <div className="container">
          <h2>Craving Something Sweet?</h2>
          <p>
            Visit us in Brandon, call ahead for your favorites, or order delivery.
          </p>
          <div className={styles.orderButtons}>
            <a
              href="https://www.doordash.com/store/moreno-bakery-brandon-24867318/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-white btn-lg"
            >
              Order on DoorDash
            </a>
            <a href="tel:+18136551861" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Call to Order
            </a>
            <Link href="/menu/food" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Food Menu →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
