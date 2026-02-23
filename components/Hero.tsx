"use client";

import Image from "next/image";
import { ArrowUpRight, HeartPulse } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="w-full max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6 pt-4 pb-20">
        {/* Main Hero Card */}
        <div className="relative w-full rounded-[2.5rem] bg-gray-900 overflow-hidden mb-8 flex flex-col justify-center min-h-[550px] lg:min-h-[640px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://i.pinimg.com/1200x/f9/aa/71/f9aa710551d53f989f5c8dddcee3c9aa.jpg" 
              alt="Healthcare Hero" 
              className="w-full h-full object-cover object-top"
            />
            {/* Dark Overlay for center text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 w-full p-10 md:p-16 lg:p-24 flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center gap-3 mb-8 w-fit border border-white/20 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
              <HeartPulse className="w-4 h-4 text-white" />
              <span className="text-white font-medium tracking-wide drop-shadow-sm uppercase text-sm">
               Adshine Pharmaceuticals
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.05] drop-shadow-md max-w-4xl mx-auto">
              Healthier Lives Begins With Better Medicine
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
              Clinically proven, GMP-certified formulations trusted by specialists across India.
            </p>
            
            <div>
              <Link href="/products" className="inline-block bg-white text-gray-900 px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
               Explore Products
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {/* Card 1: Gynaecology */}
          <Link href="/products?tab=gynaec" className="relative h-[280px] rounded-[1.5rem] overflow-hidden group block">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover" alt="Gynaecology Management" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
            <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-colors group-hover:bg-white group-hover:text-gray-900 cursor-pointer">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-2xl leading-tight mb-1">Gynaec Division</h3>
              <p className="text-white/80 font-medium text-sm leading-snug">Women's health & clinical care</p>
            </div>
          </Link>
          
          {/* Card 2: Orthology */}
          <Link href="/products?tab=ortho" className="relative h-[280px] rounded-[1.5rem] overflow-hidden group block">
            <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover" alt="Ortho Management" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
            <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-colors group-hover:bg-white group-hover:text-gray-900 cursor-pointer">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-2xl leading-tight mb-1">Ortho Division</h3>
              <p className="text-white/80 font-medium text-sm leading-snug">Bone health & mobility support</p>
            </div>
          </Link>
          
          {/* Card 3: Review */}
          <div className="relative h-[280px] rounded-[1.5rem] bg-gradient-to-br from-[#FAF9FD] to-[#F1EEF5] p-6 lg:p-7 flex flex-col justify-between border border-gray-200/50 ">
            <div className="flex justify-between items-start">
              <p className="text-[13px] font-medium text-gray-500">Trusted by specialists</p>
            </div>
            <div>
              <p className="text-lg md:text-[1.05rem] font-medium text-gray-900 mb-6 leading-snug">
                "Adshine's formulations bring an unparalleled level of clinical efficacy we trust."
              </p>
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm bg-white" src="https://images.unsplash.com/photo-1537368910025-702800d98ce7?q=80&w=100&auto=format&fit=crop" alt="Doctor" />
                    <img className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm bg-white" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=100&auto=format&fit=crop" alt="Doctor" />
                  </div>
                  <span className="text-xs font-bold text-gray-900">500+ Doctors</span>
                </div>
                <div className="text-gray-900 font-serif text-5xl leading-none tracking-tighter">
                  &rdquo;
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 4: Physician */}
          <Link href="/products?tab=physician" className="relative h-[280px] rounded-[1.5rem] overflow-hidden group block">
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover" alt="Physician Management" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F4D8A]/90 via-[#2F4D8A]/30 to-transparent"></div>
            <div className="absolute top-5 right-5 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-colors group-hover:bg-white group-hover:text-gray-900 cursor-pointer">
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-2xl leading-tight mb-1">Physician Division</h3>
              <p className="text-white/80 font-medium text-sm leading-snug">Comprehensive family nutrition</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
