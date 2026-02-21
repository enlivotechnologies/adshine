"use client";

import { useState } from "react";
import { Stethoscope, Baby, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  form: string;
  composition: string;
  indication: string;
  division: "gp" | "gyn";
  image: string;
};

const gpProducts: Product[] = [
  {
    id: 1, name: "Calnine-XT", form: "Tablets", division: "gp",
    indication: "Diabetic & Drug Induced Bone Loss",
    composition: "Calcium Carbonate 1250mg + Vit D3 2000 IU + Methylcobalamin + L-Methylfolate + Pyridoxal-5-Phosphate",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2, name: "Coral-D3", form: "Softgel Capsules", division: "gp",
    indication: "Vitamin D3 Deficiency",
    composition: "Cholecalciferol 60000 IU",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3, name: "Lactojoy", form: "Veg Capsules", division: "gp",
    indication: "Gut Dysbiosis, IBS, Diarrhoea",
    composition: "8 Probiotic Strains — 12 Billion CFU + FOS 100mg",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4, name: "Isopause", form: "Tablets", division: "gp",
    indication: "Menopausal Syndrome",
    composition: "Isoflavones 100mg + Antioxidants + Micronutrients",
    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5, name: "Fernine-XT", form: "Tablets", division: "gp",
    indication: "Iron Deficiency Anaemia",
    composition: "Liposomal Iron 30mg + Folic Acid 1.5mg + Zinc Sulphate 22.5mg",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6, name: "Calnine", form: "Tablets", division: "gp",
    indication: "Calcium & Vitamin D Deficiency",
    composition: "Calcium Citrate 1000mg + Vit D3 200 IU + Magnesium Hydroxide 100mg + Zinc 4mg",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7, name: "Pro-27 DF", form: "Supplement", division: "gp",
    indication: "Protein Deficiency, Family Nutrition",
    composition: "High Protein Nutrition — Family Care",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop",
  },
];

const gynProducts: Product[] = [
  {
    id: 1, name: "Dydroflow", form: "Tablets", division: "gyn",
    indication: "Threatened Abortion, Recurrent Pregnancy Loss",
    composition: "Dydrogesterone 10mg",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2, name: "Lactojoy", form: "Veg Capsules", division: "gyn",
    indication: "Bacterial Vaginosis, UTI, PCOS",
    composition: "8 Probiotic Strains — 12 Billion CFU + FOS 100mg (GYN targeted)",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3, name: "Myonine-DM", form: "Tablets", division: "gyn",
    indication: "PCOS, Insulin Resistance, Irregular Menses",
    composition: "Myo-Inositol 550mg + D-Chiro-Inositol 13.8mg + Metformin HCl 500mg + L-Methylfolate + Methylcobalamin",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4, name: "Shine-35", form: "Tablets", division: "gyn",
    indication: "PCOS, Hirsutism, Acne",
    composition: "Cyproterone Acetate 2mg + Ethinylestradiol 0.035mg",
    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5, name: "Adfol-DHA", form: "Tablets", division: "gyn",
    indication: "Pregnancy Nutrition, Neural Tube Defect Prevention",
    composition: "L-Methylfolate 1mg + Methylcobalamin 1500mcg + DHA 200mg + Vit D3 2000 IU + Pyridoxal-5-Phosphate",
    image: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6, name: "Calnine-XT", form: "Tablets", division: "gyn",
    indication: "Pregnancy & Lactation Calcium Support",
    composition: "Calcium Carbonate 1250mg + Vit D3 2000 IU — targeted for Pregnancy & Lactation",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7, name: "Calnine", form: "Tablets", division: "gyn",
    indication: "Postmenopausal Osteoporosis",
    composition: "Calcium Citrate 1000mg + Vit D3 200 IU — targeted for Postmenopausal & Lactation",
    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8, name: "Isopause", form: "Tablets", division: "gyn",
    indication: "Menopausal Bone Loss",
    composition: "Calcium Carbonate 500mg + Calcitriol 0.25mcg + Soya Isoflavones 100mg",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 9, name: "Coral-D3", form: "Softgel Capsules", division: "gyn",
    indication: "Vitamin D3 Deficiency in Pregnancy",
    composition: "Cholecalciferol 60000 IU (GYN targeted)",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 10, name: "RG-Nine", form: "Sachets", division: "gyn",
    indication: "Recurrent Pregnancy Loss, Foetal Growth",
    composition: "L-Arginine + Proanthocyanidin — 5gm sachet",
    image: "https://images.unsplash.com/photo-1550572017-ed10842a27b6?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 11, name: "Pro27-DF", form: "Supplement", division: "gyn",
    indication: "Protein Deficiency in Pregnancy & Lactation",
    composition: "Casein Protein + Dry Fruits Powder",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop",
  },
];

export default function ProductsPage() {
  const [active, setActive] = useState<"gp" | "gyn">("gp");
  const products = active === "gp" ? gpProducts : gynProducts;
  const isGP = active === "gp";

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
                GMP-Certified Medicine.<br />
                <span className="text-gray-400">Formulated with Purpose.</span>
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
                <p className="text-2xl font-semibold text-gray-900">2</p>
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
        <div className="flex items-center gap-3 mb-8">
          <button
            onClick={() => setActive("gp")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              isGP
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            <Stethoscope className="w-4 h-4" />
            Ortho Division
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${isGP ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
              {gpProducts.length}
            </span>
          </button>

          <button
            onClick={() => setActive("gyn")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              !isGP
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700"
            }`}
          >
            <Baby className="w-4 h-4" />
            GYN Division
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${!isGP ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"}`}>
              {gynProducts.length}
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
              {/* Image Block — neutral bg */}
              <div className="bg-gray-50 p-4">
                <div className="relative w-full h-44 rounded-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                {/* Top row: serial + form badge (neutral) */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-200 tracking-widest">
                    #{product.id.toString().padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                    {product.form}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-[15px] font-semibold text-gray-900 tracking-tight leading-snug">
                  {product.name}
                </h3>

                {/* Indication */}
                <p className="text-[11px] font-medium text-gray-500 leading-snug">
                  {product.indication}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Composition */}
                <p className="text-[11px] text-gray-400 leading-relaxed flex-1">
                  <span className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.15em] block mb-1">Composition</span>
                  {product.composition}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
