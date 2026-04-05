"use client";

import { useState } from "react";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

/* TYPE */
type Download = {
  id: number;
  title: string;
  fileName: string;
};

/* DUMMY DATA */
const initialDownloads: Download[] = [
  {
    id: 1,
    title: "College Brochure",
    fileName: "brochure.pdf",
  },
  {
    id: 2,
    title: "Prospectus",
    fileName: "prospectus.pdf",
  },
];

export default function DownloadTable() {
  const [downloads, setDownloads] = useState(initialDownloads);
  const [deleteItem, setDeleteItem] = useState<Download | null>(null);

  const handleDelete = () => {
    if (!deleteItem) return;

    setDownloads((prev) =>
      prev.filter((d) => d.id !== deleteItem.id)
    );

    setDeleteItem(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left">File</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {downloads.map((item) => (
            <tr key={item.id} className="border-t">

              <td className="px-4 py-3 font-medium">
                {item.title}
              </td>

              <td className="px-4 py-3 text-gray-500">
                {item.fileName}
              </td>

              <td className="px-4 py-3 text-center space-x-3">

                <button className="text-blue-500 text-sm">
                  View
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

      {/* DELETE */}
      {deleteItem && (
        <ConfirmModal
          title="Delete File"
          message="Are you sure you want to delete this file?"
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

    </div>
  );
}