"use client";

import { Phone, Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "@icons-pack/react-simple-icons";


import Link from "next/link";

export default function TopBar() {
  return (
    <div className="w-full bg-primary text-white text-[13px]">
      <div className="w-full border-b border-white/10 px-4 py-5 sm:px-6 sm:py-6 md:container-custom md:flex md:h-11 md:items-center md:justify-between md:px-14 ">

        {/* LEFT */}
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4 md:flex-row md:items-center md:gap-6 md:text-left">
          <div className="flex items-center gap-2 leading-none">
            <Phone size={14} />
            <span>+91 9876543210</span>
          </div>

          <div className="flex items-center gap-2 leading-none">
            <Mail size={14} />
            <span>info@teesta.edu</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="mt-4 flex flex-col items-center gap-4 sm:gap-5 md:mt-0 md:flex-row md:items-center md:gap-5">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-2.5">
            <SiFacebook
              size={18}
              className="text-[#1877F2] hover:scale-110 transition duration-200 cursor-pointer"
            />

            <SiInstagram
              size={18}
              className="text-pink-600 hover:scale-110 transition duration-200 cursor-pointer"
            />
            <SiX
              size={18}
              className="text-blue-500 hover:scale-110 transition duration-200 cursor-pointer"
            />
            <SiYoutube
              size={18}
              className="text-red-500 hover:scale-110 transition duration-200 cursor-pointer"
            />
          </div>

          {/* SMALL CTA */}
          <Link
            href="/admission"
            className="rounded-md bg-[#2EA9DF] px-5 py-2 font-semibold text-white shadow-sm transition duration-200 hover:scale-105 hover:bg-[#4FC3F7] hover:shadow-md md:bg-white md:px-4 md:py-1.5 md:text-primary"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </div>
  );
}