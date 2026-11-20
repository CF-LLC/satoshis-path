'use client';

import { useState } from "react";
import { ASSET_BASE, CHECKLIST_FORM_ACTION, CHECKLIST_FORM_NAME } from "@/config/site";
import { CHECKLIST_SIGNUP_BLURB, CHECKLIST_SIGNUP_FOOTNOTE, CHECKLIST_SUCCESS_MESSAGE } from "@/lib/checklist-email";

type Props = {
  source?: string;
  title?: string;
  blurb?: string;
  compact?: boolean;
  dark?: boolean;
};

export default function EmailSignup({
  source = "site",
  title = "Get the free Bitcoin starter checklist",
  blurb = CHECKLIST_SIGNUP_BLURB,
  compact = false,
  dark = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const id = `email-${source}`;
  const honeyId = `company-website-${source}`;

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    const honey = String(new FormData(e.currentTarget).get("bot-field") || "").trim();
    setStatus("loading");
    if (honey) {
      setStatus("success");
      setMessage(CHECKLIST_SUCCESS_MESSAGE);
      window.location.href = `${ASSET_BASE}/thank-you/`;
      return;
    }
    try {
      const res = await fetch(CHECKLIST_FORM_ACTION, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": CHECKLIST_FORM_NAME,
          email,
          source,
        }).toString(),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMessage(CHECKLIST_SUCCESS_MESSAGE);
      window.location.href = `${ASSET_BASE}/thank-you/`;
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again, or read the checklist online.");
    }
  };

  const text = dark ? "text-white" : "text-black";
  const sub = dark ? "text-gray-300" : "text-gray-600";

  return (
    <div
      className={
        compact
          ? ""
          : `${dark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"} rounded-2xl border shadow-lg p-6 md:p-7`
      }
    >
      {!compact && (
        <>
          <h3 className={`text-xl font-bold ${text} mb-1`}>{title}</h3>
          <p className={`${sub} text-sm mb-4`}>{blurb}</p>
        </>
      )}
      <form onSubmit={submit} className={`flex ${compact ? "flex-row" : "flex-col sm:flex-row"} gap-2`} noValidate>
        <input type="hidden" name="form-name" value={CHECKLIST_FORM_NAME} />
        <p className="hidden" aria-hidden="true">
          <label htmlFor={honeyId}>Company website</label>
          <input id={honeyId} name="bot-field" tabIndex={-1} autoComplete="off" />
        </p>
        <label htmlFor={id} className="sr-only">Email address</label>
        <input
          id={id}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          disabled={status === "loading"}
          className="flex-1 min-w-0 px-4 py-3 text-base rounded-xl border border-gray-300 bg-white text-black text-base focus:outline-none focus:ring-2 focus:ring-bitcoin-orange"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-bitcoin-orange text-black font-semibold px-5 py-3 rounded-xl hover:bg-orange-400 transition-colors disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "Saving…" : compact ? "Join the list" : "Save my email"}
        </button>
      </form>
      {message && (
        <p role="status" className={`text-sm mt-2 ${status === "success" ? "text-green-600" : dark ? "text-orange-200" : "text-red-700"}`}>
          {message}{" "}
          {status === "error" && (
            <a href={`${ASSET_BASE}/checklist/`} className="underline font-medium">Open checklist</a>
          )}
        </p>
      )}
      {!compact && (
        <p className={`text-xs mt-3 ${dark ? "text-gray-400" : "text-gray-500"}`}>
          {CHECKLIST_SIGNUP_FOOTNOTE}
        </p>
      )}
    </div>
  );
}
