"use client";

import { useState, useEffect } from "react";
import NoticeForm from "./NoticeForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import api from "@/lib/api";

type Notice = {
  id: number;
  title: string;
  content: string;
  createdAt?: string;
};

export default function NoticeTable({ refreshKey }: { refreshKey?: number }) {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [editItem, setEditItem] = useState<Notice | null>(null);
  const [deleteItem, setDeleteItem] = useState<Notice | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNotices();
  }, [page, refreshKey]);

  const fetchNotices = async () => {
    try {
      const res = await api.get(`/notices?page=${page}&limit=5`);

      if (res.data.success) {
        setNotices(res.data.data);
        setTotalPages(res.data.meta.totalPages);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;

    try {
      await api.delete(`/notices/${deleteItem.id}`);
      fetchNotices();
      setDeleteItem(null);
    } catch (err) {
      alert("Delete failed");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Content</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {notices.length > 0 ? (
            notices.map((item) => (
              <tr key={item.id} className="border-t">

                {/* TITLE */}
                <td className="px-4 py-3 font-medium">
                  {item.title}
                </td>

                {/* CONTENT */}
                <td className="px-4 py-3 text-gray-500">
                  {item.content.slice(0, 60)}...
                </td>

                {/* DATE */}
                <td className="px-4 py-3 text-xs text-gray-400">
                  {item.createdAt
                    ? new Date(item.createdAt).toLocaleDateString()
                    : "-"}
                </td>

                {/* ACTIONS */}
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

                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-6 text-gray-400">
                No notices available
              </td>
            </tr>
          )}
        </tbody>

      </table>

      {/* 🔥 PAGINATION */}
      <div className="flex justify-between items-center px-4 py-3 border-t">

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

      {/* EDIT */}
      {editItem && (
        <NoticeForm
          initialData={editItem}
          onClose={() => {
            setEditItem(null);
            fetchNotices();
          }}
        />
      )}

      {/* DELETE */}
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