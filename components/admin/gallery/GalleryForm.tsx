"use client";

import { useState } from "react";

export default function GalleryForm({ onClose }: { onClose: () => void }) {
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-full max-w-md">

        <h2 className="font-semibold text-lg mb-4">Upload Image</h2>

        <input type="file" onChange={handleImage} />

        {image && (
          <img
            src={image}
            className="mt-4 h-40 w-full object-cover rounded"
          />
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="border px-4 py-2 rounded">
            Cancel
          </button>

          <button className="bg-primary text-white px-4 py-2 rounded">
            Upload
          </button>
        </div>

      </div>

    </div>
  );
}