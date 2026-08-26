import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { pripadovky } from "@/lib/pripadovky";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Případovky se doplní samy podle seznamu v src/lib/pripadovky.ts
    ...pripadovky.map((p) => ({
      url: `${siteUrl}/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
