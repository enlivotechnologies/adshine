"use client";

import { Mail, MapPin, Phone, Send, HeartPulse, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#444]">

      {/* ── HERO ── */}
      <section className="bg-white pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f8f8f9] border border-[#eee] text-[#B80004] mb-8">
            <HeartPulse className="w-4 h-4" />
            <span className="text-[11px] lg:text-[12px] font-bold tracking-[0.2em] uppercase">Adshine Pharmaceuticals</span>
          </div>
          <h1 className="text-[42px] md:text-[64px] lg:text-[80px] font-medium text-[#111] tracking-tight mb-8 leading-[1.05]">
            Get in <span className="text-[#B80004]">Touch.</span>
          </h1>
          <p className="text-[18px] lg:text-[22px] text-[#777] font-medium max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Please fill out the form below or reach out to us using the contact information provided.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ── */}
      <section className="bg-white mb-20 lg:mb-32">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="bg-[#f8f8f9] rounded-[2.5rem] p-4 md:p-6 lg:p-8 border border-[#eee]">
            
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
              
              {/* Left Column: Contact Info Base (Black Box) */}
              <div className="lg:col-span-5 bg-[#111] rounded-[2rem] p-10 sm:p-14 text-white flex flex-col justify-between relative overflow-hidden h-full">
                
                {/* Decorative Accents */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B80004]/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] -ml-20 -mb-20"></div>

                <div className="relative z-10">
                  <h2 className="text-[32px] lg:text-[40px] font-medium text-white mb-6 leading-tight tracking-tight">
                    Contact <br />Information
                  </h2>
                  <p className="text-[16px] text-[#aaa] font-medium leading-relaxed mb-16">
                    Fill up the form and our team will get back to you within 24 hours.
                  </p>

                  <div className="space-y-12">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[12px] font-bold text-[#888] uppercase tracking-[0.2em] mb-2">Phone</h3>
                        <p className="text-[18px] font-medium text-white">+91 123 456 7890</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[12px] font-bold text-[#888] uppercase tracking-[0.2em] mb-2">Email</h3>
                        <p className="text-[18px] font-medium text-white">info@adshinepharma.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 mt-1">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-[12px] font-bold text-[#888] uppercase tracking-[0.2em] mb-2">Headquarters</h3>
                        <p className="text-[16px] font-medium text-white leading-relaxed">
                          No. 123, Industrial Area,<br />
                          Mysuru, Karnataka – 570001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Form Side (White Box) */}
              <div className="lg:col-span-7 bg-white rounded-[2rem] p-10 sm:p-14 lg:p-16 border border-[#eee] relative">
                <h2 className="text-[28px] lg:text-[36px] font-medium text-[#111] tracking-tight mb-4 leading-snug">
                  Send us a message
                </h2>
                <p className="text-[16px] text-[#777] font-medium mb-12">
                  We're here to help and answer any question you might have.
                </p>
                
                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Name */}
                    <div className="space-y-3 relative group">
                      <label htmlFor="name" className="text-[12px] font-bold text-[#888] uppercase tracking-[0.2em] block group-focus-within:text-[#B80004] transition-colors">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-transparent border-0 border-b border-[#ddd] px-0 py-2 text-[18px] text-[#111] font-medium focus:ring-0 focus:border-[#B80004] transition-colors placeholder:text-[#ccc] placeholder:font-normal outline-none"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-3 relative group">
                      <label htmlFor="email" className="text-[12px] font-bold text-[#888] uppercase tracking-[0.2em] block group-focus-within:text-[#B80004] transition-colors">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-transparent border-0 border-b border-[#ddd] px-0 py-2 text-[18px] text-[#111] font-medium focus:ring-0 focus:border-[#B80004] transition-colors placeholder:text-[#ccc] placeholder:font-normal outline-none"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-3 relative group">
                    <label htmlFor="message" className="text-[12px] font-bold text-[#888] uppercase tracking-[0.2em] block group-focus-within:text-[#B80004] transition-colors">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full bg-transparent border-0 border-b border-[#ddd] px-0 py-2 text-[18px] text-[#111] font-medium focus:ring-0 focus:border-[#B80004] transition-colors resize-none placeholder:text-[#ccc] placeholder:font-normal outline-none"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting || submitted}
                      className="group h-[54px] lg:h-[60px] px-10 rounded-full bg-[#B80004] text-white font-semibold text-[15px] lg:text-[16px] flex items-center justify-center gap-3 transition-colors hover:bg-[#a00003] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : submitted ? (
                        'Message Sent!'
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {/* Success Alert */}
                <div className={`absolute bottom-10 right-10 bg-white border border-[#eee] text-[#111] px-6 py-4 rounded-[1.25rem] shadow-lg flex items-center gap-4 transition-all duration-500 transform ${submitted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
                  <div className="w-10 h-10 bg-[#f8f8f9] rounded-full flex items-center justify-center shrink-0 border border-[#eee]">
                    <CheckCircle className="w-5 h-5 text-[#B80004]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[14px]">Success</h4>
                    <p className="text-[13px] text-[#777] font-medium">Your message has been sent!</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
