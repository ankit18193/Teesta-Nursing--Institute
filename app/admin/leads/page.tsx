"use client";

import { useState } from "react";
import LeadsTable from "@/components/admin/leads/LeadsTable";
import LeadsForm from "@/components/admin/leads/LeadsForm";

export default function LeadsPage() {
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(0); // ✅ trigger reload

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Leads
        </h2>
      </div>
      <LeadsTable refresh={refresh} />

      {open && (
        <LeadsForm
          onClose={() => setOpen(false)}
          onSuccess={() => setRefresh((prev) => prev + 1)} // ✅ trigger refresh
        />
      )}

    </div>
  );
}