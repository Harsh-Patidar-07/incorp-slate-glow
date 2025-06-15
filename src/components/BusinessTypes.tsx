
import React, { useState, memo, useMemo, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Store, Factory, Utensils, Truck, Building2, Briefcase } from "lucide-react";

interface BusinessService {
  name: string;
  price: string;
  duration: string;
}

interface BusinessType {
  icon: React.ComponentType<any>;
  title: string;
  shortTitle: string;
  description: string;
  gradient: string;
  services: BusinessService[];
}

interface TabTriggerProps {
  tabKey: string;
  type: BusinessType;
}

interface TabContentProps {
  type: BusinessType;
}

interface ServiceCardProps {
  service: BusinessService;
  gradient: string;
}

const BusinessTypes = memo(() => {
  const businessTypes = useMemo(() => ({
    shops: {
      icon: Store,
      title: "Retail & Shops",
      shortTitle: "Retail",
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
      shortTitle: "Manufacturing",
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
      shortTitle: "Food & Beverages",
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
      shortTitle: "Transport",
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
      shortTitle: "Corporate",
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
      shortTitle: "Professional",
      description: "Consultancy, agencies, and professional service firms",
      gradient: "from-rose-600 to-orange-700",
      services: [
        { name: "Professional Tax Registration", price: "₹1,999", duration: "3-5 days" },
        { name: "Service Tax Registration", price: "₹2,999", duration: "5-7 days" },
        { name: "Partnership Firm", price: "₹3,999", duration: "5-7 days" },
        { name: "Complete Professional Setup", price: "₹8,999", duration: "10-15 days" }
      ]
    }
  }), []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Business Types We Serve
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto px-4">
            Tailored solutions for every type of business in India
          </p>
        </div>

        <Tabs defaultValue="shops" className="w-full">
          <div className="mb-8 sm:mb-12">
            <TabsList className="w-full bg-transparent p-0 h-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4">
              {Object.entries(businessTypes).map(([key, type]) => (
                <TabTriggerComponent key={key} tabKey={key} type={type} />
              ))}
            </TabsList>
          </div>

          {Object.entries(businessTypes).map(([key, type]) => (
            <TabsContent key={key} value={key} className="mt-6 sm:mt-8">
              <TabContentComponent type={type} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
});

const TabTriggerComponent = memo<TabTriggerProps>(({ tabKey, type }) => {
  return (
    <TabsTrigger 
      value={tabKey}
      className="group relative data-[state=active]:bg-transparent bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 lg:p-6 h-auto flex flex-col items-center gap-2 sm:gap-3 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700/70 transition-all duration-300 data-[state=active]:border-zinc-600/80 data-[state=active]:text-white will-change-transform"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-data-[state=active]:opacity-10 rounded-lg sm:rounded-2xl transition-opacity duration-300`}></div>
      
      <div className={`relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${type.gradient} rounded-lg sm:rounded-xl flex items-center justify-center group-data-[state=active]:scale-110 transition-transform duration-300 will-change-transform`}>
        <type.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
      </div>
      
      <span className="text-xs sm:text-sm font-medium text-center leading-tight">
        <span className="hidden sm:inline">{type.shortTitle}</span>
        <span className="sm:hidden">{type.shortTitle.split(' ')[0]}</span>
      </span>
    </TabsTrigger>
  );
});

const TabContentComponent = memo<TabContentProps>(({ type }) => {
  const handleGetStarted = useCallback(() => {
    console.log(`Get started clicked for ${type.title}`);
  }, [type.title]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
      <div className="lg:col-span-1">
        <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm rounded-2xl h-full">
          <CardContent className="p-6 sm:p-8">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
              <type.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{type.title}</h3>
            <p className="text-zinc-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{type.description}</p>
            <Button 
              onClick={handleGetStarted}
              className={`bg-gradient-to-r ${type.gradient} hover:opacity-90 text-white rounded-xl border-0 w-full transition-all duration-300 shadow-lg text-sm sm:text-base py-2 sm:py-3 will-change-transform`}
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {type.services.map((service, index) => (
            <ServiceCard key={index} service={service} gradient={type.gradient} />
          ))}
        </div>
      </div>
    </div>
  );
});

const ServiceCard = memo<ServiceCardProps>(({ service, gradient }) => {
  const handleSelect = useCallback(() => {
    console.log(`Service selected: ${service.name}`);
  }, [service.name]);

  return (
    <Card className="bg-zinc-900/30 border-zinc-800/30 backdrop-blur-sm rounded-2xl hover:bg-zinc-800/40 transition-all duration-300 group will-change-transform">
      <CardContent className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-zinc-100 leading-tight flex-1 pr-2">{service.name}</h4>
          <span className={`text-xs px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white opacity-80 whitespace-nowrap`}>
            {service.duration}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg sm:text-2xl font-bold text-white">{service.price}</span>
          <Button 
            size="sm" 
            onClick={handleSelect}
            className="bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-200 rounded-lg border-0 transition-all duration-200 text-xs sm:text-sm"
          >
            Select
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

TabTriggerComponent.displayName = "TabTriggerComponent";
TabContentComponent.displayName = "TabContentComponent";
ServiceCard.displayName = "ServiceCard";
BusinessTypes.displayName = "BusinessTypes";

export default BusinessTypes;
