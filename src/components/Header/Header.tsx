'use client';

import { NAV_LINKS } from "@/assets/constants/navigation";
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex w-full h-24 justify-between items-center bg-white/80 sticky top-0 z-50 px-16 py-4 backdrop-blur-md shadow-lg">
            <div className="w-fit flex items-center">
                <Image src="/fincas_logo.webp" alt="Logo" width={150} height={150} className="h-auto" />
            </div>
            <nav className="w-fit">
                <ul className="flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href} className="hover:text-secondary transition-all duration-300 ease-in-out after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:hover:h-full">
                            <a href={link.href} className="text-primary font-montserrat font-semibold ">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
                <button className="px-8 rounded-2xl py-2 cursor-pointer bg-text-primary text-white text-sm hover:scale-105 transition-all duration-300 ease-in-out">Más información</button>
            </div>
        </header>
    )
}