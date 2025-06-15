
import React, { memo, useMemo } from "react";

interface Stat {
  number: string;
  label: string;
  sublabel: string;
}

interface StatCardProps {
  stat: Stat;
}

const Stats = memo(() => {
  const stats = useMemo(() => [
    { number: "1000+", label: "Companies Incorporated", sublabel: "And growing every month" },
    { number: "₹50Cr+", label: "Capital Raised", sublabel: "By our client companies" },
    { number: "98%", label: "Success Rate", sublabel: "In incorporation process" },
    { number: "7 Days", label: "Average Time", sublabel: "To complete incorporation" },
    { number: "24/7", label: "Expert Support", sublabel: "Always available for you" },
    { number: "15 States", label: "Pan-India Presence", sublabel: "Registered across India" }
  ], []);

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Numbers That Speak
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Our track record demonstrates our commitment to helping Indian startups succeed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
});

const StatCard = memo<StatCardProps>(({ stat }) => {
  return (
    <div className="text-center group">
      <div className="bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-zinc-800/50 transition-all duration-300 group-hover:scale-105 will-change-transform">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          {stat.number}
        </div>
        <div className="text-lg font-semibold text-zinc-300 mb-2">{stat.label}</div>
        <div className="text-sm text-zinc-500">{stat.sublabel}</div>
      </div>
    </div>
  );
});

StatCard.displayName = "StatCard";
Stats.displayName = "Stats";

export default Stats;
