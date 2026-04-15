
"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";

type Notice = {
  id?: number;
  title: string;
  content: string; // ✅ fixed
};

type NoticeFormProps = {
  onClose: () => void;
  initialData?: Notice;
};

export default function NoticeForm({ onClose, initialData }: NoticeFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) return;

    try {
      if (initialData) {
        // UPDATE
        await api.patch(`/notices/${initialData.id}`, {
          title,
          content,
        });
      } else {
        // CREATE
        await api.post("/notices", {
          title,
          content,
        });
      }

      alert("Saved ✅");
      onClose();
      window.location.reload();
    } catch (err: any) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">

        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Notice" : "Add Notice"}
        </h2>

        <div className="space-y-4">

          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg text-sm">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}