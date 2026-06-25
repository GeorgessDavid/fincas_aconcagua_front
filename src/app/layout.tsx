import type { Metadata, Viewport } from "next";
import { Montserrat, Noto_Serif, Inter, Ubuntu } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { ThemeRegistry } from '@/lib/mui/ThemeRegistry';
import { absoluteUrl, siteConfig } from "@/lib/seo";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.companyName }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  category: "real estate",
  classification: "Desarrollo inmobiliario residencial",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "es-AR": "/",
      es: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    countryName: "Argentina",
    images: [
      {
        url: siteConfig.ogImage,
        width: 3484,
        height: 3000,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: siteConfig.icon, type: "image/png" }],
    shortcut: siteConfig.icon,
    apple: [{ url: siteConfig.icon, type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${notoSerif.variable} ${inter.variable} ${ubuntu.variable} h-screen antialiased`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght@24,400" />
        <link rel="icon" href="/fincas_web_tab_logo.png" />
      </head>
      <body className="min-h-screen max-w-full flex flex-col overflow-x-hidden!">
        <Header />
        <ToastContainer autoClose={5000} theme='dark' />
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
        <Footer />
      </body>
    </html>
  );
}
