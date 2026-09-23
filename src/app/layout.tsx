import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/Header";
import { GTM_ID, getSiteUrl } from "@/lib/site";
import "./globals.css";

const silka = localFont({
  src: [
    { path: "../fonts/Silka-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "../fonts/Silka-ExtraLightItalic.woff2", weight: "200", style: "italic" },
    { path: "../fonts/Silka-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Silka-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../fonts/Silka-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Silka-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/Silka-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/Silka-BoldItalic.woff2", weight: "700", style: "italic" },
    { path: "../fonts/Silka-Black.woff2", weight: "900", style: "normal" },
    { path: "../fonts/Silka-BlackItalic.woff2", weight: "900", style: "italic" },
  ],
  variable: "--font-silka",
  display: "swap",
});

// Layout je společný pro rozcestník i všechny případovky — konkrétní titulky
// a popisy patří do jednotlivých page.tsx, ne sem.
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Případové studie | Zacíleno",
    template: "%s | Zacíleno",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Zacíleno",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${silka.variable} h-full antialiased`}>
      <GoogleTagManager gtmId={GTM_ID} />
      <body className="min-h-full flex flex-col font-silka font-medium text-black">
        {/* Záloha pro návštěvníky s vypnutým JavaScriptem */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        {children}
      </body>
    </html>
  );
}
