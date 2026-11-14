/**
 * THE one place for affiliate / referral links on Satoshi's Path.
 *
 * Every partner link on Buy Bitcoin, BTC Tools and Merch goes through partnerLink().
 * Empty string = the plain official link is used (no tracking, no tag).
 * To turn on an affiliate link, paste the FULL link the partner's affiliate program gave you, e.g.
 *   trezor: "https://affil.trezor.io/aff_c?offer_id=...&aff_id=YOUR_ID",
 * Never put a guessed, placeholder or made-up tag here.
 */
export const AFFILIATE_LINKS: Record<string, string> = {
  // Exchanges
  coinbase: "",
  kraken: "",
  gemini: "",
  river: "",
  swan: "",
  strike: "",
  cashapp: "",
  // Hardware wallets
  trezor: "",
  ledger: "",
  coldcard: "",
  bitbox: "",
  jade: "",
};

export function partnerLink(key: string, officialUrl: string): string {
  const v = AFFILIATE_LINKS[key]?.trim();
  return v ? v : officialUrl;
}

export const isAffiliate = (key: string) => Boolean(AFFILIATE_LINKS[key]?.trim());
export const anyAffiliate = (keys: string[]) => keys.some(isAffiliate);

/** SpockShop Daily Drop (CF LLC's merch shop). */
export const SPOCKSHOP_DROP_URL = "https://spockshop.com/drop?utm_source=satoshispath&utm_medium=referral&utm_campaign=btc-merch";
