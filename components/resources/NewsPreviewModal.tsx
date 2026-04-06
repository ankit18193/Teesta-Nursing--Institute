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
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* 🔥 BLUR BACKGROUND */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* 📰 MODAL */}
            <div className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 z-10"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
                >
                    ✕
                </button>

                {/* Image */}
                {news.image && (
                    <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-[250px] object-cover rounded-xl mb-4"
                    />
                )}

                {/* Title */}
                <h2 className="text-xl font-bold text-primary mb-2">
                    {news.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                    {news.description}
                </p>
                {news.pdf && (
                    <a
                        href={news.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition"
                    >
                        📄 Download PDF
                    </a>
                )}

            </div>
        </div>
    );
}