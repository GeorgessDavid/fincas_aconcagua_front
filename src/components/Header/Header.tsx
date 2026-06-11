'use client';

import { Concepto, Galeria, Caracteristicas, Parcelas, Ubicacion } from "@/assets/constants/navigation";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import DrawerMenu from '@/components/Drawer/Drawer';


export default function Header() {
    const { push } = useRouter();
    const redirectToHome = () => {
        push('/#');
    }

    return (
        <header className="w-full h-24 gap-6 bg-white/70 lg:bg-white/50 sticky xl:fixed top-0 left-0 z-50 backdrop-blur-md shadow-md">
            <WebHeader onLogoClickFunction={redirectToHome} />
            <MobileHeader />
        </header>
    )
}

const WebHeader = ({ onLogoClickFunction }: { onLogoClickFunction: () => void }) => {
    return (
        <div className="hidden lg:flex items-center xl:justify-between gap-8 lg:block px-16 py-4">
            <div className="w-fit flex items-center cursor-pointer" onClick={onLogoClickFunction} title="Inicio">
                <Image src="/fincas_logo.webp" alt="Logo" width={150} height={150} loading="eager" />
            </div>
            <div className="w-fit flex gap-6">
                <NavLink href={Concepto} />
                <NavLink href={Galeria} />
                <NavLink href={Caracteristicas} />
                <NavLink href={Parcelas} />
                <NavLink href={Ubicacion} />
            </div>
        </div>
    )
}

const MobileHeader = () => {
    return (
        <div className="w-full h-full flex justify-between items-center px-8 lg:hidden">
            <Image src="/fincas_logo.webp" alt="logo" width={100} height={100} className="h-auto" />
            <DrawerMenu navData={[Concepto, Galeria, Caracteristicas, Parcelas, Ubicacion]} />
        </div>
    )
}

const NavLink = ({ href }: { href: { title: string; path: string; } }) => {
    return (
        <Link className="font-bold text-primary uppercase text-lg tracking-wide hover:text-main-black hover:-translate-y-0.5 duration-200 transition-all after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-main-black after:transition-all after:duration-200 hover:after:w-full" href={href.path}>{href.title}</Link>
    )
}