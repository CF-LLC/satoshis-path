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

/** Toolkit checkout: Stripe Payment Link (CF LLC). After payment Stripe redirects to sp-api.spockshop.com/success, which serves the file (Cloudflare Worker satoshis-path-delivery). */
export const TOOLKIT_CHECKOUT_URL = process.env.NEXT_PUBLIC_TOOLKIT_CHECKOUT_URL || "https://buy.stripe.com/9B614n7wo4G5c6mbob4c80S";

/**
 * Checklist email capture is a Netlify Form. A Resend/Netlify function can email
 * the checklist, but live sending stays off until CHECKLIST_EMAIL_SEND_ENABLED=true
 * (see src/lib/checklist-email.ts). Submissions are still saved in the Netlify dashboard.
 */
export const CHECKLIST_FORM_NAME = "bitcoin-starter-checklist";
export const CHECKLIST_FORM_ACTION = `${ASSET_BASE || ""}/` || "/";


/** Optional cookieless analytics (GoatCounter code, e.g. "satoshispath"). Empty = disabled. */
export const GOATCOUNTER_CODE = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE || "";

export const OG_IMAGE = abs("/og.png");
