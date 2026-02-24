"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const products = [
  { 
    id: 3, 
    name: "Shine 35", 
    form: "Tablets", 
    division: "gynaec", 
    indication: "PCOS, Hirsutism, Acne",
    image: "https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/PHOTO-2026-02-24-11-06-58%202.jpg"
  },
  { 
    id: 9, 
    name: "Fernine XT", 
    form: "Tablets", 
    division: "gynaec", 
    indication: "Iron Deficiency Anaemia",
    image: "https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/PHOTO-2026-02-24-11-07-00.jpg"
  },
  { 
    id: 10, 
    name: "Myonine DM", 
    form: "Tablets", 
    division: "gynaec", 
    indication: "PCOS, Insulin Resistance, Irregular Menses",
    image: "https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/PHOTO-2026-02-24-11-06-59.jpg"
  },
  { 
    id: 5, 
    name: "Dydroflow", 
    form: "Tablets", 
    division: "gynaec", 
    indication: "Luteal Phase Support, Endometriosis, High-Risk Pregnancy",
    image: "https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/PHOTO-2026-02-24-13-51-34.jpg"
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-12 lg:py-18 font-sans mb-8">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="flex flex-col">
            <p className="text-[16px] lg:text-[18px] font-medium text-blue-600/80 flex items-center tracking-wide mb-4 lg:mb-6">
              <span className="text-[12px] mr-3 leading-none relative -top-[1.5px] text-blue-400">•</span>
              Featured Products
            </p>
            <h2 className="text-[#0A1931] text-[30px] lg:text-[36px] xl:text-[46px] leading-[1.45] font-medium tracking-tight">
              Formulated for precision.
            </h2>
          </div>
          
          <Link
            href="/products"
            className="group flex items-center gap-2 text-[15px] lg:text-[16px] font-semibold text-[#0A1931] hover:text-[#0057D9] transition-colors pb-2 md:pb-4 border-b-2 border-transparent hover:border-[#0057D9]"
          >
            Explore all products 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid - Exact replica of Product Page UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={`${product.division}-${product.id}`}
              className="bg-white rounded-[1.5rem] border border-[#E2E8F0] overflow-hidden flex flex-col hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <div className="bg-[#f8fafc] p-3 sm:p-4">
                <div className="relative w-full h-48 xl:h-56 rounded-xl overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.08)] group-hover:border-blue-50">
                  {product.image ? (
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized={product.image.includes('supabase.co')}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <span className="text-[#94A3B8] font-medium text-lg xl:text-xl px-4 text-center">
                      {product.name}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 xl:p-8 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] xl:text-[13px] font-bold text-[#64748B] tracking-widest">
                    #{(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="text-[11px] xl:text-[12px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-blue-50 text-[#0057D9]">
                    {product.form}
                  </span>
                </div>

                <h3 className="text-[18px] xl:text-[20px] font-bold text-[#0A1931] tracking-tight leading-snug group-hover:text-[#0057D9] transition-colors">
                  {product.name}
                </h3>

                <p className="text-[13px] xl:text-[14px] font-medium text-[#64748B] leading-relaxed min-h-[40px]">
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
