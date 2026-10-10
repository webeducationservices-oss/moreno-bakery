import Image from "next/image";
import Link from "next/link";
import styles from "../../events.module.css";
import t from "./tastings.module.css";

const PAGE_URL = "https://www.morenobakery.com/events/wedding-cakes/tastings";
const PHONE_HREF = "tel:8136890320";
const PHONE = "813.689.0320";
const QUESTIONNAIRE = "/contact?form=wedding-cake";

const TITLE = "Wedding Cake Tasting in Brandon, FL | 5 Flavors for $25 | Moreno Bakery";
const DESCRIPTION =
  "Book a wedding cake tasting at Moreno Bakery in Brandon, FL. Try 5 flavors for $25, meet with Susan to match flavors to your menu, or pick up tasting cupcakes.";

export const metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/events/wedding-cakes/tastings" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: "/images/weddings/wedding-cake-tasting-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tiered wedding cake and dessert table by Moreno Bakery in Brandon, FL",
      },
    ],
  },
};

// Flavor menu, verbatim from the bakery's printed flavor sheet.
const FLAVORS = [
  {
    title: "Cake Flavors",
    items: [
      "Carrot*",
      "Chocolate",
      "Coconut",
      "Lemon",
      "Marble",
      "Red Velvet*",
      "Sponge (requires syrup)",
      "Vanilla",
      "Pumpkin* (seasonal)",
    ],
  },
  {
    title: "Filling Flavors",
    items: [
      "Amaretto Custard*",
      "Bacardi Custard*",
      "Irish Cream Custard*",
      "Chocolate Custard",
      "Coconut Custard",
      "Dulce de Leche Custard",
      "Frangelico Custard*",
      "Kahlua Custard*",
      "Pina Colada Custard",
      "Vanilla Custard",
      "Chocolate Mousse",
      "Dulce de Leche Mousse",
      "Strawberry Mousse",
      "German Chocolate*",
      "Cannoli*",
      "Cherry, Guava, Lemon, Pineapple, Raspberry, or Strawberry",
      "Fresh Strawberries*",
      "Tiramisu*",
    ],
  },
  {
    title: "Icing Flavors",
    items: [
      "Amaretto Buttercream*",
      "Bacardi Buttercream*",
      "Chocolate Buttercream",
      "Lemon Buttercream",
      "Mocha Buttercream",
      "Nutella Buttercream",
      "Peanut Butter Buttercream*",
      "Vanilla Buttercream",
      "Cream Cheese*",
      "Whipped Cream",
      "Chocolate Whipped Cream",
      "Kahlua Chocolate Whipped Cream*",
    ],
  },
];

const STEPS = [
  {
    num: "1",
    title: "Book Your Tasting",
    desc: `Call ${PHONE} or start the wedding cake questionnaire, and we will set a time for your tasting.`,
  },
  {
    num: "2",
    title: "Choose Five Flavors",
    desc: "Pick five flavors from our cake, filling, and icing menu. Not sure where to start? Bring your favorites and we will help.",
  },
  {
    num: "3",
    title: "Sit Down With Susan",
    desc: "Susan walks you through flavor profiles, how each cake, filling, and icing work together, and how to match them to your menu.",
  },
  {
    num: "4",
    title: "Plan Your Cake",
    desc: "Leave knowing what you love. From there, Susan can talk through design, sizing, and the details for your wedding date.",
  },
];

const FAQS = [
  {
    q: "How much does a wedding cake tasting cost at Moreno Bakery?",
    a: "A wedding cake tasting is $25 and includes five flavors of your choice.",
  },
  {
    q: "What flavors can I try at my tasting?",
    a: "You choose five flavors from our full menu of cake, filling, and icing flavors, from classics like Vanilla, Chocolate, and Red Velvet to Dulce de Leche Mousse, Guava, Pina Colada Custard, and Nutella Buttercream.",
  },
  {
    q: "Who will I meet with at the tasting?",
    a: "You will sit down with Susan Moreno. She talks through flavor profiles, how fillings and icings change a cake, and how to match your cake to your wedding menu.",
  },
  {
    q: "Can I try flavors at home instead of booking a tasting?",
    a: `Yes. Call ${PHONE} to order tasting cupcakes in the flavors you are curious about, pick them up at the bakery, and taste them at home to see what you like.`,
  },
  {
    q: "Do I need to have my cake design figured out before the tasting?",
    a: "No. You can come in with a few photos, a color palette, or just a feeling for the day. The tasting is a good place to start, and Susan can help shape the rest.",
  },
  {
    q: "How do I book a wedding cake tasting?",
    a: `Call Moreno Bakery at ${PHONE} or start the wedding cake questionnaire on our contact page, and we will reach out to schedule your tasting.`,
  },
];

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function WeddingCakeTastingsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Wedding cake tastings">
        <Image
          src="/images/katelyn---michael-532.webp"
          alt="Three-tier white wedding cake with greenery on a gold stand beside a Moreno Bakery dessert table"
          width={1920}
          height={1280}
          sizes="100vw"
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className="accent-heading" style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-xl)", marginBottom: "var(--space-sm)" }}>
            Moreno Bakery Weddings
          </p>
          <h1>Wedding Cake Tastings in Brandon, FL</h1>
          <p className={styles.heroSub}>
            Taste five flavors for $25 and sit down with Susan to find the cake
            that fits your wedding, your menu, and the way you want the day to
            feel.
          </p>
          <div className={styles.heroCtas}>
            <a href={PHONE_HREF} className="btn btn-white btn-lg">
              Call to Book Your Tasting
            </a>
            <Link href={QUESTIONNAIRE} className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Start Your Wedding Cake Questionnaire
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <nav className={t.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link> / <Link href="/events/weddings">Weddings</Link> /{" "}
            <Link href="/events/wedding-cakes">Wedding Cakes</Link> / <span>Tastings</span>
          </nav>
          <p>
            Your wedding cake is one of the few things every guest gets to
            taste. A tasting at Moreno Bakery lets you try the flavors before
            you commit, compare fillings and icings side by side, and get a
            Brandon baker’s honest guidance on what will work best for your day.
          </p>
        </div>
      </section>

      {/* ── Two ways to taste ─────────────────────────────── */}
      <section className="section-alt" aria-label="Tasting options and pricing">
        <div className="container">
          <h2 className="text-center">Two Ways to Taste Our Wedding Cakes</h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            Book a sit-down tasting with Susan, or pick up tasting cupcakes and
            try them at home on your own time.
          </p>
          <div className={t.optionGrid}>
            <div className={`${t.optionCard} ${t.optionCardFeatured}`}>
              <p className={t.optionLabel}>Wedding Cake Tasting</p>
              <p className={t.price}>$25</p>
              <p className={t.priceUnit}>for five flavors of your choice</p>
              <ul className={t.optionList}>
                <li><Check /><span>Choose five flavors from our cake, filling, and icing menu</span></li>
                <li><Check /><span>A sit-down meeting with Susan Moreno</span></li>
                <li><Check /><span>Guidance on flavor profiles and pairings</span></li>
                <li><Check /><span>Help matching your cake to your wedding menu</span></li>
              </ul>
              <p style={{ marginBottom: "var(--space-lg)" }}>
                To book, call <a href={PHONE_HREF}>{PHONE}</a> or{" "}
                <Link href={QUESTIONNAIRE}>start your wedding cake questionnaire</Link>.
              </p>
              <div className={t.optionCta}>
                <a href={PHONE_HREF} className="btn btn-primary">Call to Book</a>
                <Link href={QUESTIONNAIRE} className="btn btn-secondary">Request Online</Link>
              </div>
            </div>

            <div className={t.optionCard}>
              <p className={t.optionLabel}>Tasting Cupcakes</p>
              <p className={t.price} style={{ fontSize: "var(--text-3xl)" }}>Taste at Home</p>
              <p className={t.priceUnit}>pick up in store</p>
              <ul className={t.optionList}>
                <li><Check /><span>Call and order cupcakes in the flavors you want to try</span></li>
                <li><Check /><span>Pick them up at the bakery in Brandon</span></li>
                <li><Check /><span>Taste at home and see what you like</span></li>
                <li><Check /><span>A relaxed way to narrow down your favorites</span></li>
              </ul>
              <p style={{ marginBottom: "var(--space-lg)" }}>
                To order tasting cupcakes, call <a href={PHONE_HREF}>{PHONE}</a>.
              </p>
              <div className={t.optionCta}>
                <a href={PHONE_HREF} className="btn btn-primary">Call to Order Cupcakes</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet Susan ────────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.splitContent}>
            <div className={styles.splitImage}>
              <Image
                src="/images/susan-interview.webp"
                alt="Susan Moreno, co-owner of Moreno Bakery, smiling in the bakery kitchen in Brandon, FL"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div>
              <h2>Your Tasting Is a Conversation With Susan</h2>
              <p>
                Every tasting is a sit-down with Susan Moreno, co-owner of
                Moreno Bakery. She knows our flavors inside and out: how each
                cake, filling, and icing tastes on its own, and how they taste
                together.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Susan will talk you through flavor profiles: which combinations
                are rich, which are light, which lean tropical, and which feel
                classic. You get real answers about what will taste best, not a
                sales pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Matching your menu ────────────────────────────── */}
      <section className={styles.contentSection} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.splitContent}>
            <div>
              <h2>Matching Your Cake to Your Wedding Menu</h2>
              <p>
                The best wedding cake fits the meal it follows. A heavy dinner
                calls for something different than a light summer lunch, and
                Susan can help you find a cake that finishes the night the right
                way. A few combinations from our menu to get you thinking:
              </p>
              <ul className={t.pairingList}>
                <li>
                  <strong>Light and bright</strong>
                  Lemon cake with Strawberry Mousse and Whipped Cream, for an
                  outdoor or warm-weather celebration.
                </li>
                <li>
                  <strong>Tropical and Cuban inspired</strong>
                  Coconut cake with Pina Colada Custard or Guava filling, to pair
                  with an island or Cuban menu.
                </li>
                <li>
                  <strong>Rich and classic</strong>
                  Chocolate cake with Chocolate Mousse and Mocha Buttercream, for
                  an evening reception with coffee service.
                </li>
                <li>
                  <strong>Fall weddings</strong>
                  Pumpkin cake (seasonal) with Cream Cheese icing.
                </li>
              </ul>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/katelyn---michael-536.webp"
                alt="Wedding dessert table with cannoli, pastries, and cookie trays from Moreno Bakery"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Flavor menu ───────────────────────────────────── */}
      <section className="section-warm" aria-label="Wedding cake flavor menu">
        <div className="container">
          <h2 className="text-center">Wedding Cake Flavors, Fillings, and Icings</h2>
          <p className="text-center text-muted" style={{ maxWidth: 680, margin: "0 auto" }}>
            Choose your five tasting flavors from the full menu below. Mix a cake
            flavor with any filling and icing to build a wedding cake that is
            completely yours.
          </p>
          <div className={t.flavorGrid}>
            {FLAVORS.map((group) => (
              <div key={group.title} className={t.flavorCol}>
                <h3>{group.title}</h3>
                <ul className={t.flavorList}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className={t.flavorNote}>
            Ask us about flavors marked with an asterisk (*) when you book your tasting.
          </p>
        </div>
      </section>

      {/* ── Cupcakes at home ──────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.splitContent}>
            <div className={styles.splitImage}>
              <Image
                src="/images/cupcake-icing-cu.webp"
                alt="Buttercream icing being piped onto a fresh cupcake at Moreno Bakery"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div>
              <h2>Prefer to Taste at Home? Pick Up Tasting Cupcakes</h2>
              <p>
                If a sit-down tasting does not fit your schedule, you can still
                try our flavors. Call {PHONE}, order cupcakes in the flavors you
                are curious about, and pick them up at the bakery.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Taste them at home with your partner or family, take notes on
                what you love, and bring your favorites into the conversation
                when you are ready to plan the cake.
              </p>
              <a href={PHONE_HREF} className="btn btn-primary" style={{ marginTop: "var(--space-lg)", display: "inline-flex" }}>
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why tastings matter ───────────────────────────── */}
      <section className="section-alt" aria-label="Why a cake tasting matters">
        <div className="container">
          <h2 className="text-center">Why a Wedding Cake Tasting Matters</h2>
          <p className="text-center text-muted" style={{ maxWidth: 660, margin: "0 auto" }}>
            Photos show what a cake looks like. A tasting tells you what your
            guests will actually remember.
          </p>
          <div className={t.reasonGrid}>
            <div className={t.reasonCard}>
              <Image src="/images/story/marry-me-tampa-bay-wedding-cake-wide.webp" alt="Four-tier white wedding cake by Moreno Bakery in a candlelit ballroom" width={800} height={600} loading="lazy" />
              <div className={t.reasonBody}>
                <h3>Flavor Is What Guests Remember</h3>
                <p>A cake can look perfect in photos and still fall flat on the plate. Tasting first means the cake you serve is one you already love.</p>
              </div>
            </div>
            <div className={t.reasonCard}>
              <Image src="/images/whisk.webp" alt="Batter being whisked by hand at Moreno Bakery" width={800} height={600} loading="lazy" />
              <div className={t.reasonBody}>
                <h3>Pairings Change Everything</h3>
                <p>The same cake tastes completely different with a custard, a mousse, or a fruit filling. Trying them side by side makes the choice easy.</p>
              </div>
            </div>
            <div className={t.reasonCard}>
              <Image src="/images/katelyn---michael-538.webp" alt="Wedding cookie and pastry trays on a Moreno Bakery dessert table" width={800} height={600} loading="lazy" />
              <div className={t.reasonBody}>
                <h3>Fewer Surprises on the Day</h3>
                <p>When you have tasted the flavors and talked through the details, there is nothing left to wonder about when the cake is cut.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <h2 className="text-center">What to Expect at Your Wedding Cake Tasting</h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            A relaxed, low-pressure visit that leaves you with a clear idea of the
            cake you want.
          </p>
          <div className={styles.processGrid}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processNumber}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center" style={{ marginTop: "var(--space-2xl)" }}>
            Our wedding cakes have been featured on Marry Me Tampa Bay.{" "}
            <Link href="/stories/marry-me-tampa-bay-black-and-white-wedding">See the black and white wedding at Hotel Flor</Link>.
          </p>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────────── */}
      <section aria-label="Moreno Bakery wedding cakes and desserts">
        <div className={styles.galleryStrip}>
          {[
            { src: "/images/katelyn---michael-535.webp", alt: "Textured white wedding cake with a gold monogram topper" },
            { src: "/images/story/marry-me-tampa-bay-wedding-cake.webp", alt: "Four-tier wedding cake with sculpted floral detail" },
            { src: "/images/img_5174.webp", alt: "Cream-topped fruit tarts from Moreno Bakery" },
            { src: "/images/susan-reaching.webp", alt: "Susan Moreno with a decorated cake at the bakery counter" },
            { src: "/images/img_5195.webp", alt: "Sandwich cookies baked fresh at Moreno Bakery" },
            { src: "/images/rolling-dough.webp", alt: "Dough being rolled by hand at Moreno Bakery" },
          ].map((img) => (
            <div key={img.src} className={styles.galleryItem}>
              <Image src={img.src} alt={img.alt} width={400} height={400} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center">Wedding Cake Tasting FAQ</h2>
          <div className={styles.faqList}>
            {FAQS.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <p className={styles.faqQuestion}>{faq.q}</p>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Book a tasting">
        <div className="container">
          <h2>Book Your Wedding Cake Tasting</h2>
          <p>
            Five flavors, $25, and a sit-down with Susan. Call {PHONE} or start
            your wedding cake questionnaire to get on the calendar.
          </p>
          <div className={styles.ctaButtons}>
            <a href={PHONE_HREF} className="btn btn-white btn-lg">
              Call {PHONE}
            </a>
            <Link href={QUESTIONNAIRE} className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Start the Questionnaire
            </Link>
          </div>
        </div>
      </section>

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Wedding Cake Tasting",
              serviceType: "Wedding cake tasting",
              url: PAGE_URL,
              description:
                "A wedding cake tasting at Moreno Bakery in Brandon, FL: five flavors of your choice for $25 and a meeting with Susan Moreno about flavor profiles and matching your cake to your wedding menu.",
              image: "https://www.morenobakery.com/images/weddings/wedding-cake-tasting-og.jpg",
              areaServed: { "@type": "City", name: "Brandon, FL" },
              offers: {
                "@type": "Offer",
                name: "Wedding cake tasting, five flavors",
                price: "25",
                priceCurrency: "USD",
                url: PAGE_URL,
              },
              provider: {
                "@type": "Bakery",
                name: "Moreno Bakery",
                url: "https://www.morenobakery.com",
                telephone: "+1-813-689-0320",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "737 W. Brandon Blvd.",
                  addressLocality: "Brandon",
                  addressRegion: "FL",
                  postalCode: "33511",
                  addressCountry: "US",
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.morenobakery.com/" },
                { "@type": "ListItem", position: 2, name: "Weddings", item: "https://www.morenobakery.com/events/weddings" },
                { "@type": "ListItem", position: 3, name: "Wedding Cakes", item: "https://www.morenobakery.com/events/wedding-cakes" },
                { "@type": "ListItem", position: 4, name: "Tastings", item: PAGE_URL },
              ],
            },
          ]),
        }}
      />
    </>
  );
}
