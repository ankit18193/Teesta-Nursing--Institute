import ResourcesLayout from "@/components/resources/ResourcesLayout";

export default function ProspectusPage() {
  return (
    <ResourcesLayout title="Prospectus">
      <div>
        <p className="mb-6">
          Download our official prospectus to get detailed information about courses, facilities, and admission process.
        </p>

        <div className="border p-6 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-semibold mb-3">
            Teesta Prospectus 2026
          </h3>

          <a
            href="/pdf/prospectus.pdf"
            target="_blank"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90"
          >
            Download Prospectus
          </a>
        </div>
      </div>
    </ResourcesLayout>
  );
}