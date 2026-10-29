import Script from "next/script";
import { GOATCOUNTER_CODE } from "@/config/site";

/** Cookieless, privacy-friendly analytics. Renders nothing until NEXT_PUBLIC_GOATCOUNTER_CODE is set. */
export default function Analytics() {
  if (!GOATCOUNTER_CODE) return null;
  return (
    <Script
      data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
    />
  );
}
