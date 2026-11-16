import Link from 'next/link';
import { CONTACT_EMAIL, OWNER, SITE_NAME } from '@/config/site';

const NAV: { href: string; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/checklist/', label: 'Checklist' },
  { href: '/tools/', label: 'Tools' },
  { href: '/guides/', label: 'Guides' },
  { href: '/tracker/', label: 'Toolkit' },
  { href: '/buy-bitcoin/', label: 'Buy Bitcoin' },
  { href: '/merch/', label: 'Merch' },
  { href: '/about/', label: 'About' },
];

const LIGHTNING = 'spock@speed.app';
const ONCHAIN = 'bc1q4wnvs69sgyk6sta825ycuz7phm05mq4ax306z9';

/**
 * The single site footer. The previous mega-footer ("Your guide to stacking Bitcoin"
 * with Earn Bitcoin, Auto News, Famous Endorsements, and the old resource lists)
 * was a leftover from an earlier version of the site and is not rendered anywhere.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto container-padding py-10">
        <div className="flex items-center gap-2">
          <div className="bg-linear-to-r from-orange-500 to-bitcoin-orange text-white p-1.5 rounded-lg font-bold text-sm" aria-hidden>
            ₿
          </div>
          <p className="text-lg font-semibold text-black">{SITE_NAME}</p>
        </div>
        <p className="mt-3 max-w-xl text-sm text-gray-600">
          Bitcoin basics for ordinary budgets. Educational only — not financial advice.
        </p>
        <nav aria-label="Footer" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-gray-700 hover:text-bitcoin-orange font-medium transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-6 text-sm text-gray-600">
          Questions?{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-bitcoin-orange hover:underline">
            {CONTACT_EMAIL}
          </a>
        </p>
        <p className="mt-3 text-xs text-gray-500">
          Tips in sats are welcome.{' '}
          <span className="whitespace-nowrap">Lightning: <code className="text-gray-700">{LIGHTNING}</code></span>
          {' · '}
          <span>On-chain: <code className="break-all text-gray-700">{ONCHAIN}</code></span>
        </p>
        <p className="mt-8 text-xs text-gray-500">
          © {year} {SITE_NAME} · Run by {OWNER}. Not financial advice. Always do your own research.
        </p>
      </div>
    </footer>
  );
}
