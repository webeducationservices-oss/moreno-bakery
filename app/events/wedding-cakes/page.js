import Image from "next/image";
import Link from "next/link";
import styles from "../events.module.css";

export const metadata = {
  title: "Custom Wedding Cakes Brandon, FL | Moreno Bakery",
  description:
    "Explore custom wedding cakes, dessert tables, and wedding cake consultations from Moreno Bakery in Brandon, FL.",
  openGraph: {
    title: "Custom Wedding Cakes Brandon, FL | Moreno Bakery",
    description:
      "Explore custom wedding cakes, dessert tables, and wedding cake consultations from Moreno Bakery in Brandon, FL.",
  },
};

const PROCESS_STEPS = [
  {
    num: "1",
    title: "Share Your Inspiration",
    desc: "Photos, color ideas, venue details, and a rough guest count help start the conversation.",
  },
  {
    num: "2",
    title: "Design Direction",
    desc: "Classic, soft, playful, textured, or dessert-forward — the cake is shaped around your event.",
  },
  {
    num: "3",
    title: "Flavors & Fillings",
    desc: "Pairings that make the cake taste as good as it looks, with frosting and finish preferences.",
  },
  {
    num: "4",
    title: "Finalize & Enjoy",
    desc: "Confirm sizing, delivery or pickup, and event details. Then celebrate with confidence.",
  },
];

export default function WeddingCakesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Wedding cakes">
        <Image
          src="/images/weddings/wedding-dessert-table.webp"
          alt="Wedding dessert table from Moreno Bakery"
          width={1400}
          height={600}
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className="accent-heading" style={{ color: "rgba(255,255,255,0.85)", fontSize: "var(--text-xl)", marginBottom: "var(--space-sm)" }}>
            Moreno Bakery Weddings
          </p>
          <h1>Custom Wedding Cakes in Brandon, FL With More Ways to Personalize Your Dessert Experience</h1>
          <p className={styles.heroSub}>
            From elegant tiered cakes to dessert-table details that help the
            whole reception feel complete, Moreno Bakery creates wedding
            desserts that are beautiful, personal, and planned with real care.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/contact" className="btn btn-white btn-lg">
              Schedule a Wedding Cake Consultation
            </Link>
            <Link href="/gallery" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Wedding Inspiration
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p>
            Some wedding cakes are simply ordered. Others are thoughtfully
            planned because they help shape the tone of the celebration, the
            guest experience, and even the way the day is remembered in photos.
            Moreno Bakery is a strong local choice for couples who want custom
            guidance, creative flexibility, and the confidence that comes from
            working with a bakery that understands both design and execution.
          </p>
        </div>
      </section>

      {/* ── Custom Cakes ──────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.splitContent}>
            <div>
              <h2>Custom Wedding Cakes That Begin With Your Vision</h2>
              <p>
                Wedding cake planning often starts with a mood, a color palette,
                a venue detail, or a few saved inspiration photos. You do not
                need to have everything figured out before reaching out. Moreno
                Bakery can help shape the idea into something that fits the
                style of the day, the guest count, and the overall dessert plan.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Some couples want a classic tiered cake with clean detail.
                Others want something softer, more playful, more textured, or
                more dessert-forward. Moreno Bakery listens first, then builds
                the cake around the event.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "var(--space-lg)", display: "inline-flex" }}>
                Start Your Consultation
              </Link>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/weddings/wedding-cake-elegant.webp"
                alt="Elegant tiered wedding cake"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Flavors & Fillings ────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.splitContent}>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-heart-shaped-red-velvet-cake.jpg"
                alt="Red velvet wedding cake"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
            <div>
              <h2>Flavors, Fillings, and Finishes That Feel Personal</h2>
              <p>
                A beautiful cake needs to taste as good as it looks. Flavor,
                filling, frosting, and finish all work together to create
                something guests will remember for both style and taste.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                During the consultation, couples can explore flavor
                combinations, pairings, and the ability to create something more
                personal than a generic bakery option. The goal is a cake that
                feels custom from the inside out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dessert Tables ────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.splitContent}>
            <div>
              <h2>Wedding Cakes and Dessert Tables That Go Beyond One Centerpiece</h2>
              <p>
                Not every couple wants the entire dessert experience to rely on
                one cake. Moreno Bakery can help create something layered and
                visually complete with dessert-table add-ons — pastries,
                cookies, mini desserts, and bakery favorites that complement the
                main cake.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Whether the reception is more formal, more relaxed, or
                somewhere in between, the cake and surrounding desserts can work
                together to make the dessert experience feel abundant and
                thoughtful.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/weddings/wedding-dessert-table.webp"
                alt="Wedding dessert table display"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Consultation Process ──────────────────────────── */}
      <section className="section-warm">
        <div className="container">
          <h2 className="text-center">A Consultation Process That Makes the Details Easier</h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            Planning a wedding cake involves more than choosing a style. Guest
            count, venue logistics, flavor decisions, and event flow all play a
            role. Moreno Bakery makes the process feel helpful and low-pressure.
          </p>
          <div className={styles.processGrid}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processNumber}>{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Handmade + Capacity ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.splitContent}>
            <div className={styles.splitImage}>
              <Image
                src="/images/weddings/wedding-cake-consultation.webp"
                alt="Wedding cake samples and consultation"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
            <div>
              <h2>A Brandon Wedding Cake Bakery With Handmade Style and Real Capacity</h2>
              <p>
                Moreno Bakery still feels personal and handmade, but it also has
                the kitchen strength to handle meaningful event volume. That
                matters for wedding customers because they want something
                special without having to question whether the bakery can
                deliver for the day itself.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                This combination of neighborhood-bakery warmth and real capacity
                supports weddings of different sizes, reception styles, and
                dessert needs — from intimate gatherings to larger celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Inspiration Gallery ───────────────────────────── */}
      <section aria-label="Wedding cake inspiration">
        <div className={styles.galleryStrip}>
          {[
            { src: "/images/food/moreno-bakery-heart-shaped-vanilla-cake.jpg", alt: "Vanilla wedding cake" },
            { src: "/images/food/moreno-bakery-heart-shaped-dulce-de-leche-cake.jpg", alt: "Dulce de leche cake" },
            { src: "/images/food/moreno-bakery-cheesecakes.jpg", alt: "Cheesecakes" },
            { src: "/images/food/moreno-bakery-gooey-butter-cake.jpg", alt: "Gooey butter cake" },
            { src: "/images/food/moreno-bakery-heart-shaped-chocolate-mousse.jpg", alt: "Chocolate mousse cake" },
            { src: "/images/food/moreno-bakery-heart-shaped-marble-cake.jpg", alt: "Marble cake" },
          ].map((img) => (
            <div key={img.src} className={styles.galleryItem}>
              <Image src={img.src} alt={img.alt} width={300} height={300} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center">Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            {[
              { q: "Do I need a consultation for a custom wedding cake?", a: "A consultation is the best way to talk through design direction, guest count, flavor ideas, dessert add-ons, and timing so the order feels clear from the beginning." },
              { q: "Can Moreno Bakery help with more than just the cake?", a: "Yes. Moreno Bakery can support the main cake as well as dessert-table elements like pastries, cookies, mini desserts, and other bakery-style additions." },
              { q: "How far in advance should couples reach out?", a: "The sooner the better, especially for weddings with custom cake design, dessert-table planning, or more detailed coordination needs." },
              { q: "Can I bring inspiration photos or ideas to the consultation?", a: "Absolutely. Inspiration photos, color ideas, venue details, and a rough guest count can all help the conversation move faster and make the design process easier." },
              { q: "Is this only for large formal weddings?", a: "No. Moreno Bakery supports elegant formal weddings, smaller celebrations, rehearsal gatherings, and couples who want a thoughtful dessert experience in any style." },
            ].map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <p className={styles.faqQuestion}>{faq.q}</p>
                <p className={styles.faqAnswer}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Start planning">
        <div className="container">
          <h2>Start Planning a Wedding Cake That Feels Like Part of the Celebration</h2>
          <p>
            If you are looking for a wedding cake bakery in Brandon, FL that
            can help with custom design, flavor ideas, and dessert details
            that fit your day — Moreno Bakery is ready to help.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className="btn btn-white btn-lg">
              Schedule a Consultation
            </Link>
            <Link href="/events/weddings" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Wedding Services
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
            "@type": "Service",
            name: "Custom Wedding Cakes",
            description:
              "Custom wedding cake design, flavors, dessert tables, and wedding cake consultations from Moreno Bakery in Brandon, FL.",
            provider: {
              "@type": "Bakery",
              name: "Moreno Bakery",
              address: {
                "@type": "PostalAddress",
                streetAddress: "737 W. Brandon Blvd.",
                addressLocality: "Brandon",
                addressRegion: "FL",
                postalCode: "33511",
              },
              telephone: "+1-813-689-0320",
            },
          }),
        }}
      />
    </>
  );
}
