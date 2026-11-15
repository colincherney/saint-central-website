import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const inter = localFont({ src: "./fonts/Inter.ttf", variable: "--font-inter", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: "Saint Central — A little prayer goes a long way.",
  description: site.description,
  applicationName: site.name,
  ...(site.url ? { alternates: { canonical: site.url } } : {}),
  icons: { icon: "/app-icon.png", apple: "/app-icon.png" },
  openGraph: {
    title: "Saint Central — A little prayer goes a long way.",
    description: site.description,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    ...(site.url ? { url: site.url, images: [{ url: "/app-icon.png", width: 1254, height: 1254, alt: "The Saint Central candle" }] } : {})
  },
  twitter: { card: "summary", title: site.name, description: site.description }
};

export const viewport: Viewport = { themeColor: "#14182a", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
