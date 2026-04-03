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
    <div className="bg-gray-50 min-h-screen">

      {/* 🔥 BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-white border border-gray-100 rounded-xl px-5 py-3 shadow-sm inline-flex items-center gap-3">

          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-primary transition font-medium"
          >
            Home
          </Link>

          <span className="text-gray-300">›</span>

          <span className="text-sm text-gray-500 font-medium">
            Life @ Teesta
          </span>

          <span className="text-gray-300">›</span>

          <span className="text-sm text-primary font-semibold">
            {title}
          </span>

        </div>
      </div>

      {/* 🔥 MAIN LAYOUT */}
      <div className="max-w-7xl mx-auto flex gap-10 py-10 px-6">

        {/* 🔥 SIDEBAR */}
        <div className="w-[300px] flex flex-col gap-6">

          {/* 🔥 NAV LINKS */}
          <div className="bg-primary text-white rounded-2xl p-6 shadow-md">

            <h2 className="text-lg font-semibold mb-5 tracking-wide">
              Life @ Teesta
            </h2>

            <div className="flex flex-col gap-2">
              {lifeLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm px-4 py-2 rounded-md transition-all duration-200 ${
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

          {/* 🔥 HERO SLIDER (BETTER POSITIONING) */}
          <div className="rounded-2xl overflow-hidden shadow-md">
            <HeroSlider />
          </div>

          {/* 🔥 QUICK INFO CARD */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

            <h3 className="text-lg font-semibold mb-3">
              Student <span className="text-primary">Life</span>
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Experience a vibrant campus life with modern facilities,
              comfortable hostels, and a supportive learning environment.
            </p>

          </div>

        </div>

        {/* 🔥 CONTENT */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-10">

          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-8">
            {title}
          </h1>

          <div className="text-gray-600 leading-relaxed text-[15px] space-y-6">
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}