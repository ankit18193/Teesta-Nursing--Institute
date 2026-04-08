"use client";

import { useState, useEffect } from "react";
import InquiryForm from "./InquiryForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";
import api from "@/lib/api";

type Inquiry = {
  id: number;
  name: string;
  phone: string;
  email: string;
  course: string; // ✅ added
  message: string;
  createdAt: string;
};

export default function InquiryTable() {
  const [data, setData] = useState<Inquiry[]>([]);
  const [editItem, setEditItem] = useState<Inquiry | null>(null);
  const [deleteItem, setDeleteItem] = useState<Inquiry | null>(null);
  const [viewMessage, setViewMessage] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const fetchData = async () => {
    try {
      let url = `/inquiry?page=${page}&limit=${limit}&`;

      if (search) url += `search=${search}`;

      const res = await api.get(url);

      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;

    await api.delete(`/inquiry/${deleteItem.id}`);
    fetchData();
    setDeleteItem(null);
  };

  const handleConvert = async (item: Inquiry) => {
    try {
      await api.post("/leads", {
        name: item.name,
        phone: item.phone,
        course: item.course, // ✅ FIXED
        message: item.message,
        status: "NEW",
      });

      await api.delete(`/inquiry/${item.id}`);
      fetchData();

      alert("Converted to Lead ✅");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      {/* 🔍 SEARCH */}
      <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="px-3 py-2 border rounded-lg text-sm w-full max-w-xs"
        />
      </div>

      <table className="w-full text-sm">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Course</th> {/* ✅ added */}
            <th className="px-4 py-3 text-left">Message</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50 transition">

              <td className="px-4 py-3 font-medium">{item.name}</td>
              <td className="px-4 py-3">{item.phone}</td>
              <td className="px-4 py-3">{item.email || "-"}</td>

              {/* ✅ COURSE */}
              <td className="px-4 py-3 text-gray-600">
                {item.course || "-"}
              </td>

              {/* MESSAGE */}
              <td className="px-4 py-3 max-w-xs text-gray-500">
                <div className="truncate">
                  {item.message || "-"}
                </div>

                {item.message && item.message.length > 40 && (
                  <button
                    onClick={() => setViewMessage(item.message)}
                    className="text-blue-500 text-xs mt-1"
                  >
                    View
                  </button>
                )}
              </td>

              {/* DATE */}
              <td className="px-4 py-3 text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
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

      {/* PAGINATION */}
      <div className="flex justify-between items-center p-4 border-t text-sm">

        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 border rounded"
          disabled={page === 1}
        >
          Prev
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>

      </div>

      {/* VIEW MESSAGE MODAL */}
      {viewMessage && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Message</h2>

            <p className="text-sm text-gray-600 whitespace-pre-wrap">
              {viewMessage}
            </p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setViewMessage(null)}
                className="px-4 py-2 border rounded-lg text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT */}
      {editItem && (
        <InquiryForm
          initialData={editItem}
          onClose={() => setEditItem(null)}
        />
      )}

      {/* DELETE */}
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