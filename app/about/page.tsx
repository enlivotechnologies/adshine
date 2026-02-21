import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, ShieldCheck, FlaskConical, Users } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Adshine Pharmaceuticals",
  description:
    "Learn about Adshine Pharmaceuticals — our story, our mission, our GMP-certified manufacturing, and the team behind India's trusted prescription medicines.",
};

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "20+", label: "Formulations" },
  { value: "500+", label: "Doctors Trust Us" },
  { value: "3", label: "Certifications" },
];

const values = [
  {
    icon: FlaskConical,
    title: "Clinical Science First",
    desc: "Every formulation is backed by peer-reviewed research and validated by clinical evidence before it reaches a prescription pad.",
  },
  {
    icon: ShieldCheck,
    title: "GMP Manufacturing",
    desc: "Our facility is WHO-GMP and ISO 9001:2008 certified — ensuring every batch meets the highest global quality standards.",
  },
  {
    icon: Users,
    title: "Doctor-Centric Approach",
    desc: "We build medicines doctors can prescribe with confidence and patients can trust — transparent composition, proven efficacy.",
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    desc: "Our R&D team continuously works on next-generation formulations to address evolving therapeutic needs across India.",
  },
];

const certifications = [
  { label: "WHO-GMP Certified", sub: "World Health Organization" },
  { label: "ISO 9001:2008", sub: "Quality Management System" },
  { label: "USP Grade", sub: "United States Pharmacopeia" },
];

const milestones = [
  { year: "2008", event: "Founded in Mysuru, Karnataka with a vision to deliver science-backed medicines." },
  { year: "2012", event: "Received WHO-GMP certification and launched the Ortho division with Calnine-XT." },
  { year: "2016", event: "Expanded into Gynecology care — launched Dydroflow & Myonine-DM." },
  { year: "2019", event: "Crossed 300+ doctor network across Karnataka and Tamil Nadu." },
  { year: "2023", event: "Expanded to 500+ doctors pan-India across GP and GYN segments." },
  { year: "2025", event: "Launched next-generation Liposomal Iron & Probiotic lines for advanced compliance." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-white sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="text-gray-200">/</span>
          <span className="text-sm text-gray-700 font-semibold">About Us</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="pt-20 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">About Adshine</p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.12] mb-6">
                Healthier Lives Begin<br />
                <span className="text-gray-400">With Better Medicine.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Adshine Pharmaceuticals is a Mysuru-based GMP-certified pharmaceutical company
                dedicated to delivering science-backed, clinically proven medicines across
                Orthology and Gynecology care. Since 2008, we have built trust — one
                prescription at a time.
              </p>

              {/* Cert badges */}
              <div className="flex flex-wrap gap-3">
                {certifications.map((c) => (
                  <div key={c.label} className="flex items-center gap-2.5 px-4 py-2.5 bg-[#f7f7f5] rounded-xl">
                    <ShieldCheck className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-gray-900">{c.label}</p>
                      <p className="text-[10px] text-gray-400">{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-[#f7f7f5] rounded-2xl p-8 flex flex-col gap-1">
                  <span className="text-4xl font-semibold text-gray-900 tracking-tight">{s.value}</span>
                  <span className="text-sm text-gray-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-24 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-12">Leadership</p>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">

            {/* Photo */}
            <div className="relative rounded-3xl overflow-hidden h-[560px]">
              <img
                src="https://cjlpsqzjtchvpckpyllb.supabase.co/storage/v1/object/public/sentia/logo.png"
                alt="Founder — Adshine Pharmaceuticals"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle bottom scrim for name overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white font-semibold text-lg tracking-tight">Adshine Pharmaceuticals</p>
                <p className="text-white/60 text-sm mt-0.5">Founder &amp; Managing Director</p>
              </div>
            </div>

            {/* Quote + Bio */}
            <div className="flex flex-col justify-center">

              <span className="text-[#B80004] text-8xl font-serif leading-none select-none mb-4">&ldquo;</span>

              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-[1.45] tracking-tight mb-8">
                Our commitment is simple — to put clinically proven, GMP-certified medicine
                in the hands of every doctor and patient who needs it.
              </blockquote>

              <p className="text-gray-600 leading-relaxed mb-8">
                With over 15 years of deep-rooted pharmaceutical experience, our founder built
                Adshine with one mission: to bridge the gap between breakthrough science and
                everyday healthcare. We believe every patient deserves access to medicine that
                is pure, potent, and proven.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Focused on physician trust and prescription confidence",
                  "Transparent composition — no compromises on purity",
                  "Pan-India reach across 500+ healthcare professionals",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B80004] flex-shrink-0 mt-2" />
                    <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
              What drives us every day
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-[#f7f7f5] rounded-2xl p-7 flex flex-col gap-4">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <v.icon className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY / MILESTONES ── */}
      <section className="py-24 bg-[#f7f7f5]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
              Built over 15 years of trust
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((m, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 flex flex-col gap-3 border border-gray-100">
                <span className="text-xs font-bold text-gray-300 uppercase tracking-[0.2em]">{m.year}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANUFACTURING / QUALITY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Quality &amp; Manufacturing</p>
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-6">
                Every batch, every time —<br />
                <span className="text-gray-400">uncompromised.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our state-of-the-art manufacturing facility in Mysuru is equipped with advanced
                machinery and follows strict GMP protocols. From raw material testing to final
                packaging, every step is quality-controlled and documented.
              </p>

              <div className="space-y-4">
                {[
                  { label: "WHO-GMP Certified Facility", sub: "Compliant with global pharmaceutical manufacturing standards" },
                  { label: "In-house Quality Control Lab", sub: "HPLC, dissolution, and microbiological testing on every batch" },
                  { label: "USP / IP Grade Ingredients", sub: "Only pharmacopoeial-grade raw materials sourced from certified vendors" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#f7f7f5] rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-gray-800 flex-shrink-0 mt-1.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=2670&auto=format&fit=crop"
                alt="GMP Pharmaceutical Manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
