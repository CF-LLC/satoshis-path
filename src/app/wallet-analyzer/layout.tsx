import { pageMeta } from "@/config/meta";

export const metadata = pageMeta(
  "/wallet-analyzer/",
  "Bitcoin Wallet Analyzer | Satoshi's Path",
  "Analyze a Bitcoin wallet address to view transaction history, balance, and activity patterns. Educational research tool.",
);

export default function WalletAnalyzerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
