"use client";

import { useState } from "react";
import NewsTable from "@/components/admin/news/NewsTable";
import NewsForm from "@/components/admin/news/NewsForm";

export default function NewsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          News & Events
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          + Add News
        </button>
      </div>

      <NewsTable />

      {open && <NewsForm onClose={() => setOpen(false)} />}

    </div>
  );
}