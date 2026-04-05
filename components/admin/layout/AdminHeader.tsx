"use client";

import { LogOut, User } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between
                       px-6 py-4
                       bg-white/70 backdrop-blur-md
                       border-b border-gray-200
                       shadow-sm">

      {/* Left: Title */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-xs text-gray-500">
          Manage your content & data
        </p>
      </div>

      {/* Right: User + Logout */}
      <div className="flex items-center gap-4">

        {/* Admin Info */}
        <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg">
          <User size={16} className="text-gray-600" />
          <span className="text-sm text-gray-700 font-medium">
            Admin
          </span>
        </div>

        {/* Logout Button */}
        <button
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium
                     text-red-500 hover:text-white
                     hover:bg-red-500
                     transition-all duration-200"
        >
          <LogOut size={16} />
          Logout
        </button>

      </div>

    </header>
  );
}