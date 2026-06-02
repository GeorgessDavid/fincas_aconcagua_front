'use client';
import MapaParcelas from "../MapaParcelas/MapaParcelas";

import { Reveal } from "../Reveal/Reveal";

export default function Parcelas() {
    return (
        <section className="px-12 relative my-16 w-full flex flex-col gap-8 lg:px-62" id="parcelas">
            <Reveal variant="fadeUp" delay={0.1}>
                <h2 className="text-4xl font-montserrat text-main-black font-extrabold">Parcelas</h2>
                <div className="w-24 h-[8px] bg-primary"></div>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.3}>
                <p className="text-lg font-montserrat text-main-black/80 font-medium max-w-7xl tracking-wide">
                    Explorá nuestra distribución de parcelas y encontrá la ubicación ideal para tu futuro hogar. Cada parcela está diseñada para ofrecerte comodidad, privacidad y un entorno natural único. Descubrí la variedad de opciones disponibles y elegí la que mejor se adapte a tus necesidades y estilo de vida.
                </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.35}>
                <MapaParcelas />
                <span className="text-md font-inter text-black/70 lg:hidden">Haz click en alguno de los sectores para ver más información.</span>
            </Reveal>
        </section>
    )
}