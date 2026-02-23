import type { Metadata } from "next";
import { Target, Users, ShieldCheck, HeartPulse, Globe, Microscope, Activity, Leaf, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-white font-sans text-[#444]">

      {/* ── HERO ── */}
      <section className="bg-white pt-24 lg:pt-32 pb-16">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f8f9] border border-[#eee] text-[#B80004] mb-8">
            <HeartPulse className="w-4 h-4" />
            <span className="text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase">Adshine Pharmaceuticals</span>
          </div>
          <h1 className="text-[42px] md:text-[64px] lg:text-[80px] font-medium text-[#111] tracking-tight mb-8 leading-[1.05]">
            Innovating for a <br className="hidden md:block" />
            <span className="text-[#B80004]">Healthier Tomorrow.</span>
          </h1>
          <p className="text-[18px] lg:text-[22px] text-[#777] font-medium max-w-3xl mx-auto leading-relaxed">
            India's trusted pharmaceutical partner, delivering GMP-certified prescription medicines backed by clinical science.
          </p>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="pb-20 lg:pb-32 bg-white">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#f8f8f9] rounded-[2rem] p-8 lg:p-12 flex flex-col items-center justify-center text-center border border-[#eee]">
                <p className="text-[40px] lg:text-[56px] font-medium text-[#111] mb-2 leading-none">{stat.value}</p>
                <p className="text-[12px] lg:text-[13px] text-[#888] font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 1. WHO WE ARE & FOUNDER ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="bg-[#f8f8f9] rounded-[2.5rem] py-16 lg:py-24 px-8 md:px-16 lg:px-24">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#eee] text-[#111] mb-8">
                  <Users className="w-4 h-4 text-[#B80004]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Who We Are</span>
                </div>
                
                <h2 className="text-[36px] md:text-[46px] lg:text-[52px] font-medium text-[#111] tracking-tight mb-8 leading-[1.15]">
                  A legacy built on <br className="hidden md:block" />
                  <span className="text-[#B80004]">purity and trust.</span>
                </h2>
                
                <div className="space-y-6 text-[16px] lg:text-[18px] text-[#777] font-medium leading-relaxed max-w-xl">
                  <p>
                    Founded in 2008 in Mysuru, Adshine Pharmaceuticals began with a profound belief: the quality of a medicine should never be a variable in a patient's recovery. Our journey started not in a boardroom, but with a deep understanding of the challenges faced by doctors prescribing reliable treatments.
                  </p>
                  <p>
                    Today, we are a leading name in the Indian pharmaceutical landscape. We manufacture and distribute a wide array of specialized therapeutic formulations, bridging the gap between breakthrough clinical science and everyday healthcare needs.
                  </p>
                </div>

                {/* Founder Snippet */}
                <div className="mt-12 p-6 md:p-8 bg-white rounded-[2rem] border border-[#eee] flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-[1.25rem] overflow-hidden bg-[#f8f8f9] shrink-0 border border-[#eee]">
                    <img 
                      src="https://cjlpsqzjtchvpckpyllb.supabase.co/storage/v1/object/public/sentia/logo.png" 
                      alt="Founder" 
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-[11px] text-[#B80004] font-bold uppercase tracking-[0.2em] mb-2">Founder & MD</p>
                    <p className="text-[20px] font-bold text-[#111] mb-2">Adshine Pharmaceuticals</p>
                    <p className="text-[14px] text-[#777] font-medium leading-relaxed italic">"Our commitment is simple — proven medicine for every patient."</p>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6">
                <div className="relative h-[500px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden border border-[#eee] bg-white">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                    alt="Our Facility" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE DO ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col mb-12 lg:mb-16">
            <p className="text-[14px] lg:text-[16px] font-bold text-[#888] flex items-center tracking-[0.2em] uppercase mb-4 lg:mb-6">
              <span className="text-[#B80004] mr-3">•</span>
              What We Do
            </p>
            <h2 className="text-[36px] md:text-[46px] lg:text-[56px] leading-[1.1] font-medium text-[#111] tracking-tight max-w-3xl">
              Engineered for healthcare excellence.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: Microscope, title: "Formulation R&D", desc: "Developing highly efficacious therapeutic solutions backed by peer-reviewed clinical science and rigorous testing." },
              { icon: ShieldCheck, title: "GMP Manufacturing", desc: "Producing zero-defect batches in our state-of-the-art, WHO-GMP compliant facilities using premium active ingredients." },
              { icon: Globe, title: "Pan-India Distribution", desc: "Ensuring timely, temperature-controlled delivery of vital medicines to hospitals, clinics, and pharmacies nationwide." },
            ].map((item, i) => (
              <div key={i} className="bg-[#f8f8f9] p-10 lg:p-12 rounded-[2.5rem] border border-[#eee]">
                <div className="w-[60px] h-[60px] rounded-[1.25rem] bg-white border border-[#eee] flex items-center justify-center mb-8">
                  <item.icon className="w-7 h-7 text-[#111]" />
                </div>
                <h3 className="text-[22px] lg:text-[26px] font-bold text-[#111] mb-4">{item.title}</h3>
                <p className="text-[15px] lg:text-[16px] text-[#777] font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. OUR APPROACH ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="bg-[#093020] rounded-[2.5rem] py-16 lg:py-24 px-8 md:px-16 lg:px-24 overflow-hidden relative">
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left Text */}
              <div>
                <Target className="w-12 h-12 text-[#4ade80] mb-8" />
                <h2 className="text-[36px] md:text-[46px] lg:text-[56px] font-medium text-white tracking-tight mb-8 leading-[1.1]">
                  Our Approach to <br />
                  <span className="text-[#4ade80]">Modern Healthcare.</span>
                </h2>
                <p className="text-[16px] lg:text-[18px] text-[#A6CDBA] font-medium leading-relaxed mb-12 max-w-lg">
                  We don't just manufacture pills; we engineer trust. Our methodology relies on absolute transparency and clinical validity from the lab to the prescription pad.
                </p>
                
                <div className="space-y-8">
                  {[
                    { title: "Doctor-Centric Design", text: "Formulations tailored to address specific therapeutic challenges faced by practitioners." },
                    { title: "Uncompromising Sourcing", text: "We utilize only USP/IP grade raw materials from globally certified vendors." },
                    { title: "Continuous Refinement", text: "Post-market surveillance and continuous R&D to improve absorption and efficacy." }
                  ].map((pt, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="w-7 h-7 rounded-full bg-[#4ade80]/20 border border-[#4ade80]/30 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
                      </div>
                      <div>
                        <h4 className="text-[18px] font-bold text-white mb-2">{pt.title}</h4>
                        <p className="text-[15px] text-[#A6CDBA] font-medium leading-relaxed">{pt.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Images */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">
                <div className="space-y-4 lg:space-y-6 pt-12">
                  <div className="h-[200px] lg:h-[280px] w-full bg-[#0E422D] rounded-[2rem] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Lab" />
                  </div>
                  <div className="h-[280px] lg:h-[360px] w-full bg-[#0E422D] rounded-[2rem] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Factory" />
                  </div>
                </div>
                <div className="space-y-4 lg:space-y-6">
                  <div className="h-[280px] lg:h-[360px] w-full bg-[#0E422D] rounded-[2rem] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Research" />
                  </div>
                  <div className="h-[200px] lg:h-[280px] w-full bg-[#0E422D] rounded-[2rem] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Medicine" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR IMPACT ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="flex flex-col">
              <p className="text-[14px] lg:text-[16px] font-bold text-[#888] flex items-center tracking-[0.2em] uppercase mb-4 lg:mb-6">
                <span className="text-[#B80004] mr-3">•</span>
                Our Impact
              </p>
              <h2 className="text-[36px] md:text-[46px] lg:text-[56px] leading-[1.1] font-medium text-[#111] tracking-tight max-w-3xl">
                Measurable outcomes.
              </h2>
            </div>
            <p className="text-[16px] lg:text-[18px] text-[#777] max-w-md font-medium leading-[1.6]">
              Numbers only tell half the story. The true measure of our success is found in the lives improved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#f8f8f9] rounded-[2.5rem] p-10 lg:p-12 border border-[#eee] flex flex-col justify-between min-h-[300px]">
              <div className="w-[60px] h-[60px] rounded-[1.25rem] bg-white border border-[#eee] flex items-center justify-center mb-8">
                <Leaf className="w-7 h-7 text-[#111]" />
              </div>
              <div>
                <p className="text-[48px] lg:text-[64px] font-medium text-[#111] mb-2 leading-none">1M+</p>
                <p className="text-[16px] lg:text-[18px] text-[#B80004] font-bold mb-3">Patients Reached</p>
                <p className="text-[14px] lg:text-[15px] text-[#777] font-medium leading-relaxed">Delivering vital therapeutic care across urban and rural demographics.</p>
              </div>
            </div>

            <div className="bg-[#f8f8f9] rounded-[2.5rem] p-10 lg:p-12 border border-[#eee] flex flex-col justify-between min-h-[300px]">
              <div className="w-[60px] h-[60px] rounded-[1.25rem] bg-white border border-[#eee] flex items-center justify-center mb-8">
                <Activity className="w-7 h-7 text-[#111]" />
              </div>
              <div>
                <p className="text-[48px] lg:text-[64px] font-medium text-[#111] mb-2 leading-none">20+</p>
                <p className="text-[16px] lg:text-[18px] text-[#B80004] font-bold mb-3">Therapeutic Segments</p>
                <p className="text-[14px] lg:text-[15px] text-[#777] font-medium leading-relaxed">From gynecology to orthopedics, a diverse and reliable portfolio.</p>
              </div>
            </div>

            <div className="bg-[#f8f8f9] rounded-[2.5rem] p-10 lg:p-12 border border-[#eee] flex flex-col justify-between min-h-[300px]">
              <div className="w-[60px] h-[60px] rounded-[1.25rem] bg-white border border-[#eee] flex items-center justify-center mb-8">
                <Globe className="w-7 h-7 text-[#111]" />
              </div>
              <div>
                <p className="text-[48px] lg:text-[64px] font-medium text-[#111] mb-2 leading-none">100%</p>
                <p className="text-[16px] lg:text-[18px] text-[#B80004] font-bold mb-3">Quality Compliance</p>
                <p className="text-[14px] lg:text-[15px] text-[#777] font-medium leading-relaxed">Every single batch is tested, validated, and precisely documented.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}