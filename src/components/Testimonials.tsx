
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, TechStart Solutions",
      content: "InCorp made our company incorporation incredibly smooth. What seemed like a complex process was handled professionally, and we were operational within a week!",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Rajesh Kumar",
      role: "CEO, GreenTech Innovations",
      content: "The legal compliance support has been invaluable. InCorp's team keeps us updated on all regulatory changes and ensures we never miss important deadlines.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Anita Patel",
      role: "Co-founder, FinanceFlow",
      content: "From incorporation to ongoing compliance, InCorp has been our trusted partner. Their expertise in Indian business law is exceptional and their support is always available.",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Hear from successful entrepreneurs who trusted InCorp with their business dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm rounded-2xl hover:bg-zinc-800/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-zinc-600 to-zinc-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-zinc-400 text-sm">{testimonial.role}</div>
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

export default Testimonials;
