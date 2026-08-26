import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      // Stará adresa případovky (pripadovka-makleri.vercel.app) vedla na kořen.
      // Na kořeni je teď rozcestník, takže starý odkaz posíláme rovnou na makléře.
      // Platí jen pro adresy *.vercel.app — rozcestník na vlastní doméně zůstává.
      {
        source: "/",
        has: [{ type: "host", value: "(?<sub>.*)\\.vercel\\.app" }],
        destination: "/makleri",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
