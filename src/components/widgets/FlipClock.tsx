"use client";

import { useState } from "react"; 

export default function FlipClock() {
    const [format, setFormat] = useState("24h");

    const toggleTimeFormat = () => {
        setFormat(format === "24h" ? "12h" : "24h");
    }
    
    return (
        <>
            <canvas>
                
            </canvas>
        </>
    )
}