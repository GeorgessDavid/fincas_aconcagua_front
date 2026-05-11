'use client';
import MapaParcelas from "../MapaParcelas/MapaParcelas";


export default function Parcelas() {
    return (
        <section className="px-64 relative my-16 w-full flex flex-col gap-8" id="parcelas">
            <h2 className="text-4xl font-montserrat text-main-black font-extrabold">Parcelas</h2>
            <div className="w-24 h-[8px] bg-primary"></div>
            <MapaParcelas />
        </section>
    )
}