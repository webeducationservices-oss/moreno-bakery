import Image from "next/image";
import Link from "next/link";
import styles from "../stories.module.css";

const ARTICLE_URL =
  "https://marrymetampabay.com/timeless-black-and-white-downtown-tampa-wedding-hotel-flor-2/";
const VENDOR_URL = "https://marrymetampabay.com/tampa-wedding-vendor/moreno-bakery/";

export const metadata = {
  title: "Featured on Marry Me Tampa Bay | Moreno Bakery Wedding Cake",
  description:
    "Moreno Bakery was the cake and dessert vendor for a timeless black and white wedding at Hotel Flor in downtown Tampa, featured on Marry Me Tampa Bay.",
  openGraph: {
    title: "Featured on Marry Me Tampa Bay | Moreno Bakery Wedding Cake",
    description:
      "Moreno Bakery was the cake and dessert vendor for a timeless black and white wedding at Hotel Flor in downtown Tampa, featured on Marry Me Tampa Bay.",
  },
};

export default function MarryMeTampaBayPost() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.articleHero}>
        <Image
          src="/images/weddings/wedding-cake-elegant.webp"
          alt="Elegant tiered wedding cake by Moreno Bakery"
          width={1400}
          height={600}
          className={styles.articleHeroImage}
          priority
        />
        <div className={styles.articleHeroOverlay} />
        <div className={styles.articleHeroContent}>
          <span className={styles.tag}>Featured</span>
          <h1>
            Featured on Marry Me Tampa Bay: A Timeless Black and White Wedding
            at Hotel Flor
          </h1>
        </div>
      </section>

      {/* ── Article Body ──────────────────────────────────── */}
      <article className={styles.articleBody}>
        <p>
          Moreno Bakery was the cake and dessert vendor for Laryn and Chris&apos;
          wedding at Hotel Flor in downtown Tampa — and the celebration was
          featured on{" "}
          <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer">
            Marry Me Tampa Bay
          </a>
          , one of the Tampa Bay area&apos;s most trusted wedding publications.
        </p>
        <p>
          The couple built their day around a timeless black and white palette
          with soft gold accents: black linens, warm candlelight, ivory florals,
          and a restored historic ballroom that did a lot of the work on its
          own. The dessert had to match that restraint — elegant enough to hold
          the room, simple enough not to compete with it.
        </p>

        <figure style={{ margin: "var(--space-2xl) auto", maxWidth: "440px", textAlign: "center" }}>
          <Image
            src="/images/story/marry-me-tampa-bay-wedding-cake.webp"
            alt="Four-tier white wedding cake with sculpted floral appliqué and a gold monogram topper, made by Moreno Bakery for a black and white wedding at Hotel Flor in downtown Tampa"
            width={800}
            height={1200}
            style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
          />
          <figcaption style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", marginTop: "var(--space-sm)", lineHeight: 1.6 }}>
            Moreno Bakery&apos;s four-tier cake at Hotel Flor. Photo via{" "}
            <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer">
              Marry Me Tampa Bay
            </a>
            .
          </figcaption>
        </figure>

        <h2>A Cake Built for a Monochrome Room</h2>
        <p>
          The cake was four tiers, finished in white, with sculpted floral and
          leaf appliqué worked across every tier and small gold centers in the
          blossoms. A gold monogram topper finished it off. Against black
          linen and candlelight, the texture is what carries it — the detail
          reads clearly from across a ballroom without adding a single
          competing color.
        </p>
        <p>
          That is usually the right instinct for a black and white wedding. When
          the palette is this disciplined, a cake does not need to introduce
          something new. It needs to belong to the room and still be worth
          photographing up close.
        </p>

        <div className={styles.pullQuote}>
          <p>
            When the palette is that disciplined, the cake should feel like it
            belongs to the room — not like it is competing with it.
          </p>
        </div>

        <h2>Cakes and Desserts, Handled Together</h2>
        <p>
          Moreno Bakery handled both the cake and the desserts for the
          celebration. For couples, that combination tends to simplify planning:
          one bakery, one point of contact, one consistent look across the cake
          table and the rest of the sweets.
        </p>
        <p>
          It also means the details stay aligned. Flavors, finishes, delivery
          timing, and setup all get planned as a single order rather than
          coordinated across separate vendors on an already-full wedding day.
        </p>

        <h2>Planning a Wedding in the Tampa Bay Area?</h2>
        <p>
          You can see Moreno Bakery&apos;s{" "}
          <a href={VENDOR_URL} target="_blank" rel="noopener noreferrer">
            vendor profile on Marry Me Tampa Bay
          </a>
          , or read the full feature on{" "}
          <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer">
            Laryn and Chris&apos; wedding at Hotel Flor
          </a>
          .
        </p>
        <p>
          Whether the vision is timeless and monochrome or colorful and
          personal, the process starts the same way — a consultation, a tasting,
          and a conversation about the room your cake is going to live in.
        </p>

        {/* ── CTA ─── */}
        <div className={styles.articleCta}>
          <h3>Planning Your Wedding Cake?</h3>
          <p>
            Tell us about your date, your venue, and the look you are going for.
            We will help you plan a cake and dessert table that fits the day.
          </p>
          <div className={styles.articleCtaLinks}>
            <Link href="/contact?form=wedding-cake" className="btn btn-primary">Start a Wedding Cake Inquiry</Link>
            <Link href="/events/weddings" className="btn btn-secondary">Wedding Cakes</Link>
            <Link href="/events/wedding-cakes" className="btn btn-secondary">Wedding Cakes &amp; More</Link>
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
              "Featured on Marry Me Tampa Bay: A Timeless Black and White Wedding at Hotel Flor",
            description:
              "Moreno Bakery was the cake and dessert vendor for a timeless black and white wedding at Hotel Flor in downtown Tampa, featured on Marry Me Tampa Bay.",
            image:
              "https://www.morenobakery.com/images/story/marry-me-tampa-bay-wedding-cake.webp",
            publisher: {
              "@type": "Bakery",
              name: "Moreno Bakery",
            },
            citation: ARTICLE_URL,
          }),
        }}
      />
    </>
  );
}
