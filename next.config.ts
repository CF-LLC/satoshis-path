import type { NextConfig } from "next";
import { BASE_PATH } from "./src/config/site";

const prod = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: prod ? BASE_PATH : "",
  assetPrefix: prod && BASE_PATH ? `${BASE_PATH}/` : undefined,
};

export default nextConfig;
