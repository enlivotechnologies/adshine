"use client";

import { ShieldCheck, UserCheck, Microscope, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Microscope,
    title: "Evidence-Based Formulations",
    description: "Every product at Adshine is built on peer-reviewed clinical data — not trends. Our compositions are designed to deliver measurable outcomes.",
    number: "01",
  },
  {
    icon: ShieldCheck,
    title: "GMP & ISO Certified Manufacturing",
    description: "We adhere to WHO-GMP and ISO 9001:2008 standards at every stage — from raw material procurement to final packaging.",
    number: "02",
  },
  {
    icon: UserCheck,
    title: "Better Patient Compliance",
    description: "Oblong shapes, moisture barrier coatings, once-daily dosing, and sachet formats — deliberate choices made with the patient in mind.",
    number: "03",
  },
  {
    icon: HeartHandshake,
    title: "Doctor-Centric Approach",
    description: "Our products are backed by clinical monographs, comparative data, and MR support — designed to make prescribing straightforward.",
    number: "04",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#f8f8f9] font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <p className="text-[12px] md:text-[13px] font-semibold text-[#a3a3a3] uppercase tracking-[0.15em] mb-4">
              Why Adshine
            </p>
            <h2 className="text-[#1a1a1a] text-[32px] md:text-[36px] lg:text-[42px] font-medium tracking-tight leading-[1.2]">
              Where Clinical Science Meets<br />
              Manufacturing Excellence
            </h2>
          </div>
          <p className="text-[14px] lg:text-[15px] text-[#7a7a7a] max-w-sm leading-[1.65] md:text-right font-medium">
            Four pillars that define every product we make and every relationship we build.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] p-8 xl:p-10 border border-[#f0f0f0] transition-shadow duration-300 hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.06)]"
            >
              {/* Top row: Number & Icon cleanly placed in the same horizontal line */}
              <div className="flex items-center gap-4 mb-6">
                {/* Number */}
                <div className="w-[28px] flex-shrink-0">
                  <span className="text-[11px] lg:text-[12px] font-bold text-[#b0b0b0] tracking-[0.2em]">
                    {feature.number}
                  </span>
                </div>
                {/* Icon Box */}
                <div className="w-[44px] h-[44px] bg-[#f7f7f9] rounded-[14px] flex items-center justify-center flex-shrink-0 border border-[#f0f0f3]">
                  <feature.icon className="w-[18px] h-[18px] text-[#333333]" strokeWidth={1.5} />
                </div>
              </div>

              {/* Bottom row: Content dynamically aligned perfectly underneath the Icon */}
              <div className="ml-[44px]"> {/* 28px (number) + 16px (gap-4) = 44px indent */}
                <h3 className="text-[16px] lg:text-[17px] font-bold text-[#111111] tracking-tight mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[13px] lg:text-[14px] leading-[1.65] text-[#888888] font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
