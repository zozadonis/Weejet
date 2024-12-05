import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";

interface WidgetProps {
  params: { id: string };
}

export default async function WidgetPage({ params }: WidgetProps) {
  // Read widget metadata from the 'data' directory
  const widgetPath = path.join(process.cwd(), "src", "data", `${params.id}.json`);
  
  // Check if the widget file exists
  if (!fs.existsSync(widgetPath)) {
    return notFound(); // Return 404 if widget not found
  }

  const widget = JSON.parse(fs.readFileSync(widgetPath, "utf-8"));

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold">{widget.title}</h1>
      <p className="mt-2 text-gray-600">{widget.description}</p>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: widget.code }}  // Embed widget's HTML & JS
      />
    </div>
  );
}