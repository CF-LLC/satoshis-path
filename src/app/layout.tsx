import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEmailBar from "@/components/StickyEmailBar";
import Analytics from "@/components/Analytics";
import { ASSET_BASE, CHECKLIST_FORM_ACTION, CHECKLIST_FORM_NAME, OG_IMAGE, OWNER, SITE_NAME, SITE_URL } from "@/config/site";
import { siteJsonLd } from "@/config/jsonld";

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
    icon: [
      { url: `${ASSET_BASE}/favicon.ico`, sizes: "any" },
      { url: `${ASSET_BASE}/bitcoin-icon.svg`, type: "image/svg+xml" },
      { url: `${ASSET_BASE}/icon-32.png`, sizes: "32x32", type: "image/png" },
    ],
    shortcut: `${ASSET_BASE}/favicon.ico`,
    apple: [{ url: `${ASSET_BASE}/apple-touch-icon.png`, sizes: "180x180" }],
  },
  manifest: `${ASSET_BASE}/site.webmanifest`,
};

export const viewport: Viewport = { themeColor: "#f7931a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd()).replace(/</g, "\\u003c") }} />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] bg-white px-3 py-2 rounded">Skip to content</a>
        <Navbar />
        <main id="main" className="grow">{children}</main>
        <Footer />
        <StickyEmailBar />

        {/* Hidden static form so Netlify registers the checklist signup (client fetch posts to the same form-name). Sending stays off until CHECKLIST_EMAIL_SEND_ENABLED=true. */}
        <form name={CHECKLIST_FORM_NAME} action={CHECKLIST_FORM_ACTION} method="POST" data-netlify="true" data-netlify-honeypot="bot-field" hidden noValidate>
          <input type="hidden" name="form-name" value={CHECKLIST_FORM_NAME} />
          <input type="email" name="email" />
          <input type="text" name="source" />
          <input type="text" name="bot-field" />
        </form>
        <Analytics />
      </body>
    </html>
  );
}
