"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "R&D", href: "/research" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative h-28 w-28 overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-300">
              <img
                src="https://cjlpsqzjtchvpckpyllb.supabase.co/storage/v1/object/public/sentia/medicine.png"
                alt="Adshine Pharmaceuticals Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 text-[15px] font-medium text-gray-600 hover:text-blue-600 transition-colors px-4 py-2.5 rounded-lg hover:bg-blue-50 relative"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                    <div className="w-56 p-1.5 bg-white border border-gray-100 rounded-2xl shadow-xl">
                      <div className="flex flex-col gap-0.5">
                        <Link href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                          General Physician Range
                        </Link>
                        <Link href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                          Gynecology Range
                        </Link>
                        <Link href="#" className="px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                          Enterprise Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <button className="group relative h-11 px-7 rounded-full bg-[#B80004] text-white text-[15px] font-semibold hover:bg-[#B80004]/90 transition-colors flex items-center gap-2">
              Quick Enquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-20" />

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden overflow-y-auto">
          <div className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-4 py-4 text-lg font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl border-b border-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-400" />}
              </Link>
            ))}
            <button className="mt-6 w-full h-14 rounded-full bg-[#B80004] text-white font-bold text-lg shadow-lg shadow-blue-200 hover:bg-[#B80004]/40 transition-colors">
              Quick Enquiry
            </button>
          </div>
        </div>
      )}
    </>
  );
}
