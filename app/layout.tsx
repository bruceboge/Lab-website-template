import type { Metadata } from "next";
import "@/styles.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: {
    default: "DeICE · DeKUT",
    template: "%s · DeICE",
  },
  description: "DeICE is the DeKUT Integrated Circuit Engineering laboratory at Dedan Kimathi University of Technology.",
};

const THEME_BOOTSTRAP = `try{var t=localStorage.getItem("dicel-theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light";document.documentElement.style.colorScheme=document.documentElement.dataset.theme}catch(e){document.documentElement.dataset.theme="light"}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html id="top" lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
