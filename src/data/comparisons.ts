/**
 * Exchange and hardware-wallet comparisons. Facts only, each with an official source link.
 * Checked against the official pages on Nov 13, 2026. No ratings, no fee numbers or prices
 * (they change; we link to the official fee/price page instead). Update CHECKED_ON when re-verified.
 */
export const CHECKED_ON = "November 13, 2026";

export type Exchange = {
  key: string; name: string; url: string; feesUrl: string;
  what: string; bitcoinOnly: boolean; facts: string[]; goodFor: string; source: string;
};

export const EXCHANGES: Exchange[] = [
  { key: "river", name: "River", url: "https://river.com/", feesUrl: "https://river.com/", what: "Bitcoin-only brokerage (US)", bitcoinOnly: true, facts: ["Bitcoin only, no other coins", "Says it holds a full reserve of customer bitcoin (proof-of-reserves page)", "Recurring buys available"], goodFor: "US buyers who want bitcoin only and automatic recurring buys", source: "https://river.com/reserves" },
  { key: "swan", name: "Swan Bitcoin", url: "https://www.swanbitcoin.com/", feesUrl: "https://www.swanbitcoin.com/", what: "Bitcoin-only service focused on saving in bitcoin", bitcoinOnly: true, facts: ["Bitcoin only", "Built around recurring buys"], goodFor: "Set-and-forget saving in bitcoin", source: "https://www.swanbitcoin.com/" },
  { key: "strike", name: "Strike", url: "https://strike.me/", feesUrl: "https://strike.me/", what: "App to buy bitcoin and send Lightning payments", bitcoinOnly: true, facts: ["Bitcoin-focused app", "Supports Lightning Network payments"], goodFor: "Buying small amounts and trying Lightning", source: "https://strike.me/" },
  { key: "kraken", name: "Kraken", url: "https://www.kraken.com/", feesUrl: "https://www.kraken.com/features/fee-schedule", what: "Large exchange with many cryptocurrencies", bitcoinOnly: false, facts: ["Publishes proof-of-reserves results", "Public fee schedule", "Lists many coins besides bitcoin"], goodFor: "People who want an exchange with an advanced trading screen", source: "https://www.kraken.com/proof-of-reserves" },
  { key: "coinbase", name: "Coinbase", url: "https://www.coinbase.com/", feesUrl: "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees", what: "Large, beginner-friendly exchange with many cryptocurrencies", bitcoinOnly: false, facts: ["Lists many coins besides bitcoin", "Fees explained on its help center"], goodFor: "First-time buyers who want a simple app", source: "https://www.coinbase.com/" },
  { key: "gemini", name: "Gemini", url: "https://www.gemini.com/", feesUrl: "https://www.gemini.com/fees", what: "Exchange with many cryptocurrencies", bitcoinOnly: false, facts: ["Operates as a New York trust company (see its licenses page)", "Public fee page"], goodFor: "Buyers who care about a regulated US custodian", source: "https://www.gemini.com/legal/licenses" },
  { key: "cashapp", name: "Cash App", url: "https://cash.app/bitcoin", feesUrl: "https://cash.app/bitcoin", what: "Payments app that can buy and sell bitcoin", bitcoinOnly: false, facts: ["Buy bitcoin inside an app many people already use", "Also offers stocks and payments, not just bitcoin"], goodFor: "Trying a very small first purchase in an app you already have", source: "https://cash.app/bitcoin" },
];

export type Wallet = {
  key: string; name: string; maker: string; url: string;
  bitcoinOnly: string; connection: string; facts: string[]; source: string;
};

export const WALLETS: Wallet[] = [
  { key: "trezor", name: "Trezor Safe 3", maker: "Trezor", url: "https://trezor.io/trezor-safe-3", bitcoinOnly: "Bitcoin-only edition available", connection: "USB-C cable", facts: ["Secure Element chip", "Open-source design", "Confirm every transaction on the device"], source: "https://trezor.io/trezor-safe-3" },
  { key: "trezor", name: "Trezor Safe 5", maker: "Trezor", url: "https://trezor.io/trezor-safe-5", bitcoinOnly: "Bitcoin-only edition available", connection: "USB-C cable", facts: ["Color touchscreen", "Secure Element chip"], source: "https://trezor.io/trezor-safe-5" },
  { key: "ledger", name: "Ledger Nano S Plus", maker: "Ledger", url: "https://www.ledger.com/products/ledger-nano-s-plus", bitcoinOnly: "No (multi-coin)", connection: "USB cable", facts: ["Secure Element chip", "Supports many coins"], source: "https://www.ledger.com/products/ledger-nano-s-plus" },
  { key: "ledger", name: "Ledger Nano X", maker: "Ledger", url: "https://www.ledger.com/products/ledger-nano-x", bitcoinOnly: "No (multi-coin)", connection: "USB cable or Bluetooth", facts: ["Secure Element chip", "Bluetooth for use with a phone"], source: "https://www.ledger.com/products/ledger-nano-x" },
  { key: "coldcard", name: "COLDCARD Mk4", maker: "Coinkite", url: "https://coldcard.com/mk4", bitcoinOnly: "Yes, bitcoin only", connection: "USB or fully air-gapped with a microSD card", facts: ["Designed to be used air-gapped", "Aimed at experienced users"], source: "https://coldcard.com/mk4" },
  { key: "coldcard", name: "COLDCARD Q", maker: "Coinkite", url: "https://coldcard.com/q", bitcoinOnly: "Yes, bitcoin only", connection: "Air-gapped via QR codes or microSD", facts: ["Built-in QR scanner", "Full keyboard"], source: "https://coldcard.com/q" },
  { key: "bitbox", name: "BitBox02", maker: "BitBox (Shift Crypto)", url: "https://bitbox.swiss/bitbox02/", bitcoinOnly: "Bitcoin-only edition available", connection: "USB-C cable", facts: ["Open-source firmware", "Multi-coin and Bitcoin-only editions"], source: "https://bitbox.swiss/bitbox02/" },
  { key: "jade", name: "Blockstream Jade", maker: "Blockstream", url: "https://blockstream.com/jade/", bitcoinOnly: "Bitcoin (and Liquid) only", connection: "USB, Bluetooth, or air-gapped via its camera and QR codes", facts: ["Open source", "Can be used air-gapped with QR codes"], source: "https://blockstream.com/jade/" },
];
