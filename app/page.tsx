import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import ServiceAreas from "@/components/sections/service-areas";
import Pricing from "@/components/sections/pricing";
import Fleet from "@/components/sections/fleet";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <ServiceAreas />
      <Fleet />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
