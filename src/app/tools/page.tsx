import ToolsDirectory from "@/components/ToolsDirectory";
import HardwareWalletComparison from "@/components/HardwareWalletComparison";
import { pageMeta } from "@/config/meta";

export const metadata = pageMeta("/tools/", "Bitcoin Tools & Hardware Wallets Compared | Satoshi's Path", "Free bitcoin calculators and trackers, plus an honest hardware wallet comparison: Trezor, Ledger, COLDCARD, BitBox02 and Jade, with official sources.");

export default function ToolsPage() {
  return (
    <>
      <p className="bg-orange-50 px-4 pt-4 text-center text-sm text-gray-700" data-referral-note>Heads up: some earning-app links in the directory below are referral links, so Satoshi&apos;s Path may get a bonus if you sign up. The hardware wallet comparison further down uses plain official links.</p>
      <ToolsDirectory />
      <div className="bg-linear-to-br from-orange-50 to-yellow-50"><HardwareWalletComparison /></div>
    </>
  );
}
