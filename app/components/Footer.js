import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <div className={styles.footerBrand}>
              <Link href="/" aria-label="Moreno Bakery Home">
                <Image
                  src="/images/logo.png"
                  alt="Moreno Bakery"
                  width={160}
                  height={70}
                />
              </Link>
              <p className={styles.tagline}>Unique - Handmade - Perfect</p>
              <div className={styles.contact}>
                <p>
                  <a href="https://maps.google.com/?q=737+W+Brandon+Blvd+Brandon+FL+33511" target="_blank" rel="noopener noreferrer">
                    737 W. Brandon Blvd.<br />Brandon, FL 33511
                  </a>
                </p>
                <p>
                  <a href="tel:8136890320">813.689.0320</a>
                </p>
                <p>
                  <a href="mailto:susan@morenobakery.com">susan@morenobakery.com</a>
                </p>
              </div>
            </div>

            {/* Menu Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Menu</h4>
              <ul>
                <li><Link href="/menu">Full Menu</Link></li>
                <li><Link href="/menu/bakery">Bakery</Link></li>
                <li><Link href="/menu/food">Food</Link></li>
                <li><Link href="/catering">Catering</Link></li>
              </ul>
            </div>

            {/* Events Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Events</h4>
              <ul>
                <li><Link href="/events/weddings">Weddings</Link></li>
                <li><Link href="/events/corporate">Corporate</Link></li>
                <li><Link href="/events/private-events">Private Events</Link></li>
                <li><Link href="/events/birthdays-graduations">Birthdays & Graduations</Link></li>
                <li><Link href="/events/wedding-cakes">Wedding Cakes & More</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Company</h4>
              <ul>
                <li><Link href="/about">Our Story</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/press">As Featured on NBC</Link></li>
                <li><Link href="/blog">Stories</Link></li>
                <li><Link href="/careers">Join the Team</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Hours */}
            <div className={styles.footerCol}>
              <h4 className={styles.footerHeading}>Hours</h4>
              <div className={styles.hours}>
                <p>Mon - Sat: 7:00am - 7:00pm</p>
                <p>Sun: 9:00am - 4:00pm</p>
              </div>
              <div className={styles.socials}>
                <a href="https://www.facebook.com/morenosbakery" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.instagram.com/morenobakery" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://www.tiktok.com/@moreno_bakery" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.33-6.33V9.18a8.16 8.16 0 0 0 4.29 1.2V6.69z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Moreno Bakery. All rights reserved.</p>
          <p className={styles.credit}>
            Website by{" "}
            <a href="https://www.webeducationservices.com" target="_blank" rel="noopener noreferrer">
              Web Education Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
