import ResourcesLayout from "@/components/resources/ResourcesLayout";

export default function AlumniPage() {
  return (
    <ResourcesLayout title="Alumni">
      <div>
        <p className="mb-6">
          Our alumni network is a strong community of professionals contributing to healthcare and society.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Anjali Sharma</h3>
            <p className="text-sm text-gray-500">GNM Nursing (2022)</p>
            <p className="text-sm text-gray-600 mt-2">
              Currently working at Apollo Hospital, Bangalore.
            </p>
          </div>

          <div className="border p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold">Rahul Verma</h3>
            <p className="text-sm text-gray-500">B.Pharm (2021)</p>
            <p className="text-sm text-gray-600 mt-2">
              Working as a Clinical Pharmacist in Delhi.
            </p>
          </div>
        </div>
      </div>
    </ResourcesLayout>
  );
}