import type { Metadata } from "next";
import { abs } from "@/config/site";
import ToolsDirectory from "@/components/ToolsDirectory";
import HardwareWalletComparison from "@/components/HardwareWalletComparison";

export const metadata: Metadata = {
  title: "Bitcoin Tools & Hardware Wallets Compared | Satoshi's Path",
  description: "Free bitcoin calculators and trackers, plus an honest hardware wallet comparison: Trezor, Ledger, COLDCARD, BitBox02 and Jade, with official sources.",
  alternates: { canonical: abs("/tools/") },
  openGraph: { title: "Bitcoin Tools & Hardware Wallets Compared", url: abs("/tools/") },
};

export default function ToolsPage() {
  return (
    <>
      <p className="bg-orange-50 px-4 pt-4 text-center text-sm text-gray-700" data-referral-note>Heads up: some earning-app links in the directory below are referral links, so Satoshi&apos;s Path may get a bonus if you sign up. The hardware wallet comparison further down uses plain official links.</p>
      <ToolsDirectory />
      <div className="bg-linear-to-br from-orange-50 to-yellow-50"><HardwareWalletComparison /></div>
    </>
  );
}
