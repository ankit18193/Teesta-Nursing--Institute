


import HospitalLayout from "@/components/hospitals/HospitalLayout";
import { notFound } from "next/navigation";

export default async function HospitalPage({
    params,
}: {
    // ✅ FIX 1: params is Promise in latest Next.js
    params: Promise<{ id: string }>;
}) {
    // ✅ FIX 2: MUST await params
    const { id } = await params;

    const hospitalData: Record<string, any> = {
        mitra: {
            name: "Mitra Hospital",
            image: "/images/hospitals/h1.jpg",

            about:
                "Mitra Hospital is a reputed multi-speciality healthcare center located in Siliguri, known for delivering reliable and patient-focused medical services. The hospital offers a combination of experienced medical professionals, modern diagnostic facilities, and a patient-friendly environment. It caters to a wide range of healthcare needs including preventive care, diagnosis, treatment, and emergency services. With a commitment to affordability and accessibility, Mitra Hospital continues to serve both urban and nearby rural populations effectively.",

            address: "Sevoke Road, Siliguri, West Bengal 734001",

            services: [
                "General Medicine",
                "Pediatrics",
                "Gynecology & Obstetrics",
                "Orthopedics",
                "General Surgery",
                "Radiology (X-ray, Ultrasound)",
                "Pathology & Laboratory Services",
                "Emergency & Trauma Care",
                "Outpatient Department (OPD)",
                "Inpatient Services (IPD)",
                "Pharmacy Services",
                "Health Checkups & Preventive Care"
            ],

            speciality:
                "Recognized for its dependable multi-speciality care, efficient emergency services, and accessible healthcare facilities for patients across Siliguri and nearby regions.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
                "/images/hospitals/f3.jpg",
            ],
        },

        malbazar: {
            name: "Malbazar Super Hospital",
            image: "/images/hospitals/h2.jpg",

            about:
                "Malbazar Super Hospital is an important healthcare facility serving the Malbazar region and surrounding rural areas of Jalpaiguri district. The hospital plays a crucial role in providing accessible and essential medical services to the local population. Equipped with basic diagnostic and treatment facilities, it supports both outpatient and inpatient care. The hospital is especially significant for patients from nearby tea garden communities and rural regions who rely on it for timely medical attention and emergency services.",

            address: "Malbazar, Jalpaiguri, West Bengal",

            services: [
                "General Medicine",
                "General Surgery",
                "Emergency & Trauma Care",
                "Intensive Care Unit (ICU)",
                "Diagnostics (Basic Lab & Imaging)",
                "Outpatient Department (OPD)",
                "Inpatient Services (IPD)",
                "Maternal & Child Healthcare",
                "Immunization Services",
                "Pharmacy Services",
                "Minor Procedures & First Aid"
            ],

            speciality:
                "Known for providing essential healthcare services to rural and semi-urban populations, with a strong focus on accessibility, emergency care, and community-based treatment support.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
                "/images/hospitals/f3.jpg",
            ],
        },

        sun: {
            name: "Sun Hospital & Diagnostic Center",
            image: "/images/hospitals/h3.jpg",

            about:
                "Sun Hospital & Diagnostic Center is a modern healthcare facility located in Siliguri, focused on providing accurate diagnostic and essential medical services. The center is equipped with standard diagnostic technologies and supports a range of tests and consultations for patients. It plays an important role in early detection, routine health checkups, and supporting doctors with reliable reports. With an emphasis on efficiency and patient convenience, the center serves individuals seeking quick and dependable diagnostic solutions.",

            address: "Hill Cart Road, Siliguri",

            services: [
                "Radiology (X-ray, Ultrasound)",
                "Diagnostic Imaging",
                "Pathology & Laboratory Testing",
                "Blood Tests & Routine Checkups",
                "General Medicine Consultation",
                "Health Screening Packages",
                "ECG & Basic Cardiac Tests",
                "Preventive Health Checkups",
                "Outpatient Services (OPD)",
                "Report Analysis & Follow-up Support"
            ],

            speciality:
                "Recognized for its focus on accurate diagnostics, timely report delivery, and convenient access to essential testing services in Siliguri.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
                "/images/hospitals/f2.jpg",
            ],
        },

        hope: {
            name: "Hope & Hill Cancer Hospital",
            image: "/images/hospitals/h4.jpg",

            about:
                "Hope & Hill Cancer Hospital is a specialized healthcare facility dedicated to oncology care in the Darjeeling hills. The hospital focuses on providing essential cancer diagnosis, treatment, and supportive care services to patients in the region. It plays a vital role in making oncology services more accessible to people living in hilly and remote areas, reducing the need to travel to distant metropolitan cities. With a patient-centered approach, the hospital aims to support individuals and families throughout their treatment journey with care and compassion.",

            address: "Darjeeling, West Bengal",

            services: [
                "Oncology Consultation",
                "Chemotherapy Services",
                "Cancer Screening & Diagnosis",
                "Radiation Therapy (where available / referred)",
                "Pathology & Diagnostic Support",
                "Day Care Chemotherapy",
                "Palliative & Supportive Care",
                "Follow-up & Monitoring",
                "Pain Management",
                "Outpatient Services (OPD)"
            ],

            speciality:
                "Focused on providing accessible oncology care in the Darjeeling hills, supporting cancer patients with diagnosis, treatment, and ongoing care closer to their homes.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
                "/images/hospitals/f2.jpg",
            ],
        },

        // ✅ NEW HOSPITALS ADDED BELOW (same structure)

        "siliguri-subdivisional": {
            name: "Siliguri Sub-Divisional Hospital",
            image: "/images/hospitals/h5.jpg",

            about:
                "Siliguri Sub-Divisional Hospital is a key government healthcare institution serving the Siliguri region and surrounding areas. It provides a wide range of essential medical services to the public, with a strong focus on affordability and accessibility. The hospital caters to a large number of patients daily, including those from nearby rural and semi-urban communities. It plays an important role in primary and secondary healthcare delivery, maternal services, and emergency care within the region.",

            address: "Siliguri, West Bengal",

            services: [
                "General Medicine",
                "Emergency & Trauma Care",
                "Maternal & Child Healthcare",
                "Outpatient Department (OPD)",
                "Inpatient Services (IPD)",
                "Basic Diagnostics & Laboratory Services",
                "Immunization Programs",
                "Minor Procedures & First Aid",
                "Public Health Services",
                "Referral Services"
            ],

            speciality:
                "Recognized as a major government healthcare provider offering accessible and affordable medical services, with strong support for emergency care and maternal health in the Siliguri region.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
                "/images/hospitals/f2.jpg",
            ],
        },


        "kurseong-subdivisional": {
            name: "Kurseong Sub-Divisional Hospital",
            image: "/images/hospitals/h6.jpg",

            about:
                "Kurseong Sub-Divisional Hospital is an important government healthcare facility serving Kurseong and nearby hill regions of Darjeeling district. The hospital provides essential medical services to residents in hilly and often hard-to-reach areas, ensuring access to basic healthcare without the need to travel to larger cities. It handles a steady flow of patients for general treatment, emergency care, and maternal health services, playing a crucial role in the region’s public healthcare system.",

            address: "Kurseong, Darjeeling, West Bengal",

            services: [
                "General Medicine",
                "Emergency & Basic Trauma Care",
                "Maternal & Child Healthcare",
                "Outpatient Department (OPD)",
                "Inpatient Services (IPD)",
                "Basic Diagnostics & Laboratory Services",
                "Immunization & Public Health Programs",
                "Minor Procedures & First Aid",
                "Referral Services to Higher Centers",
                "Primary Healthcare Services"
            ],

            speciality:
                "Plays a vital role in delivering consistent and accessible healthcare services in the hill regions, with strong support for emergency care and maternal health in Kurseong and surrounding areas.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
                "/images/hospitals/f2.jpg",
            ],
        },

        astha: {
            name: "Astha Hospital",
            image: "/images/hospitals/h7.jpg",

            about:
                "Astha Hospital is a private healthcare facility in Siliguri offering a range of medical services with a focus on patient comfort and efficient care delivery. The hospital combines general medical treatment with diagnostic and surgical support, catering to both outpatient and inpatient needs. With an emphasis on personalized attention and a patient-friendly environment, Astha Hospital serves individuals and families seeking reliable and convenient healthcare services in the city.",

            address: "Siliguri, West Bengal",

            services: [
                "General Medicine",
                "General Surgery",
                "Emergency Services",
                "Diagnostics (Lab & Imaging)",
                "Outpatient Department (OPD)",
                "Inpatient Services (IPD)",
                "Minor Surgical Procedures",
                "Health Checkups & Preventive Care",
                "Pharmacy Services",
                "Basic Critical Care Support"
            ],

            speciality:
                "Known for providing patient-focused care with a balance of medical treatment, diagnostics, and surgical services in a private healthcare setting.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
                "/images/hospitals/f2.jpg",
            ],
        },

        tufanganj: {
            name: "Tufanganj Hospital",
            image: "/images/hospitals/h8.jpg",

            about:
                "Tufanganj Hospital is a regional healthcare facility serving the town of Tufanganj and surrounding rural areas in Cooch Behar district. The hospital provides essential medical services to a large population that relies on it for day-to-day healthcare needs. It plays a significant role in delivering primary and basic secondary care, including emergency support and routine treatments. The hospital is especially important for nearby villages, offering accessible medical assistance without the need to travel long distances.",

            address: "Tufanganj, Cooch Behar, West Bengal",

            services: [
                "General Medicine",
                "Emergency & Basic Trauma Care",
                "Basic Surgical Procedures",
                "Outpatient Department (OPD)",
                "Inpatient Services (IPD)",
                "Basic Diagnostics & Laboratory Services",
                "Maternal & Child Healthcare",
                "Immunization Services",
                "Minor Procedures & First Aid",
                "Referral Services to Higher Centers"
            ],

            speciality:
                "Provides essential and accessible healthcare services to rural communities, with a strong focus on primary care, emergency support, and maternal health.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
            ],
        },

        "malbazar-general": {
            name: "Malbazar Hospital",
            image: "/images/hospitals/h9.jpg",

            about:
                "Malbazar Hospital is a general healthcare facility serving the Malbazar region of Jalpaiguri district. It provides primary and basic secondary medical services to the local population, including nearby rural and semi-urban communities. The hospital handles a steady flow of patients for routine treatment, emergency care, and basic diagnostics. It plays an important role in meeting day-to-day healthcare needs and acts as a first point of contact for many patients in the area.",

            address: "Malbazar, Jalpaiguri, West Bengal",

            services: [
                "General Medicine",
                "Emergency & Basic Trauma Care",
                "Outpatient Department (OPD)",
                "Inpatient Services (IPD)",
                "Basic Diagnostics & Laboratory Services",
                "Maternal & Child Healthcare",
                "Immunization Services",
                "Minor Procedures & First Aid",
                "Pharmacy Services",
                "Referral Services to Higher Centers"
            ],

            speciality:
                "Provides reliable primary healthcare and emergency support for the Malbazar region, serving as an essential medical facility for routine and urgent care needs.",

            facilitiesImages: [
                "/images/hospitals/f1.jpg",
                "/images/hospitals/f2.jpg",
                "/images/hospitals/f2.jpg",
            ],
        },
    };

    // ✅ FIX 3: safe access
    const hospital = hospitalData[id?.toLowerCase()];

    if (!hospital) return notFound();

    return (
        <HospitalLayout>
            <div className="space-y-10">

                {/* HERO */}
                <div className="rounded-2xl overflow-hidden">
                    <img
                        src={hospital.image}
                        alt={hospital.name}
                        className="w-full h-[300px] object-cover"
                    />
                </div>

                {/* ABOUT */}
                <section>
                    <h2 className="text-2xl font-bold text-primary mb-2">
                        {hospital.name}
                    </h2>
                    <p className="text-gray-600">{hospital.about}</p>


                </section>

                {/* SERVICES */}
                <section>
                    <h2 className="text-2xl font-bold text-primary mb-6">
                        Services Offered
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                        {hospital.services.map((s: string, i: number) => (
                            <div
                                key={i}
                                className="group relative bg-white border border-gray-200 rounded-xl px-4 py-5
                   shadow-sm hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03]
                   transition-all duration-300 cursor-pointer overflow-hidden"
                            >
                                {/* Accent Bar */}
                                <div className="absolute left-0 top-0 h-full w-1 bg-primary group-hover:w-2 transition-all duration-300"></div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                                {/* Text */}
                                <p className="relative font-semibold text-gray-800 text-sm leading-snug">
                                    {s}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* speciality*/}
                <section className="relative overflow-hidden rounded-2xl p-6 md:p-8 
                    bg-gradient-to-br from-primary/10 via-white to-primary/5 
                    border border-primary/20 shadow-md">

                    {/* Accent Glow */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>

                    {/* Content */}
                    <div className="relative">
                        <h2 className="text-lg font-semibold text-primary mb-3 uppercase tracking-wide">
                            Speciality
                        </h2>

                        <p className="text-gray-800 font-medium leading-relaxed text-[15px]">
                            {hospital.speciality}
                        </p>
                    </div>
                </section>

                {/* FACILITIES */}
                <section className="space-y-5">

                    {/* Heading */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary">
                            Facilities
                        </h2>
                        <p className="text-sm text-gray-500">
                            A glimpse of the hospital infrastructure and care environment
                        </p>
                    </div>

                    {/* Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                        {hospital.facilitiesImages.map((img: string, i: number) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl 
                 shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image */}
                                <img
                                    src={img}
                                    className="w-full h-[200px] object-cover 
                   group-hover:scale-110 transition duration-500"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70"></div>

                                {/* Label */}
                                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold tracking-wide">
                                    Facility {i + 1}
                                </div>

                                {/* Hover Highlight Border */}
                                <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-primary/40 transition-all duration-300"></div>
                            </div>
                        ))}

                    </div>

                </section>

                {/* MAP SECTION */}
                <section className="relative rounded-2xl overflow-hidden h-[260px]">

                    {/* 🗺️ GOOGLE MAP IFRAME BACKGROUND */}
                    <iframe
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                            hospital.name + " " + hospital.address
                        )}&z=15&output=embed`}
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                    

                    {/* 💎 CONTENT */}
                    <div className="relative h-full p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                        {/* TEXT */}
                        <div>
                            <h2 className="text-xl font-semibold text-white">
                                Location
                            </h2>
                            <p className="text-gray-200 text-sm mt-1 max-w-md">
                                {hospital.address}
                            </p>
                        </div>

                        {/* CTA BUTTON */}
                        <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                hospital.name + " " + hospital.address
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-primary text-white rounded-xl shadow-lg 
                 hover:bg-primary/90 hover:scale-105 
                 transition-all duration-300 font-medium"
                        >
                            📍 Get Directions
                        </a>

                    </div>
                </section>
            </div>
        </HospitalLayout>
    );
}