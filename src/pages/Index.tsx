
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
    <div className="min-h-screen bg-black text-white">
      {/* Simplified and optimized background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none will-change-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/20 via-black to-zinc-800/10" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-zinc-400/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-zinc-600/8 to-transparent rounded-full blur-3xl" />
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
});

Index.displayName = "Index";

export default Index;
