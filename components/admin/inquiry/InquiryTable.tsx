"use client";

import { useState } from "react";
import InquiryForm from "./InquiryForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

type Inquiry = {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: string;
};

const initialData: Inquiry[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    email: "rahul@gmail.com",
    message: "Interested in B.Sc Nursing",
    status: "new",
  },
];

export default function InquiryTable() {
  const [data, setData] = useState(initialData);
  const [editItem, setEditItem] = useState<Inquiry | null>(null);
  const [deleteItem, setDeleteItem] = useState<Inquiry | null>(null);

  /* DELETE */
  const handleDelete = () => {
    if (!deleteItem) return;
    setData((prev) => prev.filter((i) => i.id !== deleteItem.id));
    setDeleteItem(null);
  };

  /* 🔥 CONVERT TO LEAD */
  const handleConvert = (item: Inquiry) => {
    console.log("Converted to Lead:", item);

    // OPTIONAL UI: remove from inquiry list after conversion
    setData((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Message</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t">

              <td className="px-4 py-3">{item.name}</td>
              <td className="px-4 py-3">{item.phone}</td>
              <td className="px-4 py-3">{item.email}</td>

              <td className="px-4 py-3 text-gray-500">
                {item.message.slice(0, 30)}...
              </td>

              <td className="px-4 py-3">
                <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-600">
                  {item.status}
                </span>
              </td>

              {/* 🔥 UPDATED ACTIONS */}
              <td className="px-4 py-3 text-center space-x-3">

                <button
                  onClick={() => setEditItem(item)}
                  className="text-blue-500 text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={() => setDeleteItem(item)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleConvert(item)}
                  className="text-green-600 text-sm font-medium"
                >
                  Convert
                </button>

              </td>

            </tr>
          ))}
        </tbody>

      </table>

      {/* EDIT MODAL */}
      {editItem && (
        <InquiryForm
          initialData={editItem}
          onClose={() => setEditItem(null)}
        />
      )}

      {/* DELETE MODAL */}
      {deleteItem && (
        <ConfirmModal
          title="Delete Inquiry"
          message="Are you sure you want to delete this inquiry?"
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

    </div>
  );
}