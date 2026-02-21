"use client";

import { Zap, Shield, Globe, Cpu, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightening Fast",
    description: "Built on Next.js 14 for sub-millisecond page loads and instant interactions.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and automated threat detection built-in.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Globe,
    title: "Global Edge",
    description: "Deploy instantly to 35+ regions worldwide with our edge network.",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    icon: Cpu,
    title: "AI Native",
    description: "Deep integration with LLMs to power your next generation features.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track user behavior and system performance with zero latency.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built for teams with real-time multiplayer editing and comments.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
         <div 
            className="text-center mb-20 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Everything you need to <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                build the extraordinary.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform provides the building blocks for modern, high-performance web applications.
            </p>
         </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/10 transition-all duration-300"
            >
              <div className={`h-14 w-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-7 w-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
