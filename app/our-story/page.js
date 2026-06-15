import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "About Moreno Bakery in Brandon, FL | Our Story",
  description:
    "Learn how Jose and Susan Moreno built Moreno Bakery into a Brandon favorite for Cuban bread, cakes, food, and special events.",
  openGraph: {
    title: "About Moreno Bakery in Brandon, FL | Our Story",
    description:
      "Learn how Jose and Susan Moreno built Moreno Bakery into a Brandon favorite for Cuban bread, cakes, food, and special events.",
  },
};

export default function OurStoryPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Our story">
        <Image
          src="/images/story/bakery-interior-warm.webp"
          alt="Inside Moreno Bakery in Brandon, FL"
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
          <h1>A Brandon Bakery Built on Tradition, Heart, and Hard Work</h1>
          <p className={styles.heroSub}>
            Moreno Bakery was built by Jose and Susan Moreno with a love for
            traditional Cuban baking, handmade food, and genuine service. What
            began with one baker&apos;s passion has grown into a Brandon favorite for
            pastries, Cuban bread, cakes, food, catering, and celebration orders.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/menu" className="btn btn-white btn-lg">
              View Our Menu
            </Link>
            <Link href="/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Order Catering
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              Contact Moreno Bakery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <p>
              Some bakeries are built around trends. Moreno Bakery was built around
              craft. The story starts with Jose Moreno learning the feel of dough
              as a child in Cuba, growing up around his grandfather&apos;s bakery, and
              carrying that knowledge with him as he built a new life in the United
              States.
            </p>
            <p style={{ marginTop: "var(--space-md)" }}>
              Today, that same spirit still shapes the business. Moreno Bakery is
              known in Brandon for Cuban bread made the traditional way, cakes and
              pastries made with care, and a bakery-and-kitchen model that can
              handle both everyday orders and major celebrations. The story matters
              because customers are not just walking into a bakery. They are
              walking into years of experience, sacrifice, pride, and consistency.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cuban Bread ───────────────────────────────────── */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Cuban Bread Still Made the Traditional Way</h2>
              <p style={{ lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                At the center of Moreno Bakery&apos;s story is Cuban bread. For Jose,
                it is not just a product on the shelf. It is a craft he learned
                young and still respects enough to do the right way. The
                traditional process takes time, patience, and discipline,
                including multiple stages of rest and rise. Even the palmetto leaf
                placed across the loaf reflects an old-school method and a refusal
                to cut corners.
              </p>
              <p style={{ marginTop: "var(--space-md)", lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                That commitment says a lot about the bakery as a whole. Moreno
                Bakery is not built on shortcuts. It is built on repetition, care,
                and pride in doing the work properly.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/story/cuban-bread-baking.webp"
                alt="Traditional Cuban bread fresh from the oven"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── From Cuba to Brandon ──────────────────────────── */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.splitContent} style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
              <h2>From Cuba to Brandon, Built Through Passion and Persistence</h2>
              <p style={{ lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                Jose&apos;s journey to Brandon began in Cuba, where baking was already
                part of daily life. He was around the family bakery early, and by
                the time he was 12, he was making Cuban bread. After leaving Cuba
                and eventually building a life in the Tampa area, he continued
                working in the bakery world, sharpening the skills that would
                later shape Moreno Bakery.
              </p>
              <p style={{ marginTop: "var(--space-md)", lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                That history gives the business real depth. Moreno Bakery is not a
                concept created in a branding meeting. It grew from lived
                experience, hard work, and a lifelong connection to baking.
              </p>
            </div>
            <div className={styles.splitImage} style={{ direction: "ltr" }}>
              <Image
                src="/images/food/moreno-bakery-guava-and-cheese-stuffed-bread.jpg"
                alt="Moreno Bakery guava and cheese stuffed bread"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Jose and Susan ────────────────────────────────── */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Jose and Susan Moreno Built Moreno Bakery Together</h2>
              <p style={{ lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                Moreno Bakery is also the story of partnership. Jose brings the
                baker&apos;s hands, the technique, and the love of the craft. Susan has
                helped shape the business side, the customer experience, and the
                growth behind the scenes. Together, they built a bakery that feels
                personal to regular customers while also operating with the
                organization needed to support weddings, catering, and large custom
                orders.
              </p>
              <p style={{ marginTop: "var(--space-md)", lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                That balance is one of the bakery&apos;s biggest strengths. Customers get
                the warmth of a family-owned business and the confidence that comes
                from a team that has grown, adapted, and invested in better service
                over time.
              </p>
            </div>
            <div className={styles.splitImage} style={{ display: "flex", justifyContent: "center", overflow: "visible" }}>
              <Image
                src="/images/story/jose-and-susan-moreno.webp"
                alt="Jose and Susan Moreno, founders of Moreno Bakery in Brandon, FL"
                width={600}
                height={800}
                loading="lazy"
                style={{ width: "100%", maxWidth: "420px", aspectRatio: "3 / 4", objectFit: "cover", borderRadius: "var(--radius-lg)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Neighborhood Bakery ───────────────────────────── */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>A Neighborhood Bakery With Room to Serve More</h2>
              <p style={{ lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                As Moreno Bakery grew, so did the demands of the community. What
                began as a smaller operation became a true Brandon destination,
                serving hundreds of customers and handling everything from a quick
                coffee and pastry stop to custom cakes, office catering, holiday
                orders, and milestone celebrations.
              </p>
              <p style={{ marginTop: "var(--space-md)", lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                The bakery&apos;s growth reflects the trust it has earned. People come
                in for everyday favorites, but they also turn to Moreno Bakery for
                the moments that matter most — birthdays, graduations, weddings,
                family gatherings, and corporate events.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-cinnamon-roll.jpg"
                alt="Moreno Bakery fresh cinnamon rolls"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── More Than Pastries ─────────────────────────────── */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.splitContent} style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
              <h2>More Than Pastries and Cakes</h2>
              <p style={{ lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                The bakery may feel warm and neighborhood-driven, but it is
                supported by a kitchen that can handle real volume. That is what
                allows Moreno Bakery to serve breakfast and lunch, produce custom
                desserts, and support larger catering orders without losing the
                handmade feel customers value.
              </p>
              <p style={{ marginTop: "var(--space-md)", lineHeight: 1.9, color: "var(--color-text-muted)" }}>
                Moreno Bakery is not limited to one type of order. It is a Brandon
                bakery people can trust for a single cookie, a family meal, a tray
                for the office, or desserts for a major event.
              </p>
            </div>
            <div className={styles.splitImage} style={{ direction: "ltr" }}>
              <Image
                src="/images/catering/catering-buffet-setup.webp"
                alt="Moreno Bakery catering buffet spread"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof Points ──────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center">The Goal Has Always Been Simple</h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            Give the people of Brandon the best bakery around. That mindset shows
            up in the way the bakery approaches service, flexibility, and quality.
          </p>
          <div className={styles.proofGrid}>
            <div className={styles.proofItem}>
              <div className={styles.proofIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>Family-Owned</h3>
              <p>A bakery in Brandon, Florida built and run by Jose and Susan Moreno.</p>
            </div>
            <div className={styles.proofItem}>
              <div className={styles.proofIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <h3>Traditional Cuban Bread</h3>
              <p>Made with care, time, and the techniques Jose learned as a child in Cuba.</p>
            </div>
            <div className={styles.proofItem}>
              <div className={styles.proofIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3>Trusted for Events</h3>
              <p>Pastries, cakes, food, catering, and milestone events — all from one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Get started">
        <div className="container">
          <h2>Experience Moreno Bakery for Yourself</h2>
          <p>
            Whether you are stopping in for fresh Cuban bread, ordering dessert
            for a family dinner, or planning catering for a larger gathering —
            Moreno Bakery is here to help.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/menu" className="btn btn-white btn-lg">
              View Menu
            </Link>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Contact Moreno Bakery
            </Link>
            <Link href="/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              Start a Catering Order
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
            "@type": "Bakery",
            name: "Moreno Bakery",
            description:
              "Family-owned Cuban bakery in Brandon, FL founded by Jose and Susan Moreno. Known for traditional Cuban bread, pastries, cakes, food, and event catering.",
            founder: [
              { "@type": "Person", name: "Jose Moreno" },
              { "@type": "Person", name: "Susan Moreno" },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "715 W Robertson St",
              addressLocality: "Brandon",
              addressRegion: "FL",
              postalCode: "33511",
            },
            telephone: "+1-813-689-0320",
          }),
        }}
      />
    </>
  );
}
