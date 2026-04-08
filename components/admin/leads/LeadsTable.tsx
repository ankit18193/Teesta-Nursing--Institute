"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import LeadsForm from "./LeadsForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

type Lead = {
  id: number;
  name: string;
  phone: string;
  course: string;
  status: string;
};

export default function LeadsTable({ refresh }: { refresh?: number }) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [editItem, setEditItem] = useState<Lead | null>(null);
  const [deleteItem, setDeleteItem] = useState<Lead | null>(null);

  // ✅ Search + Filter
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // ✅ Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchLeads();
  }, [refresh, search, statusFilter, page]);

  const fetchLeads = async () => {
    try {
      let url = `/leads?page=${page}&limit=10&`;

      if (search) url += `search=${search}&`;
      if (statusFilter) url += `status=${statusFilter}&`;

      const res = await api.get(url);

      if (res.data.success) {
        setLeads(res.data.data);
        setTotalPages(res.data.meta.totalPages);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      const res = await api.patch(`/leads/${id}`, { status });

      if (!res.data.success) {
        alert(res.data.message);
        return;
      }

      fetchLeads();
    } catch (err: any) {
      alert(err.response?.data?.message || "Error updating");
    }
  };

  const handleDelete = async () => {
    if (!deleteItem) return;

    try {
      await api.delete(`/leads/${deleteItem.id}`);
      fetchLeads();
      setDeleteItem(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      {/* SEARCH + FILTER */}
      <div className="flex gap-3 p-4 border-b bg-gray-50">

        <input
          type="text"
          placeholder="Search by name or phone..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset page
          }}
          className="px-3 py-2 border rounded-lg text-sm w-full max-w-xs"
        />

        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setPage(1); // reset page
          }}
          className="px-3 py-2 border rounded-lg text-sm"
        >
          <option value="">All Status</option>
          <option value="NEW">New</option>
          <option value="CONTACTED">Contacted</option>
          <option value="CONVERTED">Converted</option>
        </select>

      </div>

      <table className="w-full text-sm">

        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Course</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((item) => (
            <tr key={item.id} className="border-t">

              <td className="px-4 py-3 font-medium">{item.name}</td>
              <td className="px-4 py-3">{item.phone}</td>
              <td className="px-4 py-3">{item.course}</td>

              <td className="px-4 py-3">
                <select
                  value={item.status}
                  onChange={(e) =>
                    updateStatus(item.id, e.target.value)
                  }
                  className="px-2 py-1 border rounded text-xs"
                >
                  <option value="NEW">New</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="CONVERTED">Converted</option>
                </select>
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

      {/* PAGINATION */}
      <div className="flex justify-between items-center p-4 border-t text-sm">

        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 border rounded"
          disabled={page === 1}
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() =>
            setPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="px-3 py-1 border rounded"
          disabled={page === totalPages}
        >
          Next
        </button>

      </div>

      {/* EDIT */}
      {editItem && (
        <LeadsForm
          initialData={editItem}
          onClose={() => setEditItem(null)}
          onSuccess={fetchLeads}
        />
      )}

      {/* DELETE */}
      {deleteItem && (
        <ConfirmModal
          title="Delete Lead"
          message="Are you sure you want to delete this lead?"
          onConfirm={handleDelete}
          onClose={() => setDeleteItem(null)}
        />
      )}

    </div>
  );
}