"use client";

import { useState } from "react";
import ContactForm from "@/components/admin/contact/ContactForm";
import ContactCard from "@/components/admin/contact/ContactCard";

export default function ContactPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">
          Contact Info
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
        >
          Edit Contact
        </button>
      </div>

      <ContactCard />

      {open && <ContactForm onClose={() => setOpen(false)} />}

    </div>
  );
}