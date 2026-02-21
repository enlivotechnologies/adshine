"use client";

import { ArrowRight } from "lucide-react";

export default function CTAStrip() {
  return (
    <div className="mx-4 md:mx-8 mb-8">
      <section className="relative py-24 bg-neutral-900 rounded-3xl overflow-hidden">

    
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center space-y-8">

          <div>
            <h2 className="text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
              The Right Medicine,{" "}<br />  In the Right Hands.
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
              Whether you&apos;re a distributor, stockist, or healthcare professional
              looking for reliable pharmaceutical solutions — we&apos;d love to connect.
            </p>
          </div>

          <div className="flex justify-center pt-4">
            <button className="group h-14 px-10 rounded-full bg-[#B80004] text-white font-semibold text-base flex items-center gap-2.5">
              Partner With Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>
    </div>
  );

}
