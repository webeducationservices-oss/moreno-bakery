import Image from "next/image";
import Link from "next/link";
import styles from "../stories.module.css";

export const metadata = {
  title: "Custom Treats for 500+ Employees | Moreno Bakery",
  description:
    "See how Moreno Bakery can help companies with custom treats, dessert trays, and large bakery orders for teams, celebrations, and employee appreciation events.",
  openGraph: {
    title: "Custom Treats for 500+ Employees | Moreno Bakery",
    description:
      "See how Moreno Bakery can help companies with custom treats, dessert trays, and large bakery orders for teams, celebrations, and employee appreciation events.",
  },
};

export default function AmazonTreatsPost() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.articleHero}>
        <Image
          src="/images/catering/corporate-catering-spread.webp"
          alt="Corporate catering spread from Moreno Bakery"
          width={1400}
          height={600}
          className={styles.articleHeroImage}
          priority
        />
        <div className={styles.articleHeroOverlay} />
        <div className={styles.articleHeroContent}>
          <span className={styles.tag}>Corporate</span>
          <h1>
            No Job Too Big, No Job Too Small: Helping an Amazon Distribution
            Center Treat 500+ Employees
          </h1>
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────── */}
      <article className={styles.articleBody}>
        <p>
          Some bakery orders are personal. Some are large-scale. Moreno Bakery
          is built to handle both.
        </p>
        <p>
          That range matters when a company needs custom treats for a team of
          more than 500 employees. Orders at that size are not only about
          volume. They are about organization, timing, presentation, and making
          sure the people receiving the treats still feel appreciated as
          individuals.
        </p>

        <h2>Large Orders Still Need a Personal Feel</h2>
        <p>
          When a distribution center team is this large, a bakery cannot just
          think in terms of quantity. The order has to work logistically, but
          it also has to land emotionally.
        </p>
        <p>
          A tray of treats for a break room can boost morale. A custom bakery
          order for an employee celebration can make people feel seen. A
          well-executed large order tells a team that someone thought about
          more than checking a box.
        </p>

        <div className={styles.pullQuote}>
          <p>
            No job too big and no job too small is more than a slogan. It is a
            practical way of describing what Moreno Bakery does well.
          </p>
        </div>

        <h2>Custom Treats That Fit the Occasion</h2>
        <p>
          One of the biggest advantages of working with a bakery instead of a
          generic vendor is flexibility. Corporate orders are not all the same.
          Sometimes the need is pastries for a morning shift. Sometimes it is
          dessert trays for an appreciation event. Sometimes it is a mix of
          sweets designed to match a specific brand moment or celebration.
        </p>
        <p>
          Moreno Bakery gives businesses room to build the right order for the
          right audience. That could mean cookies, pastries, cupcakes, cakes,
          dessert trays, or a mix that fits the team&apos;s size and the tone
          of the event.
        </p>

        <h2>Why Local Matters for Corporate Orders</h2>
        <p>
          Large companies often have national systems, but that does not mean
          every order should feel national. Local bakery partners bring
          something different — more room for communication, more flexibility
          in how an order is shaped, and more pride in the outcome.
        </p>
        <p>
          That is especially valuable when the goal is employee appreciation.
          A local bakery order feels more intentional than a generic bulk
          shipment.
        </p>

        <h2>Built for Both Everyday and High-Volume Orders</h2>
        <p>
          Lunch for 500, pies for 3,000, or stop by and pick up one cookie.
          That is the range Moreno Bakery delivers on every day. The bakery
          can serve everyday walk-in traffic, but it can also support
          high-volume corporate needs without losing the handmade quality that
          makes the brand stand out.
        </p>

        <h2>The Takeaway for Other Businesses</h2>
        <p>
          If your business needs custom treats, office catering, bakery trays,
          or a large appreciation order, working with Moreno Bakery means you
          do not have to choose between scale and quality. You can place an
          order that feels polished, thoughtful, and manageable, even when the
          headcount is high.
        </p>

        {/* ── CTA ─── */}
        <div className={styles.articleCta}>
          <h3>Need Custom Treats or Corporate Catering for Your Team?</h3>
          <p>
            Contact Moreno Bakery to plan a bakery order that fits your
            headcount, timing, and occasion.
          </p>
          <div className={styles.articleCtaLinks}>
            <Link href="/events/corporate" className="btn btn-primary">Corporate Catering</Link>
            <Link href="/catering" className="btn btn-secondary">Explore Catering</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </article>

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "No Job Too Big, No Job Too Small: Helping an Amazon Distribution Center Treat 500+ Employees",
            description:
              "See how Moreno Bakery helps companies with custom treats, dessert trays, and large bakery orders for employee appreciation events.",
            publisher: {
              "@type": "Bakery",
              name: "Moreno Bakery",
            },
          }),
        }}
      />
    </>
  );
}
