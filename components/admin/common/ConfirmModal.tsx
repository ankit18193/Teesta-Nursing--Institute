"use client";

export default function ConfirmModal({
  title,
  message,
  onConfirm,
  onClose,
}: {
  title: string;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center 
                    bg-black/30 backdrop-blur-sm">

      {/* Modal Card */}
      <div className="w-full max-w-sm rounded-2xl p-6
                      bg-white shadow-2xl border border-gray-200
                      animate-in fade-in zoom-in-95 duration-200">

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {title}
        </h2>

        {/* Message */}
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          {message}
        </p>

        {/* Actions */}
        <div className="flex justify-end gap-3">

          {/* Cancel */}
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border border-gray-300 
                       text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          {/* Confirm */}
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-lg font-medium
                       bg-red-500 text-white 
                       hover:bg-red-600
                       shadow-sm hover:shadow-md
                       transition"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}