
import { Building, Briefcase, Calculator, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Company Incorporation",
      description: "Complete business registration including Private Limited, LLP, and OPC structures with all necessary documentation.",
      features: ["ROC Filing", "PAN & TAN Registration", "Digital Signature", "Bank Account Opening"],
      price: "Starting at ₹6,999"
    },
    {
      icon: Briefcase,
      title: "Legal Compliance",
      description: "Ongoing compliance management to keep your business legally compliant and focused on growth.",
      features: ["Annual Filings", "Board Resolutions", "Audit Support", "Legal Updates"],
      price: "Starting at ₹2,999/month"
    },
    {
      icon: Calculator,
      title: "Tax & Accounting",
      description: "Professional accounting services and tax planning to optimize your business finances.",
      features: ["GST Registration", "Income Tax Filing", "Bookkeeping", "Financial Planning"],
      price: "Starting at ₹1,999/month"
    },
    {
      icon: Globe,
      title: "Business Scaling",
      description: "Strategic guidance and support to help your startup scale efficiently and enter new markets.",
      features: ["Market Research", "Funding Assistance", "Partnership Deals", "Growth Strategy"],
      price: "Custom Pricing"
    }
  ];

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
            <Card key={index} className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm rounded-2xl hover:bg-zinc-800/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-zinc-400 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-zinc-300 flex items-center">
                            <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <Button className="bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white rounded-xl border-0">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
