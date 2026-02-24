import type { Metadata } from "next";
import { Target, Users, ShieldCheck, HeartPulse, Globe, Microscope, Activity, Leaf, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Adshine Pharmaceuticals",
  description: "Learn about Adshine Pharmaceuticals — Who we are, our mission, what we do, and our impact on healthcare.",
};

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "20+", label: "Formulations" },
  { value: "500+", label: "Doctors Trust Us" },
  { value: "3", label: "Certifications" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">

      {/* ── HERO ── */}
      <section className="relative bg-white pt-24 lg:pt-32 pb-12 w-full">
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 mb-6 w-fit border border-blue-100 bg-white px-5 py-2 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057D9]"></span>
            <span className="text-[#0057D9] font-medium tracking-[0.15em] uppercase text-[10px] lg:text-[11px]">
             Adshine Pharmaceuticals
            </span>
          </div>
          <h1 className="text-[40px] md:text-[54px] lg:text-[64px] font-medium text-[#0A1931] tracking-tight mb-5 leading-[1.1]">
            Innovating for a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057D9] to-[#0284C7]">Healthier Tomorrow.</span>
          </h1>
          <p className="text-[15px] lg:text-[17px] text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            India's trusted pharmaceutical partner, delivering GMP-certified prescription medicines backed by clinical science.
          </p>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="relative z-20 pb-16 lg:pb-24 pt-4">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 lg:p-12 flex flex-col items-center justify-center text-center border border-[#E2E8F0] shadow-lg shadow-blue-500/5">
                <p className="text-[36px] lg:text-[46px] font-medium text-[#0A1931] mb-2 leading-none drop-shadow-sm">{stat.value}</p>
                <p className="text-[11px] lg:text-[12px] text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 1. WHO WE ARE & FOUNDER ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-[#F4F7FB] to-[#F8FAFC] rounded-[2.5rem] py-16 lg:py-24 px-8 md:px-16 lg:px-24 border border-blue-50 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-[#0057D9] mb-8 shadow-sm">
                  <Users className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Who We Are</span>
                </div>
                
                <h2 className="text-[32px] md:text-[42px] lg:text-[48px] font-medium text-[#0A1931] tracking-tight mb-8 leading-[1.15]">
                  A legacy built on <br className="hidden md:block" />
                  <span className="text-[#0057D9]">purity and trust.</span>
                </h2>
                
                <div className="space-y-6 text-[15px] lg:text-[16px] text-slate-600 font-medium leading-relaxed max-w-xl">
                  <p>
                    Founded in 2008 in Mysuru, Adshine Pharmaceuticals began with a profound belief: the quality of a medicine should never be a variable in a patient's recovery. Our journey started not in a boardroom, but with a deep understanding of the challenges faced by doctors prescribing reliable treatments.
                  </p>
                  <p>
                    Today, we are a leading name in the Indian pharmaceutical landscape. We manufacture and distribute a wide array of specialized therapeutic formulations, bridging the gap between breakthrough clinical science and everyday healthcare needs.
                  </p>
                </div>

                {/* Founder Snippet */}
                <div className="mt-12 p-6 md:p-8 bg-white rounded-[2rem] border border-blue-100 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="relative w-20 h-20 rounded-[1.25rem] overflow-hidden bg-[#F4F7FB] shrink-0 border border-blue-50 flex items-center justify-center">
                    <Image 
                      src="https://cjlpsqzjtchvpckpyllb.supabase.co/storage/v1/object/public/sentia/medicine.png" 
                      alt="Logo" 
                      fill
                      className="object-contain p-2"
                      unoptimized
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <p className="text-[10px] lg:text-[11px] text-[#0284C7] font-bold uppercase tracking-[0.2em] mb-2">Founder & MD</p>
                    <p className="text-[18px] lg:text-[20px] font-bold text-[#0A1931] mb-2">Adshine Pharmaceuticals</p>
                    <p className="text-[13px] lg:text-[14px] text-slate-500 font-medium leading-relaxed italic">"Our commitment is simple — proven medicine for every patient."</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6">
                <div className="relative h-[500px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden border border-blue-100 bg-slate-100 shadow-xl shadow-blue-900/5">
                  <Image 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                    alt="Our Facility" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/40 to-transparent pointer-events-none mix-blend-multiply" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE DO ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col mb-12 lg:mb-16">
            <p className="text-[12px] lg:text-[13px] font-bold text-slate-500 flex items-center tracking-[0.2em] uppercase mb-4 lg:mb-6">
              <span className="text-[#0057D9] mr-3">•</span>
              What We Do
            </p>
            <h2 className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] font-medium text-[#0A1931] tracking-tight max-w-3xl">
              Engineered for healthcare excellence.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Microscope, title: "Formulation R&D", desc: "Developing highly efficacious therapeutic solutions backed by peer-reviewed clinical science and rigorous testing." },
              { icon: ShieldCheck, title: "GMP Manufacturing", desc: "Producing zero-defect batches in our state-of-the-art, WHO-GMP compliant facilities using premium active ingredients." },
              { icon: Globe, title: "Pan-India Distribution", desc: "Ensuring timely, temperature-controlled delivery of vital medicines to hospitals, clinics, and pharmacies nationwide." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-[#E2E8F0] shadow-sm">
                <div className="w-[60px] h-[60px] rounded-[1.25rem] bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 shadow-sm">
                  <item.icon className="w-7 h-7 text-[#0057D9]" />
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-bold text-[#0A1931] mb-4">{item.title}</h3>
                <p className="text-[14px] lg:text-[15px] text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR APPROACH ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-r from-[#0A1931] to-[#15305B] rounded-[2.5rem] py-16 lg:py-24 px-8 md:px-16 lg:px-24 overflow-hidden relative shadow-2xl">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left Text */}
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white/10 border border-white/20 mb-6 backdrop-blur-sm shadow-sm">
                  <Target className="w-6 h-6 text-sky-400" />
                </div>
                <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-medium text-white tracking-tight mb-6 leading-[1.1]">
                  Our Approach to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">Modern Healthcare.</span>
                </h2>
                <p className="text-[14px] lg:text-[15px] text-blue-100/80 font-medium leading-[1.6] mb-10 max-w-md">
                  We don't just manufacture pills; we engineer trust. Our methodology relies on absolute transparency and clinical validity from the lab to the prescription pad.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Doctor-Centric Design", text: "Formulations tailored to address specific therapeutic challenges faced by practitioners." },
                    { title: "Uncompromising Sourcing", text: "We utilize only USP/IP grade raw materials from globally certified vendors." },
                    { title: "Continuous Refinement", text: "Post-market surveillance and continuous R&D to improve absorption and efficacy." }
                  ].map((pt, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400/40 flex items-center justify-center shrink-0 mt-0.5 shadow-inner">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="text-[15px] xl:text-[16px] font-bold text-white mb-1.5">{pt.title}</h4>
                        <p className="text-[13px] lg:text-[14px] text-blue-100/70 font-medium leading-[1.6] max-w-[400px]">{pt.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Images */}
              <div className="h-full w-full relative min-h-[400px] lg:min-h-[550px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                 <Image src="https://bqzsevmettslsygautrm.supabase.co/storage/v1/object/public/adshine/PHOTO-2026-02-24-13-40-16.jpg" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" alt="Our Approach" unoptimized />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/60 via-transparent to-transparent pointer-events-none" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR IMPACT ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="flex flex-col">
              <p className="text-[12px] lg:text-[13px] font-bold text-slate-500 flex items-center tracking-[0.2em] uppercase mb-4 lg:mb-6">
                <span className="text-[#0057D9] mr-3">•</span>
                Our Impact
              </p>
              <h2 className="text-[32px] md:text-[42px] lg:text-[48px] leading-[1.1] font-medium text-[#0A1931] tracking-tight max-w-3xl">
                Measurable outcomes.
              </h2>
            </div>
            <p className="text-[15px] lg:text-[16px] text-slate-600 max-w-md font-medium leading-[1.6]">
              Numbers only tell half the story. The true measure of our success is found in the lives improved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6">
            {[
              { icon: Leaf, title: "100K+", text: "Patients Reached", desc: "Delivering vital therapeutic care across all demographics." },
              { icon: Activity, title: "20+", text: "Therapeutic Segments", desc: "A diverse and highly reliable therapeutic portfolio." },
              { icon: Globe, title: "100%", text: "Quality Compliance", desc: "Every batch is rigorously tested and documented." },
              { icon: Users, title: "500+", text: "Medical Partners", desc: "Trusted by top specialist doctors across India." },
              { icon: ShieldCheck, title: "15+", text: "Years Legacy", desc: "A steadfast commitment to better healthcare outcomes." }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-7 lg:p-8 border border-slate-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[280px]">
                <div className="w-[46px] h-[46px] rounded-[14px] bg-[#F4F7FB] border border-blue-100/60 flex items-center justify-center mb-10 shrink-0">
                  <stat.icon className="w-[22px] h-[22px] text-[#0057D9]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[34px] lg:text-[38px] font-medium text-[#0A1931] mb-2.5 leading-none tracking-tight">{stat.title}</p>
                  <p className="text-[12px] lg:text-[13px] font-bold text-[#0057D9] mb-4">{stat.text}</p>
                  <p className="text-[13px] text-slate-500 font-medium leading-[1.6]">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}