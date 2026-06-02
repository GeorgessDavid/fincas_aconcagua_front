import type { Metadata } from "next";
import { Montserrat, Noto_Serif, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Fincas de Aconcagua",
  description: "Fincas de Aconcagua",
  icons: {
    icon: "/fincas_web_tab_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${notoSerif.variable} ${inter.variable} h-screen antialiased`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght@24,400" />
        <link rel="icon" href="/fincas_web_tab_logo.png" />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
