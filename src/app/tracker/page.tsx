import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bitcoin Starter Toolkit — $17 | Satoshi's Path",
  description:
    "A practical multi-tab spreadsheet for beginners: track purchases, fees, wallets, and a simple stacking plan. Average cost calculated for you. Not tax software.",
};

export default function TrackerPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto container-padding py-12 md:py-16">
        <p className="text-bitcoin-orange font-semibold text-sm mb-2">
          Digital product · $17 one-time
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
          Bitcoin Starter Toolkit
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A practical spreadsheet beginners actually open again. Track what you buy, what fees
          cost you, where your Bitcoin lives, and whether a simple monthly plan is working —
          without double-counting or complicated tax software.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-3xl font-bold text-black">$17</p>
              <p className="text-sm text-gray-500">One-time · .xlsx · Excel & Google Sheets</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <span
                className="inline-block bg-gray-300 text-gray-600 px-6 py-3 rounded-xl font-semibold text-center cursor-not-allowed"
                title="Checkout not connected yet"
              >
                Buy — setup required
              </span>
              <a
                href="/Satoshi-Path-Bitcoin-Starter-Toolkit-PREVIEW.xlsx"
                download
                className="inline-block border-2 border-bitcoin-orange text-bitcoin-orange px-6 py-3 rounded-xl font-semibold hover:bg-bitcoin-orange hover:text-white transition-colors text-center"
              >
                Free preview
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Checkout is not live yet. Once payment is connected (Gumroad, Lemon Squeezy, or Stripe),
            the buy button will process payment and deliver the full file automatically.
          </p>
        </div>

        <h2 className="text-xl font-bold text-black mb-3">Why this exists</h2>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Most beginners either track nothing or try to force Bitcoin into a generic budget
          spreadsheet. The result: they do not know their real average cost, they double-count
          fees, they forget which wallet holds what, and they abandon ambitious plans. This
          toolkit is built for ordinary budgets and the actual questions people ask after a few
          purchases.
        </p>

        <h2 className="text-xl font-bold text-black mb-4">What is inside (9 tabs)</h2>
        <div className="space-y-4 mb-10">
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-black">01 Dashboard</h3>
            <p className="text-sm text-gray-600">
              Live totals: BTC purchased, cash spent, average cost per BTC, rewards, and combined
              position. Pulls automatically from the other tabs.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-black">02 Purchases</h3>
            <p className="text-sm text-gray-600">
              Main log: date, BTC amount, total cash paid (including fees), optional fee
              visibility column, platform, notes, and cost-per-BTC formula. Clear rule to avoid
              double-counting fees.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-black">03 Fee Log</h3>
            <p className="text-sm text-gray-600">
              Optional deep-dive on spreads, trading fees, and withdrawals. Many beginners
              discover this is their biggest quiet cost.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-black">04 Rewards</h3>
            <p className="text-sm text-gray-600">
              Bitcoin earned (cashback, etc.) kept separate so it does not distort your average
              purchase cost.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-black">05 Transfers</h3>
            <p className="text-sm text-gray-600">
              Moves between wallets or exchanges. Logged so they never get counted as new
              purchases.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-black">06 Wallet Inventory</h3>
            <p className="text-sm text-gray-600">
              Where your Bitcoin lives (exchange / software / hardware), approximate amounts,
              recovery-phrase status checklist, and last verified date. Never stores the phrase
              itself.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-black">07 Stacking Plan</h3>
            <p className="text-sm text-gray-600">
              One simple monthly target in dollars (or sats). Monthly review rows and reflection
              prompts so the plan stays realistic.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-black">08 Glossary + Start Here</h3>
            <p className="text-sm text-gray-600">
              Plain-English terms and clear instructions. Yellow cells = your inputs. Black text =
              formulas.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-black mb-3">Who it is for</h2>
        <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mb-8">
          <li>People buying small amounts of Bitcoin over time</li>
          <li>Anyone who wants to know their real average cost after fees</li>
          <li>Beginners who have more than one wallet or exchange</li>
          <li>People who prefer a simple plan they will actually keep</li>
        </ul>

        <h2 className="text-xl font-bold text-black mb-3">Compatibility</h2>
        <p className="text-gray-600 text-sm mb-8">
          Microsoft Excel, Google Sheets (File → Import the .xlsx), LibreOffice Calc, and most
          apps that open modern Excel files. Formulas recalculate automatically.
        </p>

        <h2 className="text-xl font-bold text-black mb-3">What this is not</h2>
        <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1 mb-8">
          <li>Not tax software or a complete accounting system</li>
          <li>Not personalized investment or tax advice</li>
          <li>Does not implement FIFO / LIFO / HIFO lot tracking</li>
          <li>Does not replace official exchange or wallet records</li>
          <li>Does not store recovery phrases or private keys (and you should never put them here)</li>
        </ul>

        <h2 className="text-xl font-bold text-black mb-3">Support and refunds</h2>
        <p className="text-gray-600 text-sm mb-8">
          If the file is corrupted or will not open, email for a replacement. Refund terms will be
          stated clearly at checkout once payment is connected. Contact:{" "}
          <a href="mailto:satoshispath@gmail.com" className="text-bitcoin-orange hover:underline">
            satoshispath@gmail.com
          </a>
          .
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-10">
          <p className="text-sm text-gray-700">
            <strong>Status:</strong> Full toolkit file is ready. Checkout integration is the
            remaining step. Free preview includes the same structure and example data so you can
            evaluate it before buying.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="/Satoshi-Path-Bitcoin-Starter-Toolkit-PREVIEW.xlsx"
            download
            className="text-bitcoin-orange font-semibold hover:underline"
          >
            Download free preview →
          </a>
          <Link href="/" className="text-gray-500 hover:text-bitcoin-orange transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
