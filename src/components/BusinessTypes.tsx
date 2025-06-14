
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Store, Factory, Utensils, Truck, Building2, Briefcase } from "lucide-react";

const BusinessTypes = () => {
  const businessTypes = {
    shops: {
      icon: Store,
      title: "Retail & Shops",
      description: "Perfect for retail stores, boutiques, and small businesses",
      gradient: "from-emerald-600 to-teal-700",
      services: [
        { name: "Shop & Establishment License", price: "₹2,999", duration: "5-7 days" },
        { name: "GST Registration", price: "₹1,999", duration: "3-5 days" },
        { name: "Trade License", price: "₹3,499", duration: "7-10 days" },
        { name: "Complete Shop Setup", price: "₹7,999", duration: "10-15 days" }
      ]
    },
    factories: {
      icon: Factory,
      title: "Manufacturing & Factories",
      description: "Comprehensive solutions for manufacturing businesses",
      gradient: "from-orange-600 to-red-700",
      services: [
        { name: "Factory License", price: "₹15,999", duration: "15-20 days" },
        { name: "Pollution Control Board", price: "₹8,999", duration: "10-15 days" },
        { name: "Labour License", price: "₹5,999", duration: "7-10 days" },
        { name: "Complete Factory Setup", price: "₹35,999", duration: "25-30 days" }
      ]
    },
    fssai: {
      icon: Utensils,
      title: "Food & Beverages",
      description: "FSSAI and food business licensing solutions",
      gradient: "from-purple-600 to-pink-700",
      services: [
        { name: "FSSAI Basic License", price: "₹3,999", duration: "10-15 days" },
        { name: "FSSAI State License", price: "₹7,999", duration: "15-20 days" },
        { name: "FSSAI Central License", price: "₹12,999", duration: "20-25 days" },
        { name: "Complete F&B Setup", price: "₹18,999", duration: "25-30 days" }
      ]
    },
    transport: {
      icon: Truck,
      title: "Transport & Logistics",
      description: "Licensing for transport and logistics businesses",
      gradient: "from-blue-600 to-cyan-700",
      services: [
        { name: "Transport License", price: "₹8,999", duration: "10-15 days" },
        { name: "Goods Carriage Permit", price: "₹5,999", duration: "7-10 days" },
        { name: "PAN India Permit", price: "₹25,999", duration: "20-25 days" },
        { name: "Complete Transport Setup", price: "₹35,999", duration: "25-30 days" }
      ]
    },
    corporate: {
      icon: Building2,
      title: "Corporate Entities",
      description: "Private Limited, LLP, and corporate structures",
      gradient: "from-indigo-600 to-purple-700",
      services: [
        { name: "Private Limited Company", price: "₹6,999", duration: "7-10 days" },
        { name: "Limited Liability Partnership", price: "₹5,999", duration: "5-7 days" },
        { name: "One Person Company", price: "₹4,999", duration: "5-7 days" },
        { name: "Complete Corporate Setup", price: "₹12,999", duration: "10-15 days" }
      ]
    },
    professional: {
      icon: Briefcase,
      title: "Professional Services",
      description: "Consultancy, agencies, and professional service firms",
      gradient: "from-rose-600 to-orange-700",
      services: [
        { name: "Professional Tax Registration", price: "₹1,999", duration: "3-5 days" },
        { name: "Service Tax Registration", price: "₹2,999", duration: "5-7 days" },
        { name: "Partnership Firm", price: "₹3,999", duration: "5-7 days" },
        { name: "Complete Professional Setup", price: "₹8,999", duration: "10-15 days" }
      ]
    }
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Business Types We Serve
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Tailored solutions for every type of business in India
          </p>
        </div>

        <Tabs defaultValue="shops" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm rounded-2xl p-2 mb-8">
            {Object.entries(businessTypes).map(([key, type]) => (
              <TabsTrigger 
                key={key} 
                value={key}
                className="data-[state=active]:bg-zinc-800/80 data-[state=active]:text-white rounded-xl py-3 px-4 text-zinc-400 hover:text-zinc-200 transition-all duration-200"
              >
                <type.icon className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">{type.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(businessTypes).map(([key, type]) => (
            <TabsContent key={key} value={key} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm rounded-2xl h-full">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                        <type.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                      <p className="text-zinc-400 leading-relaxed mb-6">{type.description}</p>
                      <Button className={`bg-gradient-to-r ${type.gradient} hover:opacity-90 text-white rounded-xl border-0 w-full`}>
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {type.services.map((service, index) => (
                      <Card key={index} className="bg-zinc-900/30 border-zinc-800/30 backdrop-blur-sm rounded-2xl hover:bg-zinc-800/40 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-semibold text-white group-hover:text-zinc-100">{service.name}</h4>
                            <span className={`text-sm px-3 py-1 rounded-full bg-gradient-to-r ${type.gradient} text-white opacity-80`}>
                              {service.duration}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-2xl font-bold text-white">{service.price}</span>
                            <Button size="sm" className="bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 rounded-lg border-0">
                              Select
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default BusinessTypes;
