"use client";

import { useState } from "react";
import axios from "axios";
import api from "@/lib/api"

type Props = {
  onClose: () => void;
};

export default function TestimonialForm({ onClose }: Props) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;

    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  const handleSubmit = async () => {
    try {
      if (!name || !message || !course) {
        alert("All fields required");
        return;
      }

      let imageUrl = "";
      let imageId = "";

      // Upload image
      if (file) {
        const base64 = await toBase64(file);

        const uploadRes = await api.post(
          "/upload",
          { image: base64 },
        );

        imageUrl = uploadRes.data.data.url;
        imageId = uploadRes.data.data.public_id;
      }

      //  Save testimonial
      await api.post(
        "/testimonials",
        {
          name,
          course,
          message,
          image: imageUrl,
          imageId,
        },
      );

      alert("Testimonial added");

      onClose();
    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data?.message || "Error");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">

        <h2 className="text-lg font-semibold mb-4">
          Add Testimonial
        </h2>

        <div className="space-y-4">

          {/* NAME */}
          <input
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg text-sm"
          />

          {/* COURSE */}
          <input
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg text-sm"
          />

          {/* MESSAGE */}
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg text-sm"
          />

          {/* IMAGE */}
          <div>
            <input type="file" onChange={handleImage} />

            {preview && (
              <img
                src={preview}
                className="mt-3 w-16 h-16 rounded-full object-cover border"
              />
            )}
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-lg text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}