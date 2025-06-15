import React, { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = memo(() => {
  const handleStartJourney = useCallback(() => {
    console.log("Start journey clicked");
  }, []);

  const handleWatchDemo = useCallback(() => {
    console.log("Watch demo clicked");
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 overflow-hidden">
      {/* Wormhole Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Main wormhole tunnel */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, rgba(59, 130, 246, 0.1) 15%, transparent 20%),
              radial-gradient(circle at 50% 50%, transparent 15%, rgba(147, 51, 234, 0.08) 25%, transparent 35%),
              radial-gradient(circle at 50% 50%, transparent 25%, rgba(6, 182, 212, 0.06) 40%, transparent 50%),
              radial-gradient(circle at 50% 50%, transparent 35%, rgba(168, 85, 247, 0.04) 55%, transparent 70%),
              radial-gradient(circle at 50% 50%, transparent 45%, rgba(14, 165, 233, 0.03) 70%, transparent 85%)
            `,
            animation: 'wormhole-spin 20s linear infinite',
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden'
          }}
        />
        
        {/* Animated tunnel rings */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-blue-500/10"
            style={{
              animation: `tunnel-ring ${3 + i * 0.5}s ease-in-out infinite alternate`,
              transform: `translate3d(0,0,0) scale(${0.1 + i * 0.15})`,
              transformOrigin: 'center center',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}

        {/* Particle field */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
                transform: 'translate3d(0,0,0)',
                backfaceVisibility: 'hidden'
              }}
            />
          ))}
        </div>

        {/* Central glow */}
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl"
          style={{
            animation: 'central-pulse 4s ease-in-out infinite alternate',
            transform: 'translate3d(-50%, -50%, 0)',
            backfaceVisibility: 'hidden'
          }}
        />
      </div>

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
          <Button 
            onClick={handleStartJourney}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-400 hover:via-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg font-semibold border-0 shadow-2xl shadow-blue-900/20 transition-all duration-150 will-change-transform"
            style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button 
            variant="ghost" 
            onClick={handleWatchDemo}
            className="w-full sm:w-auto text-zinc-300 hover:text-white hover:bg-zinc-800/50 px-6 sm:px-8 py-4 sm:py-6 rounded-2xl text-base sm:text-lg font-semibold border border-zinc-800/50 transition-all duration-150 will-change-transform"
            style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}
          >
            <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Watch Demo
          </Button>
        </div>

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

      <style jsx>{`
        @keyframes wormhole-spin {
          0% { transform: translate3d(0,0,0) rotate(0deg); }
          100% { transform: translate3d(0,0,0) rotate(360deg); }
        }
        
        @keyframes tunnel-ring {
          0% { 
            transform: translate3d(0,0,0) scale(var(--initial-scale, 0.1));
            opacity: 0.8;
          }
          100% { 
            transform: translate3d(0,0,0) scale(calc(var(--initial-scale, 0.1) * 1.2));
            opacity: 0.3;
          }
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translate3d(0, 0, 0) scale(0.5);
            opacity: 0.3;
          }
          50% { 
            transform: translate3d(10px, -20px, 0) scale(1);
            opacity: 0.8;
          }
        }
        
        @keyframes central-pulse {
          0% { 
            transform: translate3d(-50%, -50%, 0) scale(1);
            opacity: 0.3;
          }
          100% { 
            transform: translate3d(-50%, -50%, 0) scale(1.1);
            opacity: 0.5;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
