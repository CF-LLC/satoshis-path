import Link from "next/link";
import { partnerLink, isAffiliate } from "@/config/affiliates";
import { CHECKED_ON, WALLETS } from "@/data/comparisons";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";

export default function HardwareWalletComparison() {
  return (
    <section id="hardware-wallets" className="max-w-6xl mx-auto px-4 py-12 space-y-6 scroll-mt-24">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Hardware wallets compared</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">A hardware wallet keeps your bitcoin keys off your phone and computer. Here&apos;s how popular models differ, from each maker&apos;s own product page (checked {CHECKED_ON}). Prices change, so we link to the official store instead of quoting them. Always buy direct from the maker, never second-hand.</p>
      </div>
      <AffiliateDisclosure keys={[...new Set(WALLETS.map((w) => w.key))]} />
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg p-4 md:p-6">
        <table className="w-full text-sm text-left" data-wallet-table>
          <thead className="text-gray-600 border-b">
            <tr><th className="py-2 pr-4">Wallet</th><th className="py-2 pr-4">Bitcoin-only?</th><th className="py-2 pr-4">How it connects</th><th className="py-2 pr-4">Notable</th><th className="py-2">Official page</th></tr>
          </thead>
          <tbody>
            {WALLETS.map((w) => (
              <tr key={w.name} className="border-b last:border-0 align-top">
                <td className="py-3 pr-4"><span className="font-semibold text-gray-900">{w.name}</span><br /><span className="text-xs text-gray-500">{w.maker}</span></td>
                <td className="py-3 pr-4">{w.bitcoinOnly}</td>
                <td className="py-3 pr-4">{w.connection}</td>
                <td className="py-3 pr-4">{w.facts.join(" · ")}</td>
                <td className="py-3"><a href={partnerLink(w.key, w.url)} target="_blank" rel={isAffiliate(w.key) ? "sponsored noopener noreferrer" : "noopener noreferrer"} className="text-orange-700 underline">{new URL(w.url).hostname}{isAffiliate(w.key) ? " (affiliate)" : ""}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-800">
        <div className="bg-white rounded-2xl shadow p-5"><h3 className="font-bold mb-1">New to this?</h3><p>A USB wallet with a clear screen (for example Trezor Safe 3 or BitBox02) is the simplest start.</p></div>
        <div className="bg-white rounded-2xl shadow p-5"><h3 className="font-bold mb-1">Want air-gapped?</h3><p>COLDCARD and Jade can sign transactions without ever plugging into a computer, using a microSD card or QR codes.</p></div>
        <div className="bg-white rounded-2xl shadow p-5"><h3 className="font-bold mb-1">Bitcoin only?</h3><p>Bitcoin-only firmware has less code. Trezor and BitBox sell Bitcoin-only editions; COLDCARD is Bitcoin-only.</p></div>
      </div>
      <p className="text-center text-sm text-gray-600">Haven&apos;t bought any bitcoin yet? <Link href="/buy-bitcoin/" className="underline">Compare where to buy</Link>.</p>
    </section>
  );
}
