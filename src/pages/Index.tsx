
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-800/30" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-zinc-400/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-zinc-600/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="grid grid-cols-8 grid-rows-8 gap-8 opacity-5">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-zinc-400 rounded-full" />
            ))}
          </div>
        </div>
      </div>
      
      <Header />
      <Hero />
      <Features />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
