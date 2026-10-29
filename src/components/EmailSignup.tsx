'use client';

import { useState } from "react";
import { ASSET_BASE, FORM_ENDPOINT, OWNER } from "@/config/site";

type Props = {
  source?: string;
  title?: string;
  blurb?: string;
  compact?: boolean;
  dark?: boolean;
};

export default function EmailSignup({
  source = "site",
  title = "Get the free checklist by email",
  blurb = "The beginner checklist plus five short, practical emails. No hype. Unsubscribe anytime.",
  compact = false,
  dark = false,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const id = `email-${source}`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!FORM_ENDPOINT) {
      setStatus("error");
      setMessage("Email signup isn't connected yet. You can read the full checklist online right now.");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setMessage("You're on the list.");
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
        <label htmlFor={id} className="sr-only">Email address</label>
        <input
          id={id}
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
          {status === "loading" ? "Sending…" : compact ? "Send it" : "Send me the checklist"}
        </button>
      </form>
      {message && (
        <p role="status" className={`text-sm mt-2 ${status === "success" ? "text-green-600" : dark ? "text-orange-200" : "text-red-700"}`}>
          {message}{" "}
          {status === "error" && !FORM_ENDPOINT && (
            <a href={`${ASSET_BASE}/checklist/`} className="underline font-medium">Open checklist</a>
          )}
        </p>
      )}
      {!compact && (
        <p className={`text-xs mt-3 ${dark ? "text-gray-400" : "text-gray-500"}`}>
          From Satoshi&apos;s Path ({OWNER}). We never sell your email.
        </p>
      )}
    </div>
  );
}
