import Image from "next/image";
import Link from "next/link";
import styles from "../stories.module.css";

export const metadata = {
  title: "The Story Behind Moreno Bakery in Brandon, FL",
  description:
    "Learn how Moreno Bakery grew from bread and guava turnovers into a Brandon favorite for pastries, cakes, lunch, catering, and celebrations.",
  openGraph: {
    title: "The Story Behind Moreno Bakery in Brandon, FL",
    description:
      "Learn how Moreno Bakery grew from bread and guava turnovers into a Brandon favorite for pastries, cakes, lunch, catering, and celebrations.",
  },
};

export default function BrandonStoryPost() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.articleHero}>
        <Image
          src="/images/story/bakery-interior-warm.webp"
          alt="Inside Moreno Bakery in Brandon, FL"
          width={1400}
          height={600}
          className={styles.articleHeroImage}
          priority
        />
        <div className={styles.articleHeroOverlay} />
        <div className={styles.articleHeroContent}>
          <span className={styles.tag}>Our Story</span>
          <h1>From Bread and Guava Turnovers to a Brandon Favorite</h1>
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────── */}
      <article className={styles.articleBody}>
        <p>
          Moreno Bakery did not become a Brandon favorite overnight. Like many
          strong local businesses, it grew one loyal customer, one new menu
          item, and one meaningful milestone at a time.
        </p>
        <p>
          What started with bread, guava turnovers, and guava cheese turnovers
          grew into something much bigger. Over the years, Moreno Bakery
          expanded into pastries, cookies, birthday cakes, wedding cakes,
          sandwiches, soups, lunch, catering, and the kind of repeat business
          that only comes from earning trust.
        </p>

        <h2>A Bakery Dream That Started Long Before Brandon</h2>
        <p>
          Jose was always a baker. He baked in Cuba, came to America, and
          carried the goal of owning his own bakery. When Jose and Susan came
          together, they made that vision their shared goal.
        </p>
        <p>
          Moreno Bakery opened in 2008, but the roots of the business go back
          much further. Baking was not a random career move. It was already
          part of Jose&apos;s life and identity, which helps explain why the
          bakery still feels personal instead of manufactured.
        </p>

        <h2>Starting Small and Growing the Right Way</h2>
        <p>
          In the beginning, the menu was simple — bread, guava turnovers, and
          guava cheese turnovers. From there, the bakery grew naturally. A
          baker joined the team early on and helped expand the menu into more
          pastries and cookies. Then customers began asking for birthday cakes.
          Birthday cakes led to wedding cakes. Coffee and sandwiches followed.
          Soups and lunch service expanded the everyday side of the business
          even more.
        </p>

        <div className={styles.pullQuote}>
          <p>
            Moreno Bakery did not become broad by trying to be everything at
            once. It became broad by saying yes to the right needs over time.
          </p>
        </div>

        <h2>More Than Dessert</h2>
        <p>
          Plenty of people hear the word bakery and immediately think sweets.
          Moreno Bakery absolutely delivers on that side of the experience, but
          the story is bigger than cupcakes and pastries.
        </p>
        <p>
          Lunch became an important part of the business. The lunch rush kicks
          in around 11 a.m. and can continue through the afternoon. Someone
          can come in for Cuban bread, pastries, and cakes, but they can also
          come in for sandwiches, soups, and everyday meals.
        </p>

        <h2>A Bakery That Became Part of Family Traditions</h2>
        <p>
          One of the best parts of the story is the way repeat customers
          return for new milestones. Someone may first come to Moreno Bakery
          for a wedding cake, then return later for a baby shower, a birthday,
          or another family celebration.
        </p>
        <p>
          That kind of return business says a lot. Moreno Bakery is not just
          filling orders. It is becoming part of the way families and
          businesses celebrate milestones. For a bakery, that is the highest
          level of trust.
        </p>

        <h2>Still Hands-On, Still Growing</h2>
        <p>
          Another detail that stands out is how hands-on the owners remain.
          Work never really stops, and Jose and Susan are still deeply involved
          in the day-to-day operation. That matters because when the people who
          built the bakery are still closely connected to the products, the
          team, and the customer experience, the brand keeps its original heart
          even as it grows.
        </p>

        <h2>What Moreno Bakery Represents Today</h2>
        <p>
          Today, Moreno Bakery represents something valuable in Brandon. It is
          a place where traditional baking, broad menu appeal, and real
          customer relationships all live together. It is a bakery where
          someone can stop in for a pastry, plan a wedding cake, arrange
          catering for an office, or come back year after year for life&apos;s
          next milestone.
        </p>

        {/* ── CTA ─── */}
        <div className={styles.articleCta}>
          <h3>Want Moreno Bakery to Be Part of Your Next Milestone?</h3>
          <p>
            Explore weddings, catering, or contact Moreno Bakery to start
            planning.
          </p>
          <div className={styles.articleCtaLinks}>
            <Link href="/catering" className="btn btn-primary">Explore Catering</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
            <Link href="/menu" className="btn btn-secondary">View Menu</Link>
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
              "From Bread and Guava Turnovers to a Brandon Favorite: The Story Behind Moreno Bakery",
            description:
              "Learn how Moreno Bakery grew from bread and guava turnovers into a Brandon favorite for pastries, cakes, lunch, catering, and celebrations.",
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
