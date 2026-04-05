"use client";

import { useState } from "react";
import axios from "axios";

export default function GalleryForm({ onClose }: { onClose: () => void }) {
  const [previews, setPreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);


  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);
    setFiles(fileArray);

    const previewArray = fileArray.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviews(previewArray);
  };

  // convert to base64
  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  const handleUpload = async () => {
    try {
      const token = localStorage.getItem("token");
      if (files.length === 0) {
        alert("Please select images");
        return;
      }

      setLoading(true);

      // ⚡ PARALLEL UPLOAD (FAST)
      await Promise.all(
        files.map(async (file) => {
          const base64 = await toBase64(file);

          // Step 1: Upload to Cloudinary
          const uploadRes = await axios.post(
                       "/api/upload",
                    {
                      image: base64,
                    },
                    {
                      headers: {
                      Authorization: `Bearer ${token}`,
                      },
                    }
          );

          const { url, public_id } = uploadRes.data.data;

          // Step 2: Save to DB
          await axios.post("/api/gallery", {
            image: url,
            imageId: public_id,
          },
            {
              headers: {
              Authorization: `Bearer ${token}`,
              },
          }
        );
        })
      );

      alert("All images uploaded successfully");

      onClose(); // closes + refresh happens in parent
    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-full max-w-md">

        <h2 className="font-semibold text-lg mb-4">Upload Image</h2>

        <input type="file" multiple onChange={handleImage} />

        {previews.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-4">
            {previews.map((src, i) => (
              <img
                key={i}
                src={src}
                className="h-20 w-full object-cover rounded"
              />
            ))}
          </div>
        )}

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="border px-4 py-2 rounded">
            Cancel
          </button>

          <button 
            onClick={handleUpload}
            disabled={loading}
            className="bg-primary text-white px-4 py-2 rounded"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>

      </div>

    </div>
  );
}