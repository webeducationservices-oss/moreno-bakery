import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import CateringPlanner from "./CateringPlanner";

export const metadata = {
  title: "Catering in Brandon, FL | Moreno Bakery",
  description:
    "Order catering in Brandon, FL from Moreno Bakery for office lunches, parties, pastry trays, desserts, cakes, and group meals.",
  openGraph: {
    title: "Catering in Brandon, FL | Moreno Bakery",
    description:
      "Order catering in Brandon, FL from Moreno Bakery for office lunches, parties, pastry trays, desserts, cakes, and group meals.",
  },
};

const FAQS = [
  {
    q: "Do you offer catering for office lunches and business events?",
    a: "Yes. Moreno Bakery offers catering that works well for office breakfasts, lunch meetings, team celebrations, and other business gatherings.",
  },
  {
    q: "Can I order both savory food and desserts for the same event?",
    a: "Yes. Moreno Bakery makes it easy to combine trays, entrees, sides, pastries, desserts, and cakes in one catering order.",
  },
  {
    q: "Do you offer catering for birthdays, showers, and family parties?",
    a: "Yes. Moreno Bakery catering is a strong fit for birthdays, graduations, baby showers, bridal showers, anniversaries, and family gatherings.",
  },
  {
    q: "Where can I see the full catering categories?",
    a: "The Catering Menu page is the best place to browse menu categories like entrees, sandwich trays, salads, sides, pastry trays, cookie trays, and cakes.",
  },
  {
    q: "How do I start a catering order with Moreno Bakery?",
    a: "The easiest next step is to submit a catering inquiry or call the bakery to talk through the event, guest count, and menu direction.",
  },
];

export default function CateringPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero} aria-label="Catering services">
        <Image
          src="/images/catering/catering-buffet-setup.webp"
          alt="Moreno Bakery catering buffet spread"
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
          <h1>Catering in Brandon, FL for Meetings, Parties, and Events</h1>
          <p className={styles.heroSub}>
            From office lunches and school gatherings to family celebrations and
            community events, Moreno Bakery offers catering that brings together
            handmade baked goods, savory favorites, desserts, and cakes from a
            trusted local bakery and kitchen.
          </p>
          <div className={styles.heroCtas}>
            <a href="#catering-planner" className="btn btn-white btn-lg">
              Plan Your Catering
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

      {/* ── Intro + Catering Planner ────────────────────── */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <h2>
                Catering You Can Trust from a Bakery You Already Know
              </h2>
              <p>
                When people look for catering in Brandon, they usually need more
                than just a list of food. They need a place they can trust to feed a
                group well, offer options that fit the event, and make the ordering
                process simple. Moreno Bakery is built for exactly that kind of need.
              </p>
              <p>
                Moreno Bakery has the everyday strength of a neighborhood bakery and
                the capacity of a kitchen that can serve both small and large
                gatherings. Whether the order is for a breakfast meeting, a lunch
                drop-off, a birthday, a shower, a church event, a school function,
                or a family celebration, the bakery can guide customers toward trays,
                entrees, sides, pastries, desserts, and cakes that fit the moment.
              </p>
            </div>
            <div className={styles.introFormCol}>
              <CateringPlanner />
            </div>
          </div>
        </div>
      </section>

      {/* ── Event Type Cards ──────────────────────────────── */}
      <section className="section-alt" aria-label="Event types">
        <div className="container">
          <h2 className="text-center">
            Catering for Office Lunches, Parties, and Group Gatherings
          </h2>
          <p className="text-center text-muted" style={{ maxWidth: 640, margin: "0 auto" }}>
            Moreno Bakery catering works well for both professional and personal
            events. From routine office orders to celebrations that need the
            warmth and handmade feel that make the bakery memorable, we are here for you.
          </p>
          <div className={styles.eventGrid}>
            <div className={styles.eventCard}>
              <Image
                src="/images/catering/corporate-catering-spread.webp"
                alt="Corporate catering spread with sandwich trays, rice, beans, and salad"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Corporate & Office</h3>
                <p>
                  Breakfast meetings, lunch drop-offs, team celebrations, client
                  events, and holiday gatherings. Dependable local catering with
                  group-friendly portions.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/catering/party-dessert-table.webp"
                alt="Party dessert table with pastries, cupcakes, brownies, and celebration cake"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Private Parties & Family</h3>
                <p>
                  Birthdays, baby showers, bridal showers, anniversaries,
                  graduations, reunions, and family gatherings — food that feels
                  generous and familiar.
                </p>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-eclairs.jpg"
                alt="Moreno Bakery eclairs and pastry assortment"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Desserts, Pastries & Cakes</h3>
                <p>
                  Cookie trays, pastry assortments, celebration cakes, and dessert
                  platters. Combine sweet and savory in one order from a real
                  bakery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Menu Options ──────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Menu Options That Make Group Ordering Easier</h2>
              <p>
                Moreno Bakery offers catering options that cover the full spread
                of entrees, finger foods, sandwich trays, salads, sides, cookie
                trays, pastry trays, and custom cakes. Whether you're planning a
                business lunch with trays and sides, a shower with finger foods
                and pastries, or an all-day event mixing savory items with
                desserts, the bakery can help you build the right order for the
                size and style of your event.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                <Link href="/menu/catering" style={{ fontWeight: 700 }}>
                  View the Catering Menu →
                </Link>{" "}
                for item-by-item details, prices, and ordering inspiration.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/catering/catering-buffet-setup.webp"
                alt="Moreno Bakery catering buffet with chafing dishes, sandwich trays, and sides"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Corporate Catering ────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent} style={{ direction: "rtl" }}>
            <div style={{ direction: "ltr" }}>
              <h2>Corporate Catering in Brandon, FL</h2>
              <p>
                For business clients, Moreno Bakery is a dependable local option
                for office breakfasts, lunch meetings, team celebrations, client
                events, and holiday gatherings. The advantage of ordering from a
                Brandon bakery that offers both savory and sweet options in one
                place means fewer vendors, simpler logistics, and food your team
                will actually enjoy.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                From sandwich trays and hot entrees to pastry platters and
                celebration cakes — one call handles it all.
              </p>
              <p style={{ marginTop: "var(--space-lg)" }}>
                <a href="tel:8136890320" className="btn btn-primary">
                  Request Catering for Your Office
                </a>
              </p>
            </div>
            <div className={styles.splitImage} style={{ direction: "ltr" }}>
              <Image
                src="/images/catering/plated-cuban-dinner.webp"
                alt="Beautifully plated Cuban dinner with roast pork, yellow rice, black beans, and plantains"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Private Parties ───────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.splitContent}>
            <div>
              <h2>Catering for Private Parties and Family Events</h2>
              <p>
                Birthdays, baby showers, bridal showers, anniversaries,
                graduations, reunions, and family gatherings — these are the
                moments where food should feel generous and familiar. Moreno
                Bakery is a strong fit because customers can combine savory items
                with desserts and cakes instead of piecing together an order from
                multiple vendors.
              </p>
              <p style={{ marginTop: "var(--space-md)" }}>
                That convenience matters to busy families trying to plan a
                gathering without adding stress. One bakery, one kitchen, one
                order.
              </p>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/catering/party-dessert-table.webp"
                alt="Party dessert table with pastries, cupcakes, and celebration cake"
                width={560}
                height={420}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Desserts & Cakes ──────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <h2 className="text-center">
            Bakery Desserts, Pastry Trays, and Cakes for Events
          </h2>
          <p className="text-center" style={{ maxWidth: 700, margin: "0 auto var(--space-lg)" }}>
            One of Moreno Bakery's biggest catering advantages is that it is not
            only a food provider — it is a bakery known for pastries, cookies,
            pies, cakes, and celebration desserts. Dessert trays, pastry
            assortments, cookie trays, and custom cakes are a natural part of
            every catering order.
          </p>
          <div className={styles.eventGrid}>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-chocolate-chunk-cookie.jpg"
                alt="Moreno Bakery chocolate chunk cookies"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Cookie Trays</h3>
                <p>
                  Jumbo, butter, and Italian cookie platters — from 24 cookies to
                  5-pound trays.
                </p>
                <Link href="/menu/catering#cookie-trays" style={{ fontWeight: 700, fontSize: "var(--text-sm)", marginTop: "var(--space-sm)", display: "inline-block" }}>
                  View Options →
                </Link>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-cream-horns.jpg"
                alt="Moreno Bakery cream horns and pastry assortment"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Pastry Trays</h3>
                <p>
                  Rugelach, brownie buffets, almond delights, turnovers, and
                  Danish — miniature platters perfect for events.
                </p>
                <Link href="/menu/catering#pastry-trays" style={{ fontWeight: 700, fontSize: "var(--text-sm)", marginTop: "var(--space-sm)", display: "inline-block" }}>
                  View Options →
                </Link>
              </div>
            </div>
            <div className={styles.eventCard}>
              <Image
                src="/images/food/moreno-bakery-cheesecakes.jpg"
                alt="Moreno Bakery celebration cheesecakes"
                width={480}
                height={360}
                className={styles.eventCardImage}
                loading="lazy"
              />
              <div className={styles.eventCardBody}>
                <h3>Custom Cakes</h3>
                <p>
                  Mix and match from 10+ flavors, 18 fillings, and 13 icings.
                  From 8&quot; rounds to full sheet cakes.
                </p>
                <Link href="/menu/catering#catering-cakes" style={{ fontWeight: 700, fontSize: "var(--text-sm)", marginTop: "var(--space-sm)", display: "inline-block" }}>
                  View Options →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="section-alt" aria-label="How catering works">
        <div className="container">
          <h2 className="text-center">How Catering Works at Moreno Bakery</h2>
          <p className="text-center text-muted" style={{ maxWidth: 560, margin: "0 auto" }}>
            Simple from start to finish — four steps to great food for your
            event.
          </p>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>1</div>
              <h3>Browse the Menu</h3>
              <p>
                Review the{" "}
                <Link href="/menu/catering">Catering Menu</Link> to explore
                category options and pricing.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>2</div>
              <h3>Get in Touch</h3>
              <p>
                Submit a catering inquiry or call the bakery to discuss your
                event details.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>3</div>
              <h3>Confirm Your Order</h3>
              <p>
                Finalize the guest count, timing, and menu direction with our
                team.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.processNumber}>4</div>
              <h3>Pickup or Delivery</h3>
              <p>
                Pick up your order at the bakery or arrange delivery details
                based on your event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose ────────────────────────────────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          <h2 className="text-center">
            Why Choose Moreno Bakery for Catering in Brandon
          </h2>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Local Brandon Bakery & Kitchen</h4>
                <p>A neighborhood bakery with the kitchen capacity to handle events of all sizes.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <div>
                <h4>Savory Food & Desserts in One Place</h4>
                <p>Entrees, sandwiches, pastry trays, cookie platters, and custom cakes — one order, one vendor.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </div>
              <div>
                <h4>Business & Family Events</h4>
                <p>Flexible enough for routine office lunches and meaningful enough for celebrations.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div>
                <h4>Handmade Bakery Quality</h4>
                <p>Real bakery quality with real kitchen capability — not a catering company, but a bakery that caters.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>
              </div>
              <div>
                <h4>Easy to Inquire, Call, or Browse</h4>
                <p>Call, submit an inquiry, or browse the full catering menu online at your own pace.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div>
                <h4>A Corner Bakery at Heart</h4>
                <p>A little corner bakery with the warmth you trust and a kitchen that can handle the job.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Serving Brandon ───────────────────────────────── */}
      <section className="section-warm">
        <div className="container text-center">
          <h2>Serving Brandon and Nearby Communities</h2>
          <p style={{ maxWidth: 640, margin: "0 auto" }}>
            Moreno Bakery proudly serves Brandon, Florida and the surrounding
            area with catering that works for offices, schools, churches,
            celebrations, and community gatherings. From our kitchen on
            Robertson Street to your event — we bring the food that brings
            people together.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className={styles.contentSection} aria-label="Frequently asked questions">
        <div className={styles.contentInner}>
          <h2 className="text-center">Catering FAQs</h2>
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

      {/* ── Photo Gallery Strip ─────────────────────────────── */}
      <section aria-label="Catering food gallery">
        <div className={styles.galleryStrip}>
          {[
            { src: "/images/food/moreno-bakery-cuban-sandwich.jpg", alt: "Cuban sandwich" },
            { src: "/images/food/moreno-bakery-cinnamon-roll.jpg", alt: "Cinnamon roll" },
            { src: "/images/food/moreno-bakery-chicken-empanadas.jpg", alt: "Chicken empanadas" },
            { src: "/images/food/moreno-bakery-french-vanilla-cupcake.jpg", alt: "French vanilla cupcake" },
            { src: "/images/food/moreno-bakery-roast-pork-combo.jpg", alt: "Roast pork combo" },
            { src: "/images/food/moreno-bakery-linzer-tarts.jpg", alt: "Linzer tarts" },
            { src: "/images/food/moreno-bakery-chicken-marsala-combo.jpg", alt: "Chicken marsala combo" },
            { src: "/images/food/moreno-bakery-fudgy-brownies-with-icing.jpg", alt: "Fudgy brownies with icing" },
            { src: "/images/food/moreno-bakery-ham-croquetas.jpg", alt: "Ham croquetas" },
            { src: "/images/food/moreno-bakery-carrot-cake-cupcake.jpg", alt: "Carrot cake cupcake" },
            { src: "/images/food/moreno-bakery-greek-salad.jpg", alt: "Greek salad" },
            { src: "/images/food/moreno-bakery-guava-and-cheese-stuffed-bread.jpg", alt: "Guava and cheese stuffed bread" },
          ].map((img) => (
            <div key={img.src} className={styles.galleryItem}>
              <Image
                src={img.src}
                alt={img.alt}
                width={280}
                height={280}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────── */}
      <section className={styles.ctaBand} aria-label="Get started with catering">
        <div className="container">
          <h2>Let Moreno Bakery Cater Your Next Event</h2>
          <p>
            From a simple office lunch to a full family celebration — we make
            ordering easy.
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

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodService",
            name: "Moreno Bakery Catering",
            description:
              "Catering services from Moreno Bakery in Brandon, FL — entrees, sandwich trays, finger food, pastry trays, cookie trays, and custom cakes for office events, parties, and celebrations.",
            provider: {
              "@type": "Bakery",
              name: "Moreno Bakery",
              address: {
                "@type": "PostalAddress",
                streetAddress: "715 W Robertson St",
                addressLocality: "Brandon",
                addressRegion: "FL",
                postalCode: "33511",
              },
              telephone: "+1-813-689-0320",
            },
            areaServed: {
              "@type": "City",
              name: "Brandon, FL",
            },
            serviceType: "Catering",
          }),
        }}
      />
    </>
  );
}
