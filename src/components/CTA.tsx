
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm rounded-3xl p-12 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-zinc-700/20 rounded-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Ready to Start Your Business?
              </span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who chose InCorp for their business incorporation and compliance needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button className="bg-gradient-to-r from-zinc-600 to-zinc-700 hover:from-zinc-500 hover:to-zinc-600 text-white px-8 py-6 rounded-2xl text-lg font-semibold border-0 shadow-2xl">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="ghost" className="text-zinc-300 hover:text-white hover:bg-zinc-800/50 px-8 py-6 rounded-2xl text-lg font-semibold border border-zinc-800/50">
                Schedule Consultation
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-400">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-zinc-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-zinc-500" />
                <span>hello@incorp.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
