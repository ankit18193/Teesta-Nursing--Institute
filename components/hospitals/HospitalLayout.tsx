"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ✅ FIX 1: synced with actual hospital data
const hospitals = [
    { id: "astha", name: "Astha Hospital" },
  
    { id: "hope", name: "Hope & Hill Cancer Hospital" },
  
    { id: "kurseong-subdivisional", name: "Kurseong Sub-Divisional Hospital" },
  
    { id: "malbazar", name: "Malbazar Super Hospital" },
  
    { id: "malbazar-general", name: "Malbazar Hospital" },
  
    { id: "mitra", name: "Mitra Hospital" },
  
    { id: "siliguri-subdivisional", name: "Siliguri Sub-Divisional Hospital" },
  
    { id: "sun", name: "Sun Hospital & Diagnostic Center" },
  
    { id: "tufanganj", name: "Tufanganj Hospital" },
  ];

export default function HospitalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ✅ FIX 2: extract id safely (no includes bug)
  const currentId = pathname.split("/")[2];

  // ✅ FIX 3: exact match
  const currentHospital =
    hospitals.find((h) => h.id === currentId)?.name || "Hospital";

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
                // ✅ FIX 4: correct active state
                const isActive = currentId === h.id;

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