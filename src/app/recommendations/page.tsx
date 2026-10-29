import { pageMeta } from "@/config/meta";
import type { Metadata } from "next";
import Link from "next/link";
import { abs } from "@/config/site";
import Disclaimer from "@/components/Disclaimer";

export const metadata = pageMeta("/recommendations/", "Beginner Bitcoin Tools We Point People To | Satoshi's Path", "A short, disclosed list of Bitcoin apps, wallets and learning resources beginners commonly use, with what each is for and what to check before signing up.");

type Rec = { name: string; url: string; what: string; check: string };
const groups: { title: string; items: Rec[] }[] = [
  {
    title: "Buying small amounts",
    items: [
      { name: "Strike", url: "https://strike.me", what: "App for buying Bitcoin and using Lightning.", check: "Compare the quoted price and fees with another app for the same dollar amount." },
      { name: "River", url: "https://river.com", what: "Bitcoin-only brokerage with recurring buys.", check: "Read the current fee schedule for your purchase size." },
      { name: "Kraken", url: "https://www.kraken.com", what: "Large exchange with a simple and a pro trading view.", check: "The pro view usually shows lower trading fees than instant buy." },
    ],
  },
  {
    title: "Self-custody wallets",
    items: [
      { name: "Trezor", url: "https://trezor.io", what: "Hardware wallet that keeps keys offline.", check: "Buy only from the official store; never use a pre-set recovery phrase." },
      { name: "Ledger", url: "https://www.ledger.com", what: "Hardware wallet that keeps keys offline.", check: "Buy only from the official store; set the phrase up yourself." },
    ],
  },
  {
    title: "Records and taxes",
    items: [
      { name: "Koinly", url: "https://koinly.io", what: "Imports exchange history to help prepare crypto tax reports.", check: "Confirm it supports your country and exchanges before paying." },
      { name: "CoinTracker", url: "https://www.cointracker.io", what: "Portfolio and tax-report tool.", check: "Free tiers are limited; check transaction limits." },
    ],
  },
  {
    title: "Free learning and data",
    items: [
      { name: "mempool.space", url: "https://mempool.space", what: "See current network fees and confirm transactions.", check: "Free; no account needed." },
      { name: "Bitcoin.org", url: "https://bitcoin.org", what: "Long-standing introductory resource.", check: "Free; no account needed." },
    ],
  },
];

export default function RecommendationsPage() {
  return (
    <div className="bg-white">
      <section className="max-w-4xl mx-auto container-padding pt-10 md:pt-14">
        <div role="note" className="rounded-2xl border-2 border-bitcoin-orange/40 bg-orange-50 p-5 text-sm text-gray-800">
          <p className="font-bold text-black mb-1">Disclosure</p>
          <p>
            Satoshi&apos;s Path is run by Cooper Featherstone LLC. Some links on this site may be affiliate or referral
            links that could earn us a commission at no extra cost to you. The links on this page currently go to each
            provider&apos;s regular website. We are not paid to rank anything here. Listing a service isn&apos;t an
            endorsement or financial advice; check current fees and terms yourself.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto container-padding py-10 md:py-14">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-3 text-balance">Tools beginners commonly use</h1>
        <p className="text-lg text-gray-600 mb-10">What each one is for, and the one thing to check before you sign up.</p>
        <div className="space-y-10">
          {groups.map((grp) => (
            <section key={grp.title}>
              <h2 className="text-xl font-bold text-black mb-4">{grp.title}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {grp.items.map((r) => (
                  <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer"
                    className="group block rounded-2xl border border-gray-200 p-5 hover:border-bitcoin-orange hover:shadow-lg transition-all">
                    <p className="font-bold text-black group-hover:text-bitcoin-orange">{r.name} <span aria-hidden>↗</span></p>
                    <p className="text-sm text-gray-700 mt-1">{r.what}</p>
                    <p className="text-xs text-gray-500 mt-3"><strong>Check first:</strong> {r.check}</p>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
        <div className="mt-12 space-y-6">
          <p className="text-gray-700">New to all this? Start with the <Link href="/checklist/" className="text-bitcoin-orange font-semibold hover:underline">free beginner checklist</Link> or the <Link href="/guides/" className="text-bitcoin-orange font-semibold hover:underline">plain-English guides</Link>.</p>
          <Disclaimer />
        </div>
      </section>
    </div>
  );
}
