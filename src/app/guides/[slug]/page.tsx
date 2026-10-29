import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/config/meta";
import { guides, getGuide } from "@/content/guides";
import { abs, OWNER } from "@/config/site";
import ToolkitCTA from "@/components/ToolkitCTA";
import EmailSignup from "@/components/EmailSignup";
import Disclaimer from "@/components/Disclaimer";

export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return pageMeta(`/guides/${g.slug}/`, `${g.title} | Satoshi's Path`, g.description, "article");
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const others = guides.filter((o) => o.slug !== g.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.description,
    author: { "@type": "Organization", name: OWNER },
    publisher: { "@type": "Organization", name: OWNER },
    mainEntityOfPage: abs(`/guides/${g.slug}/`),
  };
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto container-padding py-10 md:py-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-bitcoin-orange">Home</Link> /{" "}
          <Link href="/guides/" className="hover:text-bitcoin-orange">Guides</Link>
        </nav>
        <p className="text-sm text-gray-500 mb-3"><span aria-hidden>{g.emoji}</span> {g.minutes} min read · Educational, not financial advice</p>
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-5 text-balance">{g.title}</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{g.intro}</p>

        <div className="space-y-10">
          {g.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-2xl font-bold text-black mb-4">{s.h}</h2>
              {s.p?.map((t, i) => <p key={i} className="text-gray-700 leading-relaxed mb-4">{t}</p>)}
              {s.list && (
                <ul className="space-y-3">
                  {s.list.map((t, i) => (
                    <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                      <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-bitcoin-orange" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border-l-4 border-bitcoin-orange bg-orange-50 p-5">
          <p className="font-semibold text-black mb-1">The takeaway</p>
          <p className="text-gray-700">{g.takeaway}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link href="/checklist/" className="rounded-2xl border border-gray-200 p-5 hover:border-bitcoin-orange hover:shadow-lg transition-all">
            <p className="text-xs font-semibold text-bitcoin-orange mb-1">Free</p>
            <p className="font-bold text-black">Bitcoin Beginner Checklist →</p>
            <p className="text-sm text-gray-600">Fees, wallets, scams and records on one page.</p>
          </Link>
          <Link href="/tracker/" className="rounded-2xl border border-gray-200 p-5 hover:border-bitcoin-orange hover:shadow-lg transition-all">
            <p className="text-xs font-semibold text-bitcoin-orange mb-1">$17 one-time</p>
            <p className="font-bold text-black">Bitcoin Starter Toolkit →</p>
            <p className="text-sm text-gray-600">Track purchases, fees and your average cost.</p>
          </Link>
        </div>

        <div className="mt-10"><ToolkitCTA context="your purchases and fees" /></div>
        <div className="mt-8"><EmailSignup source={`guide-${g.slug}`} /></div>
        <div className="mt-8"><Disclaimer /></div>

        <div className="mt-12">
          <h2 className="text-lg font-bold text-black mb-4">Keep reading</h2>
          <ul className="grid sm:grid-cols-3 gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/guides/${o.slug}/`} className="block h-full rounded-xl bg-gray-50 p-4 text-sm font-semibold text-gray-800 hover:bg-orange-50 hover:text-bitcoin-orange transition-colors">
                  <span aria-hidden>{o.emoji} </span>{o.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
