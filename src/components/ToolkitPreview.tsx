/** HTML rendering of the toolkit's 01 Dashboard tab using the toolkit's own example data. */
const tabs = ["01 Dashboard", "02 Purchases", "03 Fee Log", "04 Rewards", "05 Transfers", "06 Wallets", "07 Plan"];
const stats = [
  { k: "BTC purchased", v: "0.00565" },
  { k: "Cash spent (incl. fees)", v: "$374.75" },
  { k: "Avg cost per BTC", v: "≈ $66,327" },
  { k: "Purchases logged", v: "5" },
];
const rows = [
  ["Jan 05", "Strike", "$50.00", "0.00078"],
  ["Feb 05", "River", "$50.00", "0.00074"],
  ["Mar 05", "Strike", "$75.00", "0.00113"],
  ["Apr 05", "Kraken", "$99.75", "0.00150"],
  ["May 05", "River", "$100.00", "0.00150"],
];

export default function ToolkitPreview() {
  return (
    <figure className="rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden" aria-label="Preview of the Starter Toolkit dashboard tab with example data">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400" /><span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-gray-500 truncate">Satoshi-Path-Bitcoin-Starter-Toolkit.xlsx</span>
      </div>
      <div className="p-4 md:p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {stats.map((s) => (
            <div key={s.k} className="rounded-xl bg-orange-50 border border-orange-100 p-3">
              <p className="text-[11px] uppercase tracking-wide text-gray-500">{s.k}</p>
              <p className="text-lg font-bold text-black">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs md:text-sm">
            <caption className="sr-only">Example purchase log</caption>
            <thead><tr className="text-left text-gray-500 border-b">
              <th className="py-1.5 pr-2 font-medium">Date</th><th className="pr-2 font-medium">Platform</th><th className="pr-2 font-medium">Paid</th><th className="font-medium">BTC</th>
            </tr></thead>
            <tbody>{rows.map((r) => (
              <tr key={r[0]} className="border-b border-gray-100 text-gray-700">
                {r.map((c, i) => <td key={i} className={`py-1.5 pr-2 ${i > 1 ? "font-mono" : ""}`}>{c}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      </div>
      <div className="flex gap-1 overflow-x-auto bg-gray-50 border-t border-gray-200 px-2 py-1.5">
        {tabs.map((t, i) => (
          <span key={t} className={`shrink-0 text-[11px] px-2.5 py-1 rounded ${i === 0 ? "bg-white shadow text-black font-semibold" : "text-gray-500"}`}>{t}</span>
        ))}
      </div>
      <figcaption className="text-[11px] text-gray-500 px-4 py-2 border-t border-gray-100">Example data shown. Yellow input cells and formulas are in the real file.</figcaption>
    </figure>
  );
}
