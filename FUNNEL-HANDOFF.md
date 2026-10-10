# Satoshi’s Path — First Version Handoff

**Date:** October 2026  
**Branch:** `funnel-v1`  
**Positioning:** Bitcoin basics for ordinary budgets  
**Primary CTA:** Get the free beginner checklist

---

## What was inspected

- Existing site: https://cf-llc.github.io/satoshis-path/
- Repo: https://github.com/CF-LLC/satoshis-path
- Stack: Next.js 16 (App Router) + TypeScript + Tailwind, static export to GitHub Pages (`basePath: /satoshis-path`)
- Existing referral links preserved in `data/referrals.json`
- Existing tools left intact and linked from the new homepage

---

## Files on this branch

| Path | Purpose |
|------|---------|
| `src/app/page.tsx` | New homepage |
| `src/app/checklist/page.tsx` | Web version of checklist |
| `src/app/thank-you/page.tsx` | Post-signup page |
| `src/app/tracker/page.tsx` | $17 Toolkit product page |
| `src/components/Navbar.tsx` | Updated nav |
| `FUNNEL-HANDOFF.md` | This file |

### Binary assets (in project artifacts — add to `public/`)

| File | Purpose |
|------|---------|
| `Bitcoin-Beginner-Checklist.pdf` | Free PDF checklist |
| `Satoshi-Path-Bitcoin-Starter-Toolkit.xlsx` | Full $17 product |
| `Satoshi-Path-Bitcoin-Starter-Toolkit-PREVIEW.xlsx` | Free preview |

These live in the conversation artifacts folder. Copy into `public/` before deploy:

```bash
cp Bitcoin-Beginner-Checklist.pdf public/
cp Satoshi-Path-Bitcoin-Starter-Toolkit-PREVIEW.xlsx public/
# Full toolkit: deliver via payment provider, not a public URL
```

---

## Verification completed

- Toolkit spreadsheet: **79 formulas, 0 errors** (LibreOffice recalc)
- Example data totals: BTC 0.00565, Cash $374.75, Avg cost ~$66,327
- Dashboard cross-sheet links resolve correctly
- Site pages present with new positioning and $17 product copy

---

## Still needs your accounts

### 1. Email signup
Homepage form is wired for a provider endpoint.

1. Create a form/list (Formspree, ConvertKit, Buttondown, etc.)
2. Paste public endpoint into `FORM_ENDPOINT` in `src/app/page.tsx`
3. Configure the 5-email welcome sequence
4. Never put private API keys in frontend code

### 2. Payment for $17 toolkit
Recommended: Gumroad or Lemon Squeezy (hosted checkout + file delivery).
Until connected, buy button stays disabled; free preview works.

### 3. Deploy
```bash
npm run build
# Merge funnel-v1 → main, or push and let GitHub Actions deploy
```

Paths remain under `/satoshis-path/` (configured in `next.config.ts`).

---

## Email sequence outline

1. **Immediate** — Deliver checklist + how to use it  
2. **Day 1** — Fees and spreads (labeled hypothetical)  
3. **Day 3** — Exchange vs wallet, recovery phrase  
4. **Day 5** — Tracking purchases + optional toolkit  
5. **Day 7** — How to compare tools (affiliate only if verified + disclosed)

---

## Status

| Item | Status |
|------|--------|
| Homepage, checklist, thank-you, toolkit page | On branch `funnel-v1` |
| Navbar | On branch |
| Toolkit formulas | Verified (0 errors) |
| PDF + xlsx assets | In artifacts (add to public/) |
| Email provider | Needs your account |
| Checkout | Needs your account |
| Live on GitHub Pages | After merge + deploy |
