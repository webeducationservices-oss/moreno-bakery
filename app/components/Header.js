"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Menu",
    href: "/menu",
    children: [
      { label: "Bakery Menu", href: "/menu/bakery" },
      { label: "Food Menu", href: "/menu/food" },
      { label: "Catering Menu", href: "/menu/catering" },
    ],
  },
  { label: "Catering", href: "/catering" },
  { label: "Weddings", href: "/events/wedding-cakes" },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Weddings", href: "/events/weddings" },
      { label: "Corporate", href: "/events/corporate" },
      { label: "Private Events", href: "/events/private-events" },
      { label: "Birthdays & Graduations", href: "/events/birthdays-graduations" },
    ],
  },
  {
    label: "About",
    href: "/our-story",
    children: [
      { label: "Our Story", href: "/our-story" },
      { label: "Featured on NBC", href: "/featured-on-nbc" },
      { label: "Stories", href: "/stories" },
      { label: "Gallery", href: "/gallery" },
      { label: "Join the Team", href: "/join-the-team" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const UTILITY_LINKS = [
  { label: "Order Online", href: "https://www.doordash.com/store/moreno-bakery-brandon-138952/81523961/", icon: "cart", external: true },
  { label: "Call", href: "tel:8136890320", icon: "phone" },
  { label: "Get Directions", href: "https://maps.google.com/?q=737+W+Brandon+Blvd+Brandon+FL+33511", icon: "map", external: true },
  { label: "DoorDash", href: "https://www.doordash.com/store/moreno-bakery-brandon-138952/81523961/", icon: "delivery", external: true },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className={styles.header}>
      {/* Utility Bar */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <div className={styles.utilityLinks}>
            {UTILITY_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.utilityLink}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <UtilityIcon name={link.icon} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <div className={styles.utilitySocial}>
            <a href="https://www.facebook.com/morenosbakery" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/morenobakery" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.tiktok.com/@moreno_bakery" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.33-6.33V9.18a8.16 8.16 0 0 0 4.29 1.2V6.69z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} aria-label="Moreno Bakery Home">
            <Image
              src="/images/logo.png"
              alt="Moreno Bakery"
              width={180}
              height={80}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className={styles.navItem}
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                  {item.children && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                  )}
                </Link>
                {item.children && activeDropdown === item.label && (
                  <ul className={styles.dropdown}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link href={child.href} className={styles.dropdownLink}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="tel:8136890320" className={`btn btn-primary btn-sm ${styles.headerCta}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now
          </a>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {/* Mobile Quick Actions */}
          <div className={styles.mobileActions}>
            <a href="https://www.doordash.com/store/moreno-bakery-brandon-138952/81523961/" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
              Order Online
            </a>
            <a href="tel:8136890320" className="btn btn-secondary btn-sm">
              Call Now
            </a>
          </div>

          <ul className={styles.mobileNavList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={styles.mobileNavItem}>
                <Link
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className={styles.mobileSubNav}>
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className={styles.mobileSubLink}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.mobileUtility}>
            <a href="https://maps.google.com/?q=737+W+Brandon+Blvd+Brandon+FL+33511" target="_blank" rel="noopener noreferrer">
              Get Directions
            </a>
            <a href="https://www.doordash.com/store/moreno-bakery-brandon-138952/81523961/" target="_blank" rel="noopener noreferrer">
              DoorDash
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function UtilityIcon({ name }) {
  const icons = {
    cart: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
    phone: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    map: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    delivery: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  };
  return icons[name] || null;
}
