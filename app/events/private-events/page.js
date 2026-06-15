import Image from "next/image";
import Link from "next/link";
import styles from "../events.module.css";

export const metadata = {
  title: "Private Event Catering in Brandon, FL | Moreno Bakery",
  description:
    "Plan cakes, desserts, trays, and private event catering in Brandon, FL with Moreno Bakery for showers, parties, anniversaries, and family gatherings.",
  openGraph: {
    title: "Private Event Catering in Brandon, FL | Moreno Bakery",
    description:
      "Plan cakes, desserts, trays, and private event catering in Brandon, FL with Moreno Bakery for showers, parties, anniversaries, and family gatherings.",
  },
};

const FAQS = [
  {
    q: "Do you help with baby showers and bridal showers?",
    a: "Yes. Moreno Bakery can support shower events with cakes, pastries, desserts, trays, and larger event-friendly food orders.",
  },
  {
    q: "Can I order both savory food and sweets for a private event?",
    a: "Yes. Moreno Bakery makes it easier to combine food and desserts in one event order.",
  },
  {
    q: "Do you offer private event cakes for anniversaries and family celebrations?",
    a: "Yes. Moreno Bakery is a strong fit for anniversaries, reunions, engagement parties, quinceañeras, and many other personal celebrations.",
  },
  {
    q: "Can private event orders be small or large?",
    a: "Yes. Moreno Bakery can support both intimate gatherings and larger family or hosted celebrations.",
  },
  {
    q: "How do I get started?",
    a: "The easiest next step is to submit an inquiry or call Moreno Bakery to talk through the event details and order direction.",
  },
];

export default function PrivateEventsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Private event services">
        <Image
          src="/images/events/baby-shower-desserts.webp"
          alt="Private event dessert display"
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
          <h1>Private Event Cakes, Desserts, and Catering in Brandon, FL</h1>
          <p className={styles.heroSub}>
            From showers and anniversaries to family gatherings, reunions, and
            engagement parties, Moreno Bakery helps Brandon hosts bring together
            cakes, pastries, food, and celebration desserts that feel warm,
            flexible, and easy to plan.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:8136890320" className="btn btn-white btn-lg">
              Start a Private Event Order
            </a>
            <Link href="/menu/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Catering Menu
            </Link>
            <a href="tel:8136890320" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              Call 813.689.0320
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={`container ${styles.introInner}`}>
          <p>
            Private events are often the kinds of gatherings people remember most.
            They are personal, family-centered, and shaped around the people in the
            room. That is why customers planning these events usually need more
            than a standard party tray.
          </p>
          <p style={{ marginTop: "var(--space-md)" }}>
            Moreno Bakery combines custom cakes, pastries, desserts, savory menu
            items, and catering-friendly options in one place. Whether the event is
            simple and intimate or larger and more layered, the bakery is a
            dependable local partner that can help hosts put the table together
            with less stress.
          </p>
        </div>
      </section>

      {/* ── Showers & Celebrations ────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Shower and Celebration Orders That Feel Personal</h2>
              <p>
                Baby showers, bridal showers, engagement parties, anniversaries,
                quincea&ntilde;eras, and similar milestone gatherings deserve more than
                a standard pickup order. Some hosts want a centerpiece cake. Others
                want pastries, sweets, trays, or a wider mix of food and desserts.
                Moreno Bakery is flexible enough for both.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/events/anniversary-dinner.webp"
                alt="Anniversary celebration dinner spread"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Family Gatherings ─────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent} style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
              <h2>Food and Desserts for Family Gatherings of Many Sizes</h2>
              <p>
                Not every private event looks the same. Some are small family
                moments at home. Others are bigger parties, church gatherings,
                reunions, and hosted celebrations with a larger guest list. Moreno
                Bakery can support both ends of that range with food, trays, sides,
                pastries, desserts, and cakes that make serving people easier.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                <Link href="/menu/catering" style={{ fontWeight: 700 }}>
                  View the Catering Menu →
                </Link>
              </p>
            </div>
            <div className={styles.splitImage} style={{ direction: "ltr" }}>
              <Image
                src="/images/catering/catering-buffet-setup.webp"
                alt="Family gathering buffet setup"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Event Cards ───────────────────────────────────── */}
      <section className="section-alt" aria-label="Private event types">
        <div className="container">
          <h2 className="text-center">Cakes, Dessert Tables, and Sweet Details for the Occasion</h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            For many private events, dessert is part of the atmosphere. It shows
            up in photos, on the main table, and in the way the event feels to
            guests.
          </p>
          <div className={styles.eventGrid}>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-cheesecakes.jpg"
                alt="Celebration cakes for showers and parties"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Showers & Parties</h3>
                <p>
                  Custom cakes, cupcakes, and pastries for baby showers, bridal
                  showers, engagement parties, and quincea&ntilde;eras.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-linzer-tarts.jpg"
                alt="Dessert trays for anniversaries"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Anniversaries & Reunions</h3>
                <p>
                  Elegant cakes, dessert trays, and food options for milestone
                  celebrations with family and friends.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-chicken-empanadas.jpg"
                alt="Food trays for family gatherings"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Family Gatherings</h3>
                <p>
                  Trays, entrees, sides, and desserts for church events, holiday
                  dinners, and community celebrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── One Local Bakery ──────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>One Local Bakery for the Practical and the Special</h2>
              <p>
                People planning private events are usually balancing decorations,
                invitations, timing, and guest logistics. Moreno Bakery simplifies
                part of that work by letting hosts order from one trusted bakery
                and kitchen instead of splitting the food and dessert across
                different vendors.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                A neighborhood bakery with heart, backed by the kitchen strength to
                handle bigger event needs when the gathering calls for it.
              </p>
              <p style={{ marginTop: "var(--space-lg)" }}>
                <a href="tel:8136890320" className="btn btn-primary">
                  Start Your Event Order
                </a>
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/catering/party-dessert-table.webp"
                alt="Private event dessert table display"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="section-alt" aria-label="How private event ordering works">
        <div className="container">
          <h2 className="text-center">How Private Event Ordering Works</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <h3>Reach Out</h3>
              <p>Share the event type, date, guest count, and what kind of order you are considering.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <h3>Plan the Menu</h3>
              <p>Talk through whether you need a cake, desserts, trays, savory food, or a combination.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <h3>Confirm Details</h3>
              <p>Review the menu direction and confirm pickup, delivery, or event timing.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <h3>Enjoy the Gathering</h3>
              <p>Let Moreno Bakery help make the gathering feel more complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ────────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <h2 className="text-center">Why Hosts Choose Moreno Bakery for Private Events</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h4>Warm Local Bakery Feel</h4>
                <p>Personal touch for meaningful personal events.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4>Cakes, Pastries, Food & Trays</h4>
                <p>Everything from one place for a complete celebration.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4>Showers, Anniversaries & Reunions</h4>
                <p>Strong fit for milestone celebrations of all kinds.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Flexible for Any Size</h4>
                <p>From intimate gatherings to larger hosted celebrations.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>
              </div>
              <div>
                <h4>Easy to Start</h4>
                <p>Inquiry, call, or menu browsing — whichever works best.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <h4>Serving Brandon Families</h4>
                <p>Proudly supporting celebration hosts in the community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-alt" aria-label="FAQs">
        <div className="container">
          <h2 className="text-center">Private Event FAQs</h2>
          <div className={styles.faqList}>
            {FAQS.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <div className={styles.faqQuestion}>{faq.q}</div>
                <div className={styles.faqAnswer}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Get started">
        <div className="container">
          <h2>Let Moreno Bakery Help You Celebrate</h2>
          <p>
            From a simple cake order to a full event spread — one bakery, one
            kitchen, one order.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:8136890320" className="btn btn-white btn-lg">
              Call 813.689.0320
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
    </>
  );
}
