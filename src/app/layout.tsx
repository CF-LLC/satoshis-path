import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Satoshi's Path — Bitcoin basics for ordinary budgets",
  description:
    "Understand Bitcoin fees, wallets, and common mistakes. Free beginner checklist and practical tools. Educational only — not financial advice.",
  keywords:
    "Bitcoin, beginner, fees, wallets, satoshis, checklist, dollar cost averaging, self-custody",
  authors: [{ name: "Satoshi's Path" }],
  openGraph: {
    title: "Satoshi's Path — Bitcoin basics for ordinary budgets",
    description:
      "Understand Bitcoin fees, wallets, and common mistakes. Free beginner checklist and practical tools.",
    type: "website",
  },
  icons: {
    icon: "/bitcoin-icon.svg",
    shortcut: "/bitcoin-icon.svg",
    apple: "/bitcoin-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
