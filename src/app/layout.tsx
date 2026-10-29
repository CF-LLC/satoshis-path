import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEmailBar from "@/components/StickyEmailBar";
import Analytics from "@/components/Analytics";
import { ASSET_BASE, OG_IMAGE, OWNER, SITE_NAME, SITE_URL } from "@/config/site";

const title = "Satoshi's Path — Bitcoin basics for ordinary budgets";
const description =
  "Understand Bitcoin fees, wallets, and common mistakes. Free beginner checklist, plain-English guides and practical tools. Educational only — not financial advice.";

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title,
  description,
  keywords:
    "Bitcoin, beginner, fees, wallets, satoshis, checklist, dollar cost averaging, self-custody",
  authors: [{ name: OWNER }],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Satoshi's Path — Bitcoin basics for ordinary budgets" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  icons: {
    icon: `${ASSET_BASE}/bitcoin-icon.svg`,
    shortcut: `${ASSET_BASE}/bitcoin-icon.svg`,
    apple: `${ASSET_BASE}/bitcoin-icon.svg`,
  },
};

export const viewport: Viewport = { themeColor: "#f7931a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-white px-3 py-2 rounded">Skip to content</a>
        <Navbar />
        <main id="main" className="grow">{children}</main>
        <Footer />
        <StickyEmailBar />
        <Analytics />
      </body>
    </html>
  );
}
