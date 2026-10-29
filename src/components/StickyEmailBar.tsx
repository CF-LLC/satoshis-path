'use client';

import { useEffect, useState } from "react";
import EmailSignup from "./EmailSignup";

export default function StickyEmailBar() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("sp-bar-closed")) setClosed(true);
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (closed) return null;
  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!show}
    >
      <div className="mx-2 mb-2 rounded-2xl bg-gray-950/95 backdrop-blur border border-gray-800 shadow-2xl p-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <div className="flex items-center justify-between mb-2">
          <p className="text-white text-sm font-semibold">Free beginner checklist <span className="text-bitcoin-orange">by email</span></p>
          <button
            onClick={() => { sessionStorage.setItem("sp-bar-closed", "1"); setClosed(true); }}
            className="text-gray-400 hover:text-white text-lg leading-none px-2 py-1"
            aria-label="Dismiss email signup bar"
            tabIndex={show ? 0 : -1}
          >×</button>
        </div>
        <EmailSignup source="sticky-bar" compact dark />
      </div>
    </div>
  );
}
