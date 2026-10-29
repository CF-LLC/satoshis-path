import Link from "next/link";
import { TOOLKIT_CHECKOUT_URL } from "@/config/site";

export function BuyToolkitButton({ className = "" }: { className?: string }) {
  const cls = `inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors ${className}`;
  if (TOOLKIT_CHECKOUT_URL) {
    return (
      <a href={TOOLKIT_CHECKOUT_URL} className={cls} rel="noopener">
        Buy the Starter Toolkit · $17
      </a>
    );
  }
  return (
    <Link href="/tracker/" className={cls}>
      Starter Toolkit · $17 →
    </Link>
  );
}

export default function ToolkitCTA({ context = "your numbers" }: { context?: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 to-black text-white p-6 md:p-8 shadow-xl">
      <div aria-hidden className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-bitcoin-orange/20 blur-2xl" />
      <p className="text-bitcoin-orange font-semibold text-sm mb-1">Save this in the Starter Toolkit</p>
      <h2 className="text-xl md:text-2xl font-bold mb-2">Keep {context} in one tidy spreadsheet</h2>
      <p className="text-gray-300 text-sm mb-5 max-w-xl">
        Log purchases, fees and transfers, see your real average cost, and keep a simple monthly plan.
        Works in Excel and Google Sheets. $17 one-time. Not tax software.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <BuyToolkitButton className="bg-bitcoin-orange! text-black! hover:bg-orange-400!" />
        <Link href="/tracker/#preview" className="inline-flex justify-center px-6 py-3.5 rounded-xl border border-gray-600 text-gray-200 font-semibold hover:border-bitcoin-orange hover:text-bitcoin-orange transition-colors">
          See what&apos;s inside
        </Link>
      </div>
    </div>
  );
}
