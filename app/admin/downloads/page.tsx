"use client";

import { useState } from "react";
import DownloadTable from "@/components/admin/downloads/DownloadTable";
import DownloadForm from "@/components/admin/downloads/DownloadForm";

export default function DownloadsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Downloads
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          + Add File
        </button>
      </div>

      {/* TABLE */}
      <DownloadTable />

      {/* MODAL */}
      {open && (
        <DownloadForm onClose={() => setOpen(false)} />
      )}

    </div>
  );
}