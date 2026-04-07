"use client";

import { useState } from "react";
import LeadsForm from "./LeadsForm";
import ConfirmModal from "@/components/admin/common/ConfirmModal";

type Lead = {
  id: number;
  name: string;
  phone: string;
  course: string;
  status: string;
};

const initialLeads: Lead[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    phone: "9876543210",
    course: "B.Sc Nursing",
    status: "new",
  },
];

export default function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [editItem, setEditItem] = useState<Lead | null>(null);
  const [deleteItem, setDeleteItem] = useState<Lead | null>(null);

  const handleDelete = () => {
    if (!deleteItem) return;
    setLeads((prev) => prev.filter((l) => l.id !== deleteItem.id));
    setDeleteItem(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

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
                <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-600">
                  {item.status}
                </span>
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

      {/* EDIT */}
      {editItem && (
        <LeadsForm
          initialData={editItem}
          onClose={() => setEditItem(null)}
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