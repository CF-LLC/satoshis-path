/**
 * Single source of truth for the public site URL.
 * To move to a custom domain: set SITE_URL (or NEXT_PUBLIC_SITE_URL at build time)
 * to e.g. "https://satoshispath.com" and copy deploy/CNAME.example to public/CNAME.
 * basePath, canonical URLs, sitemap, robots and Open Graph URLs all derive from it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://cf-llc.github.io/satoshis-path"
).replace(/\/+$/, "");

/** Path prefix derived from SITE_URL ("/satoshis-path" on GitHub Pages, "" on a custom domain). */
export const BASE_PATH = new URL(SITE_URL).pathname.replace(/\/+$/, "");

/** Prefix used for raw <a href> / asset paths (Next <Link> adds basePath itself). */
export const ASSET_BASE = process.env.NODE_ENV === "production" ? BASE_PATH : "";

/** Absolute URL for a site path, e.g. abs("/guides/") */
export const abs = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const SITE_NAME = "Satoshi's Path";
export const OWNER = "Cooper Featherstone LLC";
export const CONTACT_EMAIL = "satoshispath@gmail.com";

/** Toolkit checkout URL. Empty = no live checkout exists yet (button links to the toolkit page). */
export const TOOLKIT_CHECKOUT_URL = process.env.NEXT_PUBLIC_TOOLKIT_CHECKOUT_URL || "";

/** Public form endpoint for email signup (Formspree/Buttondown/ConvertKit). Empty = not connected. */
export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

/** Optional cookieless analytics (GoatCounter code, e.g. "satoshispath"). Empty = disabled. */
export const GOATCOUNTER_CODE = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE || "";

export const OG_IMAGE = abs("/og.png");
