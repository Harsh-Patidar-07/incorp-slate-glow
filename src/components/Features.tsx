
import { Shield, Zap, Users, FileText, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-grade security with full regulatory compliance across all Indian states and territories."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your company incorporated in as little as 7 days with our streamlined digital process."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Dedicated legal and financial experts guide you through every step of your business journey."
    },
    {
      icon: FileText,
      title: "Complete Documentation",
      description: "All legal documents, contracts, and compliance paperwork handled with precision and care."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you navigate any challenges or questions."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Trusted by over 1000+ successful startups and established businesses across India."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Why Choose InCorp?
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep legal expertise to make business incorporation simple, fast, and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
