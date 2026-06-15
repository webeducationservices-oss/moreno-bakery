import Image from "next/image";
import Link from "next/link";
import styles from "../events.module.css";

export const metadata = {
  title: "Corporate Catering in Brandon, FL | Moreno Bakery",
  description:
    "Order corporate catering, pastry trays, dessert trays, cakes, and office event food from Moreno Bakery in Brandon, FL.",
  openGraph: {
    title: "Corporate Catering in Brandon, FL | Moreno Bakery",
    description:
      "Order corporate catering, pastry trays, dessert trays, cakes, and office event food from Moreno Bakery in Brandon, FL.",
  },
};

const FAQS = [
  {
    q: "Do you offer corporate catering for breakfast and lunch meetings?",
    a: "Yes. Moreno Bakery can support business orders for breakfast, lunch, pastry trays, desserts, and group-friendly event food.",
  },
  {
    q: "Can we order pastries, desserts, and savory food together?",
    a: "Yes. Moreno Bakery makes it easier to combine food and sweets in one order for a more complete office event setup.",
  },
  {
    q: "Do you help with company celebrations and staff appreciation events?",
    a: "Yes. Moreno Bakery is a strong fit for team lunches, employee celebrations, client events, and holiday orders.",
  },
  {
    q: "Do you offer business-friendly dessert trays or gift-style orders?",
    a: "Yes. Moreno Bakery can support dessert trays, pastry assortments, cakes, and seasonal gifting-style bakery orders for business needs.",
  },
  {
    q: "How do I start a corporate catering order?",
    a: "The easiest next step is to submit an inquiry or call Moreno Bakery to talk through the event, timing, and menu direction.",
  },
];

export default function CorporatePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Corporate catering">
        <Image
          src="/images/catering/corporate-catering-spread.webp"
          alt="Corporate catering spread from Moreno Bakery"
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
          <h1>Corporate Catering in Brandon, FL for Meetings, Teams, and Client Events</h1>
          <p className={styles.heroSub}>
            From office breakfasts and lunch meetings to staff celebrations,
            client events, and holiday orders, Moreno Bakery helps Brandon
            businesses serve food and desserts that feel polished, generous, and
            easy to coordinate.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:8136890320" className="btn btn-white btn-lg">
              Request Corporate Catering
            </a>
            <Link href="/menu/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Catering Menu
            </Link>
            <a href="tel:8136890320" className="btn btn-secondary btn-lg" style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
              Call 813.689.0320
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={`container ${styles.introInner}`}>
          <p>
            Corporate food orders are rarely only about feeding people. They also
            reflect on the business that placed the order. When a company chooses
            local catering for a meeting, staff celebration, client visit, holiday
            event, or appreciation gift, the order needs to feel dependable,
            organized, and worth serving.
          </p>
          <p style={{ marginTop: "var(--space-md)" }}>
            Moreno Bakery is a strong fit because it brings together savory menu
            options, bakery favorites, pastry trays, dessert trays, and cakes in
            one place. That gives Brandon-area businesses a more thoughtful way to
            order for the office without juggling multiple vendors.
          </p>
        </div>
      </section>

      {/* ── Office Catering ───────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Office Catering That Works for the Real Rhythm of Business</h2>
              <p>
                Some office orders are simple and recurring — a breakfast tray for
                a Monday meeting, lunch for a training session, or pastries for a
                team huddle. Others are more event-like: a holiday party, a client
                appreciation lunch, or an employee milestone. Moreno Bakery is
                ready for both with breakfast, lunch, pastry trays, desserts, and
                celebration options that fit the pace of your office.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/events/corporate-meeting-food.webp"
                alt="Office breakfast meeting catering"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Everything in One Place ───────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent} style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
              <h2>Savory Food, Pastries, Desserts, and Cakes in One Place</h2>
              <p>
                Instead of ordering breakfast from one place, lunch from another,
                and dessert somewhere else, Moreno Bakery can help combine trays,
                savory menu items, pastries, sweets, and celebration cakes in a
                single order path. That means easier planning, better
                presentation, and the local bakery feel that helps the order
                stand out.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                <Link href="/menu/catering" style={{ fontWeight: 700 }}>
                  View the Catering Menu →
                </Link>
              </p>
            </div>
            <div className={styles.splitImage} style={{ direction: "ltr" }}>
              <Image
                src="/images/catering/catering-buffet-setup.webp"
                alt="Full catering buffet spread"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Event Cards ───────────────────────────────────── */}
      <section className="section-alt" aria-label="Corporate event types">
        <div className="container">
          <h2 className="text-center">Business Events That Need More Than a Standard Lunch Order</h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            Some company orders are routine. Others are tied to milestones,
            clients, recognition, or holidays.
          </p>
          <div className={styles.eventGrid}>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-cuban-sandwich.jpg"
                alt="Cuban sandwich tray for office meetings"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Meetings & Lunches</h3>
                <p>
                  Sandwich trays, hot entrees, sides, and drinks for daily
                  meetings, training sessions, and working lunches.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/catering/party-dessert-table.webp"
                alt="Staff appreciation dessert spread"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Staff Appreciation</h3>
                <p>
                  Pastry trays, dessert assortments, and celebration cakes for
                  team milestones, holidays, and employee recognition.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-cream-horns.jpg"
                alt="Pastry tray for client events"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Client Events & Gifting</h3>
                <p>
                  Polished pastry platters, bakery gift boxes, and seasonal
                  holiday orders that represent your company well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local Partner ─────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>A Local Partner for Recurring Office Orders and One-Time Events</h2>
              <p>
                Corporate customers often value consistency as much as menu
                variety. Moreno Bakery can be a dependable local partner, whether
                you need one event order or want a bakery you can keep coming back
                to for breakfast trays, lunch catering, pastry assortments,
                desserts, or celebration cakes.
              </p>
              <p style={{ marginTop: "var(--space-lg)" }}>
                <a href="tel:8136890320" className="btn btn-primary">
                  Request Corporate Catering
                </a>
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/catering/plated-cuban-dinner.webp"
                alt="Plated Cuban dinner for corporate event"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="section-alt" aria-label="How corporate catering works">
        <div className="container">
          <h2 className="text-center">How Corporate Catering Works</h2>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <h3>Review the Menu</h3>
              <p>Browse the <Link href="/menu/catering">Catering Menu</Link> or reach out to discuss your event.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <h3>Share Event Details</h3>
              <p>Date, guest count, timing, and whether you need breakfast, lunch, desserts, or a combination.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <h3>Confirm Your Order</h3>
              <p>Finalize menu direction, pickup or delivery details, and any event-specific needs.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <h3>Impress Your Team</h3>
              <p>Let Moreno Bakery help make the event feel more polished and memorable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ────────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <h2 className="text-center">Why Businesses Choose Moreno Bakery</h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Local Brandon Bakery & Kitchen</h4>
                <p>A bakery businesses can trust for consistent, quality catering.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4>Breakfast, Lunch, Pastries & Cakes</h4>
                <p>Everything from one place — no juggling multiple vendors.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <h4>Meetings, Appreciation & Holidays</h4>
                <p>Flexible for routine office orders and bigger company celebrations.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h4>Handmade Feel, Real Capacity</h4>
                <p>Bakery warmth with the kitchen strength to serve group sizes.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>
              </div>
              <div>
                <h4>Easy Next Step</h4>
                <p>Inquiry, phone, or menu browsing — start however works best.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4>Serving Brandon Businesses</h4>
                <p>Proud to serve local offices and nearby business communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-alt" aria-label="FAQs">
        <div className="container">
          <h2 className="text-center">Corporate Catering FAQs</h2>
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
          <h2>Let Moreno Bakery Handle the Office Catering</h2>
          <p>
            From a quick meeting order to a full company celebration — one call,
            one bakery.
          </p>
          <div className={styles.ctaButtons}>
            <a href="tel:8136890320" className="btn btn-white btn-lg">
              Call 813.689.0320
            </a>
            <Link href="/menu/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              View Catering Menu
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
