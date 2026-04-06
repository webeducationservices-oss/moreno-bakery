"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

const ROLE_AREAS = [
  {
    title: "Front Counter & Customer Service",
    desc: "Helping customers, packaging orders, and creating a welcoming experience.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  },
  {
    title: "Bakery & Kitchen Production",
    desc: "Food prep, bakery support, cake assistance, and behind-the-scenes organization.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
  },
  {
    title: "Cleaning, Stocking & Support",
    desc: "Keeping the bakery running smoothly through stocking, dishes, and facility care.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
  },
];

const TRAITS = [
  "Dependable and punctual",
  "Friendly and customer-focused",
  "Detail-oriented",
  "Comfortable in a fast-paced environment",
  "Team-oriented and coachable",
  "Takes pride in quality work",
];

export default function JoinTheTeamPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const data = {
      site_slug: "moreno-bakery",
      form_type: "job-application",
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      interest: form.interest.value,
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
      /* silent */
    }
    setSending(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Join the Team at Moreno Bakery in Brandon, FL</h1>
          <p className={styles.heroSub}>
            Moreno Bakery is built on handmade baking, real teamwork, and
            genuine service. If you enjoy a fast-moving environment, take pride
            in quality, and want to be part of a bakery customers know and
            trust — we want to hear from you.
          </p>
          <div className={styles.heroCtas}>
            <a href="#apply" className="btn btn-white btn-lg">
              Fill Out an Application
            </a>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ borderColor: "#fff", color: "#fff" }}>
              Contact Moreno Bakery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.introText}>
            <h2>A Bakery Built on Craft, Service, and Teamwork</h2>
            <p>
              Some jobs are only about clocking in and out. Moreno Bakery is
              different. This is a local bakery and kitchen where the work
              matters because customers notice the details, remember the
              service, and come back for the products that become part of their
              routines and celebrations.
            </p>
            <p>
              The team supports everyday bakery traffic, food service, special
              orders, cakes, and event work — so we value reliability, speed,
              care, and pride in doing things well.
            </p>
          </div>
        </div>
      </section>

      {/* ── Role Areas ────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "var(--space-sm)" }}>
            Opportunities in Bakery, Kitchen, and Customer Service
          </h2>
          <p className="text-center text-muted" style={{ maxWidth: 600, margin: "0 auto var(--space-xl)" }}>
            Bakery businesses need different kinds of talent. Here are some of
            the areas where we may need help.
          </p>
          <div className={styles.roleGrid}>
            {ROLE_AREAS.map((role) => (
              <div key={role.title} className={styles.roleCard}>
                <div className={styles.roleIcon}>{role.icon}</div>
                <h3>{role.title}</h3>
                <p>{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Look For ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className={styles.splitContent}>
            <div>
              <h2>The Kind of Person We&apos;re Looking For</h2>
              <p>
                Experience can help, but attitude, consistency, and willingness
                to work matter just as much. Moreno Bakery values people who
                take pride in serving customers well, handling products
                carefully, and helping the whole team succeed.
              </p>
              <ul className={styles.traitList}>
                {TRAITS.map((t) => (
                  <li key={t}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.splitImage}>
              <img
                src="/images/food/moreno-bakery-eclairs.jpg"
                alt="Moreno Bakery eclairs"
                width="560"
                height="420"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Moreno ────────────────────────────────────── */}
      <section className="section-warm">
        <div className="container">
          <div className={styles.centeredBlock}>
            <h2>Why Local Applicants Choose Moreno Bakery</h2>
            <p>
              You are not applying to an unknown business. You are applying to a
              family-run bakery that customers trust for Cuban bread, pastries,
              cakes, food, catering, and celebration orders. Working at Moreno
              Bakery means being part of a place that people know, return to,
              and recommend. For the right applicant, that can feel more
              meaningful than working in a generic food-service setting.
            </p>
          </div>
        </div>
      </section>

      {/* ── Application Form ──────────────────────────────── */}
      <section className="section" id="apply">
        <div className="container">
          <div className={styles.formWrap}>
            <h2>Apply Today</h2>
            <p className="text-muted" style={{ marginBottom: "var(--space-xl)" }}>
              Share a little about yourself and what type of work you are
              interested in. We will be in touch.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                <div className={styles.formRow}>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
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
                  <label htmlFor="interest" className="form-label">Area of Interest</label>
                  <select id="interest" name="interest" className="form-input">
                    <option value="General">Open to any role</option>
                    <option value="Front Counter">Front Counter & Customer Service</option>
                    <option value="Bakery & Kitchen">Bakery & Kitchen Production</option>
                    <option value="Support">Cleaning, Stocking & Support</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Tell us about yourself and your experience</label>
                  <textarea id="message" name="message" className="form-input form-textarea" rows={5} required />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={sending}>
                  {sending ? "Sending..." : "Submit Application"}
                </button>
              </form>
            ) : (
              <div className={styles.successMessage}>
                <h3>Thank You!</h3>
                <p>
                  Your application has been submitted. Moreno Bakery will review
                  it and be in touch. For faster service, call{" "}
                  <a href="tel:+18136551861">(813) 655-1861</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "var(--space-xl)" }}>
            Frequently Asked Questions
          </h2>
          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary>What types of jobs may be available?</summary>
              <p>
                Moreno Bakery may have opportunities in customer service, bakery
                support, food prep, kitchen work, packaging, cleaning, and other
                bakery-related roles depending on current needs.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Do I need bakery experience to apply?</summary>
              <p>
                Experience can help, but we also welcome applicants who are
                reliable, eager to learn, and ready to work in a fast-paced team
                environment.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Is Moreno Bakery a good fit for someone who likes hands-on work?</summary>
              <p>
                Yes. We attract people who enjoy staying busy, helping customers,
                and taking pride in quality work.
              </p>
            </details>
            <details className={styles.faqItem}>
              <summary>Can I apply even if I am not sure which role fits best?</summary>
              <p>
                Absolutely. Share your experience and interests, and we can help
                determine where you may be the best fit.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ── JSON-LD ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: "Bakery Team Member",
            description:
              "Join the Moreno Bakery team in Brandon, FL. Opportunities in customer service, bakery production, kitchen prep, and support roles.",
            hiringOrganization: {
              "@type": "Bakery",
              name: "Moreno Bakery",
              sameAs: "https://morenobakery.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "737 W. Brandon Blvd.",
                addressLocality: "Brandon",
                addressRegion: "FL",
                postalCode: "33511",
              },
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brandon",
                addressRegion: "FL",
              },
            },
            employmentType: "FULL_TIME",
          }),
        }}
      />
    </>
  );
}
