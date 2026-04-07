"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const CATEGORIES = {
  All: null,
  "Cakes & Celebrations": [
    { src: "/images/food/moreno-bakery-cheesecakes.jpg", alt: "Cheesecakes" },
    { src: "/images/food/moreno-bakery-heart-shaped-vanilla-cake.jpg", alt: "Heart-shaped vanilla cake" },
    { src: "/images/food/moreno-bakery-heart-shaped-red-velvet-cake.jpg", alt: "Heart-shaped red velvet cake" },
    { src: "/images/food/moreno-bakery-heart-shaped-chocolate-mousse.jpg", alt: "Chocolate mousse cake" },
    { src: "/images/food/moreno-bakery-heart-shaped-dulce-de-leche-cake.jpg", alt: "Dulce de leche cake" },
    { src: "/images/food/moreno-bakery-heart-shaped-marble-cake.jpg", alt: "Marble cake" },
    { src: "/images/food/moreno-bakery-gooey-butter-cake.jpg", alt: "Gooey butter cake" },
    { src: "/images/events/birthday-cake-celebration.webp", alt: "Birthday celebration cake" },
    { src: "/images/events/graduation-dessert-table.webp", alt: "Graduation dessert table" },
    { src: "/images/events/party-dessert-table.webp", alt: "Party dessert table" },
  ],
  "Cupcakes & Sweets": [
    { src: "/images/food/moreno-bakery-french-vanilla-cupcake.jpg", alt: "French vanilla cupcake" },
    { src: "/images/food/moreno-bakery-boston-creme-cupcake.jpg", alt: "Boston creme cupcake" },
    { src: "/images/food/moreno-bakery-carrot-cake-cupcake.jpg", alt: "Carrot cake cupcake" },
    { src: "/images/food/moreno-bakery-chocolate-mousse-cupcake.jpg", alt: "Chocolate mousse cupcake" },
    { src: "/images/food/moreno-bakery-cannoli-cupcake.jpg", alt: "Cannoli cupcake" },
    { src: "/images/food/moreno-bakery-german-chocolate-cupcake.jpg", alt: "German chocolate cupcake" },
    { src: "/images/food/moreno-bakery-nutella-cupcake.jpg", alt: "Nutella cupcake" },
    { src: "/images/food/moreno-bakery-peanut-butter-cupcake.jpg", alt: "Peanut butter cupcake" },
    { src: "/images/food/moreno-bakery-malybu-dream-cup.jpg", alt: "Malibu dream cup" },
    { src: "/images/food/moreno-bakery-chocolate-bonbon.jpg", alt: "Chocolate bonbon" },
    { src: "/images/food/moreno-bakery-almond-joy-bonbon.jpg", alt: "Almond joy bonbon" },
    { src: "/images/food/moreno-bakery-mocha-bonbon.jpg", alt: "Mocha bonbon" },
  ],
  "Pastries & Cookies": [
    { src: "/images/food/moreno-bakery-eclairs.jpg", alt: "Eclairs" },
    { src: "/images/food/moreno-bakery-cream-horns.jpg", alt: "Cream horns" },
    { src: "/images/food/moreno-bakery-cinnamon-roll.jpg", alt: "Cinnamon roll" },
    { src: "/images/food/moreno-bakery-linzer-tarts.jpg", alt: "Linzer tarts" },
    { src: "/images/food/moreno-bakery-elephant-ears-palmiers.jpg", alt: "Elephant ears palmiers" },
    { src: "/images/food/moreno-bakery-hamantaschen.jpg", alt: "Hamantaschen" },
    { src: "/images/food/moreno-bakery-almond-horns.jpg", alt: "Almond horns" },
    { src: "/images/food/moreno-bakery-almond-sticks.jpg", alt: "Almond sticks" },
    { src: "/images/food/moreno-bakery-hungarian-bowties.jpg", alt: "Hungarian bowties" },
    { src: "/images/food/moreno-bakery-mini-cannolis.jpg", alt: "Mini cannolis" },
    { src: "/images/food/moreno-bakery-chocolate-chunk-cookie.jpg", alt: "Chocolate chunk cookie" },
    { src: "/images/food/moreno-bakery-peanut-butter-cookies.jpg", alt: "Peanut butter cookies" },
    { src: "/images/food/moreno-bakery-chinese-marble-cookie.jpg", alt: "Chinese marble cookie" },
    { src: "/images/food/moreno-bakery-gingerbread-cookie.jpg", alt: "Gingerbread cookie" },
    { src: "/images/food/moreno-bakery-oatmeal-raisin-walnut-cookies.jpg", alt: "Oatmeal raisin cookies" },
    { src: "/images/food/moreno-bakery-chocolate-chip-sandwich-cookies.jpg", alt: "Chocolate chip sandwich cookies" },
  ],
  "Breads & Breakfast": [
    { src: "/images/food/moreno-bakery-guava-and-cheese-stuffed-bread.jpg", alt: "Guava and cheese stuffed bread" },
    { src: "/images/food/moreno-bakery-pan-de-bono.jpg", alt: "Pan de bono" },
    { src: "/images/food/moreno-bakery-pan-de-queso.jpg", alt: "Pan de queso" },
    { src: "/images/food/moreno-bakery-cinnamon-sticks.jpg", alt: "Cinnamon sticks" },
    { src: "/images/food/moreno-bakery-bread-pudding-cuban-style.jpg", alt: "Cuban-style bread pudding" },
    { src: "/images/food/moreno-bakery-breakfast-bowl.jpg", alt: "Breakfast bowl" },
    { src: "/images/food/moreno-bakery-breakfast-egg-sandwich.jpg", alt: "Breakfast egg sandwich" },
    { src: "/images/food/moreno-bakery-cheese-tostada.jpg", alt: "Cheese tostada" },
    { src: "/images/story/cuban-bread-baking.webp", alt: "Traditional Cuban bread" },
  ],
  "Sandwiches & Food": [
    { src: "/images/food/moreno-bakery-cuban-sandwich.jpg", alt: "Cuban sandwich" },
    { src: "/images/food/moreno-bakery-cuban-sandwich-brandon-fl.jpg", alt: "Cuban sandwich pressed" },
    { src: "/images/food/moreno-bakery-media-noche-8in.jpg", alt: "Media Noche" },
    { src: "/images/food/moreno-bakery-italian-blt.jpg", alt: "Italian BLT" },
    { src: "/images/food/moreno-bakery-pastrami-sandwich.jpg", alt: "Pastrami sandwich" },
    { src: "/images/food/moreno-bakery-meatball-sandwich.jpg", alt: "Meatball sandwich" },
    { src: "/images/food/moreno-bakery-chicken-parmesan-sandwich.jpg", alt: "Chicken parmesan sandwich" },
    { src: "/images/food/moreno-bakery-chicken-empanadas.jpg", alt: "Chicken empanadas" },
    { src: "/images/food/moreno-bakery-ham-croquetas.jpg", alt: "Ham croquetas" },
    { src: "/images/food/moreno-bakery-greek-salad.jpg", alt: "Greek salad" },
  ],
  "Hot Food & Combos": [
    { src: "/images/food/moreno-bakery-chicken-marsala-combo.jpg", alt: "Chicken marsala combo" },
    { src: "/images/food/moreno-bakery-roast-pork-combo.jpg", alt: "Roast pork combo" },
    { src: "/images/food/moreno-bakery-mojo-chicken-combo.jpg", alt: "Mojo chicken combo" },
    { src: "/images/food/moreno-bakery-beef-stew-combo.jpg", alt: "Beef stew combo" },
    { src: "/images/food/moreno-bakery-fried-fish-combo.jpg", alt: "Fried fish combo" },
    { src: "/images/food/moreno-bakery-oxtail.jpg", alt: "Oxtail" },
    { src: "/images/food/moreno-bakery-chicken-tenders.jpg", alt: "Chicken tenders" },
    { src: "/images/food/moreno-bakery-lasagna-with-meat-sauce.jpg", alt: "Lasagna with meat sauce" },
    { src: "/images/food/moreno-bakery-chicken-spinach-lasagna.jpg", alt: "Chicken spinach lasagna" },
    { src: "/images/catering/plated-cuban-dinner.webp", alt: "Plated Cuban dinner" },
  ],
  "Catering & Events": [
    { src: "/images/catering/catering-buffet-setup.webp", alt: "Catering buffet setup" },
    { src: "/images/catering/corporate-catering-spread.webp", alt: "Corporate catering spread" },
    { src: "/images/catering/party-dessert-table.webp", alt: "Party dessert table" },
    { src: "/images/events/events-hub-hero.webp", alt: "Event celebration spread" },
    { src: "/images/events/corporate-meeting-food.webp", alt: "Corporate meeting food" },
    { src: "/images/events/baby-shower-desserts.webp", alt: "Baby shower desserts" },
    { src: "/images/events/anniversary-dinner.webp", alt: "Anniversary dinner" },
    { src: "/images/story/bakery-interior-warm.webp", alt: "Inside Moreno Bakery" },
  ],
};

const ALL_PHOTOS = Object.entries(CATEGORIES)
  .filter(([k]) => k !== "All")
  .flatMap(([, v]) => v);

const CATEGORY_NAMES = Object.keys(CATEGORIES);

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index into current photos array

  const photos = active === "All" ? ALL_PHOTOS : CATEGORIES[active];

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goPrev = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((i) => (i - 1 + photos.length) % photos.length);
  }, [lightbox, photos.length]);

  const goNext = useCallback(() => {
    if (lightbox === null) return;
    setLightbox((i) => (i + 1) % photos.length);
  }, [lightbox, photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    function handleKey(e) {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, goPrev, goNext]);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <Image src="/images/heroes/hero-gallery.jpg" alt="Assorted cupcake tower at Moreno Bakery" width={1400} height={800} className={styles.heroImage} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>See Moreno Bakery in Brandon, FL</h1>
          <p className={styles.heroSub}>
            Explore the pastries, cakes, Cuban bread, food, catering trays, and
            celebration desserts that have made Moreno Bakery a local favorite in
            Brandon.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/menu" className="btn btn-white btn-lg">View Our Menu</Link>
            <Link href="/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Ask About Catering
            </Link>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ────────────────────────────────────── */}
      <div className={styles.filterBar}>
        {CATEGORY_NAMES.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.filterBtn} ${active === cat ? styles.filterBtnActive : ""}`}
            onClick={() => { setActive(cat); setLightbox(null); }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Gallery ───────────────────────────────────────── */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className={styles.galleryGrid}>
            {photos.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={styles.galleryItem}
                onClick={() => openLightbox(i)}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  loading="lazy"
                />
                <div className={styles.galleryCaption}>{img.alt}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────── */}
      {lightbox !== null && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox} role="dialog" aria-label="Image viewer">
          <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>

          <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              width={1200}
              height={900}
              className={styles.lightboxImage}
              priority
            />
            <div className={styles.lightboxCaption}>
              <span>{photos[lightbox].alt}</span>
              <span className={styles.lightboxCounter}>{lightbox + 1} / {photos.length}</span>
            </div>
          </div>

          <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      )}

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Next steps">
        <div className="container">
          <h2>Inspired by What You See?</h2>
          <p>
            Browse the menu, ask about catering, or contact us to start planning
            your order.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/menu" className="btn btn-white btn-lg">View Menu</Link>
            <Link href="/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Explore Catering
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
