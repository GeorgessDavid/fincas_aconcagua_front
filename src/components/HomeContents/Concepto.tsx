'use client';
import Image from "next/image";
import { Reveal } from "../Reveal/Reveal";

export default function Concepto() {
    return (
        <section className="w-full h-auto flex flex-col md:flex-row justify-evenly px-8 py-12 lg:justify-between lg:px-32 lg:py-36 gap-8 bg-zinc-100" id="concepto">
            <div className="flex flex-col max-w-2xl gap-4">
                <Reveal variant="slideLeft" delay={0.1}>
                    <h2 className="text-lg font-inter uppercase tracking-widest text-primary font-bold">Concepto</h2>
                </Reveal>
                <Reveal variant="slideLeft" delay={0.3}>
                    <h1 className="text-4xl font-montserrat text-main-black font-extrabold">Un espacio para proyectar tu futuro hogar</h1>
                </Reveal>
                <Reveal variant="slideLeft" delay={0.5}>
                    <p className="text-lg font-montserrat text-main-black/80 font-medium max-w-7xl tracking-wide">
                        Fincas de Aconcagua es un desarrollo residencial de parcelas en Ingeniero Maschwitz, pensado para quienes buscan amplitud, naturaleza y tranquilidad.
                        <br />
                        Una propuesta para adquirir tu parcela y construir a tu ritmo, en un entorno residencial en crecimiento con proyección a futuro.
                    </p>
                </Reveal>
            </div>
            <div className="w-100 md:w-full h-auto rounded-lg overflow-hidden flex flex-row md:justify-end">
                <Reveal variant="slideRight" delay={0.1}>
                    <Image src="/fincas_img.jpg" alt="Imagen de concepto" width={800} height={600} className="w-[300px] lg:w-[500px] object-cover rounded-lg" />
                </Reveal>
            </div>
        </section>
    )
}