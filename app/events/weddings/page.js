import Image from "next/image";
import Link from "next/link";
import styles from "../events.module.css";

export const metadata = {
  title: "Wedding Cakes in Brandon, FL | Moreno Bakery",
  description:
    "Explore custom wedding cakes, dessert tables, and wedding bakery services from Moreno Bakery in Brandon, FL. Schedule a consultation today.",
  openGraph: {
    title: "Wedding Cakes in Brandon, FL | Moreno Bakery",
    description:
      "Explore custom wedding cakes, dessert tables, and wedding bakery services from Moreno Bakery in Brandon, FL. Schedule a consultation today.",
  },
};

const PROCESS_STEPS = [
  {
    num: "1",
    title: "Share Your Vision",
    desc: "Wedding date, guest count, celebration details, and any inspiration photos or ideas.",
  },
  {
    num: "2",
    title: "Design Direction",
    desc: "Talk through cake style, dessert options, flavor direction, and any special requests.",
  },
  {
    num: "3",
    title: "Flavor & Details",
    desc: "Discuss cake size, filling, frosting preferences, and how the design connects with your wedding.",
  },
  {
    num: "4",
    title: "Confirm & Celebrate",
    desc: "Finalize the order, pickup or delivery details, and enjoy your day knowing it is handled.",
  },
];

const WHY_REASONS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
    title: "Custom Wedding Cake Direction",
    desc: "Every cake starts with the couple's vision and is shaped around the style of the day.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
    title: "Dessert Table Options",
    desc: "Go beyond one cake with pastries, cookies, mini desserts, and bakery-style additions.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    ),
    title: "Established Local Reputation",
    desc: "A trusted Brandon bakery couples can count on for one of the most important days.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Handmade Feel, Real Capacity",
    desc: "Neighborhood bakery warmth backed by a kitchen that can handle meaningful event volume.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    title: "Consultation-Driven Planning",
    desc: "Clear next steps through a guided process that makes planning feel easy, not stressful.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
    ),
    title: "All Celebration Sizes",
    desc: "From intimate weddings to larger receptions, rehearsal dinners, and bridal showers.",
  },
];

export default function WeddingsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Wedding services">
        <Image
          src="/images/weddings/wedding-cake-elegant.webp"
          alt="Elegant wedding cake from Moreno Bakery"
          width={1400}
          height={600}
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className="accent-heading" style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-xl)", marginBottom: "var(--space-sm)" }}>
            Moreno Bakery Weddings
          </p>
          <h1>Wedding Cakes and Desserts in Brandon, FL That Feel Personal and Memorable</h1>
          <p className={styles.heroSub}>
            From elegant wedding cakes to dessert tables filled with pastries,
            sweets, and celebration details, Moreno Bakery helps couples in
            Brandon create a wedding dessert experience that feels thoughtful,
            beautiful, and easy to plan.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-white btn-lg">
              Schedule a Wedding Consultation
            </Link>
            <Link href="/gallery" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Wedding Inspiration
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p>
            Wedding desserts are not only about serving guests. They are part of
            the atmosphere, the photos, and the way the day is remembered.
            Moreno Bakery brings together custom cake inspiration, handmade
            bakery quality, and the practical capacity to support real event
            volume — whether the vision is classic and elegant, playful and
            colorful, or simple and timeless.
          </p>
        </div>
      </section>

      {/* ── Custom Wedding Cakes ──────────────────────────── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.splitContent}>
            <div>
              <h2>Custom Wedding Cakes That Start With Your Vision</h2>
              <p>
                Some couples come in with detailed inspiration photos and a
                strong design direction. Others only know they want something
                beautiful that fits their colors, theme, or venue. Moreno Bakery
                is approachable for both.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Wedding cakes can be shaped around the style of the event, the
                number of guests, the desired level of detail, and the flavor
                preferences of the couple. Start with an idea, a photo, or even
                just a general mood — and get helpful guidance from there.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "var(--space-lg)", display: "inline-flex" }}>
                Start Your Wedding Cake Consultation
              </Link>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/weddings/wedding-cake-consultation.webp"
                alt="Wedding cake consultation at Moreno Bakery"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Beyond the Cake ───────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.splitContent}>
            <div className={styles.splitImage}>
              <Image
                src="/images/weddings/wedding-dessert-table.webp"
                alt="Wedding dessert table with pastries and sweets"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
            <div>
              <h2>Wedding Desserts Beyond the Cake</h2>
              <p>
                Not every wedding dessert experience begins and ends with one
                cake. Many couples want a fuller table with pastries, cookies,
                mini desserts, or bakery favorites that give guests more variety
                and make the reception feel more abundant.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Moreno Bakery can serve as a partner for the overall dessert
                experience — dessert bar options, wedding sweets, pastry
                assortments, and other bakery-style additions that complement
                the main cake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Handmade + Capacity ───────────────────────────── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.splitContent}>
            <div>
              <h2>A Local Wedding Bakery With Handmade Style and Real Capacity</h2>
              <p>
                Moreno Bakery still feels like a neighborhood bakery at heart,
                but it also has the kitchen strength to handle meaningful order
                size when the event calls for it. That matters for weddings
                because couples want something personal, yet they also need
                confidence that the bakery can execute on an important day.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Whether you are planning an intimate wedding, a medium-sized
                celebration, or a larger reception, Moreno Bakery brings the
                same thoughtful approach to every order.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-heart-shaped-vanilla-cake.jpg"
                alt="Heart-shaped vanilla cake from Moreno Bakery"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Flavor & Design ───────────────────────────────── */}
      <section className="section-warm">
        <div className="container" style={{ maxWidth: 780, textAlign: "center" }}>
          <h2>Flavor, Design, and Wedding Details That Work Together</h2>
          <p className="text-muted" style={{ lineHeight: 1.9, marginTop: "var(--space-md)" }}>
            Wedding cake shoppers are often balancing several decisions at once —
            the cake needs to look right, taste great, photograph well, and make
            sense for the guest count and reception flow. Moreno Bakery helps
            guide those choices with flavor combinations, cake style direction,
            frosting preferences, serving considerations, and design that
            connects with the wedding aesthetic.
          </p>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">How the Wedding Consultation Process Works</h2>
          <p className="text-center text-muted" style={{ maxWidth: 600, margin: "0 auto" }}>
            A calm, guided process from inspiration to final plan.
          </p>
          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processNumber}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wedding Service Types ─────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "var(--space-sm)" }}>
            Wedding Services for Different Styles of Celebration
          </h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto var(--space-xl)" }}>
            Moreno Bakery supports a range of wedding-related needs without
            a one-size-fits-all approach.
          </p>
          <div className={styles.eventGrid}>
            <div className={styles.eventCard}>
              <Image
                src="/images/weddings/wedding-cake-elegant.webp"
                alt="Elegant tiered wedding cake"
                width={400}
                height={300}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Wedding Receptions</h3>
                <p>
                  Custom tiered cakes and dessert tables designed for the
                  reception atmosphere, photos, and guest experience.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/events/baby-shower-desserts.webp"
                alt="Bridal shower desserts"
                width={400}
                height={300}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Bridal Showers</h3>
                <p>
                  Cupcakes, pastries, and custom sweets for pre-wedding
                  celebrations with family and friends.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/events/anniversary-dinner.webp"
                alt="Rehearsal dinner setting"
                width={400}
                height={300}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Rehearsal Dinners</h3>
                <p>
                  Desserts and bakery trays for rehearsal gatherings, welcome
                  parties, and intimate pre-wedding events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "var(--space-sm)" }}>
            Why Couples Choose Moreno Bakery for Wedding Cakes in Brandon
          </h2>
          <div className={styles.whyGrid}>
            {WHY_REASONS.map((item) => (
              <div key={item.title} className={styles.whyItem}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ─────────────────────────────────── */}
      <section aria-label="Wedding inspiration gallery">
        <div className={styles.galleryStrip}>
          {[
            { src: "/images/food/moreno-bakery-heart-shaped-red-velvet-cake.jpg", alt: "Red velvet wedding cake" },
            { src: "/images/food/moreno-bakery-cheesecakes.jpg", alt: "Cheesecakes for weddings" },
            { src: "/images/food/moreno-bakery-heart-shaped-dulce-de-leche-cake.jpg", alt: "Dulce de leche cake" },
            { src: "/images/food/moreno-bakery-heart-shaped-chocolate-mousse.jpg", alt: "Chocolate mousse cake" },
            { src: "/images/food/moreno-bakery-french-vanilla-cupcake.jpg", alt: "Vanilla cupcakes" },
            { src: "/images/food/moreno-bakery-heart-shaped-marble-cake.jpg", alt: "Marble cake" },
          ].map((img) => (
            <div key={img.src} className={styles.galleryItem}>
              <Image src={img.src} alt={img.alt} width={300} height={300} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {[
              { q: "Do I need a consultation for a wedding cake?", a: "A consultation is the best way to talk through wedding details, guest count, inspiration, flavor ideas, and the overall dessert direction so the order fits the day well." },
              { q: "Can Moreno Bakery help with more than just the wedding cake?", a: "Yes. Moreno Bakery can support broader wedding dessert needs, including pastries, sweets, and dessert table ideas that complement the main cake." },
              { q: "Do you make custom wedding cakes in Brandon, FL?", a: "Yes. Moreno Bakery helps couples in Brandon plan custom wedding cakes that fit the style, size, and feel of the celebration." },
              { q: "Can you help with smaller weddings too?", a: "Absolutely. Moreno Bakery is a good fit for both intimate weddings and larger celebrations. The right order depends on the guest count, dessert goals, and overall event plan." },
              { q: "How do I get started with a wedding order?", a: "The easiest next step is to schedule a wedding consultation, share inspiration, and start the conversation about cake size, dessert options, and event details." },
            ].map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <p className={styles.faqQuestion}>{faq.q}</p>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Start planning">
        <div className="container">
          <h2>Start Planning Your Wedding Desserts</h2>
          <p>
            Schedule a consultation, share your vision, and let Moreno Bakery
            help create something memorable for your wedding day.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-white btn-lg">
              Schedule a Consultation
            </Link>
            <Link href="/events/wedding-cakes" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Wedding Cakes & More
            </Link>
            <Link href="/gallery" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Wedding Cakes and Desserts",
            description:
              "Custom wedding cakes, dessert tables, and wedding bakery services from Moreno Bakery in Brandon, FL.",
            provider: {
              "@type": "Bakery",
              name: "Moreno Bakery",
              address: {
                "@type": "PostalAddress",
                streetAddress: "737 W. Brandon Blvd.",
                addressLocality: "Brandon",
                addressRegion: "FL",
                postalCode: "33511",
              },
              telephone: "+1-813-655-1861",
            },
            areaServed: {
              "@type": "City",
              name: "Brandon",
              containedInPlace: { "@type": "State", name: "Florida" },
            },
          }),
        }}
      />
    </>
  );
}
