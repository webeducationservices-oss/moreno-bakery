import Image from "next/image";
import Link from "next/link";
import styles from "./events.module.css";

export const metadata = {
  title: "Event Cakes & Catering in Brandon, FL | Moreno Bakery",
  description:
    "Explore Moreno Bakery event services for weddings, corporate gatherings, private parties, birthdays, and graduations in Brandon, FL.",
  openGraph: {
    title: "Event Cakes & Catering in Brandon, FL | Moreno Bakery",
    description:
      "Explore Moreno Bakery event services for weddings, corporate gatherings, private parties, birthdays, and graduations in Brandon, FL.",
  },
};

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Event services">
        <Image
          src="/images/events/events-hub-hero.webp"
          alt="Moreno Bakery event celebration spread"
          width={1400}
          height={600}
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className="accent-heading" style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-xl)", marginBottom: "var(--space-sm)" }}>
            Moreno Bakery & Kitchen
          </p>
          <h1>Event Cakes, Desserts & Catering for Every Celebration in Brandon, FL</h1>
          <p className={styles.heroSub}>
            From weddings and office events to birthdays and family celebrations,
            Moreno Bakery helps Brandon-area hosts bring people together with
            handmade cakes, desserts, trays, and food that feel thoughtful and
            memorable.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:+18136551861" className="btn btn-white btn-lg">
              Start Your Event Order
            </a>
            <a href="#event-types" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Explore Event Types
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={`container ${styles.introInner}`}>
          <p>
            Some events need a stunning cake. Others need trays, pastries, lunch,
            desserts, or a little of everything. Moreno Bakery makes it easier to
            plan for the moments that matter with event-friendly options for both
            large and small gatherings.
          </p>
          <p style={{ marginTop: "var(--space-md)" }}>
            Whether you are organizing a wedding, ordering for the office, planning
            a private party, or celebrating a birthday or graduation, our team
            helps you move from idea to order with more confidence and less stress.
          </p>
        </div>
      </section>

      {/* ── Event Hub Cards ───────────────────────────────── */}
      <section className="section-alt" id="event-types" aria-label="Event types">
        <div className="container">
          <h2 className="text-center">One Bakery, Multiple Event Paths</h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            Choose the event path that fits what you are planning:
          </p>
          <div className={styles.hubGrid}>
            <Link href="/weddings" className={styles.hubCard}>
              <Image
                src="/images/food/moreno-bakery-heart-shaped-vanilla-cake.jpg"
                alt="Wedding cakes at Moreno Bakery"
                width={400}
                height={533}
                className={styles.hubCardImage}
              />
              <div className={styles.hubCardOverlay} />
              <div className={styles.hubCardBody}>
                <h3>Weddings</h3>
                <p>Elegant cakes, dessert displays, and sweet details for one of life&apos;s biggest days.</p>
              </div>
            </Link>
            <Link href="/events/corporate" className={styles.hubCard}>
              <Image
                src="/images/events/corporate-meeting-food.webp"
                alt="Corporate catering from Moreno Bakery"
                width={400}
                height={533}
                className={styles.hubCardImage}
              />
              <div className={styles.hubCardOverlay} />
              <div className={styles.hubCardBody}>
                <h3>Corporate</h3>
                <p>Office catering, trays, and bakery items for meetings, celebrations, and business gifting.</p>
              </div>
            </Link>
            <Link href="/events/private-events" className={styles.hubCard}>
              <Image
                src="/images/events/baby-shower-desserts.webp"
                alt="Private event desserts from Moreno Bakery"
                width={400}
                height={533}
                className={styles.hubCardImage}
              />
              <div className={styles.hubCardOverlay} />
              <div className={styles.hubCardBody}>
                <h3>Private Events</h3>
                <p>Cakes, pastries, trays, and menu options for showers, anniversaries, reunions, and more.</p>
              </div>
            </Link>
            <Link href="/events/birthdays-graduations" className={styles.hubCard}>
              <Image
                src="/images/events/birthday-cake-celebration.webp"
                alt="Birthday cakes from Moreno Bakery"
                width={400}
                height={533}
                className={styles.hubCardImage}
              />
              <div className={styles.hubCardOverlay} />
              <div className={styles.hubCardBody}>
                <h3>Birthdays & Graduations</h3>
                <p>Celebration cakes and crowd-pleasing desserts that make milestone moments feel special.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Weddings Preview ──────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Wedding Cakes and Dessert Options That Feel Personal</h2>
              <p>
                Wedding customers are rarely just shopping for dessert. They are
                looking for something that feels beautiful, intentional, and worth
                sharing with the people they love. Moreno Bakery supports weddings
                with custom cakes, dessert options, and consultation-driven
                planning that help couples move from inspiration to a finished
                design.
              </p>
              <p style={{ marginTop: "var(--space-lg)" }}>
                <Link href="/weddings" className="btn btn-primary">
                  Explore Weddings
                </Link>
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-heart-shaped-red-velvet-cake.jpg"
                alt="Moreno Bakery wedding cake"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Corporate Preview ─────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent} style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
              <h2>Corporate Catering That Still Feels Thoughtful</h2>
              <p>
                For office managers, team leads, and business owners, food needs to
                be reliable, easy to order, and polished enough to represent the
                company well. Moreno Bakery supports meetings, staff appreciation,
                holiday gifting, client events, and other business occasions with
                trays, bakery items, cakes, and larger food orders.
              </p>
              <p style={{ marginTop: "var(--space-lg)" }}>
                <Link href="/events/corporate" className="btn btn-primary">
                  Explore Corporate Events
                </Link>
              </p>
            </div>
            <div className={styles.splitImage} style={{ direction: "ltr" }}>
              <Image
                src="/images/events/corporate-meeting-food.webp"
                alt="Corporate meeting breakfast spread"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Private Events Preview ────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Private Event Orders for Gatherings Big and Small</h2>
              <p>
                Some customers are planning intimate family celebrations, while
                others are coordinating larger guest counts. Moreno Bakery supports
                bridal showers, baby showers, anniversaries, engagement parties,
                quincea&ntilde;eras, family reunions, church gatherings, and many other
                private events with flexible cake, dessert, pastry, tray, and food
                options.
              </p>
              <p style={{ marginTop: "var(--space-lg)" }}>
                <Link href="/events/private-events" className="btn btn-primary">
                  Explore Private Events
                </Link>
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/events/baby-shower-desserts.webp"
                alt="Baby shower dessert table"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Birthdays Preview ─────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent} style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
              <h2>Celebration Cakes and Desserts for Milestone Moments</h2>
              <p>
                Birthdays and graduations often start with a cake, but many orders
                grow into dessert trays, pastries, and party food once people
                realize how many guests they need to serve. Moreno Bakery is a
                strong fit for these milestone events because the bakery can
                deliver both visual celebration pieces and practical options for
                feeding a crowd.
              </p>
              <p style={{ marginTop: "var(--space-lg)" }}>
                <Link href="/events/birthdays-graduations" className="btn btn-primary">
                  Explore Birthdays & Graduations
                </Link>
              </p>
            </div>
            <div className={styles.splitImage} style={{ direction: "ltr" }}>
              <Image
                src="/images/events/birthday-cake-celebration.webp"
                alt="Birthday celebration cake"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Moreno ────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center">Why Event Customers Choose Moreno Bakery</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h4>Handmade Bakery Feel</h4>
                <p>Real bakery quality with practical ordering support for events of all sizes.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4>Cakes, Desserts, Trays & Food</h4>
                <p>Everything from one place — no need to juggle multiple vendors.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <h4>Personal & Business Events</h4>
                <p>Strong fit for both personal celebrations and professional occasions.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Local Brandon Presence</h4>
                <p>A bakery customers already know and trust in the community.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>
              </div>
              <div>
                <h4>Easy Next Steps</h4>
                <p>Dedicated event pages and inquiry forms make planning simple.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4>Built for Real Event Volume</h4>
                <p>A kitchen that can handle larger orders while keeping the warmth of a local bakery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Get started">
        <div className="container">
          <h2>Tell Moreno Bakery What You Are Planning</h2>
          <p>
            Choose the type of event you are planning and let Moreno Bakery guide
            you from there.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:+18136551861" className="btn btn-white btn-lg">
              Request Event Details
            </a>
            <Link href="/menu/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Catering Menu
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              Contact Us
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
            "@type": "FoodService",
            name: "Moreno Bakery Events",
            description:
              "Event cakes, desserts, and catering services from Moreno Bakery in Brandon, FL for weddings, corporate events, private parties, birthdays, and graduations.",
            provider: {
              "@type": "Bakery",
              name: "Moreno Bakery",
              address: {
                "@type": "PostalAddress",
                streetAddress: "715 W Robertson St",
                addressLocality: "Brandon",
                addressRegion: "FL",
                postalCode: "33511",
              },
              telephone: "+1-813-655-1861",
            },
            areaServed: { "@type": "City", name: "Brandon, FL" },
            serviceType: "Event Catering",
          }),
        }}
      />
    </>
  );
}
