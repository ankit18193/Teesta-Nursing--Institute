"use client";

import { useState } from "react";
import LeadsTable from "@/components/admin/leads/LeadsTable";
import LeadsForm from "@/components/admin/leads/LeadsForm";

export default function LeadsPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Leads
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          + Add Lead
        </button>
      </div>

      <LeadsTable />

      {open && <LeadsForm onClose={() => setOpen(false)} />}

    </div>
  );
}