"use client";

import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import AdminHeader from "@/components/admin/layout/AdminHeader";
import AdminProtected from "@/components/AdminProtected"
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname=usePathname();

    if (pathname.startsWith("/admin/login")) {
    return <>{children}</>;
  }

  return (
    <AdminProtected>
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
    </AdminProtected>
  );
}