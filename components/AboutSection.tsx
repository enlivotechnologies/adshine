"use client";

import React from "react";

export default function AboutSection() {
  const stats = [
    { value: "20+",  label1: "Products across",    label2: "GP & GYN divisions" },
    { value: "500+", label1: "Doctors trust",      label2: "our formulations" },
    { value: "3",    label1: "Certifications",     label2: "GMP · ISO · USP" },
    { value: "15+",  label1: "Years of",           label2: "pharmaceutical care" },
  ];

  const partners = [
    "Apollo Pharmacy",
    "MedPlus",
    "Fortis Healthcare",
    "Max Hospitals",
  ];

  return (
    <section className="bg-white font-sans">
      <div className="w-full max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6">
        <div className="bg-[#f8f8f9] rounded-[2.5rem] rounded-bl-[0] rounded-br-[0] py-16 lg:py-24 px-8 md:px-16 lg:px-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 lg:mb-24">
          <div className="lg:col-span-1">
            <p className="text-[18px] font-medium text-[#888888] flex items-center tracking-wide">
              <span className="text-[18px] mr-3 leading-none relative -top-[1.5px] text-[#b5b5b5]">•</span> 
              About Adshine
            </p>
          </div>
          <div className="lg:col-span-3 lg:pr-12">
            <h2 className="text-[#1a1a1a] text-[20px] lg:text-[24px] xl:text-[28px] leading-[1.45] font-medium tracking-tight">
              With over 15 years of pharmaceutical experience, we specialise in delivering science-backed, GMP-certified medicines across General Physician and Gynecology care. Our dedicated team is focused on improving patient outcomes and helping doctors across India prescribe with confidence.
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#eaeaec] mb-12 lg:mb-16"></div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className="text-[20px] lg:text-[28px] font-medium text-[#111111] mb-2.5 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[14px] lg:text-[15px] text-[#888888] font-medium leading-[1.5]">
                {stat.label1}
                <br />
                {stat.label2}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        {/* <div className="w-full h-[1px] bg-[#eaeaec] mb-10 lg:mb-12"></div> */}

        {/* Partners Section */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-[12px] h-[12px] rounded-full bg-[#e0e0e0]"></div>
              <span className="text-[13px] font-medium tracking-wide text-[#b0b0b0]">
                {partner}
              </span>
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </section>
  );
}
