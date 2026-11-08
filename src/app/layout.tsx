import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import Script from "next/script";

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const sans = localFont({
  src: "../../public/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
});
const mono = localFont({
  src: "../../public/fonts/geist-mono-latin.woff2",
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · DeKUT`,
    template: `%s · DICEL`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Integrated Circuit Design",
    "VLSI Kenya",
    "DeKUT",
    "Origin Labs",
    "SkyWater 130nm",
    "Semiconductor Research",
    "RISC-V",
    "Hardware Inventory",
  ],
  openGraph: {
    title: `${SITE_NAME} · DeKUT`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} · DeKUT`,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      data-theme="light"
      suppressHydrationWarning
    >
      <body>
        <Script
          id="dicel-theme-bootstrap"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("dicel-theme");document.documentElement.dataset.theme=t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.style.colorScheme=document.documentElement.dataset.theme}catch{document.documentElement.dataset.theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}`,
          }}
        />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
