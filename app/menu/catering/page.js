"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CATERING_CATEGORIES } from "../../data/menu";
import styles from "../menu.module.css";

export default function CateringMenuPage() {
  const [activeCategory, setActiveCategory] = useState(CATERING_CATEGORIES[0]?.id);

  useEffect(() => {
    const sections = CATERING_CATEGORIES.map((c) =>
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

  const totalItems = CATERING_CATEGORIES.reduce(
    (sum, c) => sum + c.items.length,
    0
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.menuHero}>
        <div className="container">
          <h1>Catering Menu</h1>
          <p className={styles.menuHeroSub}>
            {totalItems}+ catering options for events of all sizes — entrée trays,
            sandwich platters, finger food, cookie and pastry trays, and custom cakes.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div style={{ background: "var(--color-bg-alt)" }}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/menu">Menu</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
            <span className={styles.breadcrumbCurrent}>Catering</span>
          </nav>
        </div>
      </div>

      {/* ── Sticky Category Nav ───────────────────────────── */}
      <nav className={styles.categoryNav} aria-label="Catering categories">
        <div className={styles.categoryNavInner}>
          {CATERING_CATEGORIES.map((cat) => (
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
      {CATERING_CATEGORIES.map((cat) => (
        <section key={cat.id} id={cat.id} className={styles.categorySection}>
          <div className="container">
            <div className={styles.categorySectionHeader}>
              <h2>
                {cat.name}
                <span className={styles.itemCount}>{cat.items.length}</span>
              </h2>
              <p>{cat.description}</p>
            </div>

            <div className={styles.itemListGrid}>
              {cat.items.map((item) => (
                <div key={item.name} className={styles.itemListCard}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className={styles.itemListImage}
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.itemListPlaceholder} aria-hidden="true">
                      🍽️
                    </div>
                  )}
                  <div className={styles.itemListBody}>
                    <div className={styles.itemListName}>{item.name}</div>
                    {item.description && (
                      <div className={styles.itemListDesc}>{item.description}</div>
                    )}
                    <div className={styles.itemListMeta}>
                      {item.price && (
                        <span className={styles.itemPrice}>{item.price}</span>
                      )}
                      {item.tag && (
                        <span className={styles.itemTag} style={{ position: "static" }}>{item.tag}</span>
                      )}
                    </div>
                    {item.priceNote && (
                      <div className={styles.itemPriceNote}>{item.priceNote}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Order CTA Band ────────────────────────────────── */}
      <section className={styles.orderBand} aria-label="Request catering">
        <div className="container">
          <h2>Ready to Plan Your Event?</h2>
          <p>
            Call us to place your catering order or discuss custom options for your event.
          </p>
          <div className={styles.orderButtons}>
            <a href="tel:8136890320" className="btn btn-white btn-lg">
              Call 813.689.0320
            </a>
            <Link href="/menu/bakery" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Bakery Menu →
            </Link>
            <Link href="/menu/food" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Food Menu →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
