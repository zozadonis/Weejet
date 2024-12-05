import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";

// Define interface for widget metadata
interface WidgetMetadata {
  id: string;
  title: string;
  description: string;
}

interface WidgetPageProps {
  params: { id: string };
}

// Function to get widget metadata by ID
const getWidgetMetadataById = (id: string) => {
  const widgetPath = path.join(process.cwd(), "src", "data", `${id}.json`);

  if (fs.existsSync(widgetPath)) {
    return JSON.parse(fs.readFileSync(widgetPath, "utf-8")) as WidgetMetadata;
  }

  return null;
};

export default async function WidgetPage({ params }: WidgetPageProps) {
  const widget = getWidgetMetadataById(params.id);

  // If widget doesn't exist, return 404
  if (!widget) {
    return notFound();
  }

  // Dynamically import the widget component
  const WidgetComponent = dynamic(() => import(`../../../components/widgets/${widget.id}/${widget.id}.tsx`), {
    loading: () => <p>Loading...</p>,
    ssr: false,
  });

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">{widget.title}</h1>
      <p className="mt-2 text-gray-600">{widget.description}</p>

      <div className="mt-4">
        {/* Render the widget component */}
        <WidgetComponent />
      </div>
    </div>
  );
}