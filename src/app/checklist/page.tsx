import { pageMeta } from "@/config/meta";
import Link from "next/link";
import type { Metadata } from "next";
import { abs } from "@/config/site";
import ToolkitCTA from "@/components/ToolkitCTA";

export const metadata = pageMeta("/checklist/", "Bitcoin Beginner Checklist: Fees, Wallets & Common Mistakes | Satoshi's Path", "A practical beginner checklist covering Bitcoin fees, wallets, recovery phrases, scam warning signs, and how to record purchases. Free educational resource.");

export default function ChecklistPage() {
  return (
    <div className="bg-white">
      <article className="max-w-3xl mx-auto container-padding py-12 md:py-16">
        <p className="text-bitcoin-orange font-semibold text-sm mb-2">Free educational resource</p>
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-3 leading-tight">
          Bitcoin Beginner Checklist: Fees, Wallets & Common Mistakes
        </h1>
        <p className="text-gray-600 mb-6">
          Satoshi’s Path · Bitcoin basics for ordinary budgets · Educational only
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <Link
            href="/#checklist"
            className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-xl font-semibold text-sm hover:border-bitcoin-orange hover:text-bitcoin-orange transition-colors"
          >
            Get by email
          </Link>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-[15px] leading-relaxed">
          <p>
            This short checklist helps you understand Bitcoin without pressure to buy. Use it to
            learn the language, compare costs, and avoid the most common beginner mistakes. Nothing
            here is financial advice. Bitcoin can lose value.
          </p>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">1. Bitcoin and satoshis</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ Bitcoin (BTC) is a digital currency with a fixed supply of 21 million coins.</li>
              <li>☐ One bitcoin is divisible into 100,000,000 satoshis (sats). You can buy a fraction of a bitcoin.</li>
              <li>☐ “Stacking sats” simply means buying or earning small amounts of Bitcoin over time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">2. Buying fractions of Bitcoin</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ Most platforms let you buy $5, $10, or $50 worth of Bitcoin — you do not need a whole coin.</li>
              <li>☐ Focus on the total cash you pay and the amount of Bitcoin you receive, not just the headline price.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">3. Purchase fees, spreads, and withdrawal fees</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ <strong>Spread</strong>: the difference between the market price and the price the app charges you. Often the largest hidden cost for small purchases.</li>
              <li>☐ <strong>Trading / purchase fee</strong>: a percentage or flat fee charged when you buy.</li>
              <li>☐ <strong>Withdrawal / network fee</strong>: charged when you move Bitcoin from an exchange to your own wallet. This is separate from the purchase cost.</li>
              <li>☐ Always ask: “How much Bitcoin will I actually receive for the dollars I spend?”</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">4. Exchange accounts vs. wallets</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ An <strong>exchange account</strong> is convenient for buying, but the company holds the keys.</li>
              <li>☐ A <strong>self-custody wallet</strong> means you control the recovery phrase. You are responsible for security.</li>
              <li>☐ Many beginners start on an exchange, then learn self-custody when they are ready. There is no single “right” day to move.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">5. Recovery phrase security</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ A recovery phrase (seed phrase) is usually 12 or 24 words. Anyone who has it can take the funds.</li>
              <li>☐ Write it down offline. Do not screenshot it, email it, or store it in cloud notes.</li>
              <li>☐ Never type your recovery phrase into a website that asks for it “to verify” or “to claim.”</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">6. Checking addresses and networks</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ Always double-check the full receiving address before sending. A single wrong character can mean permanent loss.</li>
              <li>☐ Confirm you are sending on the correct network (Bitcoin mainnet, not another chain).</li>
              <li>☐ Start with a small test transfer when using a new wallet or exchange.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">7. Common scam warning signs</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ Guaranteed returns, “risk-free” profits, or pressure to act immediately.</li>
              <li>☐ Someone DM’ing you to “help recover” funds or asking for your recovery phrase.</li>
              <li>☐ Fake support accounts, airdrop claims that require a seed phrase, or links that look almost official.</li>
              <li>☐ If it feels urgent or too good to be true, pause and verify through official channels.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">8. Recording purchases and fees</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ Keep a simple record of: date, amount of Bitcoin received, total cash paid, fees, and platform.</li>
              <li>☐ Do not double-count fees. Put the full amount you paid in one place.</li>
              <li>☐ A basic spreadsheet is enough for personal tracking. (Satoshi’s Path offers an optional toolkit if you want a ready-made one.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-bitcoin-orange mt-8 mb-3">9. Bitcoin can lose value</h2>
            <ul className="list-none space-y-2 text-gray-700">
              <li>☐ Bitcoin’s price can drop significantly and stay down for long periods.</li>
              <li>☐ Only use money you can afford to leave untouched. There are no guaranteed returns.</li>
              <li>☐ This checklist is educational. It is not a recommendation to buy or sell.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mt-10 mb-3">Quick glossary</h2>
            <dl className="space-y-3 text-gray-700">
              <div>
                <dt className="font-semibold">Satoshi (sat)</dt>
                <dd>Smallest unit of Bitcoin (1 BTC = 100,000,000 sats).</dd>
              </div>
              <div>
                <dt className="font-semibold">Spread</dt>
                <dd>Gap between market price and the price you actually pay.</dd>
              </div>
              <div>
                <dt className="font-semibold">Self-custody</dt>
                <dd>You control the keys / recovery phrase.</dd>
              </div>
              <div>
                <dt className="font-semibold">Network fee</dt>
                <dd>Fee paid to send Bitcoin on the blockchain.</dd>
              </div>
              <div>
                <dt className="font-semibold">Recovery phrase</dt>
                <dd>The words that restore a wallet. Guard them.</dd>
              </div>
            </dl>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mt-10 mb-3">Verified educational sources</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Bitcoin.org — official educational resources</li>
              <li>Bitcoin Whitepaper (Satoshi Nakamoto, 2008)</li>
              <li>Jameson Lopp’s Bitcoin Information list (lopp.net)</li>
              <li>Mempool.space — live network and fee data</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Information about fees and features can change. Always verify on the platform you use.
              Checklist dated October 2026.
            </p>
          </section>
        </div>

        <div className="mt-12"><ToolkitCTA context="your purchases and fees" /></div>

        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h3 className="font-bold text-black mb-2">Next step</h3>
          <p className="text-gray-600 text-sm mb-4">
            Review the fees and security sections above. When you’re ready, explore the free tools
            or the optional Bitcoin Starter Toolkit.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/" className="text-bitcoin-orange font-semibold text-sm hover:underline">
              Plain-English guides →
            </Link>
            <Link href="/tools/" className="text-bitcoin-orange font-semibold text-sm hover:underline">
              Free tools →
            </Link>
            <Link href="/tracker/" className="text-bitcoin-orange font-semibold text-sm hover:underline">
              Starter Toolkit →
            </Link>
            <Link href="/" className="text-bitcoin-orange font-semibold text-sm hover:underline">
              ← Back to home
            </Link>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-10 text-center">
          Satoshi’s Path · Operated by Cooper Featherstone LLC · Educational content only. Not
          financial, tax, or investment advice.
        </p>
      </article>
    </div>
  );
}
