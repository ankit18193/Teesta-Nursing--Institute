"use client";

import { useState } from "react";
import TestimonialForm from "./TestimonialForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

type Testimonial = {
  id: number;
  name: string;
  course: string;
  message: string;
  image?: string;
};

const initialData: Testimonial[] = [
  {
    id: 1,
    name: "Sanjana",
    course: "Pharmacy",
    message:
      "The practical training and guidance from teachers have been outstanding.",
    image: "/images/hospitals/h1.jpg",
  },
];

export default function TestimonialTable() {
  const [data, setData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [deleteItem, setDeleteItem] = useState<Testimonial | null>(null);

  const handleDelete = () => {
    if (!deleteItem) return;

    setData((prev) => prev.filter((d) => d.id !== deleteItem.id));
    setDeleteItem(null);
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

      {/* MODALS */}
      {open && <TestimonialForm onClose={() => setOpen(false)} />}

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