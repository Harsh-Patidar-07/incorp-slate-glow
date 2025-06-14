
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm mb-6 sm:mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span className="text-zinc-300 text-xs sm:text-sm">Now live in India</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Build Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-zinc-400 via-zinc-300 to-white bg-clip-text text-transparent">
            Business Empire
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          InCorp helps Indian startups incorporate, manage compliance, and scale their business with cutting-edge technology and expert guidance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4">
          <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-400 hover:via-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg font-semibold border-0 shadow-2xl shadow-blue-900/20 transition-all duration-300">
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button variant="ghost" className="w-full sm:w-auto text-zinc-300 hover:text-white hover:bg-zinc-800/50 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg font-semibold border border-zinc-800/50 transition-all duration-300">
            <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats Preview - Optimized for mobile */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">1000+</div>
            <div className="text-zinc-400 text-xs sm:text-sm leading-tight">Companies Incorporated</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">98%</div>
            <div className="text-zinc-400 text-xs sm:text-sm leading-tight">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
            <div className="text-zinc-400 text-xs sm:text-sm leading-tight">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
