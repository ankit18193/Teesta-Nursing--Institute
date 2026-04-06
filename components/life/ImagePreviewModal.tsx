"use client";

export default function ImagePreviewModal({
  image,
  onClose,
}: {
  image: string | null;
  onClose: () => void;
}) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Image */}
      <img
        src={image}
        alt="preview"
        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl font-bold"
      >
        ✕
      </button>
    </div>
  );
}