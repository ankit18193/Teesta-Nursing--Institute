"use client";

import { useState } from "react";
import NewsForm from "./NewsForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

/* TYPE */
type News = {
  id: number;
  title: string;
  desc: string;
  image?: string;
};

/* DUMMY DATA */
const initialNews: News[] = [
  {
    id: 1,
    title: "Annual Health Camp",
    desc: "Free health checkup camp organized by students.",
    image: "/images/hospitals/h1.jpg",
  },
];

export default function NewsTable() {
  const [news, setNews] = useState<News[]>(initialNews);
  const [editItem, setEditItem] = useState<News | null>(null);
  const [deleteItem, setDeleteItem] = useState<News | null>(null);

  const handleDelete = () => {
    if (!deleteItem) return;
    setNews((prev) => prev.filter((n) => n.id !== deleteItem.id));
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
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {news.map((item) => (
            <tr key={item.id} className="border-t">

              <td className="px-4 py-3">
                {item.image && (
                  <img
                    src={item.image}
                    className="w-16 h-12 object-cover rounded"
                  />
                )}
              </td>

              <td className="px-4 py-3 font-medium">{item.title}</td>
              <td className="px-4 py-3 text-gray-500">{item.desc}</td>

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

      {/* EDIT */}
      {editItem && (
        <NewsForm
          initialData={editItem}
          onClose={() => setEditItem(null)}
        />
      )}

      {/* DELETE */}
      {deleteItem && (
        <ConfirmModal
          title="Delete News"
          message="Are you sure you want to delete this news?"
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

    </div>
  );
}