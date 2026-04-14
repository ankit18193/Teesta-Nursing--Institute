"use client";

import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import "./globals.css";

import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 🔐 Check if admin login page
  const isAdminLogin = pathname === "/admin/login";

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} w-full overflow-x-clip`}>

        {/* ❌ Hide TopBar + Navbar on admin login */}
        {!isAdminLogin && <TopBar />}
        {!isAdminLogin && <Navbar />}

        {children}

        {/* ❌ Hide CTA + Footer on admin login */}
        {!isAdminLogin && <CTASection />}
        {!isAdminLogin && <Footer />}

      </body>
    </html>
  );
}