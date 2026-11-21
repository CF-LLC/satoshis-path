import Link from "next/link";
import { partnerLink, isAffiliate } from "@/config/affiliates";
import { CHECKED_ON, EXCHANGES } from "@/data/comparisons";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import Disclaimer from "@/components/Disclaimer";
import { pageMeta } from "@/config/meta";

export const metadata = pageMeta("/buy-bitcoin/", "Where to Buy Bitcoin: Exchanges Compared (US) | Satoshi's Path", "An honest comparison of places to buy bitcoin in the US: bitcoin-only services vs. big exchanges, what each is good for, and links to official fee pages.");

const STEPS = [
  ["Pick a provider", "Bitcoin-only services keep things simple. Big exchanges list many coins and more features."],
  ["Verify your identity", "US providers are required to check ID (KYC) before you can buy."],
  ["Fund with a bank transfer", "Bank transfers usually cost less than cards. Check the provider's fee page."],
  ["Start small, buy regularly", "A small recurring buy is an easy way to start without guessing the price."],
  ["Move it to your own wallet", "Once you hold a meaningful amount, withdraw to a wallet only you control."],
];

export default function BuyBitcoinPage() {
  const keys = EXCHANGES.map((e) => e.key);
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">
        <header className="text-center">
          <p className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">Buy Bitcoin</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Where to buy bitcoin</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">A plain comparison of popular places to buy bitcoin in the US. No star ratings and no made-up fee numbers: just what each one is, what it&apos;s good for, and a link to its official fee page. Facts checked {CHECKED_ON}.</p>
        </header>

        <AffiliateDisclosure keys={keys} />

        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left" data-exchange-table>
              <thead className="text-gray-600 border-b">
                <tr><th className="py-2 pr-4">Provider</th><th className="py-2 pr-4">What it is</th><th className="py-2 pr-4">Bitcoin only?</th><th className="py-2 pr-4">Good for</th><th className="py-2">Fees</th></tr>
              </thead>
              <tbody>
                {EXCHANGES.map((e) => (
                  <tr key={e.key} className="border-b last:border-0 align-top">
                    <td className="py-3 pr-4 font-semibold text-gray-900">{e.name}</td>
                    <td className="py-3 pr-4 text-gray-700">{e.what}</td>
                    <td className="py-3 pr-4">{e.bitcoinOnly ? "Yes" : "No"}</td>
                    <td className="py-3 pr-4 text-gray-700">{e.goodFor}</td>
                    <td className="py-3"><a href={e.feesUrl} target="_blank" rel="noopener noreferrer" className="text-orange-700 underline">Official fee info</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXCHANGES.map((e) => (
            <article key={e.key} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col" data-exchange={e.key}>
              <h3 className="text-xl font-bold text-gray-900">{e.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{e.what}</p>
              <ul className="space-y-1 text-sm text-gray-800 mb-4 grow">
                {e.facts.map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
              <p className="text-xs text-gray-500 mb-3">Source: <a href={e.source} target="_blank" rel="noopener noreferrer" className="underline">{new URL(e.source).hostname}</a></p>
              <a href={partnerLink(e.key, e.url)} target="_blank" rel={isAffiliate(e.key) ? "sponsored noopener noreferrer" : "noopener noreferrer"} className="block text-center bg-bitcoin-orange text-white py-2 rounded-xl font-semibold hover:bg-orange-600">
                Visit {e.name}{isAffiliate(e.key) ? " (affiliate link)" : ""}
              </a>
            </article>
          ))}
        </section>

        <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to buy your first bitcoin</h2>
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="text-center">
                <div className="w-10 h-10 bg-bitcoin-orange text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">{i + 1}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{t}</h3>
                <p className="text-sm text-gray-600">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-linear-to-r from-bitcoin-orange to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Next: keep it safe</h2>
          <p className="mb-5 max-w-2xl mx-auto">Coins left on an exchange are held by that company. Our hardware wallet comparison explains the options for holding your own keys.</p>
          <Link href="/tools/#hardware-wallets" className="inline-block bg-white text-bitcoin-orange px-6 py-3 rounded-xl font-semibold">Compare hardware wallets</Link>
        </section>

        <Disclaimer />
      </div>
    </div>
  );
}
