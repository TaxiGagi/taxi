"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/components/I18nProvider";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Taxi Gagi | Premium Transportation in Dalmatia",
  description:
    "Experience premium taxi services with Taxi Gagi. Book your ride now for reliable and comfortable transportation across Dalmatia, from Novalja and Plitvice to Zadar, Split and Dubrovnik.",
  keywords:
    "taxi zadar, taxi dalmatia, taxi split, taxi dubrovnik, airport transfer, croatia taxi service",
  openGraph: {
    title: "Taxi Gagi | Premium Transportation in Dalmatia",
    description:
      "Experience premium taxi services with Taxi Gagi. Book your ride now for reliable and comfortable transportation across Dalmatia.",
    url: "https://taxigagi.com",
    siteName: "Taxi Gagi",
    images: [
      {
        url: "https://images.pexels.com/photos/2399254/pexels-photo-2399254.jpeg",
        width: 1200,
        height: 630,
        alt: "Taxi Gagi Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
