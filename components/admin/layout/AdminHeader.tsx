"use client";

export default function AdminHeader() {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">

      <h1 className="text-lg font-semibold text-gray-700">
        Admin Dashboard
      </h1>

      <button className="text-sm text-red-500 hover:underline">
        Logout
      </button>

    </header>
  );
}