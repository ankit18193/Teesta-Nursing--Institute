"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "Notices", href: "/admin/notices" },
  { name: "News", href: "/admin/news" },
  { name: "Downloads", href: "/admin/downloads" },
  { name: "Gallery", href: "/admin/gallery" },
{ name: "Testimonials", href: "/admin/testimonials" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] bg-white border-r shadow-sm">

      {/* LOGO / TITLE */}
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-primary">
          Admin Panel
        </h2>
      </div>

      {/* NAV */}
      <nav className="flex flex-col p-4 gap-2">

        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-200
              ${
                pathname === item.href
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {item.name}
          </Link>
        ))}

      </nav>

    </aside>
  );
}