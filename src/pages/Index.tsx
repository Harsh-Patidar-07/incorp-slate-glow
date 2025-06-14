
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import BusinessTypes from "@/components/BusinessTypes";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Optimized Background Pattern - reduced complexity for better performance */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 via-black to-zinc-800/20" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-zinc-400/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-radial from-zinc-600/15 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <BusinessTypes />
        <Services />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
