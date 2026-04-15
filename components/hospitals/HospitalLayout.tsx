"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  const currentId = pathname.split("/")[2];

  const currentHospital =
    hospitals.find((h) => h.id === currentId)?.name || "Hospital";

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔥 BREADCRUMB */}
      <div className="mx-auto max-w-7xl px-3 pt-4 sm:px-5 sm:pt-6 md:px-6 md:pt-8">
        <div className="inline-flex items-center gap-1.5 rounded-lg border bg-white px-2.5 py-1.5 shadow-sm sm:gap-2 sm:px-4 sm:py-2.5">

          <Link href="/" className="text-[11px] text-gray-500 hover:text-primary sm:text-xs md:text-sm">
            Home
          </Link>

          <span className="text-[11px] text-gray-300 sm:text-xs md:text-sm">›</span>

          <span className="text-[11px] text-gray-500 sm:text-xs md:text-sm">
            Hospitals
          </span>

          <span className="text-[11px] text-gray-300 sm:text-xs md:text-sm">›</span>

          <span className="text-[11px] font-semibold text-primary sm:text-xs md:text-sm">
            {currentHospital}
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
                <span>Our Hospitals</span>
                <span className="text-xs">▼</span>
              </summary>

              <div className="mt-3 flex flex-col gap-2">
                {hospitals.map((h) => {
                  const isActive = currentId === h.id;

                  return (
                    <Link
                      key={h.id}
                      href={`/hospitals/${h.id}`}
                      className={`rounded-md px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm ${
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
            </details>
          </div>
        </div>

        {/* 🔥 DESKTOP SIDEBAR */}
        <div className="hidden w-[220px] min-w-[220px] flex-col gap-4 lg:flex xl:w-[240px] xl:min-w-[240px] sm:gap-5">

          <div className="rounded-xl bg-primary p-3.5 text-white shadow-md sm:p-4.5 xl:p-5">
            <h2 className="mb-3 text-sm font-semibold sm:text-base xl:text-lg">
              Our Hospitals
            </h2>

            <div className="flex flex-col gap-2">
              {hospitals.map((h) => {
                const isActive = currentId === h.id;

                return (
                  <Link
                    key={h.id}
                    href={`/hospitals/${h.id}`}
                    className={`rounded-md px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm ${
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
        <div className="flex-1 rounded-xl border bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          {children}
        </div>

      </div>
    </div>
  );
}