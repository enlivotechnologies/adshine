"use client";

import { CheckCircle2, ShieldCheck, FileText, FlaskConical } from "lucide-react";

export default function QualitySection() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-32 -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div
           className="space-y-8"
        >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>Our Quality Standards</span>
             </div>
             
             <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Quality Is Not a Department. <br />
                <span className="text-teal-600">It&apos;s Our Foundation.</span>
             </h2>

             <p className="text-lg text-gray-600 leading-relaxed font-light">
                Our dedication to quality is uncompromising — covering every 
                stage of development, production, and marketing of our medicines. 
                Our manufacturing network is continuously optimized so that 
                doctors and patients can have full confidence in every Adshine product.
             </p>

             <div className="space-y-4 pt-4">
                {[
                   { title: "Clinically Proven", desc: "Doctor Recommended Formulations", icon: CheckCircle2, color: "text-blue-600" },
                   { title: "GMP Certified", desc: "Good Manufacturing Practice — Consistent Quality", icon: ShieldCheck, color: "text-green-600" },
                   { title: "ISO 9001:2008", desc: "International Quality Management Standard", icon: FileText, color: "text-purple-600" },
                ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                      <div className={`p-2 bg-white rounded-lg shadow-sm ${item.color}`}>
                         <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                         <h4 className="font-bold text-gray-900">{item.title}</h4>
                         <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>
        </div>

        {/* Right: USP Highlight Card */}
        <div
           className="relative"
        >
           <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-6 opacity-10 blur-xl" />
           <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-10 rounded-3xl shadow-2xl text-white overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                 <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                    <FlaskConical className="w-10 h-10 text-white" />
                 </div>

                 <div>
                    <h3 className="text-3xl font-bold mb-2">USP 42 / NF37</h3>
                    <div className="inline-block px-4 py-1 rounded-full bg-white/20 border border-white/30 text-sm font-semibold tracking-wide backdrop-blur-sm">
                       CERTIFIED PURITY
                    </div>
                 </div>

                 <p className="text-white/90 leading-relaxed text-lg font-light">
                    <span className="font-bold text-white">RG-Nine</span> contains the Purest form of L-Arginine, 
                    verified by <span className="font-semibold">United States Pharmacopeia</span> — 
                    a global benchmark for pharmaceutical purity.
                 </p>

                 <div className="w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                 <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Global Quality Benchmark</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
