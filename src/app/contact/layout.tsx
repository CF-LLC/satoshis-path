import { pageMeta } from "@/config/meta";

export const metadata = pageMeta(
  "/contact/",
  "Contact | Satoshi's Path",
  "Questions, feedback, or ideas for Satoshi's Path? Email satoshispath@gmail.com.",
);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
