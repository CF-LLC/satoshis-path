/**
 * Checklist signup copy and the automatic checklist email.
 *
 * HARD RULE: live sending stays off until Cooper approves the copy and
 * a verified Resend sender is configured. isChecklistEmailSendEnabled()
 * is true only when CHECKLIST_EMAIL_SEND_ENABLED is the exact string "true".
 */

export const CHECKLIST_FORM_NAME = "bitcoin-starter-checklist";

export const DEFAULT_SITE_URL = "https://satoshispath.netlify.app";

/** Neutral signup copy: does not promise that an email already went out. */
export const CHECKLIST_SIGNUP_BLURB =
  "Leave your email to join the list. We'll email your checklist soon. You can also read it on this site now.";

export const CHECKLIST_SIGNUP_FOOTNOTE =
  "From Satoshi's Path (Cooper Featherstone LLC). We never sell your email. The checklist is on this site now; we'll email it to you soon.";

export const CHECKLIST_SUCCESS_MESSAGE =
  "You're on the list. We'll email your checklist soon. You can read it on this site now.";

export const CHECKLIST_THANKS_BODY =
  "Your email was saved to the list. We'll email your checklist soon. You can read the beginner checklist on this site now. Nothing was emailed just now.";

export const CHECKLIST_THANKS_ABOUT =
  "Your address is stored on this site's form submissions (Netlify Forms). Checklist email sending is built but not turned on yet, so nothing was emailed just now. When sending is on, the message will include a way to unsubscribe.";

export const CHECKLIST_HOME_LIST_COPY =
  "Leave your email if you want to join the Satoshi's Path list. We'll email your checklist soon. The beginner checklist — fees, wallets, recovery phrases, scam warning signs, and simple record-keeping — is on this site for anyone to read, with or without an email.";

export const CHECKLIST_EMAIL_SUBJECT = "Your Bitcoin starter checklist from Satoshi's Path";

/** Public pages this email may link. Never use satoshispath.com (it is not registered). */
export const CHECKLIST_PATH = "/checklist/";
export const TOOLKIT_PATH = "/tracker/";
export const TOOLKIT_PRICE = "$17";
export const TOOLKIT_PRICE_SOURCE = `${DEFAULT_SITE_URL}${TOOLKIT_PATH}`;

/**
 * Sourced claims used in the email. Every factual claim in the body must
 * have a source here. The $17 toolkit price is the site's own product page.
 */
export const CHECKLIST_EMAIL_SOURCES: { claim: string; source: string; url: string }[] = [
  {
    claim: "Bitcoin has a fixed supply of 21 million coins, and 1 bitcoin equals 100,000,000 satoshis.",
    source: "Bitcoin.org FAQ and Vocabulary",
    url: "https://bitcoin.org/en/faq",
  },
  {
    claim: "1 bitcoin = 100,000,000 satoshis (also listed in Bitcoin.org's vocabulary).",
    source: "Bitcoin.org Vocabulary — Satoshi",
    url: "https://bitcoin.org/en/vocabulary",
  },
  {
    claim: "Protect wallet keys and recovery phrases; do not share them or store them in screenshots or cloud notes.",
    source: "Bitcoin.org — Secure your wallet",
    url: "https://bitcoin.org/en/secure-your-wallet",
  },
  {
    claim: "Bitcoin can lose value. This is educational, not financial advice. Do your own research.",
    source: "Bitcoin.org — Some things you need to know",
    url: "https://bitcoin.org/en/you-need-to-know",
  },
  {
    claim: "The nine-section beginner checklist text itself.",
    source: "Satoshi's Path checklist (dated October 2026)",
    url: `${DEFAULT_SITE_URL}${CHECKLIST_PATH}`,
  },
  {
    claim: "The optional Bitcoin Starter Toolkit is $17 one-time, a spreadsheet for purchases, fees, wallets, and a simple plan, and is not tax software.",
    source: "Satoshi's Path Starter Toolkit page",
    url: TOOLKIT_PRICE_SOURCE,
  },
];

export type ChecklistSection = { heading: string; items: string[] };

/** Checklist body, matching the October 2026 site checklist. */
export const CHECKLIST_SECTIONS: ChecklistSection[] = [
  {
    heading: "1. Bitcoin and satoshis",
    items: [
      "Bitcoin (BTC) is a digital currency with a fixed supply of 21 million coins.",
      "One bitcoin is divisible into 100,000,000 satoshis (sats). You can buy a fraction of a bitcoin.",
      "“Stacking sats” simply means buying or earning small amounts of Bitcoin over time.",
    ],
  },
  {
    heading: "2. Buying fractions of Bitcoin",
    items: [
      "Most platforms let you buy $5, $10, or $50 worth of Bitcoin — you do not need a whole coin.",
      "Focus on the total cash you pay and the amount of Bitcoin you receive, not just the headline price.",
    ],
  },
  {
    heading: "3. Purchase fees, spreads, and withdrawal fees",
    items: [
      "Spread: the difference between the market price and the price the app charges you. Often the largest hidden cost for small purchases.",
      "Trading / purchase fee: a percentage or flat fee charged when you buy.",
      "Withdrawal / network fee: charged when you move Bitcoin from an exchange to your own wallet. This is separate from the purchase cost.",
      "Always ask: “How much Bitcoin will I actually receive for the dollars I spend?”",
    ],
  },
  {
    heading: "4. Exchange accounts vs. wallets",
    items: [
      "An exchange account is convenient for buying, but the company holds the keys.",
      "A self-custody wallet means you control the recovery phrase. You are responsible for security.",
      "Many beginners start on an exchange, then learn self-custody when they are ready. There is no single “right” day to move.",
    ],
  },
  {
    heading: "5. Recovery phrase security",
    items: [
      "A recovery phrase (seed phrase) is usually 12 or 24 words. Anyone who has it can take the funds.",
      "Write it down offline. Do not screenshot it, email it, or store it in cloud notes.",
      "Never type your recovery phrase into a website that asks for it “to verify” or “to claim.”",
    ],
  },
  {
    heading: "6. Checking addresses and networks",
    items: [
      "Always double-check the full receiving address before sending. A single wrong character can mean permanent loss.",
      "Confirm you are sending on the correct network (Bitcoin mainnet, not another chain).",
      "Start with a small test transfer when using a new wallet or exchange.",
    ],
  },
  {
    heading: "7. Common scam warning signs",
    items: [
      "Guaranteed returns, “risk-free” profits, or pressure to act immediately.",
      "Someone DM’ing you to “help recover” funds or asking for your recovery phrase.",
      "Fake support accounts, airdrop claims that require a seed phrase, or links that look almost official.",
      "If it feels urgent or too good to be true, pause and verify through official channels.",
    ],
  },
  {
    heading: "8. Recording purchases and fees",
    items: [
      "Keep a simple record of: date, amount of Bitcoin received, total cash paid, fees, and platform.",
      "Do not double-count fees. Put the full amount you paid in one place.",
      "A basic spreadsheet is enough for personal tracking. (Satoshi’s Path offers an optional toolkit if you want a ready-made one.)",
    ],
  },
  {
    heading: "9. Bitcoin can lose value",
    items: [
      "Bitcoin’s price can drop significantly and stay down for long periods.",
      "Only use money you can afford to leave untouched. There are no guaranteed returns.",
      "This checklist is educational. It is not a recommendation to buy or sell.",
    ],
  },
];

export type EnvLike = Record<string, string | undefined>;

/** Live send is off unless this env var is exactly "true". */
export function isChecklistEmailSendEnabled(env: EnvLike = process.env): boolean {
  return env.CHECKLIST_EMAIL_SEND_ENABLED === "true";
}

export function siteUrlFromEnv(env: EnvLike = process.env): string {
  const raw = (env.CHECKLIST_EMAIL_SITE_URL || env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, "");
  if (raw.includes("satoshispath.com")) return DEFAULT_SITE_URL;
  return raw || DEFAULT_SITE_URL;
}

export function absUrl(path: string, env: EnvLike = process.env): string {
  const base = siteUrlFromEnv(env);
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export type BuiltChecklistEmail = {
  subject: string;
  text: string;
  html: string;
  from: string | null;
  physicalAddress: string | null;
};

export function buildChecklistEmail(env: EnvLike = process.env): BuiltChecklistEmail {
  const site = siteUrlFromEnv(env);
  const checklistUrl = absUrl(CHECKLIST_PATH, env);
  const toolkitUrl = absUrl(TOOLKIT_PATH, env);
  const from = (env.CHECKLIST_EMAIL_FROM || "").trim() || null;
  const physicalAddress = (env.CHECKLIST_EMAIL_PHYSICAL_ADDRESS || "").trim() || null;
  const contact = "satoshispath@gmail.com";

  const sectionText = CHECKLIST_SECTIONS.map((section) => {
    const items = section.items.map((item) => `- ${item}`).join("\n");
    return `${section.heading}\n${items}`;
  }).join("\n\n");

  const sourcesText = CHECKLIST_EMAIL_SOURCES.map((s) => `- ${s.claim}\n  Source: ${s.source} — ${s.url}`).join("\n");

  const addressLine = physicalAddress
    ? physicalAddress
    : "A physical mailing address will be added to this footer before any email is sent (CAN-SPAM).";

  const text = [
    "Thanks for joining the Satoshi's Path list.",
    "",
    "Here is the Bitcoin beginner checklist. You can also read it on the site anytime:",
    checklistUrl,
    "",
    "This short checklist helps you understand Bitcoin without pressure to buy. Nothing here is financial advice. Bitcoin can lose value.",
    "",
    sectionText,
    "",
    "Optional: the Bitcoin Starter Toolkit is a $17 one-time spreadsheet for tracking purchases, fees, wallets, and a simple plan. It is not tax software, and it is not required.",
    `Preview or buy the toolkit: ${toolkitUrl}`,
    "",
    "This is educational only. It is not financial, tax, or investment advice. Bitcoin can lose value. Decisions about your money are yours.",
    "",
    "Sources",
    sourcesText,
    "",
    "Satoshi's Path is run by Cooper Featherstone LLC.",
    `Questions: ${contact}`,
    "",
    `You received this because you signed up at ${site}. To stop future messages, reply to ${contact} and ask to be removed, or use the unsubscribe link once one is added.`,
    addressLine,
  ].join("\n");

  const sectionHtml = CHECKLIST_SECTIONS.map((section) => {
    const items = section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    return `<h2 style="font-size:16px;margin:24px 0 8px;">${escapeHtml(section.heading)}</h2><ul style="padding-left:20px;margin:0;">${items}</ul>`;
  }).join("");

  const sourcesHtml = CHECKLIST_EMAIL_SOURCES.map(
    (s) => `<li>${escapeHtml(s.claim)} <br><span style="color:#555;">Source: ${escapeHtml(s.source)} — <a href="${escapeAttr(s.url)}">${escapeHtml(s.url)}</a></span></li>`,
  ).join("");

  const html = `<!DOCTYPE html>
<html><body style="font-family:Georgia,serif;line-height:1.5;color:#111;max-width:640px;">
<p>Thanks for joining the Satoshi's Path list.</p>
<p>Here is the Bitcoin beginner checklist. You can also read it on the site anytime:<br>
<a href="${escapeAttr(checklistUrl)}">${escapeHtml(checklistUrl)}</a></p>
<p>This short checklist helps you understand Bitcoin without pressure to buy. Nothing here is financial advice. Bitcoin can lose value.</p>
${sectionHtml}
<p style="margin-top:24px;"><strong>Optional:</strong> the Bitcoin Starter Toolkit is a $17 one-time spreadsheet for tracking purchases, fees, wallets, and a simple plan. It is not tax software, and it is not required.<br>
<a href="${escapeAttr(toolkitUrl)}">Preview or buy the toolkit</a></p>
<p>This is educational only. It is not financial, tax, or investment advice. Bitcoin can lose value. Decisions about your money are yours.</p>
<h2 style="font-size:16px;margin:24px 0 8px;">Sources</h2>
<ul style="padding-left:20px;">${sourcesHtml}</ul>
<p>Satoshi's Path is run by Cooper Featherstone LLC.<br>Questions: <a href="mailto:${contact}">${contact}</a></p>
<p style="font-size:12px;color:#555;">You received this because you signed up at ${escapeHtml(site)}. To stop future messages, reply to ${escapeHtml(contact)} and ask to be removed, or use the unsubscribe link once one is added.<br>${escapeHtml(addressLine)}</p>
</body></html>`;

  return { subject: CHECKLIST_EMAIL_SUBJECT, text, html, from, physicalAddress };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value: string): string {
  return escapeHtml(value);
}

export type DeliverResult =
  | { status: "disabled"; reason: string; email: BuiltChecklistEmail }
  | { status: "dry-run"; reason: string; email: BuiltChecklistEmail }
  | { status: "sent"; id: string; email: BuiltChecklistEmail }
  | { status: "error"; reason: string; email: BuiltChecklistEmail };

export type DeliverInput = {
  to: string;
  env?: EnvLike;
  /** Injected for tests. Never used when sending is disabled. */
  sendViaResend?: (payload: { from: string; to: string; subject: string; text: string; html: string; apiKey: string }) => Promise<{ id: string }>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function deliverChecklistEmail({ to, env = process.env, sendViaResend }: DeliverInput): Promise<DeliverResult> {
  const email = buildChecklistEmail(env);
  const recipient = (to || "").trim();
  if (!EMAIL_RE.test(recipient)) {
    return { status: "error", reason: "invalid-recipient", email };
  }

  if (!isChecklistEmailSendEnabled(env)) {
    return {
      status: "disabled",
      reason: "CHECKLIST_EMAIL_SEND_ENABLED is not exactly 'true'; no email was sent.",
      email,
    };
  }

  const apiKey = (env.RESEND_API_KEY || "").trim();
  if (!email.from || !apiKey || !email.physicalAddress) {
    return {
      status: "dry-run",
      reason:
        "Sending is flagged on, but RESEND_API_KEY, CHECKLIST_EMAIL_FROM, or CHECKLIST_EMAIL_PHYSICAL_ADDRESS is missing, so nothing was sent.",
      email,
    };
  }

  if (!sendViaResend) {
    return {
      status: "dry-run",
      reason: "No Resend transport was provided; refusing to send.",
      email,
    };
  }

  const sent = await sendViaResend({
    from: email.from,
    to: recipient,
    subject: email.subject,
    text: email.text,
    html: email.html,
    apiKey,
  });
  return { status: "sent", id: sent.id, email };
}

/** Resend API transport. Not wired unless deliverChecklistEmail is called with this function AND the send flag is on. */
export async function resendTransport(payload: {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
  apiKey: string;
}): Promise<{ id: string }> {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${payload.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: payload.from,
      to: [payload.to],
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
    }),
  });
  const body = (await res.json()) as { id?: string; message?: string };
  if (!res.ok || !body.id) {
    throw new Error(body.message || `Resend error ${res.status}`);
  }
  return { id: body.id };
}
