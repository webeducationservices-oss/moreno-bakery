"use client";

import { useState } from "react";
import { BAKERY_CATEGORIES } from "../data/menu";
import styles from "./page.module.css";

const PIE_FLAVORS = (BAKERY_CATEGORIES.find((c) => c.id === "pies")?.items || []).map((p) => p.name);
const PIE_SIZES = ['3"', '5"', '9"'];
const PIE_TOPPINGS = ["Smooth top w/ icing", "Smooth top no icing", "Dutch crumble topping", "Lattice top"];

// Builds the list of allowed pickup times (every 15 minutes) for the chosen day.
function pickupTimeOptions(isSunday) {
  const start = isSunday ? 9 * 60 : 7 * 60;
  const end = isSunday ? 15 * 60 + 55 : 18 * 60 + 55;
  const options = [];
  const slots = [];
  for (let m = start; m <= end; m += 15) slots.push(m);
  if (slots[slots.length - 1] !== end) slots.push(end);
  for (const m of slots) {
    const h24 = Math.floor(m / 60);
    const min = m % 60;
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    options.push({
      value: `${String(h24).padStart(2, "0")}:${String(min).padStart(2, "0")}`,
      label: `${h12}:${String(min).padStart(2, "0")} ${h24 < 12 ? "AM" : "PM"}`,
    });
  }
  return options;
}

function emptyPie() {
  return { flavor: "", size: '9"', topping: PIE_TOPPINGS[0], qty: "1" };
}

export default function OrderAPiePage() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupDate: "",
    pickupTime: "",
    notes: "",
    _honey: "",
  });
  const [pies, setPies] = useState([emptyPie()]);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sizeError, setSizeError] = useState("");

  function update(field, value) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function updatePie(index, field, value) {
    setPies((prev) => prev.map((p, i) => (i === index ? { ...p, [field]: value } : p)));
  }

  function addPie() {
    setPies((prev) => [...prev, emptyPie()]);
  }

  function removePie(index) {
    setPies((prev) => (prev.length > 1 ? prev.filter((_, i) => i !== index) : prev));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (data._honey) return;
    if (threeInchTotal > 0 && threeInchTotal < 12) {
      setSizeError('3" pies have a minimum order of 12 pies. Please increase your 3" quantity to at least 12, or choose a different size.');
      return;
    }
    setSizeError("");
    setSending(true);
    const pieLines = pies
      .filter((p) => p.flavor)
      .map((p) => `${p.qty} x ${p.size} ${p.flavor} (${p.topping})`);
    const message = [
      `Pickup Date: ${data.pickupDate}`,
      `Pickup Time: ${data.pickupTime || "Not specified"}`,
      `Pies:`,
      ...pieLines.map((l) => `  - ${l}`),
      `Notes: ${data.notes || "None"}`,
    ].join("\n");

    try {
      await fetch("https://myaieditor.com/api/form-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site_slug: "moreno-bakery",
          form_type: "pie-order",
          name: data.name,
          email: data.email,
          phone: data.phone,
          inquiry_type: "Pie Order",
          message,
          _honey: data._honey,
        }),
      });
    } catch {
      /* silent */
    }
    setSending(false);
    setSubmitted(true);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Pickup hours: Mon–Sat 7:00 AM – 6:45 PM, Sunday 9:00 AM – 3:45 PM
  const isSunday = data.pickupDate ? new Date(`${data.pickupDate}T00:00:00`).getDay() === 0 : false;
  const timeMin = isSunday ? "09:00" : "07:00";
  const timeMax = isSunday ? "15:55" : "18:55";
  const timeHoursLabel = isSunday ? "Sunday: 9:00 AM – 3:55 PM" : "Mon–Sat: 7:00 AM – 6:55 PM";
  const timeOutOfRange = !!data.pickupTime && (data.pickupTime < timeMin || data.pickupTime > timeMax);
  const hasPie = pies.some((p) => p.flavor);
  const threeInchTotal = pies
    .filter((p) => p.size === '3"')
    .reduce((sum, p) => sum + (parseInt(p.qty, 10) || 0), 0);
  const threeInchTooFew = threeInchTotal > 0 && threeInchTotal < 12;

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1>Order a Pie</h1>
          <p>
            Our handmade 5&quot; pies are available in-store daily. 3&quot; and 9&quot; pies are
            by special order only — request yours below or call the store at{" "}
            <a href="tel:8136890320">813-689-0320</a>.
          </p>
        </div>
      </section>

      <section className={styles.wrap}>
        <div className={styles.card}>
          {submitted ? (
            <div className={styles.success}>
              <div style={{ fontSize: "2.5rem" }}>🥧✨</div>
              <h2>Your Pie Order Request Is In!</h2>
              <p>
                Thank you! Our bakers will reach out to confirm the details. For faster service,
                call <a href="tel:8136890320">813-689-0320</a>.
              </p>
              <p>Please note this is a request and not a confirmed order. Your order is only confirmed once a member of our team contacts you to confirm it. Every order will require a deposit to confirm it.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                value={data._honey}
                onChange={(e) => update("_honey", e.target.value)}
              />

              <div className={styles.notice}>
                <strong>Sizes:</strong> 5&quot; pies are available in-store daily; 3&quot; and 9&quot; pies are special order only. 3&quot; pies have a minimum order of 12 pies. Blueberry and Cherry
                pies are not regularly made in store and are special order only.
              </div>

              <div className="form-group">
                <label htmlFor="pie-name" className="form-label">Your Name</label>
                <input type="text" id="pie-name" className="form-input" required value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="First & last name" />
              </div>

              <div className={styles.formRow}>
                <div className="form-group">
                  <label htmlFor="pie-phone" className="form-label">Phone Number</label>
                  <input type="tel" id="pie-phone" className="form-input" required value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(813) 555-1234" />
                </div>
                <div className="form-group">
                  <label htmlFor="pie-email" className="form-label">Email</label>
                  <input type="email" id="pie-email" className="form-input" required value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className="form-group">
                  <label htmlFor="pie-date" className="form-label">Pickup Date</label>
                  <input type="date" id="pie-date" className="form-input" required value={data.pickupDate} onChange={(e) => setData((prev) => ({ ...prev, pickupDate: e.target.value, pickupTime: "" }))} />
                </div>
                <div className="form-group">
                  <label htmlFor="pie-time" className="form-label">Pickup Time ({timeHoursLabel})</label>
                  <select id="pie-time" className="form-input" value={data.pickupTime} onChange={(e) => update("pickupTime", e.target.value)}>
                    <option value="">Select a time</option>
                    {pickupTimeOptions(isSunday).map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <h3 className={styles.sectionTitle}>Which pies would you like?</h3>
              {pies.map((pie, i) => (
                <div className={styles.pieRow} key={i}>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor={`pie-flavor-${i}`} className="form-label">Flavor</label>
                    <select id={`pie-flavor-${i}`} className="form-input" required value={pie.flavor} onChange={(e) => updatePie(i, "flavor", e.target.value)}>
                      <option value="">Select a pie</option>
                      {PIE_FLAVORS.map((f) => (
                        <option key={f} value={f}>{f === "Kentucky Derby Pie" ? `${f} (contains alcohol)` : f}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor={`pie-size-${i}`} className="form-label">Size</label>
                    <select id={`pie-size-${i}`} className="form-input" value={pie.size} onChange={(e) => updatePie(i, "size", e.target.value)}>
                      {PIE_SIZES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor={`pie-topping-${i}`} className="form-label">Topping</label>
                    <select id={`pie-topping-${i}`} className="form-input" value={pie.topping} onChange={(e) => updatePie(i, "topping", e.target.value)}>
                      {PIE_TOPPINGS.map((t) => (
                        <option key={t} value={t}>{t === "Lattice top" ? `${t} +$` : t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label htmlFor={`pie-qty-${i}`} className="form-label">Qty</label>
                    <input type="number" id={`pie-qty-${i}`} min="1" className="form-input" required value={pie.qty} onChange={(e) => updatePie(i, "qty", e.target.value)} />
                  </div>
                  {pies.length > 1 ? (
                    <button type="button" className={styles.removeBtn} onClick={() => removePie(i)} aria-label="Remove this pie">✕</button>
                  ) : (
                    <span />
                  )}
                </div>
              ))}
              <button type="button" className="btn btn-secondary btn-sm" onClick={addPie}>+ Add another pie</button>

              {threeInchTooFew && (
                <p role="alert" style={{ color: "#b00020", marginTop: "var(--space-md)", fontWeight: 600 }}>
                  3&quot; pies have a minimum order of 12 pies (you have {threeInchTotal}). Please increase the quantity to at least 12.
                </p>
              )}
              {sizeError && !threeInchTooFew && null}

              <div className="form-group" style={{ marginTop: "var(--space-lg)" }}>
                <label htmlFor="pie-notes" className="form-label">Allergies or anything else we should know (optional)</label>
                <textarea id="pie-notes" className="form-input form-textarea" rows={3} value={data.notes} onChange={(e) => update("notes", e.target.value)} placeholder="e.g. Nut allergy, gift box, etc." />
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={sending || !hasPie || timeOutOfRange}>
                {sending ? "Sending..." : "Submit Pie Order 🥧"}
              </button>
              <p className={styles.note}>
                This form is a request, not a finished order. We&apos;ll contact you to confirm the
                details, so please double-check your phone number and email. You can also call us at{" "}
                <a href="tel:8136890320">813-689-0320</a>.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
