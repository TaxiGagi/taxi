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
    <main className="min-h-screen">
      <Header />
      <Hero />
      <BookingForm />
      <AboutUs />
      <Testimonials />
      <Fleet />
      <StandardOfferings />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
