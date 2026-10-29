import { pageMeta } from "@/config/meta";
import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/content/guides";
import { abs } from "@/config/site";
import EmailSignup from "@/components/EmailSignup";
import Disclaimer from "@/components/Disclaimer";

export const metadata = pageMeta("/guides/", "Plain-English Bitcoin Guides for Beginners | Satoshi's Path", "Short, conservative Bitcoin guides: buying without overpaying fees, moving to a wallet safely, spotting scams, self-custody, DCA and tracking your average cost.");

export default function GuidesIndex() {
  return (
    <div className="bg-white">
      <section className="bg-hero-pattern py-14 md:py-20">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <p className="text-bitcoin-orange font-semibold text-sm mb-2">Guides</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 text-balance">Bitcoin, in plain English</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Short reads on fees, wallets, safety and record-keeping. No hype and no price predictions.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}/`}
                className="group flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-bitcoin-orange/60 transition-all duration-300"
              >
                <span aria-hidden className="text-3xl mb-3">{g.emoji}</span>
                <h2 className="font-bold text-lg text-black mb-2 group-hover:text-bitcoin-orange transition-colors">{g.title}</h2>
                <p className="text-sm text-gray-600 grow">{g.description}</p>
                <p className="text-xs text-gray-500 mt-4">{g.minutes} min read →</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
            <EmailSignup source="guides-index" />
            <Disclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}
