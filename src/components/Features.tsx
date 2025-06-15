
import React, { memo, useMemo } from "react";
import { Shield, Zap, Users, FileText, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Feature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  gradient: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const Features = memo(() => {
  const features = useMemo(() => [
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-grade security with full regulatory compliance across all Indian states and territories.",
      gradient: "from-green-600 to-emerald-700"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your company incorporated in as little as 7 days with our streamlined digital process.",
      gradient: "from-yellow-600 to-orange-700"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Dedicated legal and financial experts guide you through every step of your business journey.",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "All legal documents, contracts, and compliance paperwork handled with precision and care.",
      gradient: "from-purple-600 to-pink-700"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you navigate any challenges or questions.",
      gradient: "from-teal-600 to-cyan-700"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Trusted by over 1000+ successful startups and established businesses across India.",
      gradient: "from-rose-600 to-red-700"
    }
  ], []);

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative" style={{ contain: 'layout' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Why Choose InCorp?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto px-4">
            We combine cutting-edge technology with deep legal expertise to make business incorporation simple, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
});

const FeatureCard = memo<FeatureCardProps>(({ feature }) => {
  return (
    <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 group relative overflow-hidden" style={{ contain: 'layout style paint', transform: 'translate3d(0,0,0)' }}>
      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      <CardContent className="p-6 sm:p-8 relative z-10">
        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`} style={{ transform: 'translate3d(0,0,0)' }}>
          <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-zinc-100 transition-colors duration-300">{feature.title}</h3>
        <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 text-sm sm:text-base">{feature.description}</p>
        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} style={{ transform: 'translate3d(0,0,0)' }}></div>
      </CardContent>
    </Card>
  );
});

FeatureCard.displayName = "FeatureCard";
Features.displayName = "Features";

export default Features;
