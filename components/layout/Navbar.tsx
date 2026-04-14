"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">

      {/* 🔥 FIXED: removed fixed height + responsive padding */}
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-3 py-3 sm:px-4 md:px-10 md:py-5">

        {/* LEFT → LOGO + NAME */}
        <div className="ml-0 flex min-w-0 flex items-center gap-2 sm:gap-3 md:ml-5 md:gap-5 lg:flex-none">

          {/* 🔥 FIXED: responsive logo */}
          <Image
            src="/images/navbar/nav.jpg"
            alt="Teesta Nursing Institute"
            width={500}
            height={100}
            className="object-contain flex-shrink-0

  h-[60px]
  sm:h-[80px]
  md:h-[110px]
  lg:h-[120px]
  xl:h-[150px]

  w-auto"
          />



        </div>

        {/* RIGHT → NAV LINKS (desktop only) */}
        <div className="hidden lg:flex items-center gap-1 ml-auto text-[15px] font-medium pr-4">

          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">

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

        {/* 🔥 NEW: MOBILE MENU BUTTON */}
        <div className="ml-3 flex items-center lg:hidden">
          {open ? (
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => {
                setOpen(false);
                setMobileDropdown(null);
              }}
              className="rounded-md p-1 text-primary transition hover:bg-primary/10"
            >
              <X className="h-6 w-6 cursor-pointer" />
            </button>
          ) : (
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="rounded-md p-1 text-primary transition hover:bg-primary/10"
            >
              <Menu className="h-6 w-6 cursor-pointer" />
            </button>
          )}
        </div>

      </div>

      {/* 🔥 NEW: MOBILE MENU */}
      {open && (
        <div className="border-t bg-white px-4 pb-4 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-200">
                {link.dropdown ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown((prev) => (prev === link.name ? null : link.name))
                      }
                      className="flex w-full items-center justify-between py-3 text-left text-primary"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileDropdown === link.name ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {mobileDropdown === link.name && (
                      <div className="pb-2 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-2 text-[14px] text-primary/90"
                            onClick={() => {
                              setOpen(false);
                              setMobileDropdown(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-primary"
                    onClick={() => {
                      setOpen(false);
                      setMobileDropdown(null);
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

    </nav>
  );
}