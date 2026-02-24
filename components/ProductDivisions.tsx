"use client";

import Image from "next/image";

const divisions = [
  {
    title: "Gynaec Management",
    subtitle: "GYNAEC MANAGEMENT",
    description:
      "Science-driven formulations for every stage of a woman's journey — from PCOS and fertility to prenatal care and menopause.",
    image:
      "https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/Gynaec%20Management.jpg",
  },
  {
    title: "Ortho Management",
    subtitle: "ORTHO MANAGEMENT",
    description:
      "Precision-formulated solutions for bone strength, joint health, and calcium metabolism — built to support musculoskeletal wellness at every age.",
    image:
      "https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/Ortho%20Management.avif",
  },
  {
    title: "Physician Management",
    subtitle: "PHYSICIAN MANAGEMENT",
    description:
      "Comprehensive healthcare solutions designed for general physicians to treat a wide array of everyday illnesses and conditions.",
    image:
      "https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/Physician%20Management.jpg",
  },
];

export default function ProductDivisions() {
  return (
    <section className="bg-white font-sans">
      <div className="w-full max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6 mb-20">
        <div className="bg-gradient-to-br from-[#E0F2FE] to-[#F0F9FF] rounded-[2.5rem] py-16 lg:py-24 px-8 md:px-16 lg:px-24 border border-blue-50/50 shadow-sm">
          {/* Header Section */}
          <div className="flex flex-col mb-16 lg:mb-20">
            <p className="text-[16px] lg:text-[18px] font-medium text-[#0284C7] flex items-center tracking-wide mb-4 lg:mb-6">
              <span className="text-[18px] mr-3 leading-none relative -top-[1.5px] text-[#0284C7]/40">•</span>
              Our Divisions
            </p>
            <h2 className="text-[#0A1931] text-[30px] lg:text-[36px] xl:text-[46px] leading-[1.45] font-medium tracking-tight max-w-3xl">
              Specialized Care Across Our Divisions
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
            {divisions.map((division, index) => (
              <div
                key={index}
                className="relative h-[450px] lg:h-[500px] xl:h-[560px] rounded-xl overflow-hidden "
              >
                {/* Background Image */}
                <Image
                  src={division.image}
                  alt={division.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                  priority={index < 2} // Load first two immediately to prevent layout shift below fold
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized={division.image.includes('supabase.co')}
                />
                {/* Static Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/95 via-[#0A1931]/40 to-black/10 opacity-90 group-hover:opacity-80 transition-opacity duration-700 hover:opacity-80" />

                {/* Content Wrapper */}
                <div className="absolute inset-0 p-8 lg:p-8 xl:p-10 flex flex-col justify-end z-10 transition-transform duration-500 ease-out group-hover:translate-y-[-8px]">
                  <div>
                    {/* Category Subtitle */}
                    <p className="text-white/70 text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.25em] mb-4">
                      {division.subtitle}
                    </p>

                    {/* Title */}
                    <h3 className="text-[20px] lg:text-[24px] xl:text-[28px] leading-[1.45] font-medium text-white mb-5 tracking-tight leading-[1.15] drop-shadow-md">
                      {division.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 text-[12px] lg:text-[14px] xl:text-[16px] leading-[1.6] mb-0 font-light max-w-[95%]">
                      {division.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
