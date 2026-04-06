import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "./HeroSlideshow";
import styles from "./page.module.css";

export const metadata = {
  title: "Brandon Bakery, Catering & Wedding Cakes",
  description:
    "Moreno Bakery in Brandon offers pastries, Cuban favorites, catering, custom cakes, and wedding desserts for everyday orders and events.",
};

export default function Home() {
  return (
    <>
      {/* ── Section 1: Hero ──────────────────────────────── */}
      <HeroSlideshow />

      {/* ── Section 2: Quick Paths ───────────────────────── */}
      <section className={styles.quickPaths} aria-label="Quick actions">
        <div className="container">
          <div className={styles.quickGrid}>
            <a
              href="https://www.doordash.com/store/moreno-bakery-brandon-138952/81523961/"
              className={styles.quickItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.quickIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <span>Order Online</span>
            </a>
            <a href="tel:8136890320" className={styles.quickItem}>
              <div className={styles.quickIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span>Call Now</span>
            </a>
            <a
              href="https://maps.google.com/?q=737+W+Brandon+Blvd+Brandon+FL+33511"
              className={styles.quickItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.quickIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span>Get Directions</span>
            </a>
            <a
              href="https://www.doordash.com/store/moreno-bakery-brandon-138952/81523961/"
              className={styles.quickItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.quickIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
              <span>Pickup & Delivery</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Section 3: Featured Categories ────────────────── */}
      <section className="section" aria-label="What brings you in today">
        <div className="container">
          <h2 className="text-center">What Brings You In Today?</h2>
          <p className="text-center text-muted" style={{ maxWidth: "600px", margin: "0 auto var(--space-2xl)" }}>
            Browse our bakery, explore the kitchen, plan catering, or start your wedding cake journey.
          </p>
          <div className="grid-4">
            <CategoryCard
              image="/images/food/moreno-bakery-cinnamon-roll.jpg"
              title="Bakery"
              description="Pastries, cakes, breads, cookies, pies, and bakery favorites baked fresh daily."
              href="/menu/bakery"
              cta="View Bakery Menu"
            />
            <CategoryCard
              image="/images/food/moreno-bakery-cuban-sandwich.jpg"
              title="Kitchen"
              description="Breakfast, sandwiches, salads, soups, sides, and savory Cuban favorites."
              href="/menu/food"
              cta="View Food Menu"
            />
            <CategoryCard
              image="/images/food/moreno-bakery-chicken-marsala-combo.jpg"
              title="Catering"
              description="Feed a crowd with trays, entrees, and desserts that keep the homemade feel."
              href="/catering"
              cta="Request Catering"
            />
            <CategoryCard
              image="/images/food/moreno-bakery-cheesecakes.jpg"
              title="Wedding Cakes"
              description="Custom wedding cakes, dessert tables, and celebration orders for your big day."
              href="/events/wedding-cakes"
              cta="Explore Wedding Cakes"
            />
          </div>
        </div>
      </section>

      {/* ── Section 4: Local Positioning ──────────────────── */}
      <section className="section-warm" aria-label="About Moreno Bakery">
        <div className="container">
          <div className={styles.splitSection}>
            <div className={styles.splitText}>
              <p className="accent-heading" style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-sm)" }}>
                Est. in Brandon, FL
              </p>
              <h2>A Brandon Bakery with More Than One Specialty</h2>
              <p>
                Moreno Bakery is the kind of place people come back to again and
                again. A neighborhood bakery and kitchen where pastries, breads,
                cakes, sandwiches, hot food, and desserts all live under one roof.
              </p>
              <p>
                Some customers need a quick breakfast or lunch. Others need trays
                for an office meeting, desserts for a family gathering, or a wedding
                cake that feels worthy of the occasion. Moreno Bakery is built to
                serve both.
              </p>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: "var(--space-md)" }}>
                Our Story
              </Link>
            </div>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-cuban-sandwich-brandon-fl.jpg"
                alt="Fresh Cuban sandwich at Moreno Bakery in Brandon FL"
                width={560}
                height={420}
                className={styles.roundedImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Signature Categories ──────────────── */}
      <section className="section" aria-label="Handmade favorites">
        <div className="container">
          <h2 className="text-center">Handmade Favorites for Daily Orders and Big Events</h2>
          <div className={styles.sigGrid}>
            <div className={styles.sigCard}>
              <Image
                src="/images/food/moreno-bakery-eclairs.jpg"
                alt="Fresh eclairs from Moreno Bakery"
                width={400}
                height={300}
                className={styles.sigImage}
              />
              <div className={styles.sigBody}>
                <h3>Bakery</h3>
                <p>
                  From cookies, pastries, cupcakes, pies, and breads to custom
                  cakes and seasonal favorites — an easy place to find dessert,
                  gifts, and something worth bringing home.
                </p>
                <Link href="/menu/bakery" className="btn btn-primary btn-sm">
                  View Bakery Menu
                </Link>
              </div>
            </div>
            <div className={styles.sigCard}>
              <Image
                src="/images/food/moreno-bakery-beef-stew-combo.jpg"
                alt="Beef stew combo at Moreno Bakery"
                width={400}
                height={300}
                className={styles.sigImage}
              />
              <div className={styles.sigBody}>
                <h3>Kitchen</h3>
                <p>
                  More than a dessert stop. Breakfast, lunch, sandwiches, salads,
                  soups, sides, and savory favorites that make the bakery part of
                  everyday life.
                </p>
                <Link href="/menu/food" className="btn btn-primary btn-sm">
                  View Food Menu
                </Link>
              </div>
            </div>
            <div className={styles.sigCard}>
              <Image
                src="/images/food/moreno-bakery-chicken-empanadas.jpg"
                alt="Chicken empanadas for catering"
                width={400}
                height={300}
                className={styles.sigImage}
              />
              <div className={styles.sigBody}>
                <h3>Catering</h3>
                <p>
                  For offices, family gatherings, school celebrations, and larger
                  events — catering that makes it easier to feed a crowd without
                  losing the homemade feel.
                </p>
                <Link href="/catering" className="btn btn-primary btn-sm">
                  Request Catering
                </Link>
              </div>
            </div>
            <div className={styles.sigCard}>
              <Image
                src="/images/food/moreno-bakery-french-vanilla-cupcake.jpg"
                alt="French vanilla cupcake for weddings"
                width={400}
                height={300}
                className={styles.sigImage}
              />
              <div className={styles.sigBody}>
                <h3>Wedding Cakes & Celebrations</h3>
                <p>
                  When the occasion matters — wedding cakes, dessert tables, custom
                  cakes, and polished presentation for events that deserve more.
                </p>
                <Link href="/events/wedding-cakes" className="btn btn-primary btn-sm">
                  Explore Wedding Cakes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Event Revenue Driver ──────────────── */}
      <section className={styles.eventSection} aria-label="Events and catering">
        <div className={styles.eventOverlay} />
        <div className={styles.eventContent}>
          <h2 className="text-white">
            Planning a Wedding, Corporate Event, or Private Celebration?
          </h2>
          <p className="text-white" style={{ maxWidth: "650px", margin: "0 auto var(--space-xl)", opacity: 0.9 }}>
            Moreno Bakery is a smart choice for wedding desserts, office catering,
            corporate gifting, birthdays, graduations, showers, and private events.
            Let us make your next event unforgettable.
          </p>
          <div className={styles.eventCtas}>
            <Link href="/catering" className="btn btn-white btn-lg">
              Request Catering
            </Link>
            <Link href="/events/wedding-cakes" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Wedding Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 7: Why Moreno ────────────────────────── */}
      <section className="section" aria-label="Why choose Moreno Bakery">
        <div className="container">
          <h2 className="text-center">
            Why Brandon Families, Offices, and Event Planners Choose Moreno Bakery
          </h2>
          <div className={styles.whyGrid}>
            <WhyItem
              icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>}
              title="Bakery & Kitchen in One"
              text="Handmade pastries, cakes, breads, desserts, and savory favorites all under one roof."
            />
            <WhyItem
              icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
              title="Everyday Ordering"
              text="Quick breakfast, lunch, pickup, and takeout — easy to call, find, and order from."
            />
            <WhyItem
              icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
              title="Catering & Large Orders"
              text="From office trays to events for hundreds — we scale without losing the homemade feel."
            />
            <WhyItem
              icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>}
              title="Weddings & Milestones"
              text="Custom wedding cakes, dessert bars, and celebration orders for life's biggest moments."
            />
            <WhyItem
              icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>}
              title="Local Brandon Location"
              text="737 W. Brandon Blvd. — easy to visit, call, and order from in the heart of Brandon."
            />
          </div>
        </div>
      </section>

      {/* ── Section 8: Story Preview ─────────────────────── */}
      <section className="section-alt" aria-label="Our story">
        <div className="container">
          <div className={styles.splitSection}>
            <div className={styles.splitImage}>
              <Image
                src="/images/food/moreno-bakery-bread-pudding-cuban-style.jpg"
                alt="Cuban style bread pudding at Moreno Bakery"
                width={560}
                height={420}
                className={styles.roundedImage}
              />
            </div>
            <div className={styles.splitText}>
              <p className="accent-heading" style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--space-sm)" }}>
                Our Story
              </p>
              <h2>A Corner Bakery at Heart. A Kitchen That Can Handle the Big Jobs.</h2>
              <p>
                Moreno Bakery has the warmth people want from a local bakery and the
                range customers need when life gets busy or events get bigger.
              </p>
              <p>
                One customer may stop in for a pastry and coffee. Another may need
                lunch for an office. Another may be planning desserts for a wedding
                or a milestone celebration. The brand story supports all of that
                without losing the personal feel that makes the bakery memorable.
              </p>
              <Link href="/about" className="btn btn-primary" style={{ marginTop: "var(--space-md)" }}>
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: Gallery Preview ───────────────────── */}
      <section className="section" aria-label="Gallery preview">
        <div className="container">
          <h2 className="text-center">See the Cakes, Pastries, Food & Event Work</h2>
          <p className="text-center text-muted" style={{ maxWidth: "550px", margin: "0 auto var(--space-2xl)" }}>
            A quick look at variety, quality, and capability — from daily
            favorites to wedding cakes and catering spreads.
          </p>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryLarge}>
              <Image
                src="/images/food/moreno-bakery-cream-horns.jpg"
                alt="Cream horns at Moreno Bakery"
                width={600}
                height={450}
                className={styles.galleryImage}
              />
            </div>
            <Image
              src="/images/food/moreno-bakery-german-chocolate-cupcake.jpg"
              alt="German chocolate cupcake"
              width={290}
              height={220}
              className={styles.galleryImage}
            />
            <Image
              src="/images/food/moreno-bakery-elephant-ears-palmiers.jpg"
              alt="Palmiers pastry"
              width={290}
              height={220}
              className={styles.galleryImage}
            />
            <Image
              src="/images/food/moreno-bakery-fried-fish-combo.jpg"
              alt="Fried fish combo plate"
              width={290}
              height={220}
              className={styles.galleryImage}
            />
            <Image
              src="/images/food/moreno-bakery-chocolate-mousse-cupcake.jpg"
              alt="Chocolate mousse cupcake"
              width={290}
              height={220}
              className={styles.galleryImage}
            />
          </div>
          <div className="text-center" style={{ marginTop: "var(--space-xl)" }}>
            <Link href="/gallery" className="btn btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 10: Visit & Contact ──────────────────── */}
      <section className="section-warm" aria-label="Visit Moreno Bakery">
        <div className="container">
          <div className={styles.visitSection}>
            <div className={styles.visitInfo}>
              <h2>Visit Moreno Bakery in Brandon</h2>
              <div className={styles.visitDetails}>
                <div>
                  <h4>Location</h4>
                  <p>
                    <a href="https://maps.google.com/?q=737+W+Brandon+Blvd+Brandon+FL+33511" target="_blank" rel="noopener noreferrer">
                      737 W. Brandon Blvd.<br />Brandon, FL 33511
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:8136890320">813.689.0320</a></p>
                </div>
                <div>
                  <h4>Hours</h4>
                  <p>Mon - Sat: 7:00am - 7:00pm</p>
                  <p>Sun: 9:00am - 4:00pm</p>
                </div>
              </div>
              <div className={styles.visitCtas}>
                <a
                  href="https://maps.google.com/?q=737+W+Brandon+Blvd+Brandon+FL+33511"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
                <a href="tel:8136890320" className="btn btn-secondary">
                  Call Now
                </a>
                <Link href="/contact" className="btn btn-warm">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className={styles.visitMap}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.1!2d-82.2869!3d27.9361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cec8b6f5b1e7%3A0x7b8b8b8b8b8b8b8b!2s737%20W%20Brandon%20Blvd%2C%20Brandon%2C%20FL%2033511!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Moreno Bakery location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA Band ───────────────────────────────── */}
      <section className={styles.finalCta} aria-label="Get started">
        <div className="container text-center">
          <h2 className="text-white">Start with the Right Next Step</h2>
          <p className="text-white" style={{ maxWidth: "550px", margin: "0 auto var(--space-xl)", opacity: 0.9 }}>
            Ready to order, planning ahead, or just browsing? We are here to help.
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href="/menu" className="btn btn-white btn-lg">
              View Menu
            </Link>
            <a
              href="https://www.doordash.com/store/moreno-bakery-brandon-138952/81523961/"
              className="btn btn-white btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Online
            </a>
            <Link href="/catering" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Request Catering
            </Link>
            <Link href="/events/wedding-cakes" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Wedding Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── JSON-LD Schema ───────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Bakery",
            name: "Moreno Bakery",
            image: "https://www.morenobakery.com/images/logo.png",
            url: "https://www.morenobakery.com",
            telephone: "+1-813-689-0320",
            email: "susan@morenobakery.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "737 W. Brandon Blvd.",
              addressLocality: "Brandon",
              addressRegion: "FL",
              postalCode: "33511",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 27.9361,
              longitude: -82.2869,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "07:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "09:00",
                closes: "16:00",
              },
            ],
            servesCuisine: ["Cuban", "Bakery", "American"],
            priceRange: "$$",
            sameAs: [
              "https://www.facebook.com/morenosbakery",
              "https://www.instagram.com/morenobakery",
              "https://www.tiktok.com/@moreno_bakery",
            ],
          }),
        }}
      />
    </>
  );
}

function CategoryCard({ image, title, description, href, cta }) {
  return (
    <Link href={href} className="card" style={{ textDecoration: "none" }}>
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="card-img"
      />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <span className="btn btn-primary btn-sm">{cta}</span>
      </div>
    </Link>
  );
}

function WhyItem({ icon, title, text }) {
  return (
    <div className={styles.whyItem}>
      <div className={styles.whyIcon}>{icon}</div>
      <h3 style={{ fontSize: "var(--text-lg)" }}>{title}</h3>
      <p className="text-muted" style={{ fontSize: "var(--text-sm)" }}>
        {text}
      </p>
    </div>
  );
}
