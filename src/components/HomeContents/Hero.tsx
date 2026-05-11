'use client';

import { MAIN_VIDEO, MAIN_IMAGE_MOBILE } from "@/assets/constants/links";

export default function Hero() {
    return (
        <div className="w-screen h-screen relative">
            <img src={MAIN_IMAGE_MOBILE} alt="Fondo" className="lg:hidden object-cover z-0 absolute top-0 left-0 w-full h-full" />
            <div className="hidden lg:block relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
                <video src={MAIN_VIDEO} className="object-cover z-0 absolute top-0 left-0 w-full h-full" autoPlay loop muted />
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <h1 className="text-7xl font-montserrat uppercase tracking-widest text-white font-extrabold">Fincas de Aconcagua</h1>
                    <div className="w-1/2 h-[1px] bg-white" />
                    <h2 className="text-2xl font-montserrat tracking-wide text-white">Viví la tranquilidad que merecés</h2>
                    <button className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg cursor-pointer hover:bg-white hover:text-primary transition-all duration-200">Explorar parcelas →</button>
                </div>
            </div>
        </div>
    )
}