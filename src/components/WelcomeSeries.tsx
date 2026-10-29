const emails = [
  { d: "Right away", t: "Your checklist, plus the 3 numbers to look at before any purchase." },
  { d: "Day 1", t: "Spreads vs. fees: a worked (hypothetical) example of where small buys lose money." },
  { d: "Day 3", t: "Exchange or wallet? Recovery phrases explained without the jargon." },
  { d: "Day 5", t: "Track what you buy in five minutes a month, and why average cost matters." },
  { d: "Day 7", t: "How to compare apps and tools yourself, with honest disclosures." },
];

export default function WelcomeSeries() {
  return (
    <ol className="relative border-l-2 border-orange-200 ml-3 space-y-5">
      {emails.map((e, i) => (
        <li key={e.d} className="pl-6 relative">
          <span className="absolute -left-[13px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-bitcoin-orange text-xs font-bold text-black">{i + 1}</span>
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{e.d}</p>
          <p className="text-gray-800">{e.t}</p>
        </li>
      ))}
    </ol>
  );
}
