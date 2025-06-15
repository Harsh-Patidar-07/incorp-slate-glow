
import React, { memo, useMemo, useCallback } from "react";
import { Building, Briefcase, Calculator, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  gradient: string;
}

interface ServiceCardProps {
  service: Service;
}

const Services = memo(() => {
  const services = useMemo(() => [
    {
      icon: Building,
      title: "Company Incorporation",
      description: "Complete business registration including Private Limited, LLP, and OPC structures with all necessary documentation.",
      features: ["ROC Filing", "PAN & TAN Registration", "Digital Signature", "Bank Account Opening"],
      price: "Starting at ₹6,999",
      gradient: "from-blue-600 to-indigo-700"
    },
    {
      icon: Briefcase,
      title: "Legal Compliance",
      description: "Ongoing compliance management to keep your business legally compliant and focused on growth.",
      features: ["Annual Filings", "Board Resolutions", "Audit Support", "Legal Updates"],
      price: "Starting at ₹2,999/month",
      gradient: "from-purple-600 to-pink-700"
    },
    {
      icon: Calculator,
      title: "Tax & Accounting",
      description: "Professional accounting services and tax planning to optimize your business finances.",
      features: ["GST Registration", "Income Tax Filing", "Bookkeeping", "Financial Planning"],
      price: "Starting at ₹1,999/month",
      gradient: "from-green-600 to-emerald-700"
    },
    {
      icon: Globe,
      title: "Business Scaling",
      description: "Strategic guidance and support to help your startup scale efficiently and enter new markets.",
      features: ["Market Research", "Funding Assistance", "Partnership Deals", "Growth Strategy"],
      price: "Custom Pricing",
      gradient: "from-orange-600 to-red-700"
    }
  ], []);

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Comprehensive business solutions designed to support your startup journey from inception to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
});

const ServiceCard = memo<ServiceCardProps>(({ service }) => {
  const handleLearnMore = useCallback(() => {
    console.log(`Learn more clicked for ${service.title}`);
  }, [service.title]);

  return (
    <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 group relative overflow-hidden will-change-transform">
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      <CardContent className="p-8 relative z-10">
        <div className="flex items-start gap-6">
          <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg will-change-transform`}>
            <service.icon className="h-10 w-10 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zinc-100 transition-colors duration-300">{service.title}</h3>
            <p className="text-zinc-400 mb-6 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">{service.description}</p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">What's Included:</h4>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-zinc-300 flex items-center group-hover:text-zinc-200 transition-colors duration-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 opacity-80`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors duration-300">{service.price}</span>
              <Button 
                onClick={handleLearnMore}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl border-0 shadow-lg will-change-transform"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left will-change-transform`}></div>
      </CardContent>
    </Card>
  );
});

ServiceCard.displayName = "ServiceCard";
Services.displayName = "Services";

export default Services;
