
import { Building, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Services": [
      "Company Incorporation",
      "Legal Compliance",
      "Tax & Accounting",
      "Business Scaling"
    ],
    "Company": [
      "About Us",
      "Our Team",
      "Careers",
      "Contact"
    ],
    "Resources": [
      "Blog",
      "Legal Guides",
      "FAQs",
      "Support Center"
    ],
    "Legal": [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Disclaimer"
    ]
  };

  return (
    <footer className="bg-zinc-950/80 backdrop-blur-sm border-t border-zinc-800/50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-sm">IC</span>
              </div>
              <span className="text-xl font-bold text-white">InCorp</span>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Empowering Indian startups with seamless business incorporation, legal compliance, and growth strategies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-zinc-400">
                <Phone className="h-4 w-4 mr-3 text-zinc-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <Mail className="h-4 w-4 mr-3 text-zinc-500" />
                <span>hello@incorp.in</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <MapPin className="h-4 w-4 mr-3 text-zinc-500" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-zinc-400 mb-4 md:mb-0">
              © 2024 InCorp. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
