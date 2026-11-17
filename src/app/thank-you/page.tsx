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
          Your email was saved to the list. We are not sending a welcome series right now.
          You can read the beginner checklist on this site immediately.
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
          <h2 className="font-bold text-lg text-black mb-3">About the list</h2>
          <p className="text-sm text-gray-600">
            Your address is stored on this site&apos;s form submissions (Netlify Forms). There is no Satoshi&apos;s Path newsletter sending yet, and nothing was emailed just now. If that changes, any message will include a way to unsubscribe.
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
