"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./Footer";
import CTASection from "../sections/CTASection";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isAdminLogin = pathname === "/admin/login";

  return (
    <>
      {!isAdminLogin && <TopBar />}
      {!isAdminLogin && <Navbar />}

      {children}

      {!isAdminLogin && <CTASection />}
      {!isAdminLogin && <Footer />}
    </>
  );
}