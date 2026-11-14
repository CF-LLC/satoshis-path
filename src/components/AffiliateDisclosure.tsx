import { anyAffiliate } from "@/config/affiliates";

/** Clear, always-visible disclosure. Wording adapts to whether any affiliate link is switched on. */
export default function AffiliateDisclosure({ keys }: { keys: string[] }) {
  const on = anyAffiliate(keys);
  return (
    <aside className="rounded-2xl border-2 border-orange-200 bg-orange-50 p-4 text-sm text-gray-800" data-affiliate-disclosure>
      <strong>Affiliate disclosure:</strong>{" "}
      {on
        ? "Some links in this comparison are affiliate links. If you sign up or buy through them, Satoshi's Path may earn a commission at no extra cost to you. It never changes what we write or the order of the list."
        : "Right now every link in this comparison goes straight to the company's official site, with no affiliate tracking. If we add affiliate links later, we'll say so here, and they won't change what we write."}{" "}
      Nothing here is financial advice. Facts were checked against each company's own site; fees, prices and availability change, so confirm on the official page before you buy.
    </aside>
  );
}
