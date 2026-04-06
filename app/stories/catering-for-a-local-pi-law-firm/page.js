import Image from "next/image";
import Link from "next/link";
import styles from "../stories.module.css";

export const metadata = {
  title: "Catering for a Local PI Law Firm | Moreno Bakery",
  description:
    "See how Moreno Bakery supports busy professional teams with dependable catering, bakery trays, and food service that helps offices stay focused during demanding seasons.",
  openGraph: {
    title: "Catering for a Local PI Law Firm | Moreno Bakery",
    description:
      "See how Moreno Bakery supports busy professional teams with dependable catering, bakery trays, and food service that helps offices stay focused during demanding seasons.",
  },
};

export default function PiLawFirmPost() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.articleHero}>
        <Image
          src="/images/catering/catering-buffet-setup.webp"
          alt="Moreno Bakery catering buffet setup"
          width={1400}
          height={600}
          className={styles.articleHeroImage}
          priority
        />
        <div className={styles.articleHeroOverlay} />
        <div className={styles.articleHeroContent}>
          <span className={styles.tag}>Catering</span>
          <h1>
            How Moreno Bakery Helps a Local PI Law Firm Stay Fed During Big
            Cases
          </h1>
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────── */}
      <article className={styles.articleBody}>
        <p>
          Big cases create long days. When attorneys, support staff, and
          leadership teams are moving through a heavy stretch of preparation,
          the last thing they need is added friction around food.
        </p>
        <p>
          That is where reliable catering becomes more than a convenience. It
          becomes part of how a team stays focused, supported, and able to
          keep moving.
        </p>

        <h2>When the Team Is Busy, Food Needs to Be Easy</h2>
        <p>
          Law offices going through major case work do not always have the
          luxury of stepping away for a normal lunch rhythm. Meetings stack up.
          Calls run long. Strategy sessions shift. Staff members are juggling
          a lot at once.
        </p>
        <p>
          In that kind of environment, dependable catering matters. A good
          catering partner helps remove one more thing from the mental load.
          The order arrives on time, is easy to set up, and gives the team
          something they can actually enjoy while staying close to the work.
        </p>

        <h2>More Than One Type of Order</h2>
        <p>
          Not every office order looks the same. Some days call for breakfast
          pastries and coffee support. Other days need sandwich trays, salads,
          soups, sides, or desserts to keep energy up later into the
          afternoon.
        </p>
        <p>
          Moreno Bakery works well in this environment because the menu is
          broad. The bakery can support both sweet and savory needs, which
          means an office is not forced into a one-note catering experience.
        </p>

        <div className={styles.pullQuote}>
          <p>
            Providing good food is one of the simplest ways to communicate
            appreciation and care during demanding work.
          </p>
        </div>

        <h2>Caring for the People Doing the Work</h2>
        <p>
          There is also a human side to this kind of service. During big
          cases, teams often put in extra hours and carry extra pressure.
          Providing good food is one of the simplest ways to communicate
          appreciation and care.
        </p>
        <p>
          A thoughtful catering order can help keep morale steady. It can
          create a small break in a demanding day. It can also signal that the
          people behind the scenes matter just as much as the case outcome.
        </p>

        <h2>Why a Local Bakery Partner Works So Well</h2>
        <p>
          Working with a local bakery gives professional offices a different
          level of responsiveness. Orders can feel more flexible, more
          personal, and less transactional.
        </p>
        <p>
          Moreno Bakery is especially well suited because the brand already
          serves both everyday customers and higher-volume event needs. That
          combination makes it easier to support recurring office orders
          without losing quality.
        </p>

        <h2>Reliable Catering Builds Repeat Business</h2>
        <p>
          One of the strongest outcomes of office catering is repeat trust.
          Once a team knows they can count on a bakery to deliver food that is
          fresh, timely, and easy to reorder, the relationship becomes much
          simpler.
        </p>
        <p>
          That is what makes Moreno Bakery a smart partner for demanding
          offices. The bakery is not there for one emergency lunch. It can
          become part of the rhythm of how a team gets through its busiest
          weeks.
        </p>

        {/* ── CTA ─── */}
        <div className={styles.articleCta}>
          <h3>Need Office Catering That Helps Your Team Stay Focused?</h3>
          <p>
            Contact Moreno Bakery to plan food for meetings, case prep days,
            staff appreciation, or recurring office needs.
          </p>
          <div className={styles.articleCtaLinks}>
            <Link href="/catering" className="btn btn-primary">Explore Catering</Link>
            <Link href="/events/corporate" className="btn btn-secondary">Corporate Events</Link>
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
              "How Moreno Bakery Helps a Local PI Law Firm Stay Fed During Big Cases",
            description:
              "See how Moreno Bakery supports busy professional teams with dependable catering and food service.",
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
