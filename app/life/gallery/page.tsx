"use client"
import ImagePreviewModal from "@/components/life/ImagePreviewModal";


import { useEffect, useState } from "react";
import axios from "axios";
import LifeLayout from "@/components/life/LifeLayout";
import Image from "next/image";
import CTASection from "@/components/common/CTASection";

interface GalleryItem {
    id: number;
    image: string;
}

export default function GalleryPage() {
    const [images, setImages] = useState<GalleryItem[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const fetchGallery = async () => {
        try {
            const res = await axios.get("/api/gallery");
            setImages(res.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchGallery();

        const interval = setInterval(() => {
            fetchGallery();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (images.length === 0) {
        return <div className="p-10 text-center">No images found</div>;
    }

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
                            src={images[0].image}
                            alt="Featured"
                            width={1000}
                            height={500}
                            onClick={() => setSelectedImage(images[0].image)}
                            className="w-full h-[350px] object-cover transition duration-500 group-hover:scale-105 cursor-pointer"
                        />

                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>

                        <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                            Campus Highlights
                        </div>
                    </div>
                </section>

                {/* 🔥 GRID GALLERY */}
                <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

                    {images.slice(1).map((item) => (
                        <div
                            key={item.id}
                            className="relative overflow-hidden rounded-xl shadow-sm group"
                        >
                            <Image
                                src={item.image}
                                alt="Gallery"
                                width={400}
                                height={300}
                                onClick={() => setSelectedImage(item.image)}
                                className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110 cursor-pointer"
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

            <ImagePreviewModal
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />

            <div className="w-full mt-5 max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl border rounded-2xl p-4 sm:p-5 md:p-6 bg-gray-50 shadow-sm">
                <p className="text-gray-600 leading-relaxed text-[13px] sm:text-[14px] md:text-[15px] text-justify">
                    The gallery showcases memorable moments, events, and activities that reflect
                    the vibrant life at Teesta Group of Institutions. It highlights academic
                    achievements, cultural programs, and student participation across various events.
                    <br /><br />
                    Through images and visual stories, the gallery provides a glimpse into the
                    dynamic campus environment and the experiences students gain during their journey.
                    <br /><br />
                    It serves as a window for visitors to understand the institution’s culture,
                    values, and active student life.
                </p>
            </div>


            <CTASection
                title="Explore Moments That Define Us"
                subtitle="Discover campus life, events, and student experiences through our gallery."
                primaryBtn={{ label: "View Gallery", href: "/life/gallery" }}
                secondaryBtn={{ label: "Apply Now", href: "/resources/application" }}
            />
        </LifeLayout>
    );
}