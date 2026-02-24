"use client";

import { useState, useEffect, Suspense } from "react";
import { Stethoscope, Baby, ArrowLeft, Activity } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  form: string;
  indication: string;
  division: "gynaec" | "ortho" | "physician";
};

const gynaecProducts: Product[] = [
  { id: 1, name: "Dydroflow", form: "Tablets", division: "gynaec", indication: "Threatened Abortion, Recurrent Pregnancy Loss" },
  { id: 2, name: "Lactojoy", form: "Veg Capsules", division: "gynaec", indication: "Bacterial Vaginosis, UTI, PCOS" },
  { id: 3, name: "Shine 35", form: "Tablets", division: "gynaec", indication: "PCOS, Hirsutism, Acne"},
  { id: 4, name: "Pro27", form: "Supplement", division: "gynaec", indication: "Protein Deficiency in Pregnancy & Lactation" },
  { id: 5, name: "Adfol DHA", form: "Tablets", division: "gynaec", indication: "Pregnancy Nutrition, Neural Tube Defect Prevention" },
  { id: 6, name: "RG nine", form: "Sachets", division: "gynaec", indication: "Recurrent Pregnancy Loss, Foetal Growth" },
  { id: 7, name: "Calnine", form: "Tablets", division: "gynaec", indication: "Postmenopausal Osteoporosis" },
  { id: 8, name: "Calnine XT", form: "Tablets", division: "gynaec", indication: "Pregnancy & Lactation Calcium Support" },
  { id: 9, name: "Fernine XT", form: "Tablets", division: "gynaec", indication: "Iron Deficiency Anaemia" },
  { id: 10, name: "Myonine DM", form: "Tablets", division: "gynaec", indication: "PCOS, Insulin Resistance, Irregular Menses" },
  { id: 11, name: "Coral D3", form: "Softgel Capsules", division: "gynaec", indication: "Vitamin D3 Deficiency in Pregnancy" },
  { id: 12, name: "Isopause", form: "Tablets", division: "gynaec", indication: "Menopausal Bone Loss" },
];

const orthoProducts: Product[] = [
  { id: 1, name: "Calnine", form: "Tablets", division: "ortho", indication: "Calcium & Vitamin D Deficiency" },
  { id: 2, name: "Calnine XT", form: "Tablets", division: "ortho", indication: "Diabetic & Drug Induced Bone Loss" },
  { id: 3, name: "Coral D3", form: "Softgel Capsules", division: "ortho", indication: "Vitamin D3 Deficiency" },
  { id: 4, name: "Fernine XT", form: "Tablets", division: "ortho", indication: "Iron Deficiency Anaemia" },
  { id: 5, name: "Adpan DSR", form: "Capsules", division: "ortho", indication: "Acid Reflux & GERD" },
  { id: 6, name: "Pro 27 DF", form: "Supplement", division: "ortho", indication: "Protein Deficiency, Family Nutrition" },
];

const physicianProducts: Product[] = [
  { id: 1, name: "Lactojoy", form: "Veg Capsules", division: "physician", indication: "Gut Dysbiosis, IBS, Diarrhoea" },
  { id: 2, name: "Calnine XT", form: "Tablets", division: "physician", indication: "Diabetic & Drug Induced Bone Loss" },
  { id: 3, name: "Fernine XT", form: "Tablets", division: "physician", indication: "Iron Deficiency Anaemia" },
  { id: 4, name: "Coral D3", form: "Softgel Capsules", division: "physician", indication: "Vitamin D3 Deficiency" },
  { id: 5, name: "Adpan DSR", form: "Capsules", division: "physician", indication: "Acid Reflux & GERD" },
  { id: 6, name: "Pro 27 DF", form: "Supplement", division: "physician", indication: "Protein Deficiency, Family Nutrition" },
];

function ProductsContent() {
  const [active, setActive] = useState<"gynaec" | "ortho" | "physician">("gynaec");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tabParam = searchParams.get("tab") as "gynaec" | "ortho" | "physician" | null;
    if (tabParam && ["gynaec", "ortho", "physician"].includes(tabParam)) {
      setActive(tabParam);
    }
  }, [searchParams]);

  const products = active === "gynaec" ? gynaecProducts : active === "ortho" ? orthoProducts : physicianProducts;

  return (
    <div className="min-h-screen bg-white">
      {/* Top breadcrumb bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-gray-200">/</span>
          <span className="text-sm text-gray-700 font-semibold">All Products</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-14">
        {/* Page Header */}
        <div className="mb-12 pb-10 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Our Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight mb-3">
                GMP-Certified Medicine.<br /> Formulated with Purpose.
              </h1>
              <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
                Every product in our portfolio is clinically validated, GMP-certified, and prescribed by doctors across India.
                Browse by division to find the right formulation.
              </p>
            </div>
            {/* Stats strip */}
            <div className="flex items-center gap-8 flex-shrink-0">
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">20+</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">Products</p>
              </div>
              <div className="w-px h-8 bg-gray-100" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">3</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">Divisions</p>
              </div>
              <div className="w-px h-8 bg-gray-100" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-gray-900">GMP</p>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest mt-0.5">Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Division Toggles */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            onClick={() => setActive("gynaec")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === "gynaec"
                ? "bg-black text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            <Baby className="w-4 h-4" />
            Gynaec Division
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active === "gynaec" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
              {gynaecProducts.length}
            </span>
          </button>

          <button
            onClick={() => setActive("ortho")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === "ortho"
                ? "bg-black text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            <Activity className="w-4 h-4" />
            Ortho Division
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active === "ortho" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
              {orthoProducts.length}
            </span>
          </button>
          
          <button
            onClick={() => setActive("physician")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === "physician"
                ? "bg-black text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            Physician Division
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${active === "physician" ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
              {physicianProducts.length}
            </span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={`${product.division}-${product.id}`}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-sm transition-shadow"
            >
              <div className="bg-gray-50 p-4">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-medium text-lg px-4 text-center">
                    {product.name}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-black/60 tracking-widest">
                    #{product.id.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                    {product.form}
                  </span>
                </div>

                <h3 className="text-[15px] font-semibold text-black tracking-tight leading-snug">
                  {product.name}
                </h3>

                <p className="text-[11px] font-medium text-black/60 leading-snug">
                  {product.indication}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductsContent />
    </Suspense>
  );
}
