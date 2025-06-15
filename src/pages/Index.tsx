
import React, { memo } from "react";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import BusinessTypes from "@/components/BusinessTypes";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-black text-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Ultra-lightweight background pattern optimized for scroll performance */}
      <div className="fixed inset-0 opacity-3 pointer-events-none" style={{ contain: 'strict', willChange: 'auto' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-black to-zinc-800/5" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-radial from-zinc-400/4 to-transparent rounded-full blur-3xl" style={{ transform: 'translate3d(0,0,0)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-zinc-600/4 to-transparent rounded-full blur-3xl" style={{ transform: 'translate3d(0,0,0)' }} />
      </div>
      
      <div className="relative z-10" style={{ contain: 'layout' }}>
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
});

Index.displayName = "Index";

export default Index;
