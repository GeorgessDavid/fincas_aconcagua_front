'use client';
import { PARCELAS_SECTOR_A, PARCELAS_SECTOR_B, PARCELAS_SECTOR_C, PARCELAS_SECTOR_D, PARCELAS_SECTOR_E, PARCELAS_SECTOR_F, PARCELAS_SECTOR_G, PARCELAS_SECTOR_H, ParcelaData } from "@/assets/data/parcelas";
import Parcela from "./Parcela";

export default function MapaParcelas() {
    return (
        <div className="relative w-full border-[32px] rounded-2xl border-gray-200 bg-[url('/fincas_air.png')] bg-cover shadow-sm" style={{ aspectRatio: '16/9' }}>
            <span className="absolute -top-7 left-1/2 -translate-x-1/2 font-bold text-black shadow-sm">
                Calle Charrúa
            </span>
            <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 font-bold text-black">
                Calle Los Pinos
            </span>
            <span className="absolute -left-22 top-1/2 -translate-y-1/2 -rotate-90 font-bold text-black">
                Calle Aconcagua
            </span>
            <span className="absolute -right-22 top-1/2 -translate-y-1/2 rotate-90 font-bold text-black">
                Calle Felipe Flynt
            </span>
            <div className="absolute inset-6 grid" style={{ gridTemplateColumns: '300px 40px 300px 40px 300px 40px 300px' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_A} />
                <div></div>
                <RenderSector parcelas={PARCELAS_SECTOR_B} />
                <div></div>
                <RenderSector parcelas={PARCELAS_SECTOR_C} />
                <div></div>
                <RenderSector parcelas={PARCELAS_SECTOR_D} />
            </div>
            <div className="absolute bottom-2 left-6  grid" style={{ gridTemplateColumns: '300px 40px 300px 40px 300px 40px 300px' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_E} reversed special />
                <div></div>
                <RenderSector parcelas={PARCELAS_SECTOR_F} reversed />
                <div></div>
                <RenderSector parcelas={PARCELAS_SECTOR_G} reversed />
                <div></div>
                <RenderSector parcelas={PARCELAS_SECTOR_H} reversed />
            </div>
        </div>
    )
}

function RenderSector({ parcelas, reversed = false, special = false }: { parcelas: ParcelaData, reversed?: boolean, special?: boolean }) {
    return (
        <div className={`flex ${reversed ? 'flex-col-reverse' : 'flex-col'} h-full`}>
            {special && (
                <div className="w-full h-[64px] bg-gray-800/70 flex gap-4 items-center justify-center text-white border-2 border-gray-200 py-8">
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-lg">ESPACIO PÚBLICO</span>
                        <span className="text-sm">2191,08 M²</span>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-2">
                <div className="flex flex-col h-1/2">
                    {parcelas.izquierda.map((parcela, index) => (
                        <Parcela
                            key={index}
                            metrosCuadrados={parcela.metrosCuadrados}
                            numero={parcela.numero}
                            status={parcela.status}
                            forma={parcela.forma}
                            fraccion={parcela.fraccion}
                        />
                    ))}
                </div>
                <div className="flex flex-col h-1/2">
                    {parcelas.derecha.map((parcela, index) => (
                        <Parcela
                            key={index}
                            metrosCuadrados={parcela.metrosCuadrados}
                            numero={parcela.numero}
                            status={parcela.status}
                            forma={parcela.forma}
                            fraccion={parcela.fraccion}
                        />
                    ))}
                </div>

            </div>
            {parcelas.center && (
                <div className="flex items-center h-full">
                    {parcelas.center.map((parcela, index) => (
                        <Parcela
                            key={index}
                            metrosCuadrados={parcela.metrosCuadrados}
                            numero={parcela.numero}
                            status={parcela.status}
                            forma={parcela.forma}
                            fraccion={parcela.fraccion}
                        />
                    ))}
                </div>
            )}

        </div>
    )
}