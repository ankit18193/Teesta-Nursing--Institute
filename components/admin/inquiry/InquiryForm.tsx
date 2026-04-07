"use client";

import { useState, useEffect } from "react";

type Inquiry = {
  id?: number;
  name: string;
  phone: string;
  email: string;
  message: string;
};

type Props = {
  onClose: () => void;
  initialData?: Inquiry;
};

export default function InquiryForm({ onClose, initialData }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPhone(initialData.phone);
      setEmail(initialData.email);
      setMessage(initialData.message);
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!name || !phone) return;

    console.log("Inquiry Submitted:", {
      name,
      phone,
      email,
      message,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">

        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Inquiry" : "Add Inquiry"}
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm"
          />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm"
          />

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm"
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border rounded-lg text-sm"
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
          >
            {initialData ? "Update" : "Save"}
          </button>

        </div>

      </div>
    </div>
  );
}