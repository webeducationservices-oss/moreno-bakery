"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const INQUIRY_TYPES = ["General", "Catering", "Wedding", "Custom Cake"];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("General");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const data = {
      site_slug: "moreno-bakery",
      form_type: inquiryType.toLowerCase().replace(/\s+/g, "-"),
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      inquiry_type: inquiryType,
      message: form.message.value,
      _honey: form._honey.value,
    };
    try {
      await fetch("https://myaieditor.com/api/form-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      /* silent — form still shows success */
    }
    setSending(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <Image src="/images/heroes/hero-contact.jpg" alt="Moreno Bakery storefront in Brandon, FL" width={1400} height={800} className={styles.heroImage} priority />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>Contact Moreno Bakery in Brandon, FL</h1>
          <p className={styles.heroSub}>
            Whether you want to stop in for bakery favorites, ask about a cake,
            start a catering order, or plan a wedding consultation — we make the
            next step simple.
          </p>
          <div className={styles.heroCtas}>
            <a href="tel:+18136551861" className="btn btn-white btn-lg">
              Call (813) 655-1861
            </a>
            <a
              href="https://maps.google.com/?q=Moreno+Bakery+737+W+Brandon+Blvd+Brandon+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact Grid ──────────────────────────────────── */}
      <section>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* ── Info Card ─── */}
            <div className={styles.infoCard}>
              <h2>Visit Moreno Bakery</h2>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>737 W. Brandon Blvd.<br />Brandon, FL 33511</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+18136551861">(813) 655-1861</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:susan@morenobakery.com">susan@morenobakery.com</a>
                </div>
              </div>

              <h3 style={{ marginTop: "var(--space-xl)", marginBottom: "var(--space-sm)" }}>Hours</h3>
              <table className={styles.hoursTable}>
                <tbody>
                  <tr><td>Monday – Saturday</td><td>7:00am – 7:00pm</td></tr>
                  <tr><td>Sunday</td><td>9:00am – 4:00pm</td></tr>
                </tbody>
              </table>

              <h3 style={{ marginTop: "var(--space-xl)", marginBottom: "var(--space-sm)" }}>Follow Us</h3>
              <div className={styles.socialLinks}>
                <a href="https://facebook.com/morenosbakery" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
                </a>
                <a href="https://instagram.com/morenobakery" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://tiktok.com/@moreno_bakery" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11V9a6.33 6.33 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 0010.86 4.46V13a8.18 8.18 0 005.58 2.18V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z"/></svg>
                </a>
              </div>

              <div className={styles.holidayNote} style={{ textAlign: "left", paddingTop: "var(--space-lg)" }}>
                <p><strong>Holiday closures:</strong> New Year&apos;s Day, Easter Sunday, Thanksgiving Day, Christmas Day</p>
              </div>
            </div>

            {/* ── Form Card ─── */}
            <div className={styles.formCard}>
              <h2>Send an Inquiry</h2>

              {!submitted ? (
                <>
                  <div className={styles.inquiryTabs}>
                    {INQUIRY_TYPES.map((type) => (
                      <button
                        key={type}
                        type="button"
                        className={`${styles.inquiryTab} ${inquiryType === type ? styles.inquiryTabActive : ""}`}
                        onClick={() => setInquiryType(type)}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit}>
                    <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                    <div className={styles.formRow}>
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" name="name" className="form-input" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" id="phone" name="phone" className="form-input" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        {inquiryType === "General" && "How can we help?"}
                        {inquiryType === "Catering" && "Tell us about your event (date, guest count, menu ideas)"}
                        {inquiryType === "Wedding" && "Tell us about your wedding (date, guest count, cake vision)"}
                        {inquiryType === "Custom Cake" && "Tell us about your cake (occasion, size, flavors, design ideas)"}
                      </label>
                      <textarea id="message" name="message" className="form-input form-textarea" rows={5} required />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={sending}>
                      {sending ? "Sending..." : `Send ${inquiryType} Inquiry`}
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles.successMessage}>
                  <h3>Thank You!</h3>
                  <p>
                    Your {inquiryType.toLowerCase()} inquiry has been sent. Moreno
                    Bakery will get back to you soon. For faster service, call{" "}
                    <a href="tel:+18136551861">(813) 655-1861</a>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Map ───────────────────────────────────────────── */}
      <section className={styles.mapSection}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "var(--space-xl)" }}>Find Moreno Bakery</h2>
          <div className={styles.mapWrap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.6!2d-82.2892!3d27.9376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c9f5b4c7a3b1%3A0x1234567890abcdef!2sMoreno%20Bakery!5e0!3m2!1sen!2sus!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Moreno Bakery location map"
            />
          </div>
        </div>
      </section>

      {/* ── Quick Links ───────────────────────────────────── */}
      <section style={{ padding: "var(--space-3xl) 0", textAlign: "center" }}>
        <div className="container">
          <h2>Everyday Orders, Pickup, and Menu Questions</h2>
          <p className="text-muted" style={{ maxWidth: 560, margin: "0 auto var(--space-xl)" }}>
            Not every visit is a big event. Many people simply want to know what
            is on the menu or how to place an everyday order.
          </p>
          <div style={{ display: "flex", gap: "var(--space-md)", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/menu" className="btn btn-primary btn-lg">View Menu</Link>
            <a href="tel:+18136551861" className="btn btn-secondary btn-lg">Call Now</a>
            <a
              href="https://maps.google.com/?q=Moreno+Bakery+737+W+Brandon+Blvd+Brandon+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
