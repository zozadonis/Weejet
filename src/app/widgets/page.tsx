import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import Navbar from "@/components/custom/Navbar";

// Define interface for widget metadata
interface WidgetMetadata {
  id: string;
  title: string;
  description: string;
}

// Function to get all widget metadata from the server
const getWidgetsMetadata = () => {
  const widgetsDirectory = path.join(process.cwd(), "src", "data");
  const files = fs.readdirSync(widgetsDirectory);

  // Read and return all widget metadata files
  return files.map((file) => {
    const filePath = path.join(widgetsDirectory, file);
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as WidgetMetadata;
  });
};

// Widgets page component (server-rendered)
export default async function WidgetsPage() {
  const widgetsMetadata = getWidgetsMetadata();

  return (
    <>
      <main>
        <Navbar />
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-semibold">All Widgets</h1>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {widgetsMetadata.map((widget) => (
              <WidgetCard key={widget.id} widget={widget} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

// Dynamically import WidgetCard component (client-side only)
const WidgetCard = dynamic(
  () => import("./WidgetCard"),
  { ssr: false } // Disable SSR, making this a client-side component
);
