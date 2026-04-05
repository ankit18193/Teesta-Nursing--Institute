"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import GalleryForm from "./GalleryForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

interface GalleryItem {
  id: number;
  image: string;
  imageId: string;
}

export default function GalleryTable() {
 const [images, setImages] = useState<GalleryItem[]>([]);
  const [open, setOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState<GalleryItem | null>(null);


  // FETCH FROM DB
  const fetchGallery = async () => {
    try {
      const res = await axios.get("/api/gallery");
      setImages(res.data.data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

    useEffect(() => {
    fetchGallery();
  }, []);

  // DELETE FROM BACKEND
  const handleDelete = async () => {
    if (!deleteItem) return;

    try {
      const token = localStorage.getItem("token");
     await axios.delete(`/api/gallery/${deleteItem.id}`, {
       headers: {
      Authorization: `Bearer ${token}`,
       },
    });

      // remove from UI
      setImages((prev) =>
        prev.filter((item) => item.id !== deleteItem.id)
      );

      setDeleteItem(null);
    } catch (error) {
      console.error("Delete error:", error);
    }
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {images.map((item) => (
          <div key={item.id} className="relative group">

            <img
              src={item.image}
              className="h-32 w-full object-cover rounded"
            />

            <button
              onClick={() => setDeleteItem(item)}
              className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

      {/* MODALS */}
      {open && (
        <GalleryForm
          onClose={() => {
            setOpen(false);
            fetchGallery(); //  refresh after upload
          }}
        />
      )}

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