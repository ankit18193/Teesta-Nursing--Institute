"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "@icons-pack/react-simple-icons";



export default function Footer() {

    


    return (
        <footer className="bg-[#0b0e14] text-gray-300 pt-20 pb-10 font-inter border-t border-primary/20">
            <div className="max-w-[1440px] mx-auto px-8 md:px-20">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 mb-12">

                    {/* COLUMN 1 */}
                    <div className="md:col-span-5">
                        <div className="flex items-center mb-6">

                            {/* LOGO */}

                            <Image
                                src="/images/logos/teesta-logo1.png"
                                alt="Teesta Nursing Institute"
                                width={210}
                                height={210}
                                className="object-contain"
                                priority
                            />


                            {/* TEXT */}
                            <div className="leading-tight ml-2">

                                <h2 className="font-montserrat text-7xl font-extrabold bg-gradient-to-r from-[#1E6FA8] to-[#4FC3F7] bg-clip-text text-transparent">
                                    TEESTA
                                </h2>

                                <p className="text-[17px] uppercase tracking-[0.20em] font-extrabold 
                                   bg-gradient-to-r from-[#4FC3F7] to-[#1E6FA8] 
                                    bg-clip-text text-transparent">
                                    GROUP OF INSTITUTION
                                </p>

                            </div>

                        </div>

                        <p className="text-[13px] text-gray-400 mb-4 leading-relaxed pr-6">
                            123/4, Teesta Campus, Siliguri, West Bengal-734001, India.
                        </p>

                        <div className="space-y-2 text-[13px] mb-6">
                            <p className="flex items-center gap-2 hover:text-accent transition cursor-pointer">
                                <Phone size={14} className="text-purple-500" />
                                +91-080-95571188, +91-080-50046002
                            </p>
                            <p className="flex items-center gap-2 hover:text-accent transition cursor-pointer">
                                <Mail size={14} className="text-purple-500" />
                                info@teesta.edu.in
                            </p>
                        </div>

                        <div className="mb-2 text-[14px] font-semibold text-white">
                            Connect With Us
                        </div>

                        <div className="flex gap-3">
                            <a href="#" className="bg-[#3b5998] p-2 rounded-full text-white hover:opacity-80 hover:scale-110 transition">
                                <SiFacebook size={16} />
                            </a>

                            <a href="#" className="bg-[#00acee] p-2 rounded-full text-white hover:opacity-80 hover:scale-110 transition">
                                <SiX size={16} />
                            </a>

                            <a href="#" className="bg-[#c4302b] p-2 rounded-full text-white hover:opacity-80 hover:scale-110 transition">
                                <SiYoutube size={16} />
                            </a>

                            <a href="#" className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-2 rounded-full text-white hover:opacity-80 hover:scale-110 transition">
                                <SiInstagram size={16} />
                            </a>
                        </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="md:col-span-3">
                        <h3 className="text-[16px] font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-[14px]">
                            {["Home", "About us", "Our Facility", "FAQ'S", "Leadership"].map((link) => (
                                <li key={link} className="border-b border-dashed border-gray-700 pb-2">
                                    <Link href="#" className="text-gray-400 hover:text-accent transition duration-200">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="md:col-span-4">
                        <h3 className="text-[16px] font-bold text-white mb-6">Programmes</h3>
                        <ul className="space-y-3 text-[14px]">
                            {["G.N.M.", "B.Sc", "B Pharma", "D Pharma"].map((link) => (
                                <li key={link} className="border-b border-dashed border-gray-700 pb-2">
                                    <Link href="#" className="text-gray-400 hover:text-accent transition duration-200">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10 border-t border-gray-800/80">

                    {/* Subscribe */}
                    <div className="md:col-span-4">
                        <h3 className="text-[14px] font-bold text-white mb-3">Subscribe Us</h3>
                        <div className="flex h-[40px] max-w-sm">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 text-[14px] text-gray-800 bg-white/90 backdrop-blur outline-none rounded-l-md focus:ring-2 focus:ring-accent"
                            />
                            <button className="bg-primary text-white px-6 text-[14px] font-medium rounded-r-md hover:bg-primary/90 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Call */}
                    <div className="md:col-span-2">
                        <h3 className="text-[14px] font-bold text-white mb-3">Call Us Now</h3>
                        <div className="space-y-1 text-[14px] font-medium text-yellow-400">
                            <p>+91-080-95571188</p>
                            <p>+91-080-50046002</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="md:col-span-3">
                        <h3 className="text-[14px] font-bold text-white mb-3">Opening Hours</h3>
                        <div className="space-y-1 text-[13px] text-gray-400">
                            <p>Mon - Sat : 9.00 am - 6.00 pm</p>
                            <p>Sunday : Closed</p>
                        </div>
                    </div>

                    {/* MAP */}
                    <div className="md:col-span-3">
                        <h3 className="text-[14px] font-bold text-white mb-3">Find Us</h3>

                        <div className="relative w-full h-[140px] rounded-md overflow-hidden border border-gray-700">

                            {/* MAP */}
                            <iframe
                                src="https://www.google.com/maps?q=Teesta+Nursing+Institute+Siliguri&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"

                            ></iframe>



                        </div>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="text-center text-xs text-gray-500 mt-10">
                    © {new Date().getFullYear()} Teesta Nursing Institute. All rights reserved.
                </div>

            </div>
        </footer>
    );
}