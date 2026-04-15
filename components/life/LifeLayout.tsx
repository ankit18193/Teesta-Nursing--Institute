"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import HeroSlider from "@/components/resources/HeroSlider";

const lifeLinks = [
  { name: "Campus Life", href: "/life/campus" },
  { name: "Hostel Life", href: "/life/hostel" },
  { name: "Our Facilities", href: "/life/facility" },
  { name: "Our Gallery", href: "/life/gallery" },
  { name: "Transportation", href: "/life/transport" },
  { name: "Our Placement", href: "/life/placement" },
];

export default function LifeLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔥 BREADCRUMB */}
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-5 sm:pt-6 md:px-6 md:pt-8">
        <div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-100 bg-white px-2.5 py-1.5 shadow-sm sm:gap-2 sm:px-4 sm:py-2.5">

          <Link href="/" className="text-[11px] font-medium text-gray-500 hover:text-primary sm:text-xs md:text-sm">
            Home
          </Link>

          <span className="text-[11px] text-gray-300 sm:text-xs md:text-sm">›</span>

          <span className="text-[11px] font-medium text-gray-500 sm:text-xs md:text-sm">
            Life @ Teesta
          </span>

          <span className="text-[11px] text-gray-300 sm:text-xs md:text-sm">›</span>

          <span className="text-[11px] font-semibold text-primary sm:text-xs md:text-sm">
            {title}
          </span>

        </div>
      </div>

      {/* 🔥 MAIN LAYOUT */}
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-3 py-6 sm:px-5 sm:py-7 md:px-6 md:py-8 lg:flex-row lg:gap-7 lg:py-9">

        {/* 🔥 MOBILE DROPDOWN */}
        <div className="lg:hidden">
          <div className="rounded-xl bg-primary p-3 text-white shadow-md sm:p-4">
            <details>
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                <span>Life @ Teesta</span>
                <span className="text-xs">▼</span>
              </summary>

              <div className="mt-3 flex flex-col gap-2">
                {lifeLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`rounded-md px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm ${
                        isActive
                          ? "bg-white text-primary font-medium"
                          : "hover:bg-white/10"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </details>
          </div>
        </div>

        {/* 🔥 DESKTOP SIDEBAR */}
        <div className="hidden w-[220px] min-w-[220px] flex-col gap-4 lg:flex xl:w-[240px] xl:min-w-[240px] sm:gap-5">

          <div className="rounded-xl bg-primary p-3.5 text-white shadow-md sm:p-4.5 xl:p-5">
            <h2 className="mb-3 text-sm font-semibold sm:text-base xl:text-lg">
              Life @ Teesta
            </h2>

            <div className="flex flex-col gap-2">
              {lifeLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-md px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm ${
                      isActive
                        ? "bg-white text-primary font-medium"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-md">
            <HeroSlider />
          </div>

          {/* 🔥 INFO CARD (kept your original content) */}
          <div className="rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm sm:p-4.5">
            <h3 className="mb-3 text-sm font-semibold sm:text-base xl:text-lg">
              Student <span className="text-primary">Life</span>
            </h3>

            <p className="text-xs text-gray-600 leading-relaxed sm:text-sm">
              Experience a vibrant campus life with modern facilities,
              comfortable hostels, and a supportive learning environment.
            </p>
          </div>

        </div>

        {/* 🔥 CONTENT */}
        <div className="flex-1 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 lg:p-8">

          <h1 className="mb-4 text-lg font-bold text-primary sm:text-xl md:text-2xl lg:text-[28px]">
            {title}
          </h1>

          <div className="text-[13px] leading-relaxed text-gray-600 sm:text-[14px] lg:text-[15px] space-y-6">
            {children}
          </div>

        </div>

        {/* 🔥 MOBILE BOTTOM */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:hidden">

          <div className="overflow-hidden rounded-2xl shadow-md">
            <HeroSlider />
          </div>

          <div className="rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm sm:p-4.5">
            <h3 className="mb-3 text-sm font-semibold sm:text-base">
              Student <span className="text-primary">Life</span>
            </h3>

            <p className="text-xs text-gray-600 leading-relaxed sm:text-sm">
              Experience a vibrant campus life with modern facilities,
              comfortable hostels, and a supportive learning environment.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}