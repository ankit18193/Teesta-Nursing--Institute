"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programmes", href: "/courses" },
  { name: "Resources", href: "/resources" },
  { name: "Life@Teesta", href: "/life" },
  { name: "Hospitals", href: "/hospitals" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom flex items-center justify-between h-[110px]">

        {/* LEFT → LOGO + NAME */}
        <div className="flex items-center gap-4">

          {/* LOGO (BIGGER NOW) */}
          <Image
            src="/images/logos/teesta-logo1.png"
            alt="Teesta Nursing Institute"
            width={110}   // ✅ properly visible now
            height={110}
            className="object-contain"
          />

          {/* NAME + SLOGAN */}
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-primary">
              Teesta Nursing Institute
            </h1>
            <p className="text-sm text-gray-500 font-medium">
              Care Beyond Compassion
            </p>
          </div>

        </div>

        {/* RIGHT → NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 ml-auto text-[15px] font-medium text-gray-700">

          {navLinks.map((link) => {
            const hasDropdown = [
              "About Us",
              "Programmes",
              "Resources",
              "Life@Teesta",
            ].includes(link.name);

            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 hover:text-primary transition"
              >
                {link.name}

                {hasDropdown && <ChevronDown size={16} />}
              </Link>
            );
          })}

        </div>

        {/* RIGHT SPACE (future use) */}
        <div className="w-10" />

      </div>
    </nav>
  );
}