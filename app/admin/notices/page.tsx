"use client";

import { useState } from "react";
import NoticeTable from "@/components/admin/notices/NoticeTable";
import NoticeForm from "@/components/admin/notices/NoticeForm";

export default function NoticesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <h2 className="text-xl font-semibold text-gray-700">
          Notices
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm shadow hover:bg-primary/90 transition"
        >
          + Add Notice
        </button>

      </div>

      {/* TABLE */}
      <NoticeTable />

      {/* MODAL */}
      {open && <NoticeForm onClose={() => setOpen(false)} />}

    </div>
  );
}