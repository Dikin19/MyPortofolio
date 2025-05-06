import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#001F54] text-[#D4AF37] py-6 border-t border-[#D4AF37]">
            <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="text-sm text-center md:text-left">
                    <span className="font-semibold">© {new Date().getFullYear()} MuhamadSodikin</span>. All rights reserved.
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 text-sm">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/experiences" className="hover:underline">Experiences</Link>
                    <Link href="/projects" className="hover:underline">Project</Link>
                </div>
            </div>
        </footer>
    );
}
