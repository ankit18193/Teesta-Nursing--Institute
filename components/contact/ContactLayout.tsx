export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-6">
          {children}
        </div>
      </section>
    );
  }