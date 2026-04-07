"use client";

import { useState, useEffect } from "react";

type Lead = {
  id?: number;
  name: string;
  phone: string;
  course: string;
  status: string;
};

type Props = {
  onClose: () => void;
  initialData?: Lead;
};

export default function LeadsForm({ onClose, initialData }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("new");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPhone(initialData.phone);
      setCourse(initialData.course);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!name || !phone) return;

    console.log("Lead Submitted:", {
      name,
      phone,
      course,
      status,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">

        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Lead" : "Add Lead"}
        </h2>

        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Course</label>
            <input
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            >
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="converted">Converted</option>
            </select>
          </div>

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