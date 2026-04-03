import AboutLayout from "@/components/about/AboutLayout";

export default function AdministrationPage() {
  return (
    <AboutLayout title="Administration">

      <p className="text-gray-600 mb-8">
        Our administrative team ensures smooth operations and supports the academic
        environment through efficient management and coordination.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {["Registrar", "Accounts Officer", "Office Staff"].map((role) => (
          <div
            key={role}
            className="border rounded-lg p-6 shadow-sm text-center"
          >
            <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4" />
            <h3 className="text-md font-semibold text-primary">{role}</h3>
          </div>
        ))}

      </div>

    </AboutLayout>
  );
}