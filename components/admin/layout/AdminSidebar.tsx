"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bell,
  Newspaper,
  Download,
  Image,
  Star,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Notices", href: "/admin/notices", icon: Bell },
  { name: "News", href: "/admin/news", icon: Newspaper },
  { name: "Downloads", href: "/admin/downloads", icon: Download },
  { name: "Gallery", href: "/admin/gallery", icon: Image },
  { name: "Testimonials", href: "/admin/testimonials", icon: Star },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[250px] min-h-screen
                      bg-white/80 backdrop-blur-md
                      border-r border-gray-200
                      shadow-sm flex flex-col">

      {/* 🔷 LOGO / TITLE */}
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-primary tracking-wide">
          Admin Panel
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Control & manage content
        </p>
      </div>

      {/* 🔗 NAV */}
      <nav className="flex flex-col p-4 gap-1">

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium
                          transition-all duration-200
                          ${
                            isActive
                              ? "bg-primary/10 text-primary shadow-sm"
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                          }`}
            >
              {/* Icon */}
              <Icon
                size={18}
                className={`transition-transform duration-200
                  ${
                    isActive
                      ? "text-primary"
                      : "text-gray-400 group-hover:text-gray-600"
                  }
                  group-hover:scale-110
                `}
              />

              {/* Text */}
              <span>{item.name}</span>

              {/* Active indicator */}
              {isActive && (
                <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}