"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/components/I18nProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Taxi Gagi",
  description:
    "Experience premium taxi services with Taxi Gagi. Book your ride now for reliable and comfortable transportation across Dalmatia, from Novalja and Plitvice to Zadar, Split and Dubrovnik.",
  keywords:
    "taxi zadar, taxi dalmatia, taxi split, taxi dubrovnik, airport transfer, croatia taxi service",
  openGraph: {
    title: "Taxi Gagi",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Taxi Gagi",
    description:
      "Premium taxi service providing comfortable, reliable and prompt transportation services across Dalmatia, from Novalja and Plitvice to Zadar, Split, and Dubrovnik.",
    url: "https://taxigagi.com",
    telephone: "+385919842510",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "HR",
      addressRegion: "Dalmatia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "44.1194",
      longitude: "15.2314",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "44.1194",
        longitude: "15.2314",
      },
      geoRadius: "200000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taxi Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Airport Transfer",
            description:
              "Reliable airport transfer services to and from all major airports in Dalmatia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marina Transfer",
            description:
              "Reliable marina transfer services to and from all major marinas in Dalmatia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "City Tours",
            description:
              "Guided taxi tours of historic cities including Zadar, Split, and Dubrovnik",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "National Park Transfers",
            description:
              "Transportation to Croatia's beautiful national parks including Plitvice Lakes and Krka",
          },
        },
      ],
    },
    openingHours: "Mo-Su 00:00-23:59",
    paymentAccepted: ["Cash", "Credit Card"],
    currenciesAccepted: "EUR, HRK",
    areaServed: [
      {
        "@type": "City",
        name: "Zadar",
      },
      {
        "@type": "City",
        name: "Šibenik",
      },
      {
        "@type": "City",
        name: "Split",
      },
      {
        "@type": "City",
        name: "Dubrovnik",
      },
      {
        "@type": "City",
        name: "Novalja",
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        {/* Primary Meta Tags */}
        <title>
          Taxi Gagi - Premium Taxi Service in Dalmatia | Airport Transfers &
          Tours
        </title>
        <meta
          name="title"
          content="Taxi Gagi - Premium Taxi Service in Dalmatia | Airport Transfers & Tours"
        />
        <meta
          name="description"
          content="Experience premium taxi services with Taxi Gagi. Reliable transportation across Dalmatia - Zadar, Split, Dubrovnik, Novalja, Plitvice Lakes. 24/7 airport transfers, city tours, and national park trips. Book now!"
        />
        <meta
          name="keywords"
          content="taxi zadar, taxi dalmatia, taxi split, taxi dubrovnik, airport transfer croatia, zadar taxi service, split airport transfer, dubrovnik taxi, plitvice lakes transfer, novalja taxi, croatia taxi, dalmatia transport, premium taxi croatia, 24/7 taxi service"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Taxi Gagi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://taxigagi.com/" />
        <meta
          property="og:title"
          content="Taxi Gagi - Premium Taxi Service in Dalmatia | Airport Transfers & Tours"
        />
        <meta
          property="og:description"
          content="Experience premium taxi services with Taxi Gagi. Reliable transportation across Dalmatia - Zadar, Split, Dubrovnik, Novalja, Plitvice Lakes. 24/7 airport transfers and tours."
        />
        <meta property="og:image" content="https://taxigagi.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Taxi Gagi - Premium Taxi Service in Dalmatia"
        />
        <meta property="og:site_name" content="Taxi Gagi" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://taxigagi.com/" />
        <meta
          property="twitter:title"
          content="Taxi Gagi - Premium Taxi Service in Dalmatia"
        />
        <meta
          property="twitter:description"
          content="Experience premium taxi services with Taxi Gagi. Reliable transportation across Dalmatia - Zadar, Split, Dubrovnik, Novalja, Plitvice Lakes."
        />
        <meta
          property="twitter:image"
          content="https://taxigagi.com/og-image.jpg"
        />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="HR-17" />
        <meta name="geo.placename" content="Dalmatia, Croatia" />
        <meta name="geo.position" content="44.1194;15.2314" />
        <meta name="ICBM" content="44.1194, 15.2314" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://taxigagi.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional Language Alternatives */}
        <link rel="alternate" hrefLang="en" href="https://taxigagi.com/" />
        <link rel="alternate" hrefLang="hr" href="https://taxigagi.com/" />
        <link rel="alternate" hrefLang="de" href="https://taxigagi.com/" />
        <link rel="alternate" hrefLang="fr" href="https://taxigagi.com/" />
        <link rel="alternate" hrefLang="it" href="https://taxigagi.com/" />
        <link rel="alternate" hrefLang="pl" href="https://taxigagi.com/" />
        <link rel="alternate" hrefLang="cs" href="https://taxigagi.com/" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://taxigagi.com/"
        />
      </Head>
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
