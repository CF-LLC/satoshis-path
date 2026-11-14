import Link from "next/link";
import type { Metadata } from "next";
import { abs } from "@/config/site";
import { SPOCKSHOP_DROP_URL } from "@/config/affiliates";

export const metadata: Metadata = {
  title: "Merch | Satoshi's Path",
  description: "Satoshi's Path merch lives at SpockShop's Daily Drop: original illustrated tees, hoodies, mugs and hats, printed to order. Plus our bitcoin reading list.",
  alternates: { canonical: abs("/merch/") },
  openGraph: { title: "Merch | Satoshi's Path", url: abs("/merch/") },
};

// Titles and authors only; no prices (they vary by seller and format).
const BOOKS = [
  { name: "The Bitcoin Standard", author: "Saifedean Ammous" },
  { name: "Mastering Bitcoin", author: "Andreas M. Antonopoulos" },
  { name: "The Blocksize War", author: "Jonathan Bier" },
  { name: "Inventing Bitcoin", author: "Yan Pritzker" },
  { name: "Layered Money", author: "Nik Bhatia" },
  { name: "Bitcoin Billionaires", author: "Ben Mezrich" },
];

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <header className="text-center">
          <p className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">Merch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Merch</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Satoshi&apos;s Path is made by Cooper Featherstone LLC, and our merch lives at our sister shop, SpockShop.</p>
        </header>

        <section className="rounded-3xl p-8 md:p-10 text-white shadow-xl" style={{ background: "radial-gradient(circle at 20% 0%, #312e81 0, #0b1023 65%)" }} data-spockshop-drop>
          <p className="uppercase tracking-[0.3em] text-xs text-indigo-200 mb-2">SpockShop · The Daily Drop</p>
          <h2 className="text-3xl font-bold mb-3">Original illustrated tees, hoodies, mugs &amp; hats</h2>
          <p className="text-indigo-100 mb-6 max-w-2xl">Funny, original designs, printed to order and shipped in the US. A new design is featured every day.</p>
          <a href={SPOCKSHOP_DROP_URL} target="_blank" rel="noopener" className="inline-block bg-white text-indigo-900 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50">Shop the Daily Drop →</a>
          <p className="text-xs text-indigo-200 mt-4">SpockShop is owned by the same company as Satoshi&apos;s Path (Cooper Featherstone LLC), so buying there supports this site.</p>
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Looking for a hardware wallet?</h2>
          <p className="text-gray-700 mb-4">We compare Trezor, Ledger, COLDCARD, BitBox02 and Jade with official sources. Always buy straight from the maker.</p>
          <Link href="/tools/#hardware-wallets" className="inline-block bg-bitcoin-orange text-white px-5 py-2 rounded-xl font-semibold hover:bg-orange-600">Compare hardware wallets</Link>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Bitcoin reading list</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BOOKS.map((b) => (
              <li key={b.name} className="bg-white rounded-2xl shadow p-5"><p className="font-bold text-gray-900">{b.name}</p><p className="text-sm text-gray-600">by {b.author}</p></li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
