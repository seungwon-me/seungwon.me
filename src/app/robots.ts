import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://seungwon.me/sitemap.xml",
    host: "https://seungwon.me",
  };
}
