"use client";

import { Phone, Mail } from "lucide-react";
import { SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";

import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-[13px]">
      <div className="container-custom flex items-center justify-between h-11 border-b border-white/10">

        {/* LEFT */}
        <div className="flex items-center gap-6">
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
        <div className="flex items-center gap-5">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-2.5">
            <SiFacebook
              size={18}
              className="text-[#1877F2] hover:scale-110 transition duration-200 cursor-pointer"
            />

            <SiInstagram
              size={18}
              className="text-pink-500 hover:scale-110 transition duration-200 cursor-pointer"
            />
          </div>

          {/* SMALL CTA */}
          <Link
            href="/admission"
            className="bg-white text-primary px-4 py-1.5 rounded-md font-semibold shadow-sm hover:scale-105 hover:bg-accent hover:text-white hover:shadow-md transition duration-200"
          >
            Apply Now
          </Link>
        </div>

      </div>
    </div>
  );
}