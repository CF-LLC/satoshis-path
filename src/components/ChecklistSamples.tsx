import Link from "next/link";

const pages = [
  { n: "3", t: "Purchase fees, spreads & withdrawal fees", items: ["Spread: gap between market price and your quote", "Trading / purchase fee", "Withdrawal / network fee", "How much BTC do I actually receive?"] },
  { n: "5", t: "Recovery phrase security", items: ["12 or 24 words = full access", "Write it down offline", "Never type it into a website", "No screenshots or cloud notes"] },
  { n: "7", t: "Common scam warning signs", items: ["Guaranteed returns", "\"Support\" asking for your phrase", "Fake airdrops & look-alike links", "Urgency = pause and verify"] },
];

export default function ChecklistSamples() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {pages.map((p, i) => (
        <Link key={p.n} href="/checklist/"
          className={`group block bg-white rounded-xl border border-gray-200 shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${i === 1 ? "xl:-translate-y-2" : ""}`}>
          <p className="text-[11px] font-semibold text-gray-400 mb-1">SAMPLE PAGE · SECTION {p.n}</p>
          <p className="font-bold text-bitcoin-orange mb-3 leading-snug">{p.t}</p>
          <ul className="space-y-1.5">
            {p.items.map((it) => (
              <li key={it} className="flex gap-2 text-sm text-gray-700"><span aria-hidden className="text-gray-400">☐</span>{it}</li>
            ))}
          </ul>
          <p className="text-xs text-gray-500 mt-4 group-hover:text-bitcoin-orange">Read the full checklist →</p>
        </Link>
      ))}
    </div>
  );
}
