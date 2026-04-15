"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";

/* TYPES */
type News = {
  id?: number;
  title: string;
  content: string; // ✅ fixed
  image?: string;
};

type Props = {
  onClose: () => void;
  initialData?: News;
};

export default function NewsForm({ onClose, initialData }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  /* PREFILL (EDIT MODE) */
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
      setImage(initialData.image || null);
    }
  }, [initialData]);

  /* IMAGE PREVIEW (UI ONLY) */
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);
  };

  /* SUBMIT */
  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content required");
      return;
    }

    try {
      setLoading(true);

      if (initialData) {
        // UPDATE
        await api.patch(`/news/${initialData.id}`, {
          title,
          content,
          image,
        });
      } else {
        // CREATE
        await api.post("/news", {
          title,
          content,
          image,
        });
      }

      alert("News saved ✅");
      onClose();

      // simple refresh
      window.location.reload();
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
          {initialData ? "Edit News" : "Add News"}
        </h2>

        <div className="space-y-4">

          {/* TITLE */}
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* CONTENT */}
          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={3}
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="text-sm text-gray-600">Upload Image</label>
            <input
              type="file"
              onChange={handleImage}
              className="w-full mt-1 text-sm"
            />

            {image && (
              <img
                src={image}
                alt="preview"
                className="mt-3 w-full h-32 object-cover rounded-lg"
              />
            )}
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
            {loading ? "Saving..." : initialData ? "Update" : "Save"}
          </button>

        </div>

      </div>
    </div>
  );
}