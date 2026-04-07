"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const INQUIRY_TYPES = ["General", "Catering", "Wedding Cake", "Cake Order"];

const CAKE_SIZES = [
  { label: '8" Round', serves: "12–16" },
  { label: "1/4 Sheet", serves: "30–40" },
  { label: "1/2 Sheet", serves: "70–90" },
  { label: "Full Sheet", serves: "150–200" },
  { label: "Other", serves: "Custom" },
];

const CAKE_FLAVORS = ["Chocolate", "Vanilla", "Marble", "Coconut", "Carrot", "Red Velvet", "Lemon", "Pumpkin (Seasonal)"];

const FILLING_FLAVORS = [
  "Chocolate Mousse", "Dulce de Leche Mousse", "Strawberry Jam",
  "Fresh Strawberry (+$)", "Cream Cheese", "Raspberry Jam", "Cannoli",
  "Pina Colada Custard", "Vanilla Custard", "Vanilla Buttercream",
  "Chocolate Buttercream", "Whipped Cream",
];

const ICING_FLAVORS = [
  "Vanilla Buttercream", "Chocolate Buttercream", "Whipped Cream",
  "Chocolate Whipped Cream", "Cream Cheese", "Fondant",
];

const PICKUP_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WEDDING_STEPS = [
  { id: 1, label: "About You", icon: "💍" },
  { id: 2, label: "Your Wedding", icon: "🎉" },
  { id: 3, label: "Your Dream Cake", icon: "🎂" },
];

const CAKE_STYLES = [
  "Traditional Tiered",
  "Modern / Minimalist",
  "Rustic / Naked Cake",
  "Floral Decorated",
  "Fondant Sculpted",
  "Cupcake Tower",
  "Dessert Table / Assorted",
  "Not sure yet — help me decide!",
];

function WeddingCakeForm({ onSubmit, sending }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    partner1: "",
    partner2: "",
    phone: "",
    email: "",
    weddingDate: "",
    coordinator: "",
    guestCount: "",
    cakeStyle: "",
    designIdea: "",
    budget: "",
    saveTopTier: "",
    venue: "",
    delivery: "",
    sameSpace: "",
    weddingTime: "",
    cakeCutTime: "",
    cocktailHour: "",
    _honey: "",
  });

  function update(field, value) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function nextStep() {
    setStep((s) => Math.min(s + 1, 3));
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const message = [
      `Partner 1: ${data.partner1}`,
      `Partner 2: ${data.partner2}`,
      `Wedding Date: ${data.weddingDate}`,
      `Guest Count: ${data.guestCount}`,
      `Coordinator: ${data.coordinator || "N/A"}`,
      `Venue: ${data.venue}`,
      `Same Space: ${data.sameSpace}`,
      `Wedding Time: ${data.weddingTime}`,
      `Cake Cut Time: ${data.cakeCutTime}`,
      `Cocktail Hour: ${data.cocktailHour}`,
      `Cake Style: ${data.cakeStyle}`,
      `Design Idea: ${data.designIdea || "None yet"}`,
      `Budget: ${data.budget || "Not specified"}`,
      `Save Top Tier: ${data.saveTopTier}`,
      `Delivery: ${data.delivery}`,
    ].join("\n");

    onSubmit({
      site_slug: "moreno-bakery",
      form_type: "wedding",
      name: `${data.partner1} & ${data.partner2}`,
      email: data.email,
      phone: data.phone,
      inquiry_type: "Wedding",
      message,
      _honey: data._honey,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" value={data._honey} onChange={(e) => update("_honey", e.target.value)} />

      {/* Step indicator */}
      <div className={styles.stepIndicator}>
        {WEDDING_STEPS.map((s) => (
          <button
            type="button"
            key={s.id}
            className={`${styles.stepDot} ${step === s.id ? styles.stepDotActive : ""} ${step > s.id ? styles.stepDotDone : ""}`}
            onClick={() => setStep(s.id)}
          >
            <span className={styles.stepIcon}>{step > s.id ? "✓" : s.icon}</span>
            <span className={styles.stepLabel}>{s.label}</span>
          </button>
        ))}
        <div className={styles.stepLine}>
          <div className={styles.stepLineFill} style={{ width: `${((step - 1) / 2) * 100}%` }} />
        </div>
      </div>

      {/* Step 1: About You */}
      {step === 1 && (
        <div className={styles.stepContent}>
          <h3 className={styles.stepTitle}>Let&apos;s start with the happy couple!</h3>
          <div className={styles.formRow}>
            <div className="form-group">
              <label htmlFor="w-partner1" className="form-label">Partner 1 Name</label>
              <input type="text" id="w-partner1" className="form-input" required value={data.partner1} onChange={(e) => update("partner1", e.target.value)} placeholder="First & last name" />
            </div>
            <div className="form-group">
              <label htmlFor="w-partner2" className="form-label">Partner 2 Name</label>
              <input type="text" id="w-partner2" className="form-input" required value={data.partner2} onChange={(e) => update("partner2", e.target.value)} placeholder="First & last name" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className="form-group">
              <label htmlFor="w-phone" className="form-label">Phone Number</label>
              <input type="tel" id="w-phone" className="form-input" required value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(813) 555-1234" />
            </div>
            <div className="form-group">
              <label htmlFor="w-email" className="form-label">Email</label>
              <input type="email" id="w-email" className="form-input" required value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
            </div>
          </div>
          <div className={styles.stepNav}>
            <div />
            <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!data.partner1 || !data.email}>
              Next: Your Wedding →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Your Wedding */}
      {step === 2 && (
        <div className={styles.stepContent}>
          <h3 className={styles.stepTitle}>Tell us about the big day!</h3>
          <div className={styles.formRow}>
            <div className="form-group">
              <label htmlFor="w-date" className="form-label">Wedding Date</label>
              <input type="date" id="w-date" className="form-input" required value={data.weddingDate} onChange={(e) => update("weddingDate", e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="w-guests" className="form-label">How many guests?</label>
              <select id="w-guests" className="form-input" required value={data.guestCount} onChange={(e) => update("guestCount", e.target.value)}>
                <option value="">Select a range</option>
                <option value="Under 50">Under 50</option>
                <option value="50–100">50 – 100</option>
                <option value="100–150">100 – 150</option>
                <option value="150–200">150 – 200</option>
                <option value="200–300">200 – 300</option>
                <option value="300+">300+</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="w-venue" className="form-label">Where is your reception?</label>
            <input type="text" id="w-venue" className="form-input" value={data.venue} onChange={(e) => update("venue", e.target.value)} placeholder="Venue name and city" />
          </div>
          <div className="form-group">
            <label htmlFor="w-coordinator" className="form-label">Wedding Coordinator (if any)</label>
            <input type="text" id="w-coordinator" className="form-input" value={data.coordinator} onChange={(e) => update("coordinator", e.target.value)} placeholder="Name (optional)" />
          </div>
          <div className={styles.formRow}>
            <div className="form-group">
              <label htmlFor="w-time" className="form-label">Wedding Time</label>
              <input type="time" id="w-time" className="form-input" value={data.weddingTime} onChange={(e) => update("weddingTime", e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="w-caketime" className="form-label">Cake Cutting Time</label>
              <input type="time" id="w-caketime" className="form-input" value={data.cakeCutTime} onChange={(e) => update("cakeCutTime", e.target.value)} />
            </div>
          </div>

          <div className={styles.yesNoRow}>
            <div className={styles.yesNoGroup}>
              <span className={styles.yesNoLabel}>Same venue for ceremony &amp; reception?</span>
              <div className={styles.yesNoButtons}>
                <button type="button" className={`${styles.yesNoBtn} ${data.sameSpace === "Yes" ? styles.yesNoBtnActive : ""}`} onClick={() => update("sameSpace", "Yes")}>Yes</button>
                <button type="button" className={`${styles.yesNoBtn} ${data.sameSpace === "No" ? styles.yesNoBtnActive : ""}`} onClick={() => update("sameSpace", "No")}>No</button>
              </div>
            </div>
            <div className={styles.yesNoGroup}>
              <span className={styles.yesNoLabel}>Is there a cocktail hour?</span>
              <div className={styles.yesNoButtons}>
                <button type="button" className={`${styles.yesNoBtn} ${data.cocktailHour === "Yes" ? styles.yesNoBtnActive : ""}`} onClick={() => update("cocktailHour", "Yes")}>Yes</button>
                <button type="button" className={`${styles.yesNoBtn} ${data.cocktailHour === "No" ? styles.yesNoBtnActive : ""}`} onClick={() => update("cocktailHour", "No")}>No</button>
              </div>
            </div>
          </div>

          <div className={styles.stepNav}>
            <button type="button" className="btn btn-secondary" onClick={prevStep}>← Back</button>
            <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!data.weddingDate || !data.guestCount}>
              Next: Your Dream Cake →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Your Dream Cake */}
      {step === 3 && (
        <div className={styles.stepContent}>
          <h3 className={styles.stepTitle}>Now for the fun part — your cake!</h3>

          <div className="form-group">
            <label className="form-label">What kind of cake are you interested in?</label>
            <div className={styles.cakeStyleGrid}>
              {CAKE_STYLES.map((style) => (
                <button
                  type="button"
                  key={style}
                  className={`${styles.cakeStyleBtn} ${data.cakeStyle === style ? styles.cakeStyleBtnActive : ""}`}
                  onClick={() => update("cakeStyle", style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="w-design" className="form-label">Do you have a design in mind? (Pinterest links, photos, ideas welcome!)</label>
            <textarea id="w-design" className="form-input form-textarea" rows={3} value={data.designIdea} onChange={(e) => update("designIdea", e.target.value)} placeholder="Describe your vision, share Pinterest links, or tell us your color scheme..." />
          </div>

          <div className={styles.formRow}>
            <div className="form-group">
              <label htmlFor="w-budget" className="form-label">Do you have a budget in mind?</label>
              <select id="w-budget" className="form-input" value={data.budget} onChange={(e) => update("budget", e.target.value)}>
                <option value="">Select a range</option>
                <option value="Under $300">Under $300</option>
                <option value="$300–$500">$300 – $500</option>
                <option value="$500–$800">$500 – $800</option>
                <option value="$800–$1,200">$800 – $1,200</option>
                <option value="$1,200+">$1,200+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
            <div className={styles.yesNoGroup} style={{ alignSelf: "end", paddingBottom: "var(--space-md)" }}>
              <span className={styles.yesNoLabel}>Save the top tier?</span>
              <div className={styles.yesNoButtons}>
                <button type="button" className={`${styles.yesNoBtn} ${data.saveTopTier === "Yes" ? styles.yesNoBtnActive : ""}`} onClick={() => update("saveTopTier", "Yes")}>Yes</button>
                <button type="button" className={`${styles.yesNoBtn} ${data.saveTopTier === "No" ? styles.yesNoBtnActive : ""}`} onClick={() => update("saveTopTier", "No")}>No</button>
              </div>
            </div>
          </div>

          <div className={styles.yesNoGroup}>
            <span className={styles.yesNoLabel}>Do you want delivery to the venue?</span>
            <div className={styles.yesNoButtons}>
              <button type="button" className={`${styles.yesNoBtn} ${data.delivery === "Yes" ? styles.yesNoBtnActive : ""}`} onClick={() => update("delivery", "Yes")}>Yes</button>
              <button type="button" className={`${styles.yesNoBtn} ${data.delivery === "No" ? styles.yesNoBtnActive : ""}`} onClick={() => update("delivery", "No")}>No</button>
            </div>
          </div>

          <div className={styles.stepNav}>
            <button type="button" className="btn btn-secondary" onClick={prevStep}>← Back</button>
            <button type="submit" className="btn btn-primary btn-lg" disabled={sending || !data.cakeStyle}>
              {sending ? "Sending..." : "Send My Cake Inquiry 🎂"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

const CAKE_ORDER_STEPS = [
  { id: 1, label: "Your Info", icon: "📋" },
  { id: 2, label: "Your Cake", icon: "🎂" },
  { id: 3, label: "Design", icon: "🎨" },
];

function CakeOrderForm({ onSubmit, sending }) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "", phone: "", email: "",
    pickupDate: "", pickupTime: "",
    pickupType: "",
    cakeSize: "", cakeFlavor: "",
    fillingFlavor: "", icingFlavor: "",
    colors: "", designInfo: "", cakeMessage: "",
    _honey: "",
  });

  function update(field, value) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function nextStep() { setStep((s) => Math.min(s + 1, 3)); }
  function prevStep() { setStep((s) => Math.max(s - 1, 1)); }

  function handleSubmit(e) {
    e.preventDefault();
    const message = [
      `Pickup Date: ${data.pickupDate}`,
      `Pickup Time: ${data.pickupTime}`,
      `Pickup Type: ${data.pickupType}`,
      `Cake Size: ${data.cakeSize}`,
      `Cake Flavor: ${data.cakeFlavor}`,
      `Filling: ${data.fillingFlavor}`,
      `Icing: ${data.icingFlavor}`,
      `Colors: ${data.colors || "N/A"}`,
      `Design Info: ${data.designInfo || "N/A"}`,
      `Message on Cake: ${data.cakeMessage || "None"}`,
    ].join("\n");

    onSubmit({
      site_slug: "moreno-bakery",
      form_type: "cake-order",
      name: data.name,
      email: data.email,
      phone: data.phone,
      inquiry_type: "Cake Order",
      message,
      _honey: data._honey,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" value={data._honey} onChange={(e) => update("_honey", e.target.value)} />

      <div className={styles.stepIndicator}>
        {CAKE_ORDER_STEPS.map((s) => (
          <button type="button" key={s.id} className={`${styles.stepDot} ${step === s.id ? styles.stepDotActive : ""} ${step > s.id ? styles.stepDotDone : ""}`} onClick={() => setStep(s.id)}>
            <span className={styles.stepIcon}>{step > s.id ? "✓" : s.icon}</span>
            <span className={styles.stepLabel}>{s.label}</span>
          </button>
        ))}
        <div className={styles.stepLine}>
          <div className={styles.stepLineFill} style={{ width: `${((step - 1) / 2) * 100}%` }} />
        </div>
      </div>

      {/* Step 1: Your Info */}
      {step === 1 && (
        <div className={styles.stepContent}>
          <h3 className={styles.stepTitle}>Who is this cake for?</h3>
          <div className="form-group">
            <label htmlFor="co-name" className="form-label">Your Name</label>
            <input type="text" id="co-name" className="form-input" required value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="First & last name" />
          </div>
          <div className={styles.formRow}>
            <div className="form-group">
              <label htmlFor="co-phone" className="form-label">Phone Number</label>
              <input type="tel" id="co-phone" className="form-input" required value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(813) 555-1234" />
            </div>
            <div className="form-group">
              <label htmlFor="co-email" className="form-label">Email</label>
              <input type="email" id="co-email" className="form-input" required value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className="form-group">
              <label htmlFor="co-date" className="form-label">Pickup / Delivery Date</label>
              <input type="date" id="co-date" className="form-input" required value={data.pickupDate} onChange={(e) => update("pickupDate", e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="co-time" className="form-label">Pickup Time</label>
              <input type="time" id="co-time" className="form-input" value={data.pickupTime} onChange={(e) => update("pickupTime", e.target.value)} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">How are you getting it?</label>
            <div className={styles.yesNoButtons} style={{ gap: "var(--space-xs)" }}>
              {["In-Bakery Pickup", "Curbside", "Delivery"].map((opt) => (
                <button type="button" key={opt} className={`${styles.yesNoBtn} ${data.pickupType === opt ? styles.yesNoBtnActive : ""}`} onClick={() => update("pickupType", opt)}>
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.stepNav}>
            <div />
            <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!data.name || !data.email || !data.pickupDate}>
              Next: Your Cake →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Your Cake */}
      {step === 2 && (
        <div className={styles.stepContent}>
          <h3 className={styles.stepTitle}>Build your perfect cake!</h3>

          <div className="form-group">
            <label className="form-label">Cake Size</label>
            <div className={styles.cakeStyleGrid}>
              {CAKE_SIZES.map((size) => (
                <button type="button" key={size.label} className={`${styles.cakeStyleBtn} ${data.cakeSize === size.label ? styles.cakeStyleBtnActive : ""}`} onClick={() => update("cakeSize", size.label)}>
                  <strong>{size.label}</strong>
                  <br />
                  <small>Serves {size.serves}</small>
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Cake Flavor</label>
            <div className={styles.cakeStyleGrid}>
              {CAKE_FLAVORS.map((f) => (
                <button type="button" key={f} className={`${styles.cakeStyleBtn} ${data.cakeFlavor === f ? styles.cakeStyleBtnActive : ""}`} onClick={() => update("cakeFlavor", f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Filling Flavor</label>
            <div className={styles.cakeStyleGrid}>
              {FILLING_FLAVORS.map((f) => (
                <button type="button" key={f} className={`${styles.cakeStyleBtn} ${data.fillingFlavor === f ? styles.cakeStyleBtnActive : ""}`} onClick={() => update("fillingFlavor", f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Icing Flavor</label>
            <div className={styles.cakeStyleGrid}>
              {ICING_FLAVORS.map((f) => (
                <button type="button" key={f} className={`${styles.cakeStyleBtn} ${data.icingFlavor === f ? styles.cakeStyleBtnActive : ""}`} onClick={() => update("icingFlavor", f)}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.stepNav}>
            <button type="button" className="btn btn-secondary" onClick={prevStep}>← Back</button>
            <button type="button" className="btn btn-primary" onClick={nextStep} disabled={!data.cakeSize || !data.cakeFlavor}>
              Next: Design →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Design */}
      {step === 3 && (
        <div className={styles.stepContent}>
          <h3 className={styles.stepTitle}>Make it yours!</h3>

          <div className="form-group">
            <label htmlFor="co-colors" className="form-label">What colors would you like?</label>
            <input type="text" id="co-colors" className="form-input" value={data.colors} onChange={(e) => update("colors", e.target.value)} placeholder="e.g. Pink and gold, Blue ombre, etc." />
          </div>

          <div className="form-group">
            <label htmlFor="co-design" className="form-label">Design details (theme, decorations, inspiration)</label>
            <textarea id="co-design" className="form-input form-textarea" rows={3} value={data.designInfo} onChange={(e) => update("designInfo", e.target.value)} placeholder="Describe your design, share Pinterest ideas, or tell us the occasion..." />
          </div>

          <div className="form-group">
            <label htmlFor="co-message" className="form-label">Message on the cake</label>
            <input type="text" id="co-message" className="form-input" value={data.cakeMessage} onChange={(e) => update("cakeMessage", e.target.value)} placeholder='e.g. "Happy Birthday Sarah!"' />
          </div>

          <div className={styles.orderSummary}>
            <h4>Your Cake Summary</h4>
            <div className={styles.summaryGrid}>
              {data.cakeSize && <div><strong>Size:</strong> {data.cakeSize}</div>}
              {data.cakeFlavor && <div><strong>Flavor:</strong> {data.cakeFlavor}</div>}
              {data.fillingFlavor && <div><strong>Filling:</strong> {data.fillingFlavor}</div>}
              {data.icingFlavor && <div><strong>Icing:</strong> {data.icingFlavor}</div>}
              {data.pickupDate && <div><strong>Date:</strong> {data.pickupDate}</div>}
              {data.pickupType && <div><strong>Pickup:</strong> {data.pickupType}</div>}
            </div>
          </div>

          <div className={styles.stepNav}>
            <button type="button" className="btn btn-secondary" onClick={prevStep}>← Back</button>
            <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
              {sending ? "Sending..." : "Submit Cake Order 🎂"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default function ContactPage() {
  const searchParams = useSearchParams();
  const formParam = searchParams.get("form");

  const [inquiryType, setInquiryType] = useState("General");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (formParam === "wedding-cake") setInquiryType("Wedding Cake");
    else if (formParam === "cake-order") setInquiryType("Cake Order");
    else if (formParam === "catering") setInquiryType("Catering");
  }, [formParam]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    const form = e.target;
    const formData = {
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
        body: JSON.stringify(formData),
      });
    } catch {
      /* silent */
    }
    setSending(false);
    setSubmitted(true);
  }

  async function handleWeddingSubmit(formData) {
    setSending(true);
    try {
      await fetch("https://myaieditor.com/api/form-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
              <h2>
                {inquiryType === "Wedding Cake" && "Wedding Cake Questionnaire"}
                {inquiryType === "Cake Order" && "Custom Cake Order"}
                {inquiryType !== "Wedding Cake" && inquiryType !== "Cake Order" && "Send an Inquiry"}
              </h2>

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
                        {type === "Wedding Cake" ? "💍 Wedding" : type === "Cake Order" ? "🎂 Cake Order" : type}
                      </button>
                    ))}
                  </div>

                  {inquiryType === "Wedding Cake" ? (
                    <WeddingCakeForm onSubmit={handleWeddingSubmit} sending={sending} />
                  ) : inquiryType === "Cake Order" ? (
                    <CakeOrderForm onSubmit={handleWeddingSubmit} sending={sending} />
                  ) : (
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
                        </label>
                        <textarea id="message" name="message" className="form-input form-textarea" rows={5} required />
                      </div>
                      <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={sending}>
                        {sending ? "Sending..." : `Send ${inquiryType} Inquiry`}
                      </button>
                    </form>
                  )}
                </>
              ) : (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>
                    {inquiryType === "Wedding Cake" ? "💍🎂" : inquiryType === "Cake Order" ? "🎂✨" : "✓"}
                  </div>
                  <h3>
                    {inquiryType === "Wedding Cake" ? "We Can't Wait to Create Your Dream Cake!" : inquiryType === "Cake Order" ? "Your Cake Order Has Been Submitted!" : "Thank You!"}
                  </h3>
                  <p>
                    {inquiryType === "Wedding Cake"
                      ? "Your wedding cake questionnaire has been sent to our cake team. We'll be in touch within 1–2 business days to schedule your tasting consultation."
                      : inquiryType === "Cake Order"
                      ? "Your custom cake order has been sent to our bakers. We'll confirm your order within 1 business day."
                      : `Your ${inquiryType.toLowerCase()} inquiry has been sent. Moreno Bakery will get back to you soon.`}
                    {" "}For faster service, call{" "}
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
