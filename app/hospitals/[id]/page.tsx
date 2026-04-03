import HospitalLayout from "@/components/hospitals/HospitalLayout";
import { notFound } from "next/navigation";

const hospitalData: Record<string, any> = {
  apollo: {
    name: "Apollo Hospital",
    image: "/images/hospitals/1.jpg",
    about:
      "Apollo Hospital is a leading multi-speciality hospital providing advanced healthcare services.",
    services: ["Cardiology", "Emergency", "ICU", "Radiology"],
    famous: "Famous for cardiac and critical care excellence.",
    facilities: ["24/7 Emergency", "Pharmacy", "Diagnostics", "ICU"],
  },

  fortis: {
    name: "Fortis Healthcare",
    image: "/images/hospitals/2.jpg",
    about:
      "Fortis Healthcare is known for world-class treatment and medical expertise.",
    services: ["Oncology", "Orthopedics", "ICU", "OPD"],
    famous: "Known for oncology and multi-speciality expertise.",
    facilities: ["Emergency", "Lab", "Pharmacy", "ICU"],
  },

  aiims: {
    name: "AIIMS",
    image: "/images/hospitals/3.jpg",
    about:
      "AIIMS is India’s premier medical institute.",
    services: ["General Medicine", "Surgery", "Emergency", "ICU"],
    famous: "Top government medical institute in India.",
    facilities: ["Emergency", "Research Labs", "Pharmacy", "ICU"],
  },

  medanta: {
    name: "Medanta Hospital",
    image: "/images/hospitals/4.jpg",
    about: "Medanta offers advanced medical care.",
    services: ["Cardiology", "Neurology", "ICU"],
    famous: "Advanced cardiac care.",
    facilities: ["Emergency", "Diagnostics", "ICU"],
  },

  max: {
    name: "Max Healthcare",
    image: "/images/hospitals/5.jpg",
    about: "Max provides high-quality treatment.",
    services: ["Oncology", "ICU"],
    famous: "Strong oncology department.",
    facilities: ["Emergency", "Lab", "ICU"],
  },

  narayana: {
    name: "Narayana Health",
    image: "/images/hospitals/6.jpg",
    about: "Affordable healthcare services.",
    services: ["Cardiology", "Surgery"],
    famous: "Affordable cardiac care.",
    facilities: ["Emergency", "ICU"],
  },

  ruby: {
    name: "Ruby Hospital",
    image: "/images/hospitals/7.jpg",
    about: "Trusted regional hospital.",
    services: ["General Medicine", "ICU"],
    famous: "Reliable care.",
    facilities: ["Emergency", "Lab"],
  },

  manipal: {
    name: "Manipal Hospital",
    image: "/images/hospitals/8.jpg",
    about: "Advanced infrastructure.",
    services: ["Neurology", "Orthopedics"],
    famous: "Neurology excellence.",
    facilities: ["Emergency", "ICU"],
  },

  columbia: {
    name: "Columbia Asia",
    image: "/images/hospitals/9.jpg",
    about: "International healthcare standards.",
    services: ["General Medicine"],
    famous: "Global standards.",
    facilities: ["Emergency", "Lab"],
  },
};

export default function HospitalPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params?.id?.toLowerCase();   // ✅ SAFE EXTRACTION

  const hospital = hospitalData[id];

  if (!hospital) {
    console.log("Invalid hospital ID:", id); // DEBUG
    return notFound();
  }

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
          <h2 className="text-xl font-semibold text-primary mb-2">
            About Hospital
          </h2>
          <p className="text-gray-600">{hospital.about}</p>
        </section>

        {/* SERVICES */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {hospital.services.map((s: string, i: number) => (
              <span key={i} className="bg-primary/10 px-3 py-1 rounded-full text-sm">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* WHY FAMOUS */}
        <section className="border rounded-xl p-6">
          <h2 className="font-semibold text-primary mb-2">
            Why Famous
          </h2>
          <p>{hospital.famous}</p>
        </section>

        {/* FACILITIES */}
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Facilities
          </h2>
          <div className="flex flex-wrap gap-3">
            {hospital.facilities.map((f: string, i: number) => (
              <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {f}
              </span>
            ))}
          </div>
        </section>

      </div>
    </HospitalLayout>
  );
}