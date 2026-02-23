"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Mirroring the exact data structure from products page
const products = [
  { 
    id: 3, 
    name: "Shine 35", 
    form: "Tablets", 
    division: "gynaec", 
    indication: "PCOS, Hirsutism, Acne"
  },
  { 
    id: 5, 
    name: "Adpan DSR", 
    form: "Capsules", 
    division: "ortho", 
    indication: "Acid Reflux & GERD"
  },
  { 
    id: 3, 
    name: "Coral D3", 
    form: "Softgel Capsules", 
    division: "ortho", 
    indication: "Vitamin D3 Deficiency"
  },
  { 
    id: 6, 
    name: "Pro 27 DF", 
    form: "Supplement", 
    division: "physician", 
    indication: "Protein Deficiency, Family Nutrition"
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-12 lg:py-18 font-sans mb-8">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="flex flex-col">
            <p className="text-[16px] lg:text-[18px] font-medium text-[#888888] flex items-center tracking-wide mb-4 lg:mb-6">
              <span className="text-[12px] mr-3 leading-none relative -top-[1.5px] text-[#b5b5b5]">•</span>
              Featured Products
            </p>
            <h2 className="text-[#1a1a1a] text-[30px] lg:text-[36px] xl:text-[46px] leading-[1.45] font-medium tracking-tight">
              Formulated for precision.
            </h2>
          </div>
          
          <Link
            href="/products"
            className="group flex items-center gap-2 text-[15px] lg:text-[16px] font-semibold text-[#1a1a1a] hover:text-[#B80004] transition-colors pb-2 md:pb-4 border-b-2 border-transparent hover:border-[#B80004]"
          >
            Explore all products 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards Grid - Exact replica of Product Page UI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={`${product.division}-${product.id}`}
              className="bg-white rounded-[1.5rem] border border-gray-100 overflow-hidden flex flex-col hover:shadow-sm transition-shadow duration-300"
            >
              <div className="bg-gray-50 p-4">
                <div className="relative w-full h-44 xl:h-52 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-300">
                  <span className="text-gray-500 font-medium text-lg xl:text-xl px-4 text-center transition-colors duration-300 group-hover:text-gray-700">
                    {product.name}
                  </span>
                </div>
              </div>

              <div className="p-6 xl:p-8 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] xl:text-[13px] font-bold text-black/60 tracking-widest">
                    #{product.id.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[11px] xl:text-[12px] font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full bg-gray-100 text-gray-600">
                    {product.form}
                  </span>
                </div>

                <h3 className="text-[18px] xl:text-[20px] font-bold text-black tracking-tight leading-snug">
                  {product.name}
                </h3>

                <p className="text-[13px] xl:text-[14px] font-medium text-black/60 leading-relaxed min-h-[40px]">
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
