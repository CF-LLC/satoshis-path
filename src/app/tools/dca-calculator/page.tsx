import { pageMeta } from "@/config/meta";
import type { Metadata } from "next";
import { abs, OG_IMAGE } from "@/config/site";
import ToolkitCTA from "@/components/ToolkitCTA";
import EmailSignup from "@/components/EmailSignup";
import Link from "next/link";
import DCACalculator from '@/components/DCACalculator';

export const metadata = pageMeta("/tools/dca-calculator/", "Bitcoin DCA Calculator: See What Regular Buys Look Like | Satoshi's Path", "Free Bitcoin dollar-cost averaging calculator. Model regular small purchases over time and see how average cost works. Educational, not a prediction.");

export default function DCACalculatorPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bitcoin <span className="bg-linear-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">DCA Calculator</span>
            </h1>
            <p className="text-xl text-gray-600">
              See how regular, fixed-dollar purchases average out over time. Educational only: past results never predict future ones.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <DCACalculator />
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="max-w-4xl mx-auto container-padding space-y-6">
          <ToolkitCTA context="your DCA purchases" />
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <EmailSignup source="tool-dca-calculator" />
            <div className="rounded-2xl border border-gray-200 p-6">
              <p className="font-bold text-black mb-2">Related guides</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guides/buy-bitcoin-without-overpaying-fees/" className="text-bitcoin-orange hover:underline">Buy Bitcoin without overpaying fees</Link></li>
                <li><Link href="/guides/what-is-dollar-cost-averaging/" className="text-bitcoin-orange hover:underline">Dollar-cost averaging, explained without hype</Link></li>
                <li><Link href="/guides/move-bitcoin-to-a-wallet-safely/" className="text-bitcoin-orange hover:underline">Move Bitcoin to your own wallet safely</Link></li>
                <li><Link href="/checklist/" className="text-bitcoin-orange hover:underline">Free beginner checklist</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-subtle-pattern">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Dollar-Cost Averaging?</h2>
            <div className="prose text-gray-600 max-w-none">
              <p className="mb-4">
                Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed amount of money 
                at regular intervals, regardless of the asset's price. This approach helps reduce the impact 
                of volatility on your overall investment.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of DCA for Bitcoin:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Reduces the risk of making poor timing decisions</li>
                <li>Takes advantage of Bitcoin's volatility by buying more when prices are low</li>
                <li>Builds discipline and consistency in your investment approach</li>
                <li>Doesn't require large upfront capital</li>
                <li>Helps smooth out short-term price fluctuations</li>
              </ul>

              <div className="bg-bitcoin-orange/10 border border-bitcoin-orange/20 rounded-xl p-4">
                <p className="text-sm">
                  <strong>Disclaimer:</strong> This calculator uses simulated data for demonstration purposes. 
                  Past performance does not guarantee future results. Always do your own research and consider 
                  your financial situation before investing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}