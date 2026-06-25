import type { Metadata } from "next";
import Home from "@/page-contents/Home";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: absoluteUrl("/"),
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function HomePage() {
  return (
    <Home />
  );
}
