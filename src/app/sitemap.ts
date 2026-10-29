import type { MetadataRoute } from "next";
import { abs } from "@/config/site";
import { guides } from "@/content/guides";

export const dynamic = "force-static";

const pages = [
  "/", "/checklist/", "/tracker/", "/guides/", "/recommendations/", "/tools/",
  "/tools/dca-calculator/", "/tools/fee-estimator/", "/tools/unit-converter/",
  "/tools/hodl-calculator/", "/tools/price-tracker/", "/about/", "/contact/", "/buy-bitcoin/",
  "/decentralized-wallet/", "/earn/", "/wallet-analyzer/", "/rabbit-hole/", "/community/",
  "/news/", "/videos/", "/endorsements/", "/merch/", "/personal-strategy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...pages.map((p) => ({ url: abs(p), lastModified: now, priority: p === "/" ? 1 : 0.7 })),
    ...guides.map((g) => ({ url: abs(`/guides/${g.slug}/`), lastModified: now, priority: 0.8 })),
  ];
}
