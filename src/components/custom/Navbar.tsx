"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
    // const [isSticky, setIsSticky] = useState(false); Uncomment this if you want to use sticky navbar that checks the scroll position
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickLink = (targetID: string) => {
        const target = document.getElementById(targetID);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", `/${targetID}`);
            if (isOpen) {
                toggleMenu();
            }
        }
    };

    useEffect(() => {
        {/*const handleScroll = () => {
            const threshold = window.innerHeight * 0.1;
            setIsSticky(window.scrollY > threshold);
        };
        */} // Uncomment this if you want to use sticky navbar that checks the scroll position

        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        // window.addEventListener("scroll", handleScroll); Uncomment this if you want to use sticky navbar that checks the scroll position
        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            // window.removeEventListener("scroll", handleScroll); Uncomment this if you want to use sticky navbar that checks the scroll position
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            <nav
                ref={navbarRef}
                className="flex flex-wrap items-center justify-between px-4 lg:px-10 py-4 border-b sticky top-0 bg-white z-50"
            >
                <a href="/">
                    {/* Logo Section of the NavBar */}
                    <div className="h-[50px] w-[100px] lg:w-[200px] lg:h-[80px] relative">
                        <Image
                            src="/weejet-logo.svg"
                            alt="Weejet Logo"
                            fill
                            objectFit="contain"
                            className="object-contain"
                        />
                    </div>
                </a>
                <div className="flex lg:hidden" onClick={toggleMenu}>
                    {/* Mobile Menu Icon */}
                    <HiMenu
                        className={`text-[28px] transform transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                    />
                </div>

                {/* Mobile View */}
                <nav
                    className={cn(
                        isOpen
                            ? "absolute top-[100%] left-0 w-full bg-white z-50 flex justify-center px-4 py-6 border-b"
                            : "hidden"
                    )}
                >
                    <ul className="flex flex-col gap-10 text-center">
                        {links.map((item) => (
                            <li key={item.id}>
                                <Link href={`/${item.url}`} onClick={() => handleClickLink(`${item.url}`)}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop View */}
                <nav className="hidden lg:block">
                    <ul className="flex flex-row space-x-10 items-center">
                        {links.map((item) => (
                            <li key={item.id} className="hover:font-medium">
                                <Link href={`/${item.url}`} onClick={() => handleClickLink(`${item.url}`)}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </nav>
        </>
    );
}

const links = [
    {
        id: 1,
        url: "widgets",
        text: "Widgets",
    },
];
