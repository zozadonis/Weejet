"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/custom/Navbar";

interface Widget {
  id: string;
  title: string;
  description: string;
  code: string;
}

export default function WidgetsPage() {
  const [widgets, setWidgets] = useState<Widget[]>([]);

  useEffect(() => {
    const fetchWidgets = async () => {
      const response = await fetch("/api/getWidgets");
      const data = await response.json();
      setWidgets(data);
    };
    fetchWidgets();
  }, []);

  return (
        <>
        <main>
            <Navbar />
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {widgets.map((widget) => (
        <div key={widget.id} className="p-4 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">{widget.title}</h2>
          <p className="mt-2 text-gray-600">{widget.description}</p>
          <iframe
            src={`/widgets/${widget.id}`}
            width="400"
            height="200"
            className="mt-4 border rounded"
          ></iframe>
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                `<iframe src="https://weejet.vercel.app/widgets/${widget.id}" width="400" height="200"></iframe>`
              )
            }
            className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Copy Embed Code
          </button>
        </div>
      ))}
    </div>
    </main>
    </>
  );
}