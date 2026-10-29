import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/config/meta";
import { OWNER } from "@/config/site";
import { guides } from "@/content/guides";
import EmailSignup from "@/components/EmailSignup";
import { BuyToolkitButton } from "@/components/ToolkitCTA";
import ToolkitPreview from "@/components/ToolkitPreview";
import ChecklistSamples from "@/components/ChecklistSamples";
import WelcomeSeries from "@/components/WelcomeSeries";

export const metadata: Metadata = pageMeta(
  "/",
  "Satoshi's Path — Bitcoin basics for ordinary budgets",
  "Understand Bitcoin fees, wallets, and common mistakes. Free beginner checklist, plain-English guides and practical tools. Educational only — not financial advice."
);

const tools = [
  { href: "/tools/dca-calculator/", t: "DCA Calculator", d: "See what regular small purchases might have looked like.", e: "📅" },
  { href: "/tools/fee-estimator/", t: "Fee Estimator", d: "Check current network fees before you send.", e: "⛽" },
  { href: "/tools/unit-converter/", t: "Unit Converter", d: "Convert between BTC, sats and dollars.", e: "🔁" },
];

const faq = [
  ["Is the checklist really free?", "Yes. Read it on the web without buying anything. Email signup is optional."],
  ["What is the $17 Bitcoin Starter Toolkit?", "A multi-tab spreadsheet for tracking purchases, fees, wallets and a simple monthly plan. It calculates totals and average cost and keeps rewards and transfers separate. It isn't tax software or personalized advice."],
  ["Do you earn money from recommendations?", "Some links on this site may be affiliate or referral links. If so, Cooper Featherstone LLC may earn a commission. Disclosures appear near recommendations."],
  ["Is this financial advice?", "No. Everything here is educational. Bitcoin can lose value. Decisions about your money are yours."],
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-pattern">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-bitcoin-orange/15 blur-3xl" />
        <div className="relative max-w-6xl mx-auto container-padding py-14 md:py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-semibold text-orange-800 mb-5">
              ₿ Bitcoin basics for ordinary budgets
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-5 leading-[1.05] text-balance">
              Make sense of Bitcoin, <span className="text-bitcoin-orange">one sat at a time.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
              Understand fees, wallets and common mistakes before they cost you. Start with the free checklist; keep your records in the toolkit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a href="#checklist" className="inline-flex items-center justify-center bg-bitcoin-orange text-black px-6 py-3.5 rounded-xl text-base font-semibold hover:bg-orange-400 transition-colors shadow-lg shadow-bitcoin-orange/30">
                Free beginner checklist
              </a>
              <BuyToolkitButton />
            </div>
            <p className="text-sm text-gray-500">No hype. No price predictions. Run by {OWNER}.</p>
          </div>
          <div className="lg:pl-4">
            <ToolkitPreview />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto container-padding py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm text-gray-600">
          <p><strong className="block text-black">9-section</strong> beginner checklist</p>
          <p><strong className="block text-black">{guides.length}</strong> plain-English guides</p>
          <p><strong className="block text-black">No account</strong> needed for tools</p>
          <p><strong className="block text-black">Disclosed</strong> recommendations</p>
        </div>
      </section>

      {/* CHECKLIST + SIGNUP */}
      <section id="checklist" className="py-16 md:py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <p className="text-bitcoin-orange font-semibold text-sm mb-2">Free</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Bitcoin Beginner Checklist</h2>
              <p className="text-gray-600 mb-8 max-w-xl">
                Fees, wallets, recovery phrases, scam warning signs and simple record-keeping. Useful whether or not you ever buy. Here&apos;s what a few pages look like:
              </p>
              <ChecklistSamples />
            </div>
            <div className="lg:sticky lg:top-24 space-y-4">
              <EmailSignup source="home-hero" />
              <p className="text-sm text-gray-600 text-center">
                Prefer not to email? <Link href="/checklist/" className="text-bitcoin-orange font-semibold hover:underline">Read it online</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLKIT */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto container-padding grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 grid grid-cols-3 gap-3">
            {["Dashboard", "Purchases", "Fee Log", "Rewards", "Transfers", "Wallets", "Plan", "Glossary", "Start Here"].map((t, i) => (
              <div key={t} className="aspect-square rounded-2xl border border-gray-200 bg-linear-to-br from-white to-orange-50 p-3 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="text-xs font-mono text-bitcoin-orange">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-semibold text-black">{t}</span>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <p className="text-bitcoin-orange font-semibold text-sm mb-2">Optional · $17 one-time</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Bitcoin Starter Toolkit</h2>
            <ul className="space-y-2 text-gray-700 mb-7">
              {["Dashboard with totals and real average cost", "Purchase and fee logs that never double-count", "Rewards and transfers kept separate", "Wallet inventory and a simple monthly plan", "Excel, Google Sheets and LibreOffice"].map((t) => (
                <li key={t} className="flex gap-2"><span aria-hidden className="text-bitcoin-orange font-bold">✓</span>{t}</li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <BuyToolkitButton />
              <Link href="/tracker/#preview" className="inline-flex justify-center px-6 py-3.5 rounded-xl border-2 border-gray-200 font-semibold text-gray-700 hover:border-bitcoin-orange hover:text-bitcoin-orange transition-colors">See all 9 tabs</Link>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-bitcoin-orange font-semibold text-sm mb-1">Guides</p>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Read before you buy</h2>
            </div>
            <Link href="/guides/" className="hidden sm:inline text-bitcoin-orange font-semibold hover:underline">All guides →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guides.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}/`} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:-translate-y-1 hover:border-bitcoin-orange/60 transition-all duration-300">
                <span aria-hidden className="text-2xl">{g.emoji}</span>
                <h3 className="font-bold text-black mt-2 mb-1 group-hover:text-bitcoin-orange transition-colors">{g.title}</h3>
                <p className="text-xs text-gray-500">{g.minutes} min read</p>
              </Link>
            ))}
          </div>
          <Link href="/guides/" className="sm:hidden block mt-6 text-center text-bitcoin-orange font-semibold">All guides →</Link>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto container-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Free tools</h2>
          <p className="text-gray-600 text-center mb-10">No account required.</p>
          <div className="grid sm:grid-cols-3 gap-5">
            {tools.map((t) => (
              <Link key={t.href} href={t.href} className="group rounded-2xl border border-gray-200 p-6 hover:border-bitcoin-orange hover:shadow-lg transition-all">
                <span aria-hidden className="text-2xl">{t.e}</span>
                <h3 className="font-bold text-black mt-2 mb-1 group-hover:text-bitcoin-orange">{t.t}</h3>
                <p className="text-sm text-gray-600">{t.d}</p>
              </Link>
            ))}
          </div>
          <p className="text-center mt-8"><Link href="/tools/" className="text-bitcoin-orange font-semibold hover:underline">View all tools →</Link></p>
        </div>
      </section>

      {/* WELCOME SERIES + WHO */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto container-padding grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-bitcoin-orange font-semibold text-sm mb-1">What you&apos;ll get by email</p>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">Five short emails over a week</h2>
            <WelcomeSeries />
            <p className="text-xs text-gray-500 mt-5">No daily spam. Unsubscribe in any message.</p>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-black mb-2">Who&apos;s behind this</h2>
              <p className="text-gray-700">
                Satoshi&apos;s Path is an independent educational project run by <strong>{OWNER}</strong>. The goal is to help ordinary people understand Bitcoin&apos;s fees, wallets and risks, without hype or hard sells.
              </p>
              <p className="text-sm text-gray-500 mt-3">Questions? <a href="mailto:satoshispath@gmail.com" className="text-bitcoin-orange hover:underline">satoshispath@gmail.com</a> · <Link href="/about/" className="text-bitcoin-orange hover:underline">About</Link></p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-black mb-4">FAQ</h2>
              <div className="space-y-2">
                {faq.map(([q, a]) => (
                  <details key={q} className="group rounded-lg border border-gray-100 p-3 open:bg-orange-50/50">
                    <summary className="cursor-pointer font-semibold text-black list-none flex justify-between gap-3">{q}<span aria-hidden className="text-bitcoin-orange group-open:rotate-45 transition-transform">+</span></summary>
                    <p className="text-sm text-gray-600 mt-2">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-black">
        <div className="max-w-2xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Start with the free checklist</h2>
          <p className="text-gray-400 mb-8">Clear explanations of fees, wallets and common mistakes.</p>
          <EmailSignup source="home-footer" dark />
          <p className="text-sm text-gray-500 mt-6">Not financial advice. Bitcoin can lose value.</p>
        </div>
      </section>
    </div>
  );
}
