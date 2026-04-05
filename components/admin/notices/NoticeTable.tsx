"use client";

import { useState } from "react";
import NoticeForm from "./NoticeForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

/* ✅ TYPE */
type Notice = {
  id: number;
  title: string;
  desc: string;
};

/* ✅ DUMMY DATA */
const initialNotices: Notice[] = [
  {
    id: 1,
    title: "Admission Open 2026",
    desc: "Applications are open for Nursing and Pharmacy courses.",
  },
  {
    id: 2,
    title: "Examination Notice",
    desc: "Final exam schedule has been released.",
  },
];

export default function NoticeTable() {
  const [notices, setNotices] = useState<Notice[]>(initialNotices);
  const [editItem, setEditItem] = useState<Notice | null>(null);
  const [deleteItem, setDeleteItem] = useState<Notice | null>(null);

  /* ✅ DELETE HANDLER */
  const handleDelete = () => {
    if (!deleteItem) return;

    setNotices((prev) =>
      prev.filter((item) => item.id !== deleteItem.id)
    );

    setDeleteItem(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      {/* TABLE */}
      <table className="w-full text-sm">

        <thead className="bg-gray-50">
          <tr>
            <th className="text-left px-4 py-3">Title</th>
            <th className="text-left px-4 py-3">Description</th>
            <th className="text-center px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {notices.length > 0 ? (
            notices.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50 transition">

                <td className="px-4 py-3 font-medium text-gray-700">
                  {item.title}
                </td>

                <td className="px-4 py-3 text-gray-500">
                  {item.desc}
                </td>

                <td className="px-4 py-3 text-center space-x-3">

                  {/* EDIT */}
                  <button
                    onClick={() => setEditItem(item)}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Edit
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={() => setDeleteItem(item)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={3}
                className="text-center py-6 text-gray-400"
              >
                No notices available
              </td>
            </tr>
          )}
        </tbody>

      </table>

      {/* 🔥 EDIT MODAL */}
      {editItem && (
        <NoticeForm
          initialData={editItem}
          onClose={() => setEditItem(null)}
        />
      )}

      {/* 🔥 DELETE CONFIRM MODAL */}
      {deleteItem && (
        <ConfirmModal
          title="Delete Notice"
          message="Are you sure you want to delete this notice?"
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

    </div>
  );
}