"use client";

import { useState, useEffect } from "react";
import NewsForm from "./NewsForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import api from "@/lib/api";

type News = {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
};

export default function NewsTable({ refreshKey }: { refreshKey?: number }) {
  const [news, setNews] = useState<News[]>([]);
  const [editItem, setEditItem] = useState<News | null>(null);
  const [deleteItem, setDeleteItem] = useState<News | null>(null);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchNews();
  }, [page, refreshKey]);

  const fetchNews = async () => {
    try {
      const res = await api.get(`/news?page=${page}&limit=5`);

      if (res.data.success) {
        setNews(res.data.data);
        setTotalPages(res.data.meta.totalPages);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;

    await api.delete(`/news/${deleteItem.id}`);
    fetchNews();
    setDeleteItem(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      <table className="w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Image</th>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">Description</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {news.map((item) => (
            <tr key={item.id} className="border-t">

              <td className="px-4 py-3">
                {item.image ? (
                  <img
                    src={item.image}
                    className="w-16 h-12 object-cover rounded"
                  />
                ) : "-"}
              </td>

              <td className="px-4 py-3">{item.title}</td>

              <td className="px-4 py-3 text-gray-500">
                {item.content.slice(0, 50)}...
              </td>

              <td className="px-4 py-3 text-xs text-gray-400">
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : "-"}
              </td>

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
          ))}
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
        <NewsForm
          initialData={editItem}
          onClose={() => {
            setEditItem(null);
            fetchNews();
          }}
        />
      )}

      {/* DELETE */}
      {deleteItem && (
        <ConfirmModal
          title="Delete News"
          message="Are you sure?"
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

    </div>
  );
}