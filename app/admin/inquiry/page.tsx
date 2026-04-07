"use client";

import { useState } from "react";
import InquiryTable from "@/components/admin/inquiry/InquiryTable";
import InquiryForm from "@/components/admin/inquiry/InquiryForm";

export default function InquiryPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Inquiries
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          + Add Inquiry
        </button>
      </div>

      <InquiryTable />

      {open && <InquiryForm onClose={() => setOpen(false)} />}

    </div>
  );
}