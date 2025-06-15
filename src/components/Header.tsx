
import React, { useState, useCallback, memo } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  navItems: { name: string; href: string; }[];
  onClose: () => void;
  onSignIn: () => void;
  onGetStarted: () => void;
}

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

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
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="bg-black/20 backdrop-blur-lg border border-zinc-800/50 rounded-2xl px-6 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-sm">IC</span>
            </div>
            <span className="text-xl font-bold text-white">InCorp</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-zinc-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={handleSignIn}
              className="text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-xl"
            >
              Sign In
            </Button>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white rounded-xl border-0"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
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

MobileNav.displayName = "MobileNav";
Header.displayName = "Header";

export default Header;
