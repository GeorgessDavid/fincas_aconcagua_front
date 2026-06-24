'use client';

import { MAIN_VIDEO, MAIN_IMAGE_MOBILE } from "@/assets/constants/links";
import { Reveal } from "../Reveal/Reveal";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Hero() {
    const { push } = useRouter();

    const goToParelas = () => {
        return push('/#parcelas')
    };

    return (
        <div className="w-screen h-screen relative" id='hero'>
            <div className="lg:hidden relative w-full h-full overflow-hidden">
                <div className="bg-black/40 absolute w-full h-full top-0 left-0 z-10 flex flex-col items-center justify-center px-4 gap-2">
                    <h1 className="text-[22px] xxxs:text-2xl font-montserrat uppercase tracking-wide text-white font-extrabold">Fincas de Aconcagua</h1>
                    <div className="h-0.5 bg-white w-full mx-4"></div>
                    <p className="text-white font-montserrat tracking-wide">Viví la tranquilidad que merecés</p>

                </div>
                <Image width={300} height={300} src={MAIN_IMAGE_MOBILE} alt="Fondo" className="lg:hidden object-cover object-center w-full h-full" />

            </div>
            <div className="hidden lg:block relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />
                <video src={MAIN_VIDEO} className="object-cover z-0 absolute top-0 left-0 w-full h-full" autoPlay loop muted />
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <Reveal variant="fadeUp" delay={0.1}>
                        <h1 className="text-7xl font-montserrat uppercase tracking-widest text-white font-extrabold">Fincas de Aconcagua</h1>
                    </Reveal>
                    <div className="w-1/2 h-px bg-white" />
                    <Reveal variant="fadeUp" delay={0.3}>
                        <h2 className="text-2xl font-montserrat tracking-wide text-white">Viví la tranquilidad que merecés</h2>
                    </Reveal>
                    <Reveal variant="fadeUp" delay={0.34}>
                        <button className="bg-transparent border-2 border-white text-white py-4 px-8 rounded-lg cursor-pointer hover:bg-white hover:text-primary transition-all duration-200" onClick={goToParelas}>Explorar parcelas →</button>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}