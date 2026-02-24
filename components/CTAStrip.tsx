"use client";

import { ArrowRight } from "lucide-react";

export default function CTAStrip() {
  return (
    <section className="bg-white font-sans">
      <div className="w-full max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6 mb-12">
        <div className="relative bg-gradient-to-r from-[#0A1931] to-[#15305B] rounded-[2.5rem] py-16 lg:py-24 px-8 md:px-16 lg:px-24 overflow-hidden flex flex-col items-center text-center space-y-8 shadow-[0_20px_50px_-12px_rgba(10,25,49,0.3)] border border-[#1e3a8a]/20">
          <div className="relative z-10">
            <h2 className="text-[26px] md:text-[36px] lg:text-[46px] xl:text-[54px] font-medium tracking-tight text-white mb-6 leading-[1.1] drop-shadow-sm">
              The Right Medicine,{" "}<br className="hidden sm:block" />In the Right Hands.
            </h2>
            <p className="text-[16px] lg:text-[18px] text-blue-100/90 max-w-2xl mx-auto font-medium leading-[1.6]">
              Whether you&apos;re a distributor, stockist, or healthcare professional
              looking for reliable pharmaceutical solutions — we&apos;d love to connect.
            </p>
          </div>

          <div className="relative z-10 flex justify-center pt-4 lg:pt-6">
            <button className="group h-[54px] lg:h-[60px] px-10 rounded-full bg-blue-500 text-white font-semibold text-[15px] lg:text-[16px] flex items-center gap-3 hover:bg-blue-600">
              Partner With Us
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
