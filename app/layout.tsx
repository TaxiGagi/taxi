import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { I18nProvider } from "@/components/I18nProvider";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Taxi Gagi",
  description:
    "Experience premium taxi services with Taxi Gagi. Reliable transportation across Dalmatia - Zadar, Split, Dubrovnik, Novalja, Plitvice Lakes. 24/7 airport transfers, city tours, and national park trips. Book now!",
  keywords:
    "taxi zadar, taxi dalmatia, taxi split, taxi dubrovnik, airport transfer croatia, zadar taxi service, split airport transfer, dubrovnik taxi, plitvice lakes transfer, novalja taxi, croatia taxi, dalmatia transport, premium taxi croatia, 24/7 taxi service",
  authors: [{ name: "Taxi Gagi" }],
  creator: "Taxi Gagi",
  publisher: "Taxi Gagi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taxigagi.com/",
    title: "Taxi Gagi - Premium Taxi Service in Dalmatia",
    description:
      "Experience premium taxi services with Taxi Gagi. Reliable transportation across Dalmatia - Zadar, Split, Dubrovnik, Novalja, Plitvice Lakes. 24/7 airport transfers and tours.",
    siteName: "Taxi Gagi",
    images: [
      {
        url: "https://taxigagi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Taxi Gagi - Premium Taxi Service in Dalmatia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Gagi - Premium Taxi Service in Dalmatia",
    description:
      "Experience premium taxi services with Taxi Gagi. Reliable transportation across Dalmatia - Zadar, Split, Dubrovnik, Novalja, Plitvice Lakes.",
    images: ["https://taxigagi.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://taxigagi.com/",
    languages: {
      en: "https://taxigagi.com/",
      hr: "https://taxigagi.com/",
      de: "https://taxigagi.com/",
      fr: "https://taxigagi.com/",
      it: "https://taxigagi.com/",
      pl: "https://taxigagi.com/",
      cs: "https://taxigagi.com/",
      "x-default": "https://taxigagi.com/",
    },
  },
  other: {
    "geo.region": "HR-17",
    "geo.placename": "Dalmatia, Croatia",
    "geo.position": "44.1194;15.2314",
    ICBM: "44.1194, 15.2314",
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
      <head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
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
