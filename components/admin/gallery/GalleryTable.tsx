"use client";

import { useState } from "react";
import GalleryForm from "./GalleryForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

const initialImages = [
  "/images/hospitals/h1.jpg",
  "/images/hospitals/h2.jpg",
  "/images/hospitals/h2.jpg",
  "/images/hospitals/h2.jpg",
  "/images/hospitals/h2.jpg",
  "/images/hospitals/h2.jpg",
];

export default function GalleryTable() {
  const [images, setImages] = useState(initialImages);
  const [open, setOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState<string | null>(null);

  const handleDelete = () => {
    if (!deleteItem) return;

    setImages((prev) => prev.filter((img) => img !== deleteItem));
    setDeleteItem(null);
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Gallery</h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          + Upload
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">

        {images.map((img, i) => (
          <div key={i} className="relative group">

            <img
              src={img}
              className="h-60 w-full object-cover rounded"
            />

            <button
              onClick={() => setDeleteItem(img)}
              className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

      {/* MODALS */}
      {open && <GalleryForm onClose={() => setOpen(false)} />}

      {deleteItem && (
        <ConfirmModal
          title="Delete Image"
          message="Are you sure?"
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

    </div>
  );
}