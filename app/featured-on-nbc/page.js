import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Moreno Bakery Featured on NBC | Brandon, FL",
  description:
    "See why Moreno Bakery in Brandon, FL was featured on NBC and how the bakery grew from Cuban bread and pastries into a local favorite.",
  openGraph: {
    title: "Moreno Bakery Featured on NBC | Brandon, FL",
    description:
      "See why Moreno Bakery in Brandon, FL was featured on NBC and how the bakery grew from Cuban bread and pastries into a local favorite.",
  },
};

export default function FeaturedOnNbcPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroBadge}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            As Featured on NBC
          </div>
          <h1>Moreno Bakery Featured on NBC</h1>
          <p className={styles.heroSub}>
            Moreno Bakery&apos;s NBC feature highlights the story, people, and
            handmade food that helped turn a local Brandon bakery into a trusted
            favorite for pastries, Cuban bread, cakes, lunch, catering, and
            celebration orders.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/menu" className="btn btn-white btn-lg">
              View Our Menu
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Contact Moreno Bakery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.introText}>
            <p>
              Media recognition matters most when it confirms what customers
              already feel. Moreno Bakery was not highlighted for one trendy
              item. It was recognized as a Brandon bakery with a real story, a
              loyal customer base, and a mix of sweet and savory offerings that
              keep the business relevant to everyday customers and event clients
              alike.
            </p>
          </div>
        </div>
      </section>

      {/* ── From Cuban Bread ──────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <div className={styles.splitContent}>
            <div>
              <h2>From Cuban Bread to a Full Bakery and Kitchen</h2>
              <p>
                One of the strongest takeaways from the NBC feature is how the
                business evolved over time. What started with bread and guava
                turnovers grew into a wider bakery menu, then into birthday
                cakes, wedding cakes, coffee, sandwiches, soups, and more.
              </p>
              <p>
                That progression shows that Moreno Bakery listens, adapts, and
                grows with its customers. The bakery is still grounded in
                traditional baking, but has expanded into a full local
                bakery-and-kitchen destination.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/story/cuban-bread-baking.webp"
                alt="Traditional Cuban bread at Moreno Bakery"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Family Story ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.splitContent}>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-guava-and-cheese-stuffed-bread.jpg"
                alt="Moreno Bakery guava and cheese bread"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
            <div>
              <h2>A Family Story Behind the Counter</h2>
              <p>
                The television segment also highlights the people behind the
                business. Jose had always been a baker and wanted to have his own
                bakery in America. That dream became the foundation of Moreno
                Bakery and remains part of the brand today.
              </p>
              <p>
                Visitors should understand that Moreno Bakery is still shaped by
                the owners&apos; hands-on commitment and not by a detached
                corporate model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sweet & Savory ────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <div className={styles.splitContent}>
            <div>
              <h2>Sweet, Savory, and Built Around What Customers Need</h2>
              <p>
                The feature makes clear that Moreno Bakery serves lunch, dinner,
                sandwiches, soups, and catering — not just pastries and sweets.
                Customers can come in for a pastry, stop by for lunch, order a
                birthday cake, plan a wedding dessert table, or arrange catering
                for an office or private event.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-cuban-sandwich.jpg"
                alt="Moreno Bakery Cuban sandwich"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Life Moments ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.centeredBlock}>
            <h2>A Bakery Customers Return to for Life Moments</h2>
            <p>
              One of the most compelling parts of the NBC interview is how
              customers return for new milestones over the years. Someone may
              first come in for a wedding cake, then return later for baby
              showers, birthdays, and family celebrations. That kind of repeat
              relationship is powerful proof that Moreno Bakery is not only a
              place people try once — it is a bakery families and businesses
              return to when another meaningful moment comes around.
            </p>
          </div>
        </div>
      </section>

      {/* ── Catering & Celebrations ───────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <div className={styles.splitContent}>
            <div className={styles.splitImage}>
              <Image
                src="/images/catering/corporate-catering-spread.webp"
                alt="Moreno Bakery corporate catering spread"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
            <div>
              <h2>Catering, Celebration Work, and Everyday Visits</h2>
              <p>
                The segment also confirms that Moreno Bakery supports more than
                retail case sales. From office functions to personal deliveries
                and weddings, the bakery&apos;s reputation is backed by real
                capability, not just visibility.
              </p>
              <div className={styles.inlineLinks}>
                <Link href="/catering" className="btn btn-primary">Explore Catering</Link>
                <Link href="/events" className="btn btn-secondary">View Events</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It Matters ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.centeredBlock}>
            <h2>Why the NBC Feature Matters Today</h2>
            <p>
              Being featured on NBC signals that Moreno Bakery has become a true
              Brandon staple. For new visitors, that reduces uncertainty. For
              returning customers, it reinforces pride in choosing a bakery that
              is well known for quality, service, and longevity.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "var(--space-xl)" }}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>What was highlighted in Moreno Bakery&apos;s NBC feature?</summary>
              <p>
                The segment highlighted the bakery&apos;s growth, family story,
                broad menu, loyal customers, and reputation for both sweet and
                savory offerings.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Does the feature talk about cakes and catering too?</summary>
              <p>
                Yes. The segment touches on birthday cakes, wedding cakes, lunch
                service, and catering for office and personal events.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Why is this page helpful for new customers?</summary>
              <p>
                It gives first-time visitors more confidence by showing that
                Moreno Bakery is a long-standing, trusted Brandon bakery with
                public recognition and real local roots.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>What should I do after reading this page?</summary>
              <p>
                Browse the{" "}
                <Link href="/menu">menu</Link>, learn about{" "}
                <Link href="/catering">catering</Link>, or{" "}
                <Link href="/contact">contact Moreno Bakery</Link> to start
                planning your order.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Next steps">
        <div className="container">
          <h2>Ready to Experience Moreno Bakery?</h2>
          <p>
            Whether you are planning a celebration, ordering lunch, or picking
            up your favorite pastries — Moreno Bakery is here to help.
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

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Moreno Bakery Featured on NBC",
            description:
              "Moreno Bakery in Brandon, FL was featured on NBC for its Cuban bread, pastries, cakes, and catering services.",
            publisher: {
              "@type": "Bakery",
              name: "Moreno Bakery",
              address: {
                "@type": "PostalAddress",
                streetAddress: "737 W. Brandon Blvd.",
                addressLocality: "Brandon",
                addressRegion: "FL",
                postalCode: "33511",
              },
            },
          }),
        }}
      />
    </>
  );
}
