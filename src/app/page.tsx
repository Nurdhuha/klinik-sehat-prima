import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Doctors from "@/components/sections/Doctors";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/FloatingWA";
import { siteData } from "@/config/site-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingWA
        whatsappNumbers={siteData.general.whatsappNumbers}
        message={siteData.general.whatsappMessage}
        features={siteData.features}
      />
    </main>
  );
}
