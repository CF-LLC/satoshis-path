import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you | Satoshi's Path",
  description: "Your checklist is ready. Next steps for learning Bitcoin basics.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto container-padding py-16 md:py-20 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-700 rounded-full text-2xl mb-6">
          ✓
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
          You’re in. Here’s your checklist.
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          If you signed up with email, the checklist is also on its way to your inbox (check spam
          just in case). You can read it right here so you don’t have to wait.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/guides/"
            className="bg-bitcoin-orange text-black px-6 py-3 rounded-xl font-semibold hover:bg-orange-400 transition-colors"
          >
            Browse the guides
          </Link>
          <Link
            href="/checklist/"
            className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-bitcoin-orange hover:text-bitcoin-orange transition-colors"
          >
            Read online
          </Link>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 md:p-8 text-left mb-10">
          <h2 className="font-bold text-lg text-black mb-3">Suggested first action</h2>
          <p className="text-gray-600 text-sm mb-4">
            Open the checklist and read the sections on <strong>fees & spreads</strong> and{" "}
            <strong>recovery phrase security</strong>. Those two areas cause the most avoidable
            beginner problems.
          </p>
          <Link href="/checklist/" className="text-bitcoin-orange font-semibold text-sm hover:underline">
            Go to fees & security sections →
          </Link>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 text-left mb-10">
          <h2 className="font-bold text-lg text-black mb-3">What emails to expect</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <strong>Email 1 (now):</strong> Checklist + how to use it
            </li>
            <li>
              <strong>Email 2 (day 1):</strong> Fees and spreads with a clear example
            </li>
            <li>
              <strong>Email 3 (day 3):</strong> Exchange accounts, wallets, recovery phrases
            </li>
            <li>
              <strong>Email 4 (day 5):</strong> Tracking purchases + optional toolkit
            </li>
            <li>
              <strong>Email 5 (day 7):</strong> How to compare Bitcoin tools
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-4">
            Unsubscribe anytime using the link in any email.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-6 text-left mb-10">
          <p className="text-bitcoin-orange font-semibold text-sm mb-1">Optional</p>
          <h2 className="font-bold text-lg text-black mb-2">Bitcoin Starter Toolkit — $17</h2>
          <p className="text-gray-600 text-sm mb-4">
            A practical multi-tab spreadsheet for purchases, fees, wallets, and a simple plan. Not
            required. Not tax software.
          </p>
          <Link
            href="/tracker/"
            className="text-bitcoin-orange font-semibold text-sm hover:underline"
          >
            Preview the toolkit →
          </Link>
        </div>

        <Link href="/" className="text-gray-500 text-sm hover:text-bitcoin-orange transition-colors">
          ← Back to Satoshi’s Path home
        </Link>
      </div>
    </div>
  );
}
