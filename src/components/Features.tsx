
import { Shield, Zap, Users, FileText, Clock, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
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
            <Card key={index} className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <CardContent className="p-8 relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zinc-100 transition-colors duration-300">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{feature.description}</p>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
