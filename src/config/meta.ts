import type { Metadata } from "next";
import { abs, OG_IMAGE, SITE_NAME } from "./site";

/** Full per-page metadata: title, description, canonical, Open Graph and Twitter, all from SITE_URL. */
export function pageMeta(path: string, title: string, description: string, type: "website" | "article" = "website"): Metadata {
  const url = abs(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type, siteName: SITE_NAME, images: [{ url: OG_IMAGE, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] },
  };
}
