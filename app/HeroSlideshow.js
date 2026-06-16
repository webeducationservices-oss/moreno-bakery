"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const SLIDES = [
  {
    src: "/images/heroes/hero-slide-1.jpg",
    alt: "Young girl smiling at decorated cookies at Moreno Bakery",
  },
  {
    src: "/images/heroes/hero-slide-2.jpg",
    alt: "Moreno Bakery team member serving a customer at the pastry counter",
  },
  {
    src: "/images/heroes/hero-slide-3.jpg",
    alt: "Moreno Bakery storefront window sign in Brandon FL",
  },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero} aria-label="Welcome to Moreno Bakery">
      {/* Left: Content */}
      <div className={styles.heroLeft}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-warm-light)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-warm-light)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-warm-light)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-warm-light)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-warm-light)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>Brandon&apos;s Favorite Bakery</span>
          </div>
          <h1 className={styles.heroTitle}>
            Your Neighborhood Bakery for{" "}
            <span className={styles.heroTitleAccent}>Every Occasion</span>
          </h1>
          <p className={styles.heroSub}>
            From pastries, cakes, and Cuban favorites to office catering, custom
            desserts, and wedding cakes. Order today or plan for the moments
            that matter.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/menu" className="btn btn-lg" style={{ fontSize: "1rem", padding: "16px 40px", background: "#002B50", color: "#fff" }}>
              View Menu
            </Link>
            <Link href="/catering" className="btn btn-outline btn-lg">
              Request Catering
            </Link>
          </div>

          {/* Social proof bar */}
          <div className={styles.heroProof}>
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>5.0</div>
              <div className={styles.proofLabel}>Google<br />Rating</div>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>200+</div>
              <div className={styles.proofLabel}>5-Star<br />Reviews</div>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <div className={styles.proofNumber}>20+</div>
              <div className={styles.proofLabel}>Years in<br />Brandon</div>
            </div>
            <div className={styles.proofDivider} />
            <div className={styles.proofItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-warm-light)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <div className={styles.proofLabel}>Featured<br />on NBC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Slideshow */}
      <div className={styles.heroRight}>
        {SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1400}
            height={800}
            className={`${styles.heroSlide} ${i === active ? styles.heroSlideActive : ""}`}
            priority={i === 0}
          />
        ))}
      </div>
    </section>
  );
}
