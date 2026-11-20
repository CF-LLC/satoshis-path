import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import {
  CHECKLIST_EMAIL_SOURCES,
  CHECKLIST_EMAIL_SUBJECT,
  CHECKLIST_FORM_NAME,
  CHECKLIST_HOME_LIST_COPY,
  CHECKLIST_SECTIONS,
  CHECKLIST_SIGNUP_BLURB,
  CHECKLIST_SIGNUP_FOOTNOTE,
  CHECKLIST_SUCCESS_MESSAGE,
  CHECKLIST_THANKS_ABOUT,
  CHECKLIST_THANKS_BODY,
  DEFAULT_SITE_URL,
  buildChecklistEmail,
  deliverChecklistEmail,
  isChecklistEmailSendEnabled,
  siteUrlFromEnv,
} from "./checklist-email.ts";

test("sending stays disabled unless the flag is exactly true", () => {
  assert.equal(isChecklistEmailSendEnabled({}), false);
  assert.equal(isChecklistEmailSendEnabled({ CHECKLIST_EMAIL_SEND_ENABLED: "false" }), false);
  assert.equal(isChecklistEmailSendEnabled({ CHECKLIST_EMAIL_SEND_ENABLED: "1" }), false);
  assert.equal(isChecklistEmailSendEnabled({ CHECKLIST_EMAIL_SEND_ENABLED: "yes" }), false);
  assert.equal(isChecklistEmailSendEnabled({ CHECKLIST_EMAIL_SEND_ENABLED: "TRUE" }), false);
  assert.equal(isChecklistEmailSendEnabled({ CHECKLIST_EMAIL_SEND_ENABLED: "true" }), true);
});

test("never uses the unregistered .com domain", () => {
  assert.equal(siteUrlFromEnv({ CHECKLIST_EMAIL_SITE_URL: "https://satoshispath.com" }), DEFAULT_SITE_URL);
  const built = buildChecklistEmail({ CHECKLIST_EMAIL_SITE_URL: "https://satoshispath.com" });
  assert.equal(built.text.includes("satoshispath.com"), false);
  assert.equal(built.html.includes("satoshispath.com"), false);
  assert.match(built.text, /https:\/\/satoshispath\.netlify\.app\/checklist\//);
  assert.match(built.text, /https:\/\/satoshispath\.netlify\.app\/tracker\//);
});

test("email delivers the nine-section checklist, links the $17 toolkit, and cites a source for each claim area", () => {
  const built = buildChecklistEmail();
  assert.equal(built.subject, CHECKLIST_EMAIL_SUBJECT);
  assert.equal(CHECKLIST_SECTIONS.length, 9);
  for (const section of CHECKLIST_SECTIONS) {
    assert.match(built.text, new RegExp(section.heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.match(built.html, new RegExp(section.heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.match(built.text, /\$17 one-time/);
  assert.match(built.text, /not tax software/i);
  assert.match(built.text, /not financial, tax, or investment advice/i);
  assert.match(built.text, /21 million/);
  assert.match(built.text, /100,000,000 satoshis/);
  assert.ok(CHECKLIST_EMAIL_SOURCES.length >= 6);
  for (const source of CHECKLIST_EMAIL_SOURCES) {
    assert.match(built.text, new RegExp(source.url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    assert.ok(source.url.startsWith("https://"));
  }
  assert.ok(built.text.includes("A physical mailing address will be added"));
});

test("deliverChecklistEmail does not send when the flag is off, even if a transport and keys are present", async () => {
  let called = 0;
  const result = await deliverChecklistEmail({
    to: "reader@example.com",
    env: {
      CHECKLIST_EMAIL_SEND_ENABLED: "false",
      RESEND_API_KEY: "re_test",
      CHECKLIST_EMAIL_FROM: "Satoshi's Path <checklist@example.com>",
      CHECKLIST_EMAIL_PHYSICAL_ADDRESS: "123 Example St, City, ST 00000",
    },
    sendViaResend: async () => {
      called += 1;
      return { id: "should-not-run" };
    },
  });
  assert.equal(result.status, "disabled");
  assert.equal(called, 0);
});

test("even with the flag on, missing sender details stay in dry-run and do not send", async () => {
  let called = 0;
  const result = await deliverChecklistEmail({
    to: "reader@example.com",
    env: { CHECKLIST_EMAIL_SEND_ENABLED: "true", RESEND_API_KEY: "re_test" },
    sendViaResend: async () => {
      called += 1;
      return { id: "should-not-run" };
    },
  });
  assert.equal(result.status, "dry-run");
  assert.equal(called, 0);
});

test("signup and thank-you copy is neutral and does not claim a message already went out", () => {
  assert.match(CHECKLIST_SIGNUP_BLURB, /We'll email your checklist soon/);
  assert.match(CHECKLIST_SIGNUP_FOOTNOTE, /we'll email it to you soon/i);
  assert.match(CHECKLIST_SUCCESS_MESSAGE, /soon/);
  assert.match(CHECKLIST_THANKS_BODY, /Nothing was emailed just now/);
  assert.match(CHECKLIST_THANKS_ABOUT, /not turned on yet/);
  assert.equal(/welcome series/i.test(CHECKLIST_SIGNUP_BLURB), false);
  const files = [
    "src/components/EmailSignup.tsx",
    "src/app/thank-you/page.tsx",
    "src/app/page.tsx",
    "src/app/tracker/page.tsx",
    "src/config/site.ts",
  ];
  for (const file of files) {
    const src = readFileSync(new URL(`../../${file}`, import.meta.url), "utf8");
    assert.equal(/we are not sending a welcome series right now/i.test(src), false, file);
    assert.equal(/we are not sending it by email right now/i.test(src), false, file);
  }
  const signup = readFileSync(new URL("../../src/components/EmailSignup.tsx", import.meta.url), "utf8");
  assert.match(signup, /CHECKLIST_SIGNUP_BLURB/);
  assert.match(signup, /CHECKLIST_SUCCESS_MESSAGE/);
  const thanks = readFileSync(new URL("../../src/app/thank-you/page.tsx", import.meta.url), "utf8");
  assert.match(thanks, /CHECKLIST_THANKS_BODY/);
  const home = readFileSync(new URL("../../src/app/page.tsx", import.meta.url), "utf8");
  assert.match(home, /CHECKLIST_HOME_LIST_COPY/);
  const site = readFileSync(new URL("../../src/config/site.ts", import.meta.url), "utf8");
  assert.match(site, /CHECKLIST_FORM_NAME/);
  assert.equal(CHECKLIST_FORM_NAME, "bitcoin-starter-checklist");
  assert.match(site, /export const CHECKLIST_FORM_NAME = "bitcoin-starter-checklist"/);
});
