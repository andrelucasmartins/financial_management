import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @use "styles/mixins" as *;
      @use "styles/variables" as *;
      @use "styles/functions" as *;
    `,
  }
};

export default nextConfig;
