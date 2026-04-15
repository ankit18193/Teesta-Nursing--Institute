"use client";

interface NewsItem {
    title: string;
    image?: string;
    description: string;
    pdf?: string;
}

export default function NewsPreviewModal({
    news,
    onClose,
}: {
    news: NewsItem | null;
    onClose: () => void;
}) {
    if (!news) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4">

            {/* 🔥 BLUR BACKGROUND */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* 📰 MODAL */}
            {/* ✅ FIX 1: responsive width + padding + margin */}
            <div
                className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full p-4 sm:p-5 md:p-6 z-10 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close */}
                {/* ✅ FIX 2: better touch spacing */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-600 hover:text-black text-lg sm:text-xl"
                >
                    ✕
                </button>

                {/* Image */}
                {/* ✅ FIX 3: responsive image height */}
                {news.image && (
                    <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover rounded-xl mb-3 sm:mb-4"
                    />
                )}

                {/* Title */}
                {/* ✅ FIX 4: text scaling */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-2">
                    {news.title}
                </h2>

                {/* Description */}
                {/* ✅ FIX 5: readable text scaling */}
                <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px]">
                    {news.description}
                </p>

                {/* PDF BUTTON */}
                {/* ✅ FIX 6: button scaling */}
                {news.pdf && (
                    <a
                        href={news.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-primary text-white rounded-lg text-xs sm:text-sm hover:bg-primary/90 transition"
                    >
                        📄 Download PDF
                    </a>
                )}

            </div>
        </div>
    );
}