import Image from "next/image";
import Link from "next/link";
import styles from "../events.module.css";

export const metadata = {
  title: "Birthday Cakes in Brandon, FL | Moreno Bakery",
  description:
    "Order birthday cakes, graduation desserts, party trays, and celebration sweets from Moreno Bakery in Brandon, FL.",
  openGraph: {
    title: "Birthday Cakes in Brandon, FL | Moreno Bakery",
    description:
      "Order birthday cakes, graduation desserts, party trays, and celebration sweets from Moreno Bakery in Brandon, FL.",
  },
};

const FAQS = [
  {
    q: "Do you offer custom birthday cakes in Brandon?",
    a: "Yes. Moreno Bakery can help with birthday cakes that feel festive, personal, and right for the occasion.",
  },
  {
    q: "Do you make graduation cakes and desserts?",
    a: "Yes. Moreno Bakery can support graduation events with cakes, pastries, desserts, and group-friendly celebration options.",
  },
  {
    q: "Can I order more than just a cake?",
    a: "Yes. Moreno Bakery also offers pastries, dessert trays, sweets, and food options that can help round out a party.",
  },
  {
    q: "Are these options only for large parties?",
    a: "No. Moreno Bakery can support both smaller family celebrations and larger milestone gatherings.",
  },
  {
    q: "How do I start a birthday or graduation order?",
    a: "The easiest next step is to reach out with the date, guest count, and the kind of celebration you are planning.",
  },
];

export default function BirthdaysGraduationsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Birthday and graduation services">
        <Image
          src="/images/events/birthday-cake-celebration.webp"
          alt="Birthday celebration cake and desserts"
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
          <h1>Birthday Cakes and Graduation Desserts in Brandon, FL</h1>
          <p className={styles.heroSub}>
            From custom birthday cakes and party desserts to graduation sweets,
            trays, and crowd-friendly celebration orders, Moreno Bakery helps
            Brandon families mark milestone moments with something memorable and
            easy to share.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:+18136551861" className="btn btn-white btn-lg">
              Start a Celebration Order
            </a>
            <Link href="/menu/bakery" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Bakery Menu
            </Link>
            <a href="tel:+18136551861" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              Call (813) 655-1861
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={`container ${styles.introInner}`}>
          <p>
            Birthdays and graduations are the kinds of events people want to feel
            festive without becoming complicated. A great cake often starts the
            conversation, but many celebration orders quickly grow into dessert
            trays, pastries, food, or a fuller table once the guest list comes into
            focus.
          </p>
          <p style={{ marginTop: "var(--space-md)" }}>
            Moreno Bakery is a strong fit for these milestone moments because it
            can help with both the visual centerpiece and the practical extras.
            Whether the celebration needs one custom-feeling cake or a more
            complete order for a larger party, the bakery is approachable, local,
            and easy to work with.
          </p>
        </div>
      </section>

      {/* ── Birthday Cakes ────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Birthday Cakes for Kids, Adults, and Every Kind of Party</h2>
              <p>
                Some birthday parties are themed and playful. Others are elegant,
                funny, colorful, or more classic. Moreno Bakery is a place where
                birthday customers can start with a simple idea and turn it into a
                cake that fits the person being celebrated — with room for that
                range without making the process feel intimidating.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Choose from 10+ cake flavors, 18 fillings, and 13 icings to
                create the perfect birthday centerpiece.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-heart-shaped-chocolate-mousse.jpg"
                alt="Custom birthday cake from Moreno Bakery"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Graduation ────────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent} style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
              <h2>Graduation Cakes and Desserts for Proud, Busy Families</h2>
              <p>
                Graduation events often bring together larger guest lists, family
                travel, school colors, and milestone energy all at once. Moreno
                Bakery is a helpful option for graduation cakes, dessert trays,
                pastries, cookies, and event-friendly additions that make serving a
                crowd feel easier.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                From simple family gatherings to bigger hosted celebrations —
                Moreno Bakery can support both.
              </p>
            </div>
            <div className={styles.splitImage} style={{ direction: "ltr" }}>
              <Image
                src="/images/events/graduation-dessert-table.webp"
                alt="Graduation party dessert table"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── More Than a Cake ──────────────────────────────── */}
      <section className="section-alt" aria-label="Party add-ons">
        <div className="container">
          <h2 className="text-center">More Than a Cake: Dessert Tables, Pastries, and Party Add-Ons</h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            Many customers need sweets for sharing, not just a single centerpiece.
          </p>
          <div className={styles.eventGrid}>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-french-vanilla-cupcake.jpg"
                alt="Cupcakes for birthday parties"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Cupcakes & Sweets</h3>
                <p>
                  Cupcakes, bonbons, and individual sweets perfect for party
                  tables and sharing with guests of all ages.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-chocolate-chunk-cookie.jpg"
                alt="Cookie and dessert trays"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Cookie & Dessert Trays</h3>
                <p>
                  Cookie platters, brownie trays, and pastry assortments that help
                  fill out the dessert table.
                </p>
                <Link href="/menu/catering#cookie-trays" style={{ fontWeight: 700, fontSize: "var(--text-sm)", marginTop: "var(--space-sm)", display: "inline-block" }}>
                  View Options →
                </Link>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-cream-horns.jpg"
                alt="Pastry platters for celebrations"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Pastry Platters</h3>
                <p>
                  Eclairs, cream horns, rugelach, and miniature pastries for a
                  more elegant celebration spread.
                </p>
                <Link href="/menu/catering#pastry-trays" style={{ fontWeight: 700, fontSize: "var(--text-sm)", marginTop: "var(--space-sm)", display: "inline-block" }}>
                  View Options →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Easy Options ──────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Easy Options for Small Parties and Bigger Gatherings</h2>
              <p>
                Not every birthday or graduation order is the same. Some families
                need a simple cake pickup for a smaller celebration. Others are
                planning backyard parties, school-adjacent events, or larger family
                gatherings that need food and desserts in combination.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                Moreno Bakery can help shape the right kind of order for the
                occasion — whether it starts with a cake and stays small, or grows
                into a fuller event spread.
              </p>
              <p style={{ marginTop: "var(--space-lg)" }}>
                <a href="tel:+18136551861" className="btn btn-primary">
                  Start a Celebration Order
                </a>
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/catering/party-dessert-table.webp"
                alt="Full celebration dessert and food spread"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="section-alt" aria-label="How celebration ordering works">
        <div className="container">
          <h2 className="text-center">How Celebration Ordering Works</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <h3>Share the Details</h3>
              <p>Event type, date, guest count, and whether it is a birthday, graduation, or both.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <h3>Discuss the Vision</h3>
              <p>Cake ideas, dessert needs, colors, themes, or any party-specific direction.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <h3>Add Extras</h3>
              <p>Confirm whether you also need pastries, dessert trays, food, or other add-ons.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <h3>Celebrate</h3>
              <p>Finalize your order and pickup or event details with a clear next step.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ────────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <h2 className="text-center">Why Families Choose Moreno Bakery for Milestone Moments</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h4>Custom-Feeling Celebration Cakes</h4>
                <p>Birthday and graduation cakes from a local bakery that feels personal.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4>Desserts, Pastries & Add-Ons</h4>
                <p>Everything to help serve a crowd beyond just the cake.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4>Small Parties & Big Milestones</h4>
                <p>Flexible enough for intimate celebrations and larger gatherings alike.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>
              </div>
              <div>
                <h4>Approachable Ordering</h4>
                <p>Room for themes, colors, and celebration details without stress.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Trusted Brandon Bakery</h4>
                <p>A wide range of options from a bakery the community knows.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <h4>Serving Brandon Celebrations</h4>
                <p>Helping families mark important moments in the community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-alt" aria-label="FAQs">
        <div className="container">
          <h2 className="text-center">Birthday & Graduation FAQs</h2>
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
          <h2>Make the Milestone Memorable</h2>
          <p>
            From a simple birthday cake to a full graduation party spread — Moreno
            Bakery is ready to celebrate with you.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:+18136551861" className="btn btn-white btn-lg">
              Call (813) 655-1861
            </a>
            <Link href="/menu/bakery" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Bakery Menu
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
