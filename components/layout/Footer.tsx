"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone, Mail } from "lucide-react";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "@icons-pack/react-simple-icons";



const programmes = [
    { name: "G.N.M.", href: "/courses/gnm" },
    { name: "B.Sc Nursing", href: "/courses/bsc" },
    { name: "B Pharma", href: "/courses/bpharma" },
    { name: "D Pharma", href: "/courses/dpharma" },
];

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about/institutions" },
    { name: "Hospitals", href: "/hospitals" },
    { name: "Leadership", href: "/about/leadership" },
    { name: "FAQ'S", href: "/contact" }, // update if different route
];



export default function Footer() {
    const [openSection, setOpenSection] = useState<"quickLinks" | "programmes" | null>("quickLinks");

    return (
        <footer className="border-t border-primary/20 bg-[#05070c] pb-10 pt-10 text-gray-300 font-inter sm:pt-12 md:pt-16">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-16">

                {/* TOP SECTION */}
                <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-12 lg:gap-14">

                    {/* COLUMN 1 */}
                    <div className="md:col-span-5">
                        <div className="mb-6 flex items-center gap-3 sm:gap-4">

                            {/* LOGO */}
                            <Image
                                src="/images/fotter/fotter.png"
                                alt="Teesta Nursing Institute"
                                width={200}
                                height={200}
                                className="object-contain

                                           h-[90px]
                                           sm:h-[120px]
                                           md:h-[150px]
                                           lg:h-[180px]

                                             w-auto"
                                priority
                            />



                        </div>

                        <p className="mb-4 max-w-xl pr-0 text-[14px] leading-relaxed text-gray-500 sm:text-[14px] sm:pr-4 md:text-[13px]">
                            MFV3 + 5FP, Teesta Campus,  VIP Road, South Shanti Nagar, Ananda Pally, Siliguri, West Bengal- 734006
                        </p>

                        <div className="mb-6 space-y-2 text-[14px] text-gray-500 sm:text-[14px] md:text-[13px]">
                            <p className="flex flex-wrap items-center gap-2 transition hover:text-accent cursor-pointer">
                                <Phone size={14} className="text-purple-500" />
                                +91-9771406258 | +91-9733135555
                            </p>
                            <p className="flex flex-wrap items-center gap-2 transition hover:text-accent cursor-pointer">
                                <Mail size={14} className="text-purple-500" />
                                info@teesta.edu.in
                            </p>
                        </div>

                        <div className="mb-2 text-[22px] font-semibold text-white sm:text-[20px] md:text-[14px]">
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
                        <button
                            type="button"
                            className="flex w-full items-center justify-between border-b border-gray-800 pb-3 text-left text-[13px] font-bold text-white md:mb-6 md:block md:border-0 md:pb-0 md:text-[16px]"
                            onClick={() =>
                                setOpenSection((prev) => (prev === "quickLinks" ? null : "quickLinks"))
                            }
                        >
                            <span>Quick Links</span>
                            <ChevronDown
                                className={`h-5 w-5 transition md:hidden ${openSection === "quickLinks" ? "rotate-180" : ""}`}
                            />
                        </button>

                        <ul
                            className={`${openSection === "quickLinks" ? "mt-4 block" : "hidden"} space-y-3 text-[14px] md:mt-0 md:block`}
                        >
                            {quickLinks.map((item) => (
                                <li
                                    key={item.name}
                                    className="border-b border-dashed border-gray-700 pb-2 group"
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center justify-between text-gray-400 
                     hover:text-accent transition duration-200"
                                    >
                                        {item.name}

                                        {/* 🔥 hover arrow */}
                                        <span className="opacity-0 group-hover:opacity-100 transition text-xs">
                                            →
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="md:col-span-4">
                        <button
                            type="button"
                            className="mt-2 flex w-full items-center justify-between border-b border-gray-800 pb-3 text-left text-[13px] font-bold text-white md:mt-0 md:mb-6 md:block md:border-0 md:pb-0 md:text-[16px]"
                            onClick={() =>
                                setOpenSection((prev) => (prev === "programmes" ? null : "programmes"))
                            }
                        >
                            <span>Programmes</span>
                            <ChevronDown
                                className={`h-5 w-5 transition md:hidden ${openSection === "programmes" ? "rotate-180" : ""}`}
                            />
                        </button>

                        <ul
                            className={`${openSection === "programmes" ? "mt-4 block" : "hidden"} space-y-3 text-[14px] md:mt-0 md:block`}
                        >
                            {programmes.map((item) => (
                                <li
                                    key={item.name}
                                    className="border-b border-dashed border-gray-700 pb-2 group"
                                >
                                    <Link
                                        href={item.href}
                                        className="flex items-center justify-between text-gray-400 
                     hover:text-accent transition duration-200"
                                    >
                                        {item.name}

                                        {/* 🔥 subtle arrow (premium touch) */}
                                        <span className="opacity-0 group-hover:opacity-100 transition text-xs">
                                            →
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div className="grid grid-cols-1 gap-8 border-t border-gray-800/80 pt-10 sm:gap-10 md:grid-cols-12">

                    {/* Subscribe */}
                    <div className="md:col-span-4">
                        <h3 className="text-[14px] font-bold text-white mb-3">Subscribe Us</h3>
                        <div className="flex h-[42px] w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 text-[14px] text-gray-800 bg-white/90 backdrop-blur outline-none rounded-l-md focus:ring-2 focus:ring-accent"
                            />
                            <button className="rounded-r-md bg-primary px-4 text-[13px] font-medium text-white transition hover:bg-primary/90 sm:px-6 sm:text-[14px]">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Call */}
                    <div className="md:col-span-2">
                        <h3 className="text-[14px] font-bold text-white mb-3">Call Us Now</h3>
                        <div className="space-y-1 text-[14px] font-medium text-yellow-400">
                            <p>+91-9771406258</p>
                            <p>+91-9733135555</p>
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

                        <div className="relative h-[160px] w-full overflow-hidden rounded-md border border-gray-700 sm:h-[170px] md:h-[140px]">

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
                <div className="mt-10 text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} Teesta Nursing Institute. All rights reserved.
                </div>

            </div>
        </footer>
    );
}