import Image from "next/image";
import Link from "next/link";
import { BAKERY_CATEGORIES, FOOD_CATEGORIES, CATERING_CATEGORIES } from "../data/menu";
import styles from "./menu.module.css";

export const metadata = {
  title: "Menu | Moreno Bakery — Cuban Bakery & Kitchen in Brandon, FL",
  description:
    "Browse our full menu — fresh-baked pastries, Cuban sandwiches, hot combos, custom cakes, and more. Order online or visit us in Brandon, FL.",
  openGraph: {
    title: "Menu | Moreno Bakery",
    description:
      "Fresh-baked pastries, Cuban sandwiches, hot combos, custom cakes, and more at Moreno Bakery in Brandon, FL.",
  },
};

const MENU_SECTIONS = [
  {
    title: "Bakery",
    href: "/menu/bakery",
    image: "/images/food/moreno-bakery-eclairs.jpg",
    description:
      "Cupcakes, cakes, pies, cookies, pastries, brownies, and fresh-baked Cuban breads — handmade daily.",
    count: BAKERY_CATEGORIES.reduce((sum, c) => sum + c.items.length, 0),
  },
  {
    title: "Food & Kitchen",
    href: "/menu/food",
    image: "/images/food/moreno-bakery-cuban-sandwich.jpg",
    description:
      "Cuban sandwiches, hot combos, soups, salads, empanadas, and savory bites made from scratch.",
    count: FOOD_CATEGORIES.reduce(
      (sum, c) =>
        sum +
        (c.subcategories
          ? c.subcategories.reduce((s, sc) => s + sc.items.length, 0)
          : c.items.length),
      0
    ),
  },
  {
    title: "Catering",
    href: "/menu/catering",
    image: "/images/food/moreno-bakery-chicken-marsala-combo.jpg",
    description:
      "Entrée trays, sandwich platters, finger food, cookie and pastry trays, and custom cakes for any event.",
    count: CATERING_CATEGORIES.reduce((sum, c) => sum + c.items.length, 0),
  },
];

export default function MenuPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.menuHero}>
        <Image src="/images/heroes/hero-menu.jpg" alt="Moreno Bakery pastry display case" width={1400} height={800} className={styles.menuHeroImage} priority />
        <div className={styles.menuHeroOverlay} />
        <div className={styles.menuHeroContent}>
          <h1>Our Menu</h1>
          <p className={styles.menuHeroSub}>
            From the bakery case to the kitchen — everything is made fresh daily
            with recipes rooted in Cuban tradition.
          </p>
        </div>
      </section>

      {/* ── Info Bar ──────────────────────────────────────── */}
      <div className={styles.infoBar}>
        <div className={styles.infoBarInner}>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            Open Mon–Sat 7am–7pm · Sun 9am–4pm
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            813.689.0320
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            737 W. Brandon Blvd.
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            </span>
            DoorDash Delivery
          </div>
        </div>
      </div>

      {/* ── Main Hub Cards ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.hubGrid}>
            {MENU_SECTIONS.map((sec) => (
              <Link key={sec.href} href={sec.href} className={styles.hubCard}>
                <Image
                  src={sec.image}
                  alt={sec.title}
                  width={600}
                  height={420}
                  className={styles.hubCardImage}
                />
                <div className={styles.hubCardOverlay} />
                <div className={styles.hubCardContent}>
                  <h2>{sec.title}</h2>
                  <p>{sec.description}</p>
                  <span className="btn btn-white">
                    Browse {sec.count}+ Items →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Quick Links ──────────────────────────── */}
      <section className="section-alt" aria-label="Browse by category">
        <div className="container">
          <h2 className="text-center">Browse by Category</h2>
          <p className="text-center text-muted" style={{ maxWidth: 540, margin: "0 auto var(--space-xl)" }}>
            Jump straight to what you're craving — from cupcakes and Cuban
            sandwiches to soups and sides.
          </p>

          <h3 style={{ marginBottom: "var(--space-md)", marginTop: "var(--space-xl)" }}>
            🍰 Bakery
          </h3>
          <div className={styles.categoryGrid}>
            {BAKERY_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/menu/bakery#${cat.id}`}
                className={styles.categoryCard}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={560}
                  height={350}
                  className={styles.categoryCardImage}
                  loading="lazy"
                />
                <div className={styles.categoryCardBody}>
                  <h3>
                    {cat.name}
                    <span className={styles.itemCount}>
                      {cat.items.length}
                    </span>
                  </h3>
                  <p>{cat.description}</p>
                  <span className={styles.categoryCardCta}>
                    View All <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <h3 style={{ marginBottom: "var(--space-md)", marginTop: "var(--space-3xl)" }}>
            🍽️ Food & Kitchen
          </h3>
          <div className={styles.categoryGrid}>
            {FOOD_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/menu/food#${cat.id}`}
                className={styles.categoryCard}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={560}
                  height={350}
                  className={styles.categoryCardImage}
                  loading="lazy"
                />
                <div className={styles.categoryCardBody}>
                  <h3>
                    {cat.name}
                    <span className={styles.itemCount}>
                      {cat.subcategories
                        ? cat.subcategories.reduce(
                            (s, sc) => s + sc.items.length,
                            0
                          )
                        : cat.items.length}
                    </span>
                  </h3>
                  <p>{cat.description}</p>
                  <span className={styles.categoryCardCta}>
                    View All <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <h3 style={{ marginBottom: "var(--space-md)", marginTop: "var(--space-3xl)" }}>
            🎉 Catering
          </h3>
          <div className={styles.categoryGrid}>
            {CATERING_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/menu/catering#${cat.id}`}
                className={styles.categoryCard}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={560}
                  height={350}
                  className={styles.categoryCardImage}
                  loading="lazy"
                />
                <div className={styles.categoryCardBody}>
                  <h3>
                    {cat.name}
                    <span className={styles.itemCount}>
                      {cat.items.length}
                    </span>
                  </h3>
                  <p>{cat.description}</p>
                  <span className={styles.categoryCardCta}>
                    View All <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Order CTA Band ────────────────────────────────── */}
      <section className={styles.orderBand} aria-label="Order now">
        <div className="container">
          <h2>Ready to Order?</h2>
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
          </div>
        </div>
      </section>
    </>
  );
}
