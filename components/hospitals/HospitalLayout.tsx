"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const hospitals = [
  { id: "apollo", name: "Apollo Hospital" },
  { id: "fortis", name: "Fortis Healthcare" },
  { id: "aiims", name: "AIIMS" },
  { id: "medanta", name: "Medanta Hospital" },
  { id: "max", name: "Max Healthcare" },
  { id: "narayana", name: "Narayana Health" },
  { id: "ruby", name: "Ruby Hospital" },
  { id: "manipal", name: "Manipal Hospital" },
  { id: "columbia", name: "Columbia Asia" },
];

export default function HospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const currentHospital =
    hospitals.find((h) => pathname.includes(h.id))?.name || "Hospital";

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔥 BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="bg-white border rounded-xl px-5 py-3 shadow-sm flex gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary">
            Home
          </Link>
          <span>›</span>
          <span className="text-gray-500">Hospitals</span>
          <span>›</span>
          <span className="text-primary font-semibold">
            {currentHospital}
          </span>
        </div>
      </div>

      {/* 🔥 MAIN */}
      <div className="max-w-7xl mx-auto flex gap-10 py-10 px-6">

        {/* 🔥 SIDEBAR */}
        <div className="w-[280px]">
          <div className="bg-primary text-white rounded-2xl p-6 shadow-md">
            <h2 className="text-lg font-semibold mb-5">
              Our Hospitals
            </h2>

            <div className="flex flex-col gap-2">
              {hospitals.map((h) => {
                const isActive = pathname.includes(h.id);

                return (
                  <Link
                    key={h.id}
                    href={`/hospitals/${h.id}`}
                    className={`px-4 py-2 rounded-md text-sm transition ${
                      isActive
                        ? "bg-white text-primary font-medium"
                        : "hover:bg-white/10"
                    }`}
                  >
                    {h.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* 🔥 CONTENT */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border p-8">
          {children}
        </div>

      </div>
    </div>
  );
}