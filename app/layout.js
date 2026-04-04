import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Moreno Bakery | Brandon Bakery, Catering & Wedding Cakes",
    template: "%s | Moreno Bakery",
  },
  description:
    "Moreno Bakery in Brandon offers pastries, Cuban favorites, catering, custom cakes, and wedding desserts for everyday orders and events.",
  metadataBase: new URL("https://www.morenobakery.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Moreno Bakery",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/quicksand-variable.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/patrick-hand-regular.woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
