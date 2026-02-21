"use client";

import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[680px] max-h-[900px] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/1200x/f9/aa/71/f9aa710551d53f989f5c8dddcee3c9aa.jpg"
          alt="Adshine Pharmaceuticals — Healthier Families"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark vignette — balanced specifically for centered reading */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>

      {/* Content layer */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center items-center text-center">

        {/* ── CENTER: Big headline + CTAs ── */}
        <div className="flex flex-col items-center gap-8 w-full">

          {/* Headline */}
          <div className="max-w-[900px] flex flex-col items-center">
            <h1 className="font-medium tracking-tight text-white leading-[1.1] mb-6 text-[42px] md:text-[60px] lg:text-[68px] xl:text-[76px]">
              Healthier Lives Begin With<br />Better Medicine.
             
            </h1>
            <p className="text-[15px] md:text-[16px] lg:text-[18px] text-white/80 leading-[1.65] max-w-[500px] mb-10 font-light drop-shadow-sm mx-auto">
              GMP-certified, clinically proven medicines across Orthology and Gynecology care —
              trusted by 500+ doctors pan-India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-4 hover:cursor-pointer">
              <Link
                href="/products"
                className="group h-[52px] px-8 rounded-full bg-[#cc0000] text-white font-semibold text-[15px] hover:bg-[#aa0000] transition-colors flex items-center justify-center gap-2.5 shadow-lg shadow-[#cc0000]/20"
              >
                Explore Products
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group h-[52px] px-8 rounded-full bg-transparent border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2.5"
              >
                <PhoneCall className="w-[18px] h-[18px] text-white/70 group-hover:text-white transition-colors" />
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom progress bar — purely decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#cc0000] via-red-500/50 to-transparent z-20" />

    </section>
  );
}
