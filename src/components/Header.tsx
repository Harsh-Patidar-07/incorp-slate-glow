
import React, { useState, useCallback, memo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  navItems: { name: string; href: string; }[];
  onClose: () => void;
  onSignIn: () => void;
  onGetStarted: () => void;
}

const MobileNav = memo<MobileNavProps>(({ navItems, onClose, onSignIn, onGetStarted }) => {
  return (
    <div className="md:hidden mt-4 pt-4 border-t border-zinc-800">
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-zinc-300 hover:text-white transition-colors duration-200 font-medium"
            onClick={onClose}
          >
            {item.name}
          </a>
        ))}
        <div className="flex flex-col space-y-2 pt-4">
          <Button 
            variant="ghost" 
            onClick={onSignIn}
            className="text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl justify-start"
          >
            Sign In
          </Button>
          <Button 
            onClick={onGetStarted}
            className="bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white rounded-xl border-0 justify-start"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
});

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // Ultra-optimized scroll handler for 120fps+
  useEffect(() => {
    let rafId: number;
    let lastScrollY = 0;
    let ticking = false;
    
    const updateScrollState = () => {
      const scrollY = window.scrollY;
      
      // Only update if scroll position changed significantly
      if (Math.abs(scrollY - lastScrollY) > 5) {
        setIsScrolled(scrollY > 20);
        lastScrollY = scrollY;
      }
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    // Use passive listener for maximum performance
    window.addEventListener('scroll', handleScroll, { 
      passive: true, 
      capture: false 
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleSignIn = useCallback(() => {
    console.log("Sign in clicked");
  }, []);

  const handleGetStarted = useCallback(() => {
    console.log("Get started clicked");
  }, []);

  return (
    <header 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4" 
      style={{ 
        willChange: 'transform',
        contain: 'style layout',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'translate3d(-50%, 0, 0)'
      }}
    >
      <nav 
        className={`backdrop-blur-lg border border-zinc-800/50 rounded-2xl px-6 py-4 shadow-2xl transition-all duration-200 ${
          isScrolled ? 'bg-black/40' : 'bg-black/20'
        }`} 
        style={{ 
          contain: 'layout style paint',
          willChange: 'background-color',
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div 
              className="w-8 h-8 bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-xl flex items-center justify-center"
              style={{ 
                transform: 'translate3d(0,0,0)',
                willChange: 'auto'
              }}
            >
              <span className="text-black font-bold text-sm">IC</span>
            </div>
            <span className="text-xl font-bold text-white">InCorp</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-zinc-300 hover:text-white transition-colors duration-150 font-medium"
                style={{ willChange: 'color' }}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={handleSignIn}
              className="text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl transition-all duration-150"
              style={{ willChange: 'background-color, color' }}
            >
              Sign In
            </Button>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white rounded-xl border-0 transition-all duration-150"
              style={{ 
                willChange: 'background-image',
                transform: 'translate3d(0,0,0)'
              }}
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-white transition-transform duration-150"
            onClick={toggleMenu}
            style={{ 
              willChange: 'transform',
              transform: 'translate3d(0,0,0)'
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <MobileNav 
            navItems={navItems} 
            onClose={closeMenu} 
            onSignIn={handleSignIn}
            onGetStarted={handleGetStarted}
          />
        )}
      </nav>
    </header>
  );
});

MobileNav.displayName = "MobileNav";
Header.displayName = "Header";

export default Header;
