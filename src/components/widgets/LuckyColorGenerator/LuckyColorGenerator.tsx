"use client";

import { useState } from "react";

export default function LuckyColorGenerator() {
    const [color, setColor] = useState<string | null>(null);

    const generateColor = () => {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        setColor(randomColor);
    }

    return (
        <>
            <div className="flex flex-col items-center space-y-4 p-4 border rounded shadow-md max-w-sm bg-transparent">
            <h2 className="text-xl font-bold">Lucky Color Generator</h2>
            <button
                onClick={generateColor}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
            >
                Generate Your Lucky Color
            </button>
            {color && (
                <div
                className="flex flex-col items-center space-y-2"
                style={{ backgroundColor: color, padding: "20px", borderRadius: "8px" }}
                >
                <span className="text-white font-semibold">Your Lucky Color:</span>
                <span className="text-white text-lg">{color}</span>
                </div>
            )}
            </div>
        </>
      );
}