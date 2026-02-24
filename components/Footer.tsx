"use client";

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-8 text-sm">

      {/* Main content */}
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-8 xl:px-12">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-x-8 lg:gap-x-12 xl:gap-x-20 gap-y-12 mb-16">

          {/* ── Brand ── */}
          <div className="space-y-6">
            <img
              src="/logo adshine.jpeg"
              alt="Adshine Pharmaceuticals"
              className="h-12 sm:h-16 w-auto object-contain"
            />
            <p className="text-gray-500 leading-relaxed max-w-xs">
              Creating Healthy Lives through science-backed pharmaceutical care — trusted by doctors across India.
            </p>
            <div className="flex flex-wrap gap-2">
              {["GMP", "ISO", "Clinically Proven"].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-50 text-xs font-semibold rounded-full text-gray-500 border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-[10px]">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: "Home",     href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Careers",  href: "/careers" },
                { label: "Contact",  href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-500 hover:text-gray-900 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Divisions ── */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-[10px]">Divisions</h4>
            <div className="space-y-7">
              <div>
                <p className="font-semibold text-gray-900 mb-3 text-[13px]">General Physician</p>
                <ul className="space-y-2.5 text-gray-500">
                  <li>Gut &amp; Immunity</li>
                  <li>Iron &amp; Blood</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-3 text-[13px]">Infertility Care</p>
                <ul className="space-y-2.5 text-gray-500">
                  <li>Pregnancy Care</li>
                  <li>PCOS Management</li>
                  <li>Menopause</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Contact ── */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-widest text-[10px]">Contact Us</h4>
            <ul className="space-y-5 text-gray-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  No. 123, Industrial Area,<br />
                  Mysuru, Karnataka – 570001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                <span>info@adshinepharma.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            © 2024 Adshine Pharmaceuticals. All Rights Reserved.
          </p>
          <div className="flex gap-5 text-gray-400">
            {[
              { icon: Facebook,  label: "Facebook" },
              { icon: Twitter,   label: "Twitter" },
              { icon: Linkedin,  label: "LinkedIn" },
              { icon: Instagram, label: "Instagram" },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="hover:text-gray-700 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

      </div>

    </footer>
  );
}
