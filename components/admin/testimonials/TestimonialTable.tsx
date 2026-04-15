"use client";

import { useState, useEffect } from "react";
import TestimonialForm from "./TestimonialForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import api from "@/lib/api";

type Testimonial = {
  id: number;
  name: string;
  course: string;
  message: string;
  image?: string;
  createdAt?: string;
};

export default function TestimonialTable() {
  const [data, setData] = useState<Testimonial[]>([]);
  const [open, setOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState<Testimonial | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTestimonials = async () => {
    try {
      const res = await api.get(`/testimonials?page=${page}&limit=5`);

      if (res.data.success) {
        setData(res.data.data);
        setTotalPages(res.data.meta.totalPages);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [page]);

  const handleDelete = async () => {
    if (!deleteItem) return;

    try {
      await api.delete(`/testimonials/${deleteItem.id}`);
      fetchTestimonials();
      setDeleteItem(null);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Testimonials</h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          + Add
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-left">Course</th>
              <th className="px-4 py-3 text-left">Message</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t">

                <td className="px-4 py-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{item.name}</span>
                </td>

                <td className="px-4 py-3 text-gray-500">
                  {item.course}
                </td>

                <td className="px-4 py-3 text-gray-500 line-clamp-2">
                  {item.message}
                </td>

                <td className="px-4 py-3 text-xs text-gray-400">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "-"}
                </td>

                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => setDeleteItem(item)}
                    className="text-red-500 text-sm"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

      {/* 🔥 PAGINATION */}
      <div className="flex justify-between items-center">

        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 border rounded text-sm disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm text-gray-500">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded text-sm disabled:opacity-50"
        >
          Next
        </button>

      </div>

      {/* MODALS */}
      {open && (
        <TestimonialForm
          onClose={() => {
            setOpen(false);
            fetchTestimonials();
          }}
        />
      )}

      {deleteItem && (
        <ConfirmModal
          title="Delete Testimonial"
          message="Are you sure?"
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

    </div>
  );
}