"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import AdminHeader from "@/components/admin/layout/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🚨 If login page → skip admin layout
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <AdminSidebar />

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <AdminHeader />

        {/* CONTENT */}
        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}