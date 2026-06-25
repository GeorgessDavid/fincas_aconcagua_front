import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "es-AR",
    categories: ["real estate", "business", "lifestyle"],
    icons: [
      {
        src: siteConfig.icon,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: siteConfig.icon,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: siteConfig.icon,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
