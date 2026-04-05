"use client";

import { useState } from "react";

/* TYPE */
type Props = {
  onClose: () => void;
};

export default function DownloadForm({ onClose }: Props) {
  const [title, setTitle] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
  };

  const handleSubmit = () => {
    if (!title || !fileName) return;

    console.log("Download Added:", {
      title,
      fileName,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">

        <h2 className="text-lg font-semibold mb-4">
          Add Download
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

          {/* FILE */}
          <div>
            <label className="text-sm text-gray-600">Upload File</label>
            <input
              type="file"
              onChange={handleFile}
              className="w-full mt-1 text-sm"
            />

            {fileName && (
              <p className="text-xs text-gray-500 mt-2">
                Selected: {fileName}
              </p>
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
            className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}