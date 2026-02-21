"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bone, FlaskConical, Baby, Brain, Dna } from "lucide-react";

const products = [
  {
    name: "DYDROFLOW",
    tagline: "The Ultimate Shift to Nurture Life",
    category: "Pregnancy Care",
    indication: "Threatened Abortion, Recurrent Pregnancy Loss",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop", // placeholder pills
    accentColor: "text-[#ec4899]", // pink-500
    icon: Baby,
  },
  {
    name: "MYONINE-DM",
    tagline: "The Only Evidence-Based Treatment",
    category: "PCOS Management",
    indication: "PCOS, Irregular Menses",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop", // placeholder pills
    accentColor: "text-[#a855f7]", // purple-500
    icon: Brain,
  },
  {
    name: "LACTOJOY",
    tagline: "Force of Balance",
    category: "Gut & Vaginal Health",
    indication: "Bacterial Vaginosis, UTI, PCOS",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=800&auto=format&fit=crop", // placeholder pills
    accentColor: "text-[#10b981]", // emerald-500
    icon: Dna,
  },
  {
    name: "CALNINE-XT",
    tagline: "Active Formula For Active Tomorrow",
    category: "Bone Health",
    indication: "Diabetic & Drug Induced Bone Loss",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop", // placeholder pills
    accentColor: "text-[#3b82f6]", // blue-500
    icon: Bone,
  },
  {
    name: "FERNINE-XT",
    tagline: "Trusted Efficacy with Better Compliance",
    category: "Iron & Blood",
    indication: "Iron Deficiency Anemia",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop", // placeholder pills
    accentColor: "text-[#ef4444]", // red-500
    icon: FlaskConical,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="px-6 md:px-12 lg:px-20 mb-12 flex items-end justify-between">
          <div className="flex flex-col items-start text-left">
            <p className="text-[12px] md:text-[13px] font-semibold text-[#a3a3a3] uppercase tracking-[0.15em] mb-3">
              Featured Products
            </p>
            <h2 className="text-[#1a1a1a] text-[28px] md:text-[34px] lg:text-[40px] font-medium tracking-tight leading-[1.2]">
              Formulated for precision. Trusted by doctors.
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-1.5 text-[14px] font-semibold text-[#4a4a4a] flex-shrink-0 hover:text-black transition-colors"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20">
          {products.slice(0, 4).map((product, index) => (
            <div
              key={index}
              className="w-full bg-[#fafafa] rounded-[20px] overflow-hidden border border-[#eee] transition-shadow duration-300 hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)]"
            >
              {/* Image */}
              <div className="relative h-[200px] lg:h-[220px] w-full overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {/* Category pill */}
                <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm ${product.accentColor} text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.08em]`}>
                  <product.icon className="w-3.5 h-3.5" />
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-7">
                <h3 className="text-[18px] lg:text-[20px] font-bold text-[#111] tracking-tight mb-1">
                  {product.name}
                </h3>
                <p className="text-[13px] lg:text-[14px] text-[#7a7a7a] mb-5 italic font-medium">
                  {product.tagline}
                </p>
                <p className="text-[12px] lg:text-[13px] text-[#888] leading-[1.5]">
                  <span className="font-semibold text-[#555]">For: </span>
                  {product.indication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
