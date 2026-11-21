import { OWNER, SITE_NAME, SITE_URL } from "./site";

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        "name": OWNER,
        "url": SITE_URL,
        "email": "satoshispath@gmail.com",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        "name": SITE_NAME,
        "url": SITE_URL,
        "description": "Bitcoin basics for ordinary budgets. Educational only — not financial advice.",
        "publisher": { "@id": `${SITE_URL}/#organization` },
        "inLanguage": "en-US",
      },
    ],
  };
}
