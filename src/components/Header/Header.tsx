'use client';

import { Concepto, Galeria, Caracteristicas, Parcelas } from "@/assets/constants/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";


export default function Header() {
    const { push } = useRouter();
    const redirectToHome = () => {
        push('/');
    }

    return (
        <header className="flex w-full h-24 gap-6 justify-center items-center bg-white/50 fixed top-0 z-50 px-16 py-4 backdrop-blur-md shadow-md">
            <div className="w-fit flex gap-6">
                <NavLink href={Concepto} />
                <NavLink href={Galeria} />
            </div>
            <div className="w-fit flex items-center cursor-pointer" onClick={redirectToHome} title="Inicio">
                <Image src="/fincas_logo.webp" alt="Logo" width={150} height={150} className="h-auto" />
            </div>
            <div className="w-fit flex gap-6">
                <NavLink href={Caracteristicas} />
                <NavLink href={Parcelas} />
            </div>
        </header>
    )
}


const NavLink = ({ href }: { href: { title: string; path: string; } }) => {
    return (
        <Link className="font-bold text-primary uppercase text-lg tracking-wide hover:text-main-black hover:-translate-y-0.5 duration-200 transition-all after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-main-black after:transition-all after:duration-200 hover:after:w-full" href={href.path}>{href.title}</Link>
    )
}