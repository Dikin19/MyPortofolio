import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#001F54] text-[#D4AF37] py-8 border-t border-[#D4AF37]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm mb-4 md:mb-0">
                    <span className="font-semibold">© {new Date().getFullYear()} MuhamadSodikin</span>. All rights reserved.
                </div>
                <div className="flex space-x-4">
                    <Link
                        href="/"
                        className="hover:underline"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="hover:underline"
                    >
                        About
                    </Link>
                    <Link
                        href="/experiences"
                        className="hover:underline"
                    >
                        Experiences
                    </Link>
                    <Link
                        href="/projects"
                        className="hover:underline"
                    >
                        Project
                    </Link>
                </div>
            </div>
        </footer>
    );
}
