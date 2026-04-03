import LifeLayout from "@/components/life/LifeLayout";
import Image from "next/image";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
];

export default function GalleryPage() {
  return (
    <LifeLayout title="Our Gallery">
      <div className="space-y-12">

        {/* 🔥 INTRO */}
        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold text-primary mb-3">
            Explore Campus Moments
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Discover glimpses of campus life, student activities, facilities,
            and memorable moments at Teesta Group of Institutions.
          </p>
        </section>

        {/* 🔥 FEATURED IMAGE (BIG) */}
        <section>
          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <Image
              src={images[0]}
              alt="Featured"
              width={1000}
              height={500}
              className="w-full h-[350px] object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>

            <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
              Campus Highlights
            </div>
          </div>
        </section>

        {/* 🔥 GRID GALLERY */}
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          {images.slice(1).map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-sm group"
            >
              <Image
                src={src}
                alt="Gallery"
                width={400}
                height={300}
                className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}

        </section>

        {/* 🔥 HIGHLIGHT STRIP */}
        <section className="bg-gradient-to-r from-primary/10 to-white border rounded-2xl p-6 text-center">

          <h3 className="text-lg font-semibold text-primary mb-2">
            Capturing Moments That Matter
          </h3>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            From academic excellence to vibrant campus life, every moment at
            Teesta contributes to a meaningful journey.
          </p>

        </section>

      </div>
    </LifeLayout>
  );
}