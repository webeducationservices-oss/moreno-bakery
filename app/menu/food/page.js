"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FOOD_CATEGORIES } from "../../data/menu";
import styles from "../menu.module.css";

export default function FoodMenuPage() {
  const [activeCategory, setActiveCategory] = useState(FOOD_CATEGORIES[0]?.id);

  useEffect(() => {
    const sections = FOOD_CATEGORIES.map((c) =>
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

  const totalItems = FOOD_CATEGORIES.reduce(
    (sum, c) =>
      sum +
      (c.subcategories
        ? c.subcategories.reduce((s, sc) => s + sc.items.length, 0)
        : c.items.length),
    0
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.menuHero}>
        <div className="container">
          <h1>Food & Kitchen Menu</h1>
          <p className={styles.menuHeroSub}>
            {totalItems}+ made-from-scratch dishes — Cuban sandwiches, hot
            combos, soups, salads, empanadas, and more.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div style={{ background: "var(--color-bg-alt)" }}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/menu">Menu</Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
            <span className={styles.breadcrumbCurrent}>Food & Kitchen</span>
          </nav>
        </div>
      </div>

      {/* ── Sticky Category Nav ───────────────────────────── */}
      <nav className={styles.categoryNav} aria-label="Food categories">
        <div className={styles.categoryNavInner}>
          {FOOD_CATEGORIES.map((cat) => (
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
      {FOOD_CATEGORIES.map((cat) => (
        <section key={cat.id} id={cat.id} className={styles.categorySection}>
          <div className="container">
            <div className={styles.categorySectionHeader}>
              <h2>
                {cat.name}
                <span className={styles.itemCount}>
                  {cat.subcategories
                    ? cat.subcategories.reduce(
                        (s, sc) => s + sc.items.length,
                        0
                      )
                    : cat.items.length}
                </span>
              </h2>
              <p>{cat.description}</p>
            </div>

            {/* Categories with subcategories (Sandwiches, Hot Food) */}
            {cat.subcategories ? (
              cat.subcategories.map((sub) => (
                <div key={sub.name}>
                  <h3 className={styles.subcategoryLabel}>{sub.name}</h3>
                  <div className={styles.itemListGrid}>
                    {sub.items.map((item) => (
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
                          <div
                            className={styles.itemListPlaceholder}
                            aria-hidden="true"
                          >
                            🍽️
                          </div>
                        )}
                        <div className={styles.itemListBody}>
                          <div className={styles.itemListName}>{item.name}</div>
                          {item.description && (
                            <div className={styles.itemListDesc}>
                              {item.description}
                            </div>
                          )}
                          <div className={styles.itemListMeta}>
                            {item.price && (
                              <span className={styles.itemPrice}>
                                {item.price}
                              </span>
                            )}
                            {item.size && (
                              <span className={styles.itemSize}>
                                {item.size}
                              </span>
                            )}
                            {item.tag && (
                              <span className={styles.itemTag} style={{ position: "static" }}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          {item.priceNote && (
                            <div className={styles.itemPriceNote}>
                              {item.priceNote}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              /* Flat item lists — list card layout */
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
            )}
          </div>
        </section>
      ))}

      {/* ── Order CTA Band ────────────────────────────────── */}
      <section className={styles.orderBand} aria-label="Order now">
        <div className="container">
          <h2>Hungry? Let's Fix That.</h2>
          <p>
            Pick up in store, call ahead, or get it delivered through DoorDash.
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
            <a href="tel:8136890320" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Call to Order
            </a>
            <Link href="/menu/bakery" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Bakery Menu →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
