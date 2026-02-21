"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const divisions = [
  {
    title: "Ortho Management",
    subtitle: "ORTHO Division",
    description:
      "Precision-formulated solutions for bone strength, joint health, and calcium metabolism — built to support musculoskeletal wellness at every age.",
    products: ["Calnine-XT", "Calnine", "Coral-D3", "Fernine-XT", "Pro-27 DF"],
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop", // Elegant active/wellness lifestyle image
    linkText: "Explore Ortho Products",
  },
  {
    title: "Gynecology",
    subtitle: "GYN Division",
    description:
      "Science-driven formulations for every stage of a woman's journey — from PCOS and fertility to prenatal care and menopause.",
    products: ["Dydroflow", "Myonine-DM", "Adfol-DHA", "Shine-35", "RG-Nine", "Isopause"],
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
    linkText: "Explore GYN Products",
  },
];

export default function ProductDivisions() {
  return (
    <section className="bg-white py-20 lg:py-32 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <p className="text-[13px] font-medium text-[#888888] flex items-center tracking-wide mb-4 lg:mb-6">
            <span className="text-[18px] mr-3 leading-none relative -top-[1.5px] text-[#b5b5b5]">•</span>
            Our Divisions
          </p>
          <h2 className="text-[#1a1a1a] text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] leading-[1.3] font-medium tracking-tight max-w-2xl">
            Specialized Care Across Two Divisions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="relative h-[500px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={division.image}
                alt={division.title}
                fill
                className="object-cover"
              />
              {/* Static Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 opacity-90" />

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end z-10">
                <div>
                  {/* Category Subtitle */}
                  <p className="text-white/70 text-[11px] font-semibold uppercase tracking-[0.25em] mb-3">
                    {division.subtitle}
                  </p>

                  {/* Title */}
                  <h3 className="text-[28px] lg:text-[34px] font-medium text-white mb-4 tracking-tight leading-short drop-shadow-md">
                    {division.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-[14px] lg:text-[15px] leading-[1.6] mb-8 font-light max-w-[95%]">
                    {division.description}
                  </p>

                  {/* Premium Pill Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {division.products.map((p) => (
                      <span
                        key={p}
                        className="text-[12px] font-medium text-white/90 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-white text-[14px] font-semibold uppercase tracking-wide">
                    {division.linkText}
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
