import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-softbg text-dark">
        <TopBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}