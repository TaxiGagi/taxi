"use client";

import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import BookingForm from "@/components/sections/booking-form";
import AboutUs from "@/components/sections/about-us";
import Testimonials from "@/components/sections/testimonials";
import Fleet from "@/components/sections/fleet";
import StandardOfferings from "@/components/sections/standard-offerings";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-400 text-black px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <div className="min-h-screen">
        <Header />

        <main id="main-content" role="main">
          {/* Hero Section - Primary landing area */}
          <section aria-label="Hero section with booking form">
            <Hero />
          </section>

          {/* Mobile Booking Form */}
          <section aria-label="Mobile booking form" className="lg:hidden">
            <BookingForm />
          </section>

          {/* About Section */}
          <section aria-label="About our taxi service">
            <AboutUs />
          </section>

          {/* Testimonials Section */}
          <section aria-label="Customer testimonials and reviews">
            <Testimonials />
          </section>

          {/* Fleet Section */}
          <section aria-label="Our vehicle fleet and services">
            <Fleet />
          </section>

          {/* Services Section */}
          <section aria-label="Standard service offerings">
            <StandardOfferings />
          </section>

          {/* Contact Section */}
          <section aria-label="Contact information and booking form">
            <Contact />
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>

      {/* Additional structured data for breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://taxigagi.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Taxi Services",
                item: "https://taxigagi.com/#services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Contact",
                item: "https://taxigagi.com/#contact",
              },
            ],
          }),
        }}
      />

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What areas does Taxi Gagi serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Taxi Gagi provides premium taxi services across Dalmatia, including Zadar, Split, Dubrovnik, Novalja, and transfers to Plitvice Lakes National Park. We also offer airport transfers and long-distance travel throughout Croatia.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide 24/7 taxi services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Taxi Gagi operates 24/7, 365 days a year. We provide round-the-clock taxi services for airport transfers, emergency transportation, and scheduled rides.",
                },
              },
              {
                "@type": "Question",
                name: "What payment methods do you accept?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We accept both cash and credit card payments for your convenience. Payment can be made directly to the driver at the end of your journey.",
                },
              },
              {
                "@type": "Question",
                name: "How can I book a taxi with Taxi Gagi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can book a taxi through our website booking form, WhatsApp at +385 91 984 2510, SMS, or by calling us directly. We recommend booking in advance for airport transfers and long-distance trips.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
