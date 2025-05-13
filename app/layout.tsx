import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taxi Gagi Taxi Services | Premium Transportation",
  description:
    "Experience premium taxi services with Taxi Gagi. Book your ride now for fast, reliable, and comfortable transportation across the city.",
  keywords:
    "taxi, cab, transportation, premium taxi, airport transfer, city taxi service",
  openGraph: {
    title: "Taxi Gagi Taxi Services | Premium Transportation",
    description:
      "Experience premium taxi services with Taxi Gagi. Book your ride now for fast, reliable, and comfortable transportation across the city.",
    url: "https://goldride.com",
    siteName: "Taxi Gagi Taxi Services",
    images: [
      {
        url: "https://images.pexels.com/photos/2399254/pexels-photo-2399254.jpeg",
        width: 1200,
        height: 630,
        alt: "Taxi Gagi Taxi Services",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
