"use client";

import { useEffect, useState } from "react";


import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";



const navLinks = [
  { name: "Home", href: "/" },

  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Our Institutions", href: "/about/institutions" },
      { name: "Chairman’s Desk", href: "/about/chairman" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Administration", href: "/about/administration" },
      { name: "Vision & Mission", href: "/about/vision" },
    ],
  },

  {
    name: "Programmes",
    href: "/courses",
    dropdown: [
      { name: "GNM", href: "/courses/gnm" },
      { name: "B.Sc.", href: "/courses/bsc" },
      { name: "B Pharma", href: "/courses/bpharma" },
      { name: "D Pharma", href: "/courses/dpharma" },
    ],
  },

  {
    name: "Resources",
    href: "/resources",
    dropdown: [
      { name: "News & Events", href: "/resources/news" },
      { name: "Alumni", href: "/resources/alumni" },
      { name: "Application Form", href: "/resources/application" },
      { name: "Prospectus", href: "/resources/prospectus" },
    ],
  },

  {
    name: "Life@Teesta",
    href: "/life",
    dropdown: [
      { name: "Campus Life", href: "/life/campus" },
      { name: "Hostel Life", href: "/life/hostel" },
      { name: "Our Facilities", href: "/life/facility" },
      { name: "Our Gallery", href: "/life/gallery" },
      { name: "Transportation", href: "/life/transport" },
      { name: "Our Placement", href: "/life/placement" },
    ],
  },

  { name: "Hospitals", href: "/hospitals" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-[150px] px-20">

        {/* LEFT → LOGO + NAME */}
        <div className="flex items-center gap-5 flex-shrink-0 ml-5">

          <Image
            src="/images/logos/Teesta.png"
            alt="Teesta Nursing Institute"
            width={150}
            height={150}
            className="object-contain opacity-90 mix-blend-multiply"
          />

          <div className="leading-tight w-[300px]">
            <h1 className="font-montserrat text-4xl font-extrabold text-primary tracking-[0.45em]">
              TEESTA
            </h1>

            <p className="font-extrabold text-[15px] uppercase tracking-[0.13em] text-slate-700 mt-1">
              GROUP OF INSTITUTION
            </p>

            <p className="font-inter text-[12px] tracking-[0.25em] text-slate-700 mt-1 whitespace-nowrap">
              CARE BEYOND COMPASSION
            </p>
          </div>
        </div>

        {/* RIGHT → NAV LINKS */}
        <div className="hidden md:flex items-center gap-1 ml-auto text-[15px] font-medium pr-4">

          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">

              {/* MAIN LINK */}
              {link.dropdown ? (
                <div className="flex items-center gap-1 px-3 py-2 rounded-full text-primary whitespace-nowrap cursor-default">
                  {link.name}
                  <ChevronDown size={16} />
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 rounded-full text-primary whitespace-nowrap hover:bg-primary hover:text-white transition duration-200"
                >
                  {link.name}
                </Link>
              )}

              {/* DROPDOWN */}
              {link.dropdown && (
                <div
                  className="absolute left-0 top-full mt-1 w-56 bg-white shadow-lg border border-gray-100 rounded-md 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  translate-y-2 group-hover:translate-y-0
                  transition-all duration-200 z-50"
                >
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-primary hover:bg-primary/90 hover:text-white transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </nav>
  );
}