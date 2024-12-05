"use client";

import { useState } from "react";

// Define interface for widget metadata
interface WidgetMetadata {
  id: string;
  title: string;
  description: string;
}

export default function WidgetCard({ widget }: { widget: WidgetMetadata }) {
  // State for copy button feedback
  const [copySuccess, setCopySuccess] = useState(false);

  // Handle the copy action
  const handleCopy = async () => {
    const embedUrl = `${window.location.origin}/widgets/${widget.id}`; // Construct embed URL
    try {
      await navigator.clipboard.writeText(embedUrl); // Copy to clipboard
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset success state after 2 seconds
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-lg font-semibold">{widget.title}</h2>
      <p className="mt-2 text-gray-600">{widget.description}</p>
      <div className="mt-4">
        {/* Render the widget component dynamically */}
        {/* Assuming widget component is stored in the 'components/widgets/[id]/[id].tsx' */}
        <div className="widget-container">
          {/* Example of rendering widget dynamically */}
          <div className="mt-4">
            {/* Embed widget code dynamically */}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {/* Copy embed link button */}
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          {copySuccess ? "Copied!" : "Copy Embed Link"}
        </button>
      </div>
    </div>
  );
}
