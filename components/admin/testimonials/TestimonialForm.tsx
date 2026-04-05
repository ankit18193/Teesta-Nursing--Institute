"use client";

import { useState } from "react";

type Props = {
  onClose: () => void;
};

export default function TestimonialForm({ onClose }: Props) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!name || !message || !course) return;

    console.log({
      name,
      course,
      message,
      image,
    });

    onClose();
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
            placeholder="Course (e.g. Pharmacy)"
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

            {image && (
              <img
                src={image}
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