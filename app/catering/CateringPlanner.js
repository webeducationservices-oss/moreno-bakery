"use client";

import { useState } from "react";
import styles from "./planner.module.css";

const EVENT_TYPES = [
  { id: "office", label: "Office / Corporate", emoji: "💼" },
  { id: "birthday", label: "Birthday Party", emoji: "🎂" },
  { id: "shower", label: "Shower / Baby Shower", emoji: "🎀" },
  { id: "graduation", label: "Graduation", emoji: "🎓" },
  { id: "family", label: "Family Gathering", emoji: "👨‍👩‍👧‍👦" },
  { id: "wedding", label: "Wedding / Rehearsal", emoji: "💒" },
  { id: "school", label: "School / Church", emoji: "⛪" },
  { id: "other", label: "Other Event", emoji: "🎉" },
];

const MEAL_PREFS = [
  { id: "cuban", label: "Cuban Favorites", desc: "Roast pork, Cuban sandwiches, congris rice" },
  { id: "mixed", label: "Mix of Everything", desc: "Entrees, sandwiches, sides — a crowd pleaser" },
  { id: "sandwiches", label: "Sandwich Trays", desc: "Cuban, Media Noche, Turkey, and more" },
  { id: "finger", label: "Finger Foods", desc: "Empanadas, croquetas, meatballs, stuffed potatoes" },
  { id: "breakfast", label: "Breakfast / Brunch", desc: "Pastries, breads, and coffee-friendly items" },
];

const DESSERT_PREFS = [
  { id: "cookies", label: "Cookie Trays", desc: "Jumbo, butter, or Italian cookies" },
  { id: "pastries", label: "Pastry Trays", desc: "Rugelach, brownies, turnovers, Danish" },
  { id: "cake", label: "Custom Cake", desc: "Sheet cakes or round cakes in 10+ flavors" },
  { id: "cupcakes", label: "Cupcakes", desc: "12 flavors from $4.50 each" },
  { id: "mixed_dessert", label: "Mix of Desserts", desc: "A little of everything sweet" },
  { id: "none", label: "No Dessert Needed", desc: "Just the savory food, please!" },
];

const BUDGET_LEVELS = [
  { id: "value", label: "Budget-Friendly", desc: "Great food that keeps costs down" },
  { id: "balanced", label: "Balanced", desc: "Good variety without overspending" },
  { id: "premium", label: "All Out", desc: "Full spread, no holding back" },
];

function buildSuggestions(data) {
  const { eventType, guestCount, mealPref, dessertPref, budgetLevel } = data;
  const gc = parseInt(guestCount) || 20;

  const perPersonBase = budgetLevel === "value" ? 9 : budgetLevel === "balanced" ? 14 : 20;

  const mealMenus = {
    cuban: {
      value: [
        { item: "Roast Pork (5 lbs)", price: 50, per: 20 },
        { item: "Congris Rice (5 lbs)", price: 35, per: 20 },
        { item: "Tostones (40 pcs)", price: 32, per: 40 },
      ],
      balanced: [
        { item: "Roast Pork (5 lbs)", price: 50, per: 20 },
        { item: "Chicken Marsala (3 lbs)", price: 36, per: 8 },
        { item: "Yellow Rice (5 lbs)", price: 35, per: 20 },
        { item: "Platanos Maduros (40 pcs)", price: 32, per: 40 },
        { item: "Garden Salad (15-30)", price: 30, per: 30 },
      ],
      premium: [
        { item: "Roast Pork (5 lbs)", price: 50, per: 20 },
        { item: "Ropa Vieja (5 lbs)", price: 75, per: 20 },
        { item: "Congris Rice (5 lbs)", price: 35, per: 20 },
        { item: "Yuca (5 lbs)", price: 30, per: 20 },
        { item: "Tostones (40 pcs)", price: 32, per: 40 },
        { item: "Platanos Maduros (40 pcs)", price: 32, per: 40 },
        { item: "Rachel's Chopped Salad (15-30)", price: 55, per: 30 },
      ],
    },
    mixed: {
      value: [
        { item: "Cuban Sandwich Tray (12-16)", price: 76, per: 16 },
        { item: "Garden Salad (15-30)", price: 30, per: 30 },
      ],
      balanced: [
        { item: "Chicken Marsala (5 lbs)", price: 60, per: 20 },
        { item: "Cuban Sandwich Tray (12-16)", price: 76, per: 16 },
        { item: "Yellow Rice (5 lbs)", price: 35, per: 20 },
        { item: "Moreno 2008 Salad (15-30)", price: 40, per: 30 },
      ],
      premium: [
        { item: "Roast Pork (5 lbs)", price: 50, per: 20 },
        { item: "Chicken Marsala (5 lbs)", price: 60, per: 20 },
        { item: "Cuban Sandwich Tray (12-16)", price: 76, per: 16 },
        { item: "Smoked Gouda Mac 'n Cheese (5 lbs)", price: 40, per: 20 },
        { item: "Rachel's Chopped Salad (15-30)", price: 55, per: 30 },
        { item: "Tostones (40 pcs)", price: 32, per: 40 },
      ],
    },
    sandwiches: {
      value: [
        { item: "Cuban Sandwich Tray (12-16)", price: 76, per: 16 },
        { item: "Garden Salad (8-15)", price: 18, per: 15 },
      ],
      balanced: [
        { item: "Cuban Sandwich Tray (12-16)", price: 76, per: 16 },
        { item: "Ropa Vieja Sandwich Tray (12-16)", price: 92, per: 16 },
        { item: "Greek Salad (15-30)", price: 40, per: 30 },
        { item: "Potato Salad (per lb)", price: 8, per: 5 },
      ],
      premium: [
        { item: "Cuban Sandwich Tray (40-50)", price: 225, per: 50 },
        { item: "Ropa Vieja Sandwich Tray (12-16)", price: 92, per: 16 },
        { item: "Rachel's Chopped Salad (30-50)", price: 75, per: 50 },
        { item: "Chicken Salad (per lb)", price: 9, per: 5 },
      ],
    },
    finger: {
      value: [
        { item: "Mini Stuffed Potato Platter (100 pcs)", price: 60, per: 100 },
        { item: "Mini Meatball Platter (50 pcs)", price: 40, per: 50 },
      ],
      balanced: [
        { item: "Mini Empanadas (30 pcs)", price: 105, per: 30 },
        { item: "Mini Meatball Platter (50 pcs)", price: 40, per: 50 },
        { item: "Mini Stuffed Potato Platter (50 pcs)", price: 30, per: 50 },
        { item: "Scachatta Half Tray (12-16)", price: 22, per: 16 },
      ],
      premium: [
        { item: "Mini Empanadas (100 pcs)", price: 350, per: 100 },
        { item: "Deviled Crabs (30 pcs)", price: 120, per: 30 },
        { item: "Mini Meatball Platter (150 pcs)", price: 115, per: 150 },
        { item: "Mini Stuffed Potato Platter (100 pcs)", price: 60, per: 100 },
      ],
    },
    breakfast: {
      value: [
        { item: "Turnover Tray (32 pcs)", price: 44, per: 32 },
        { item: "Guava & Cheese Stuffed Bread", price: 15, per: 8 },
      ],
      balanced: [
        { item: "Danish Tray (35 pcs)", price: 60, per: 35 },
        { item: "Turnover Tray (32 pcs)", price: 44, per: 32 },
        { item: "Cinnamon Sticks", price: 12, per: 10 },
      ],
      premium: [
        { item: "Danish Tray (35 pcs)", price: 60, per: 35 },
        { item: "Turnover Tray (32 pcs)", price: 44, per: 32 },
        { item: "Almond Delight Tray (30 pcs)", price: 55, per: 30 },
        { item: "Pan de Bono", price: 18, per: 12 },
      ],
    },
  };

  const dessertMenus = {
    cookies: [
      { item: "Jumbo Cookie Tray (24 cookies)", price: 72, per: 24 },
    ],
    pastries: [
      { item: "Brownie Buffet Tray (36 pcs)", price: 50, per: 36 },
      { item: "Rugelach Tray (4 lbs)", price: 52, per: 30 },
    ],
    cake: [
      { item: "1/2 Sheet Cake (serves 60-85)", price: 95, per: 85 },
    ],
    cupcakes: [
      { item: "Assorted Cupcakes", price: 4.5, per: 1 },
    ],
    mixed_dessert: [
      { item: "Jumbo Cookie Tray (24 cookies)", price: 72, per: 24 },
      { item: "Brownie Buffet Tray (36 pcs)", price: 50, per: 36 },
    ],
    none: [],
  };

  function scaleItems(items, guests) {
    return items.map((item) => {
      const multiplier = Math.max(1, Math.ceil(guests / item.per));
      return {
        name: item.item,
        qty: multiplier,
        unitPrice: item.price,
        total: item.price * multiplier,
      };
    });
  }

  function scaleDesserts(items, guests) {
    return items.map((item) => {
      const multiplier = Math.max(1, Math.ceil(guests / item.per));
      return {
        name: item.item,
        qty: multiplier,
        unitPrice: item.price,
        total: Math.round(item.price * multiplier * 100) / 100,
      };
    });
  }

  const mealKey = mealPref || "mixed";
  const dessertKey = dessertPref || "mixed_dessert";
  const budgets = ["value", "balanced", "premium"];

  return budgets.map((level, i) => {
    const mealItems = scaleItems(mealMenus[mealKey]?.[level] || mealMenus.mixed[level], gc);
    const dessertItems = scaleDesserts(dessertMenus[dessertKey] || dessertMenus.mixed_dessert, gc);

    const mealTotal = mealItems.reduce((s, it) => s + it.total, 0);
    const dessertTotal = dessertItems.reduce((s, it) => s + it.total, 0);
    const total = mealTotal + dessertTotal;

    const labels = ["Budget-Friendly", "Balanced", "All Out"];
    const emojis = ["💰", "⚖️", "🌟"];

    return {
      label: labels[i],
      emoji: emojis[i],
      mealItems,
      dessertItems,
      mealTotal,
      dessertTotal,
      total,
      perPerson: Math.round((total / gc) * 100) / 100,
    };
  });
}

export default function CateringPlanner() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    eventType: "",
    guestCount: "",
    mealPref: "",
    dessertPref: "",
    budgetLevel: "",
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    notes: "",
  });
  const [suggestions, setSuggestions] = useState(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function update(field, value) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    if (step < 5) setStep(step + 1);
    if (step === 4) {
      setSuggestions(buildSuggestions(data));
    }
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  function canProceed() {
    if (step === 0) return data.eventType;
    if (step === 1) return data.guestCount && parseInt(data.guestCount) > 0;
    if (step === 2) return data.mealPref;
    if (step === 3) return data.dessertPref;
    if (step === 4) return data.name && data.email;
    return true;
  }

  async function handleSend() {
    setSending(true);
    const eventLabel = EVENT_TYPES.find((e) => e.id === data.eventType)?.label || data.eventType;
    const mealLabel = MEAL_PREFS.find((m) => m.id === data.mealPref)?.label || data.mealPref;
    const dessertLabel = DESSERT_PREFS.find((d) => d.id === data.dessertPref)?.label || data.dessertPref;

    let suggestionsText = "";
    if (suggestions) {
      suggestions.forEach((s, i) => {
        suggestionsText += `\n--- Option ${i + 1}: ${s.label} ---\n`;
        s.mealItems.forEach((it) => {
          suggestionsText += `  ${it.name} x${it.qty} = $${it.total.toFixed(2)}\n`;
        });
        if (s.dessertItems.length > 0) {
          suggestionsText += "  Desserts:\n";
          s.dessertItems.forEach((it) => {
            suggestionsText += `  ${it.name} x${it.qty} = $${it.total.toFixed(2)}\n`;
          });
        }
        suggestionsText += `  TOTAL: $${s.total.toFixed(2)} (~$${s.perPerson.toFixed(2)}/person)\n`;
      });
    }

    const payload = {
      site_slug: "moreno-bakery",
      form_type: "catering-planner",
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      event_type: eventLabel,
      guest_count: data.guestCount,
      meal_preference: mealLabel,
      dessert_preference: dessertLabel,
      event_date: data.eventDate || "Not specified",
      notes: data.notes || "None",
      menu_suggestions: suggestionsText,
      _honey: "",
    };

    try {
      await fetch("https://myaieditor.com/api/form-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      /* silent */
    }
    setSending(false);
    setSent(true);
  }

  const progress = Math.round(((step + 1) / 6) * 100);

  return (
    <section className={styles.planner} id="catering-planner">
      <div className="container">
        <div className={styles.plannerCard}>
          <div className={styles.plannerHeader}>
            <h2>Plan Your Catering</h2>
            <p>Answer a few quick questions and get 3 custom menu suggestions with estimated pricing.</p>
          </div>

          {/* ── Progress Bar ─── */}
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <div className={styles.stepLabel}>
            Step {step + 1} of 6
          </div>

          {/* ── Step 0: Event Type ─── */}
          {step === 0 && (
            <div className={styles.stepContent}>
              <h3>What kind of event are you planning?</h3>
              <div className={styles.optionGrid}>
                {EVENT_TYPES.map((ev) => (
                  <button
                    key={ev.id}
                    type="button"
                    className={`${styles.optionCard} ${data.eventType === ev.id ? styles.optionActive : ""}`}
                    onClick={() => update("eventType", ev.id)}
                  >
                    <span className={styles.optionEmoji}>{ev.emoji}</span>
                    <span>{ev.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 1: Guest Count ─── */}
          {step === 1 && (
            <div className={styles.stepContent}>
              <h3>How many guests are you expecting?</h3>
              <div className={styles.guestInput}>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={data.guestCount}
                  onChange={(e) => update("guestCount", e.target.value)}
                  placeholder="e.g. 50"
                  className={styles.bigInput}
                  autoFocus
                />
                <span className={styles.guestLabel}>guests</span>
              </div>
              <div className={styles.quickPicks}>
                {[15, 25, 50, 75, 100, 200].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`${styles.quickPick} ${data.guestCount === String(n) ? styles.quickPickActive : ""}`}
                    onClick={() => update("guestCount", String(n))}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 2: Meal Preference ─── */}
          {step === 2 && (
            <div className={styles.stepContent}>
              <h3>What kind of food sounds right?</h3>
              <div className={styles.optionList}>
                {MEAL_PREFS.map((meal) => (
                  <button
                    key={meal.id}
                    type="button"
                    className={`${styles.listOption} ${data.mealPref === meal.id ? styles.listOptionActive : ""}`}
                    onClick={() => update("mealPref", meal.id)}
                  >
                    <strong>{meal.label}</strong>
                    <span>{meal.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 3: Dessert Preference ─── */}
          {step === 3 && (
            <div className={styles.stepContent}>
              <h3>What about desserts?</h3>
              <div className={styles.optionList}>
                {DESSERT_PREFS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    className={`${styles.listOption} ${data.dessertPref === d.id ? styles.listOptionActive : ""}`}
                    onClick={() => update("dessertPref", d.id)}
                  >
                    <strong>{d.label}</strong>
                    <span>{d.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 4: Contact Info ─── */}
          {step === 4 && (
            <div className={styles.stepContent}>
              <h3>Almost there! Where should we send your plan?</h3>
              <div className={styles.formFields}>
                <div className={styles.formRow}>
                  <div className="form-group">
                    <label htmlFor="planner-name" className="form-label">Name</label>
                    <input type="text" id="planner-name" className="form-input" value={data.name} onChange={(e) => update("name", e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="planner-phone" className="form-label">Phone</label>
                    <input type="tel" id="planner-phone" className="form-input" value={data.phone} onChange={(e) => update("phone", e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="planner-email" className="form-label">Email</label>
                  <input type="email" id="planner-email" className="form-input" value={data.email} onChange={(e) => update("email", e.target.value)} required />
                </div>
                <div className="form-group">
                  <label htmlFor="planner-date" className="form-label">Event Date (optional)</label>
                  <input type="date" id="planner-date" className="form-input" value={data.eventDate} onChange={(e) => update("eventDate", e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="planner-notes" className="form-label">Anything else we should know?</label>
                  <textarea id="planner-notes" className="form-input form-textarea" rows={3} value={data.notes} onChange={(e) => update("notes", e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* ── Step 5: Results ─── */}
          {step === 5 && suggestions && (
            <div className={styles.stepContent}>
              <h3>Your 3 Catering Menu Suggestions</h3>
              <p className={styles.resultsSubtitle}>
                For {data.guestCount} guests at your {EVENT_TYPES.find((e) => e.id === data.eventType)?.label || "event"}
              </p>

              <div className={styles.suggestionsGrid}>
                {suggestions.map((s, i) => (
                  <div key={i} className={`${styles.suggestionCard} ${i === 1 ? styles.suggestionFeatured : ""}`}>
                    {i === 1 && <div className={styles.recommendedBadge}>Recommended</div>}
                    <div className={styles.suggestionHeader}>
                      <span className={styles.suggestionEmoji}>{s.emoji}</span>
                      <h4>{s.label}</h4>
                    </div>
                    <div className={styles.suggestionPrice}>
                      <span className={styles.priceTotal}>${s.total.toFixed(0)}</span>
                      <span className={styles.pricePerPerson}>~${s.perPerson.toFixed(2)}/person</span>
                    </div>
                    <div className={styles.suggestionItems}>
                      <strong>Food</strong>
                      <ul>
                        {s.mealItems.map((it, j) => (
                          <li key={j}>
                            {it.name} {it.qty > 1 ? `x${it.qty}` : ""}
                          </li>
                        ))}
                      </ul>
                      {s.dessertItems.length > 0 && (
                        <>
                          <strong>Desserts</strong>
                          <ul>
                            {s.dessertItems.map((it, j) => (
                              <li key={j}>
                                {it.name} {it.qty > 1 ? `x${it.qty}` : ""}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <p className={styles.disclaimer}>
                * Prices are estimates based on current menu pricing. Final pricing may vary. Moreno Bakery will follow up to confirm your order.
              </p>

              {!sent ? (
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ width: "100%", marginTop: "var(--space-lg)" }}
                  onClick={handleSend}
                  disabled={sending}
                >
                  {sending ? "Sending Your Plan..." : "Email Me This Plan & Notify Moreno Bakery"}
                </button>
              ) : (
                <div className={styles.sentMessage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <h4>Plan Sent!</h4>
                  <p>
                    We have emailed your catering plan and notified Moreno Bakery.
                    They will follow up with you soon. For faster service, call{" "}
                    <a href="tel:+18136551861">(813) 655-1861</a>.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ── Navigation ─── */}
          {step < 5 && (
            <div className={styles.navButtons}>
              {step > 0 && (
                <button type="button" className={styles.backBtn} onClick={back}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                  Back
                </button>
              )}
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={next}
                disabled={!canProceed()}
                style={{ marginLeft: "auto" }}
              >
                {step === 4 ? "See My Suggestions" : "Next"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 6 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
