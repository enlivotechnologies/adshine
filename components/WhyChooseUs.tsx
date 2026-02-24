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
    <section className="bg-white font-sans">
      <div className="w-full max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6 mb-12">
        <div className="bg-[#F4F7FB] rounded-[2.5rem] py-16 lg:py-24 px-8 md:px-16 lg:px-24">

          {/* Header */}
          <div className="flex flex-col mb-16 lg:mb-20">
            <p className="text-[16px] lg:text-[18px] font-medium text-blue-600/80 flex items-center tracking-wide mb-4 lg:mb-6">
              <span className="text-[18px] mr-3 leading-none relative -top-[1.5px] text-blue-400">•</span>
              Why Adshine
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-[#0A1931] text-[36px] md:text-[42px] lg:text-[48px] xl:text-[56px] leading-[1.2] font-medium tracking-tight">
                Where Clinical Science Meets<br /> Manufacturing Excellence
              </h2>
              <p className="text-[15px] lg:text-[16px] text-[#64748B] max-w-sm leading-relaxed pb-2 md:pb-4 font-medium">
                Four pillars that define every product we make and every relationship we build.
              </p>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-8 lg:p-10 xl:p-12 border border-[#E2E8F0]"
              >
                {/* Top row: Number & Icon */}
                <div className="flex items-center justify-between mb-10">
                  <span className="text-[13px] lg:text-[14px] font-bold text-[#94A3B8] tracking-[0.2em]">
                    {feature.number}
                  </span>
                  <div className="w-[52px] h-[52px] lg:w-[60px] lg:h-[60px] bg-[#E0F2FE] rounded-[1.25rem] flex items-center justify-center border border-[#BAE6FD]">
                    <feature.icon className="w-[24px] h-[24px] text-[#0284C7]" strokeWidth={2} />
                  </div>
                </div>

                {/* Bottom row: Content */}
                <div>
                  <h3 className="text-[20px] lg:text-[24px] xl:text-[28px] leading-[1.45] font-semibold text-[#0A1931] tracking-tight mb-4 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] lg:text-[15px] leading-relaxed text-[#475569] font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
