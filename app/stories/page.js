import Image from "next/image";
import Link from "next/link";
import styles from "./stories.module.css";

export const metadata = {
  title: "Unique Stories | Moreno Bakery Brandon, FL",
  description:
    "Read the stories behind Moreno Bakery, from wedding cakes and catering wins to community moments, baking traditions, and everyday customer favorites.",
  openGraph: {
    title: "Unique Stories | Moreno Bakery Brandon, FL",
    description:
      "Read the stories behind Moreno Bakery, from wedding cakes and catering wins to community moments, baking traditions, and everyday customer favorites.",
  },
};

const STORIES = [
  {
    slug: "marry-me-tampa-bay-black-and-white-wedding",
    title: "Featured on Marry Me Tampa Bay: A Timeless Black and White Wedding",
    excerpt:
      "Moreno Bakery was the cake and dessert vendor for Laryn and Chris' black and white wedding at Hotel Flor in downtown Tampa.",
    image: "/images/story/marry-me-tampa-bay-wedding-cake-wide.webp",
    imageAlt: "Moreno Bakery's four-tier white wedding cake in the ballroom at Hotel Flor in downtown Tampa",
    tag: "Featured",
  },
  {
    slug: "moreno-bakery-brandon-story",
    title: "From Bread and Guava Turnovers to a Brandon Favorite",
    excerpt:
      "How Jose and Susan Moreno built a neighborhood bakery into a trusted destination for pastries, cakes, lunch, catering, and celebrations.",
    image: "/images/story/bakery-interior-warm.webp",
    imageAlt: "Inside Moreno Bakery in Brandon, FL",
    tag: "Our Story",
  },
  {
    slug: "custom-treats-for-500-employees",
    title: "Helping an Amazon Distribution Center Treat 500+ Employees",
    excerpt:
      "When a company needs custom treats for more than 500 employees, organization, timing, and a personal touch all matter.",
    image: "/images/catering/corporate-catering-spread.webp",
    imageAlt: "Corporate catering spread from Moreno Bakery",
    tag: "Corporate",
  },
  {
    slug: "catering-for-a-local-pi-law-firm",
    title: "How Moreno Bakery Helps a Local PI Law Firm Stay Fed During Big Cases",
    excerpt:
      "Dependable catering that helps busy professional teams stay focused and supported when the work is demanding.",
    image: "/images/catering/catering-buffet-setup.webp",
    imageAlt: "Moreno Bakery catering buffet setup",
    tag: "Catering",
  },
];

export default function StoriesPage() {
  const featured = STORIES[0];
  const rest = STORIES.slice(1);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <Image src="/images/heroes/hero-stories.jpg" alt="Fresh Cuban bread loaves at Moreno Bakery" width={1400} height={800} className={styles.heroImage} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Unique Stories from Moreno Bakery</h1>
          <p className={styles.heroSub}>
            Customer spotlights, behind-the-scenes stories, event features, and
            community moments that show there is more to Moreno Bakery than a
            menu.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/catering" className="btn btn-white btn-lg">Explore Catering</Link>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Contact Moreno Bakery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Story ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                width={640}
                height={400}
                priority
              />
            </div>
            <div className={styles.featuredBody}>
              <span className={styles.tag}>{featured.tag}</span>
              <h2>{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <Link href={`/stories/${featured.slug}`} className="btn btn-primary">
                Read the Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent Stories ────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "var(--space-xl)" }}>
            More Stories
          </h2>
          <div className={styles.storyGrid}>
            {rest.map((story) => (
              <article key={story.slug} className={styles.storyCard}>
                <Link href={`/stories/${story.slug}`}>
                  <div className={styles.storyCardImage}>
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      width={480}
                      height={300}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.storyCardBody}>
                    <span className={styles.tag}>{story.tag}</span>
                    <h3>{story.title}</h3>
                    <p>{story.excerpt}</p>
                    <span className={styles.readMore}>
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Will Find ────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ maxWidth: 780, textAlign: "center" }}>
          <h2>What You Will Find Here</h2>
          <p className="text-muted" style={{ lineHeight: 1.9, marginTop: "var(--space-md)" }}>
            Client spotlights showing how Moreno Bakery helps with weddings,
            birthdays, graduations, office events, and community gatherings.
            Behind-the-scenes stories about traditional baking and family
            ownership. Corporate and catering features that reinforce scale,
            reliability, and custom ordering capability.
          </p>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Next steps">
        <div className="container">
          <h2>Have a Story to Share?</h2>
          <p>
            Whether you are planning a celebration, need catering for the
            office, or want to start a conversation, we would love to hear
            from you.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/catering" className="btn btn-white btn-lg">Ask About Catering</Link>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Contact Moreno Bakery
            </Link>
            <Link href="/menu" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              View the Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
