"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdminSidebar from "@/components/admin/layout/AdminSidebar";
import AdminHeader from "@/components/admin/layout/AdminHeader";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    console.log("Current path:", pathname);
    console.log("Token exists:", !!token);
    console.log("Layout - Token value:", token);

    // If no token and not on login page → redirect to login
    if (!token && pathname !== "/admin/login") {
      console.log("No token, redirecting to login");
      router.replace("/admin/login");
    }

    // If token exists and on login page → redirect to dashboard
    if (token && pathname === "/admin/login") {
      console.log("Token exists, redirecting to dashboard");
      router.replace("/admin");
    }

    setLoading(false);
  }, [pathname, router]);

  // Wait for check
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Login page → no layout
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

