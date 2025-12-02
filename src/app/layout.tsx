import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Satoshi's Path - Your Guide to Stacking Bitcoin",
  description: "Learn the best methods, tools, and strategies to accumulate Bitcoin over time. Dollar-cost averaging, mining, earning Bitcoin, and more.",
  keywords: "Bitcoin, DCA, Dollar Cost Averaging, Bitcoin Mining, Stack Sats, Cryptocurrency",
  authors: [{ name: "Satoshi's Path" }],
  openGraph: {
    title: "Satoshi's Path - Your Guide to Stacking Bitcoin",
    description: "Learn the best methods, tools, and strategies to accumulate Bitcoin over time.",
    type: "website",
  },
  icons: {
    icon: '/bitcoin-icon.svg',
    shortcut: '/bitcoin-icon.svg',
    apple: '/bitcoin-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="en">
      <head>
        {adsenseClientId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
