"use client";

import { useState, useEffect } from "react";

/* ✅ TYPES */
type Notice = {
  id?: number;
  title: string;
  desc: string;
};

type NoticeFormProps = {
  onClose: () => void;
  initialData?: Notice;
};

export default function NoticeForm({
  onClose,
  initialData,
}: NoticeFormProps) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  /* ✅ PREFILL DATA FOR EDIT */
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDesc(initialData.desc);
    }
  }, [initialData]);

  /* ✅ SUBMIT HANDLER (UI ONLY) */
  const handleSubmit = () => {
    if (!title.trim() || !desc.trim()) return;

    console.log("Form Submitted:", {
      title,
      desc,
      mode: initialData ? "EDIT" : "ADD",
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      {/* MODAL BOX */}
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">

        {/* HEADER */}
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Notice" : "Add Notice"}
        </h2>

        {/* FORM */}
        <div className="space-y-4">

          {/* TITLE */}
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter notice title"
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter notice description"
              rows={3}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary/90 transition"
          >
            {initialData ? "Update" : "Save"}
          </button>

        </div>

      </div>

    </div>
  );
}