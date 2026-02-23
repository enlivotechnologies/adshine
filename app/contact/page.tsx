"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

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
    <div className="min-h-screen bg-gray-50/50">
      {/* Premium Hero Section */}
      <div className="bg-[#B80004] text-white py-24 px-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.4) 0%, transparent 50%)" }}>
        </div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
            Get in <span className="text-red-200">Touch</span>
          </h1>
          <p className="text-lg md:text-2xl text-red-100 max-w-2xl mx-auto font-light leading-relaxed">
            We'd love to hear from you. Please fill out the form below or reach out to us using the contact information provided.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-24 relative -mt-12 z-20">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100/50 transform transition-all hover:shadow-3xl">
          
          {/* Contact Info Side */}
          <div className="lg:w-2/5 bg-gray-900 p-10 sm:p-14 text-white flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20 -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full blur-3xl opacity-20 -ml-32 -mb-32 transition-transform duration-700 group-hover:scale-150 group-hover:opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Contact Information</h2>
              <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#B80004]/20 group-hover/item:border-[#B80004]/50 transition-all duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-red-400 group-hover/item:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">Phone Number</h3>
                    <p className="text-gray-400 font-medium group-hover/item:text-white transition-colors">+91 123 456 7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#B80004]/20 group-hover/item:border-[#B80004]/50 transition-all duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-red-400 group-hover/item:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">Email Address</h3>
                    <p className="text-gray-400 font-medium group-hover/item:text-white transition-colors">info@adshinepharma.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#B80004]/20 group-hover/item:border-[#B80004]/50 transition-all duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-red-400 group-hover/item:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="pt-1">
                    <h3 className="text-lg font-semibold text-gray-200 mb-1">Headquarters</h3>
                    <p className="text-gray-400 font-medium leading-relaxed group-hover/item:text-white transition-colors">
                      123 Business Avenue, Tech Park<br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 sm:p-14 lg:p-16 bg-white relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
            <p className="text-gray-500 mb-10">We're here to help and answer any question you might have.</p>
            
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-2 relative group">
                  <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-[#B80004]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 px-0 py-3 text-gray-900 text-lg focus:ring-0 focus:border-[#B80004] transition-colors placeholder:text-gray-300"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 relative group">
                  <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-[#B80004]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 px-0 py-3 text-gray-900 text-lg focus:ring-0 focus:border-[#B80004] transition-colors placeholder:text-gray-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 relative group">
                <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-widest transition-colors group-focus-within:text-[#B80004]">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-200 px-0 py-3 text-gray-900 text-lg focus:ring-0 focus:border-[#B80004] transition-colors resize-none placeholder:text-gray-300"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="group relative h-14 w-full md:w-auto px-10 rounded-full bg-[#B80004] text-white text-lg font-semibold hover:bg-[#B80004]/90 transition-all flex items-center justify-center gap-3 overflow-hidden shadow-xl shadow-red-900/20 hover:shadow-2xl hover:shadow-red-900/40 hover:-translate-y-1 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
                    {!isSubmitting && !submitted && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </span>
                  {!isSubmitting && !submitted && (
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  )}
                </button>
              </div>
            </form>

            {/* Success message subtle alert */}
            <div className={`absolute bottom-6 right-6 left-6 md:left-auto bg-green-50 text-green-700 px-6 py-4 rounded-2xl shadow-lg border border-green-100 flex items-center gap-3 transition-all duration-500 transform ${submitted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Send className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-sm">Success</h4>
                <p className="text-xs text-green-600/80">Your message has been sent successfully!</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
