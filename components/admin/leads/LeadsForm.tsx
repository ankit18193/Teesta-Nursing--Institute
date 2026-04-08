"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";

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
  onSuccess?: () => void;
};

export default function LeadsForm({ onClose, initialData, onSuccess }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("NEW");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setPhone(initialData.phone);
      setCourse(initialData.course);
      setStatus(initialData.status);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (!name || !phone) {
      alert("Name and Phone are required");
      return;
    }

    try {
      setLoading(true);

      // ✅ EDIT MODE
      if (initialData?.id) {
        const res = await api.patch(`/leads/${initialData.id}`, {
          name,
          phone,
          course,
          status,
        });

        if (!res.data.success) {
          alert(res.data.message);
          return;
        }

        alert("Lead updated ✅");
      }

      // ✅ CREATE MODE
      else {
        const res = await api.post("/leads", {
          name,
          phone,
          course,
          status,
        });

        if (!res.data.success) {
          alert(res.data.message);
          return;
        }

        alert("Lead created ✅");
      }

      onSuccess && onSuccess();
      onClose();

    } catch (err: any) {
      console.error(err);
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
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
              <option value="NEW">New</option>
              <option value="CONTACTED">Contacted</option>
              <option value="CONVERTED">Converted</option>
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
            disabled={loading}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
          >
            {loading
              ? "Saving..."
              : initialData
              ? "Update"
              : "Save"}
          </button>

        </div>

      </div>
    </div>
  );
}