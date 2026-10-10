'use client';

import Link from "next/link";
import { useState } from "react";

// Matches next.config.ts basePath for static GitHub Pages export
const BASE = process.env.NODE_ENV === "production" ? "/satoshis-path" : "";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  // Formspree / ConvertKit-ready handler.
  // Replace FORM_ENDPOINT with your provider endpoint after you create the form.
  // Never put private API keys in frontend code.
  const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxxx"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!FORM_ENDPOINT) {
      setStatus("error");
      setMessage(
        "Email signup is not connected yet. You can still view and download the checklist below."
      );
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list. Check your inbox for the checklist.");
        setEmail("");
        window.location.href = `${BASE}/thank-you/`;
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again or download the checklist directly.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. You can still download the checklist on the thank-you page.");
    }
  };

  const benefits = [
    {
      title: "Understand real costs",
      body: "See how spreads, purchase fees, and withdrawal fees affect what you actually receive.",
    },
    {
      title: "Avoid common mistakes",
      body: "Learn the recovery-phrase rules, address checks, and scam warning signs before you need them.",
    },
    {
      title: "Track what you buy",
      body: "A simple way to record purchases and fees so you know your average cost over time.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-bitcoin-orange text-white rounded-full text-3xl font-bold mb-6">
            ₿
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-5 leading-tight text-balance">
            Make sense of Bitcoin,{" "}
            <span className="text-bitcoin-orange">one sat at a time.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Understand fees, wallets, and common mistakes with a practical beginner checklist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a
              href="#checklist"
              className="bg-bitcoin-orange text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Get the free beginner checklist
            </a>
            <Link
              href="/tools/"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-bitcoin-orange hover:text-bitcoin-orange transition-colors"
            >
              Explore Bitcoin basics
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            No hype. No price predictions. Just clear explanations.
          </p>
        </div>
      </section>

      <section id="checklist" className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Free: Bitcoin Beginner Checklist
              </h2>
              <p className="text-gray-600 mb-6">
                A concise guide covering fees, wallets, recovery phrases, scam warning signs, and how
                to record what you buy. Useful whether or not you ever purchase Bitcoin.
              </p>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-bitcoin-orange font-bold">✓</span>
                  Bitcoin & satoshis explained simply
                </li>
                <li className="flex gap-2">
                  <span className="text-bitcoin-orange font-bold">✓</span>
                  Purchase fees, spreads, and withdrawal costs
                </li>
                <li className="flex gap-2">
                  <span className="text-bitcoin-orange font-bold">✓</span>
                  Exchange accounts vs. self-custody wallets
                </li>
                <li className="flex gap-2">
                  <span className="text-bitcoin-orange font-bold">✓</span>
                  Recovery phrase security & common scams
                </li>
                <li className="flex gap-2">
                  <span className="text-bitcoin-orange font-bold">✓</span>
                  How to record purchases without double-counting fees
                </li>
              </ul>

              <Link href="/checklist/" className="text-bitcoin-orange font-semibold hover:underline">
                Read the full checklist on the web →
              </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
              <h3 className="text-xl font-bold text-black mb-2">Get it by email</h3>
              <p className="text-gray-600 text-sm mb-5">
                Enter your email and we’ll send the checklist plus a short series of practical
                beginner emails. Unsubscribe anytime.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitcoin-orange focus:border-bitcoin-orange text-base"
                    disabled={status === "loading"}
                  />
                </div>

                <p className="text-xs text-gray-500">
                  By submitting you agree to receive the checklist and related beginner emails from
                  Satoshi’s Path (Cooper Featherstone LLC). We do not sell your email. You can
                  unsubscribe in every message.
                </p>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-bitcoin-orange text-white py-3.5 rounded-xl font-semibold hover:bg-orange-600 transition-colors disabled:opacity-60"
                >
                  {status === "loading" ? "Sending…" : "Send me the free checklist"}
                </button>

                {message && (
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-green-700" : "text-red-600"
                    }`}
                    role="status"
                  >
                    {message}
                  </p>
                )}
              </form>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-2">Prefer not to email?</p>
                <Link href="/checklist/" className="text-bitcoin-orange font-medium hover:underline text-sm">
                  View the checklist online
                </Link>
                {" · "}
                <a
                  href={`${BASE}/Bitcoin-Beginner-Checklist.pdf`}
                  className="text-bitcoin-orange font-medium hover:underline text-sm"
                  download
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto container-padding">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">
            What you’ll get from the checklist
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-black mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Who this is for</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ordinary people with ordinary budgets who want to understand Bitcoin before (or instead
            of) buying. If you’ve felt overwhelmed by jargon, conflicting advice, or pressure to
            “get in now,” this path is built for you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We do not promise profits, passive income, or that Bitcoin is right for everyone.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto container-padding text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">About Satoshi’s Path</h2>
          <p className="text-gray-600 leading-relaxed">
            Satoshi’s Path is an educational project operated by Cooper Featherstone LLC. The goal
            is simple: help beginners make sense of Bitcoin — fees, wallets, common mistakes, and
            basic record-keeping — without hype or hard sells.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto container-padding">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-4">
            Free tools to explore
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Calculators and helpers that stay useful even if you never buy. No account required.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link
              href="/tools/dca-calculator/"
              className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-bitcoin-orange transition-colors"
            >
              <h3 className="font-bold text-black mb-1">DCA Calculator</h3>
              <p className="text-sm text-gray-600">See what regular purchases might have looked like historically.</p>
            </Link>
            <Link
              href="/tools/fee-estimator/"
              className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-bitcoin-orange transition-colors"
            >
              <h3 className="font-bold text-black mb-1">Fee Estimator</h3>
              <p className="text-sm text-gray-600">Get a sense of current network fees before you send.</p>
            </Link>
            <Link
              href="/tools/unit-converter/"
              className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-bitcoin-orange transition-colors"
            >
              <h3 className="font-bold text-black mb-1">Unit Converter</h3>
              <p className="text-sm text-gray-600">Convert between BTC, sats, and dollars.</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/tools/" className="text-bitcoin-orange font-semibold hover:underline">
              View all tools →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-linear-to-br from-gray-900 to-black text-white rounded-2xl p-8 md:p-10">
            <p className="text-bitcoin-orange font-semibold text-sm mb-2">Optional paid tool · $17</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Bitcoin Starter Toolkit</h2>
            <p className="text-gray-300 mb-6 max-w-xl">
              A practical multi-tab spreadsheet: track purchases and fees, see your average cost,
              inventory your wallets, and keep a simple monthly plan. Built for ordinary budgets.
              Not tax software.
            </p>
            <ul className="text-gray-300 text-sm space-y-2 mb-8">
              <li>• Dashboard with live totals and average cost</li>
              <li>• Purchase + Fee Log (spot the real cost of spreads)</li>
              <li>• Wallet inventory and recovery-phrase checklist</li>
              <li>• Simple stacking plan you will actually keep</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/tracker/"
                className="inline-block bg-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors text-center"
              >
                See the toolkit
              </Link>
              <a
                href={`${BASE}/Satoshi-Path-Bitcoin-Starter-Toolkit-PREVIEW.xlsx`}
                className="inline-block border border-gray-500 text-gray-200 px-6 py-3 rounded-xl font-semibold hover:border-bitcoin-orange hover:text-bitcoin-orange transition-colors text-center"
                download
              >
                Download free preview
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto container-padding">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-10">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-black mb-1">Is the checklist really free?</h3>
              <p className="text-gray-600 text-sm">
                Yes. You can read it on the web or download the PDF without buying anything. Email
                signup is optional and gives you the file plus a short educational sequence.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">What emails will I get?</h3>
              <p className="text-gray-600 text-sm">
                A short welcome series (about five emails over a week) covering fees, wallets,
                security, and tracking. No daily spam. Unsubscribe in any message.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">What is the $17 Bitcoin Starter Toolkit?</h3>
              <p className="text-gray-600 text-sm">
                A multi-tab spreadsheet for tracking purchases, fees, wallets, and a simple monthly
                plan. It calculates totals and average cost, keeps rewards and transfers separate,
                and includes a beginner glossary. It is not tax software or personalized advice.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">Do you earn money from recommendations?</h3>
              <p className="text-gray-600 text-sm">
                Yes. Some links on this site are affiliate or referral links. If you sign up or buy
                through them, Cooper Featherstone LLC may earn a commission or referral reward. We
                only list tools that fit the educational focus. Disclosures appear near recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-black mb-1">Is this financial advice?</h3>
              <p className="text-gray-600 text-sm">
                No. Everything is educational. Bitcoin can lose value. Decisions about money are
                yours alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black text-center">
        <div className="max-w-2xl mx-auto container-padding">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Start with the free checklist
          </h2>
          <p className="text-gray-400 mb-8">
            Clear explanations of fees, wallets, and common mistakes — built for ordinary budgets.
          </p>
          <a
            href="#checklist"
            className="inline-block bg-bitcoin-orange text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Get the free beginner checklist
          </a>
          <p className="text-sm text-gray-500 mt-6">
            Not financial advice. Always do your own research.
          </p>
        </div>
      </section>
    </div>
  );
}
