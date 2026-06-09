'use client';
import { PARCELAS_SECTOR_A, PARCELAS_SECTOR_B, PARCELAS_SECTOR_C, PARCELAS_SECTOR_D, PARCELAS_SECTOR_E, PARCELAS_SECTOR_F, PARCELAS_SECTOR_G, PARCELAS_SECTOR_H, ParcelaData } from "@/assets/data/parcelas";
import Parcela from "./Parcela";
import Image from 'next/image';
import { Divider } from '@mui/material';
import { useState } from 'react';
import { ParcelaType } from "@/assets/data/parcelas";
export default function MapaParcelas() {
    return (
        <>
            <div className="relative hidden lg:block w-full border-32 rounded-2xl border-gray-200 shadow-sm " >
                <Image src="/fincas_air_2026.png" alt="Fincas" width={1920} height={1080} />
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
                {/* 1411x736
                    streets= 30px
                    leftlimit = 27px
                    rightLimit = 24px
                    parcelaHeight: 335

                    267x139
                */}
                <div className="absolute top-8 grid w-full xl:h-[35%] 3xl:h-[44%]" style={{ gridTemplateColumns: '1% 22.5% 2.25% 22.5% 2.25% 22.5% 2.25% 22.5% 1.25%' }}>
                    <div />
                    <RenderSector parcelas={PARCELAS_SECTOR_A} />
                    <div />
                    <RenderSector parcelas={PARCELAS_SECTOR_B} />
                    <div />
                    <RenderSector parcelas={PARCELAS_SECTOR_C} />
                    <div />
                    <RenderSector parcelas={PARCELAS_SECTOR_D} />
                    <div />
                </div>
                <div className="absolute bottom-4 3xl:bottom-8 grid 3xl:h-[44%] w-full" style={{ gridTemplateColumns: '1% 22.5% 2.25% 22.5% 2.25% 22.5% 2.25% 22.5% 1.25%' }}>
                    <div />
                    <RenderSector parcelas={PARCELAS_SECTOR_E} reversed special />
                    <div></div>
                    <RenderSector parcelas={PARCELAS_SECTOR_F} reversed />
                    <div></div>
                    <RenderSector parcelas={PARCELAS_SECTOR_G} reversed />
                    <div></div>
                    <RenderSector parcelas={PARCELAS_SECTOR_H} reversed />
                </div>
            </div>
            <div className="lg:hidden relative">
                <Image src="/fincas_air_2026.png" alt="Fincas Air" width={300} height={100} className="w-full z-0 rounded-2xl" />
                <div className="w-full">
                    <div className="absolute top-1 md:top-4 grid w-full h-[45%]" style={{ gridTemplateColumns: '24% 1% 24% 1% 24% 1% 24%' }}>
                        <Sector sectorName="Sector A" sector={PARCELAS_SECTOR_A} />
                        <div />
                        <Sector sectorName="Sector B" sector={PARCELAS_SECTOR_B} />
                        <div />
                        <Sector sectorName="Sector C" sector={PARCELAS_SECTOR_C} />
                        <div />
                        <Sector sectorName="Sector D" sector={PARCELAS_SECTOR_D} />
                    </div>
                    <div className="absolute bottom-2 grid w-full h-[45%]" style={{ gridTemplateColumns: '24% 1% 24% 1% 24% 1% 24%' }}>
                        <Sector sectorName="Sector E" sector={PARCELAS_SECTOR_E} />
                        <div />
                        <Sector sectorName="Sector F" sector={PARCELAS_SECTOR_F} />
                        <div />
                        <Sector sectorName="Sector G" sector={PARCELAS_SECTOR_G} />
                        <div />
                        <Sector sectorName="Sector H" sector={PARCELAS_SECTOR_H} />
                    </div>

                </div>
            </div>
        </>
    )
}

function RenderSector({ parcelas, reversed = false, special = false }: { parcelas: ParcelaData, reversed?: boolean, special?: boolean }) {
    const { rightLimiter } = parcelas;


    return (
        <div className={`flex ${reversed ? 'flex-col-reverse' : 'flex-col'} h-full w-full`}>
            {special && (
                <div className="w-full bg-gray-800/70 flex gap-4 items-center justify-center text-white border-2 border-gray-200 py-2 ms-2">
                    <div className="flex flex-col items-center">
                        <span className="font-bold text-sm">ESPACIO PÚBLICO</span>
                        <span className="text-sm">2191,08 M²</span>
                    </div>
                </div>
            )}
            <div className="flex w-full mx-2">
                <div className="flex flex-1 flex-col h-1/2">
                    {parcelas.izquierda.map((parcela, index) => (
                        <Parcela
                            key={index}
                            metrosCuadrados={parcela.metrosCuadrados}
                            numero={parcela.numero}
                            status={parcela.status}
                            forma={parcela.forma}
                            fraccion={parcela.fraccion}
                            rightSector={rightLimiter === 'Calle Felipe Flynt'}
                            />
                        ))}
                </div>
                <div className="flex flex-1 flex-col h-1/2">
                    {parcelas.derecha.map((parcela, index) => (
                        <Parcela
                            key={index}
                            metrosCuadrados={parcela.metrosCuadrados}
                            numero={parcela.numero}
                            status={parcela.status}
                            forma={parcela.forma}
                            fraccion={parcela.fraccion}
                            rightSector={rightLimiter === 'Calle Felipe Flynt'}
                            />
                        ))}
                </div>

            </div>
            {parcelas.center && (
                <div className="flex items-center h-full w-full ms-2">
                    {parcelas.center.map((parcela, index) => (
                        <Parcela
                        key={index}
                        metrosCuadrados={parcela.metrosCuadrados}
                        numero={parcela.numero}
                        status={parcela.status}
                        forma={parcela.forma}
                        fraccion={parcela.fraccion}
                        rightSector={rightLimiter === 'Calle Felipe Flynt'}
                        />
                    ))}
                </div>
            )}

        </div>
    )
}

const Sector = ({ sectorName, sector }: { sectorName: string, sector: ParcelaData }) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        return setOpen(true);
    };

    const handleClose = () => {
        return setOpen(false);
    }

    const arcelas = [
        { data: sector }
    ]

    const allParcelas = arcelas.flatMap(s => [
        ...s.data.izquierda,
        ...s.data.derecha,
        ...(s.data.center || [])

    ])

    const stats = {
        total: allParcelas.length,
        vendidas: allParcelas.filter(p => p.status === 'Vendido').length,
        disponibles: allParcelas.filter(p => p.status === 'Disponible').length,
    };

    return (
        <div className="w-full h-full">
            <div onClick={handleOpen} className="relative py-3 top-1 w-full h-full flex flex-col bg-primary/70 group text-white border-2 border-accent/40 flex justify-center items-center rounded-2xl cursor-pointer">
                <h3 className="font-inter text-[10px] uppercase font-bold tracking-wide group-hover:scale-105 transition-all duration-200">{sectorName}</h3>
                <h3 className="font-montserrat text-[8px] text-center group-hover:scale-105 transition-all duration-200">{stats.disponibles} parcelas disponibles.</h3>
            </div>
            <div className={`${open ? 'block' : 'hidden'} fixed top-0 left-0 z-10000 w-screen h-full bg-black/80  flex flex-col justify-center items-center`}>
                <div className="w-5/6 bg-white rounded-lg max-h-5/6 overflow-scroll" >
                    <div className="w-full flex flex-row justify-between items-center py-4 px-8 sticky top-0 bg-white shadow-md z-10" onClick={handleClose}>
                        <h2 className="font-montserrat font-bold text-xl">{sectorName}</h2>
                        <span className="cursor-pointer hover:scale-105 transition-all duration-300 material-symbols-outlined">close</span>
                    </div>
                    <Divider variant="middle" />
                    {sector.sectorImage &&
                        <div className="w-fit flex flex-col items-center my-8 px-8 relative">
                            <div className="p-2 w-fit relative">
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap origin-center">{sector.topLimiter}</span>
                                <span className="absolute top-1/2 -left-4 -translate-y-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap origin-center font-bold">{sector.leftLimiter}</span>
                                <span className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 -right-4  rotate-90 whitespace-nowrap origin-center font-bold">{sector.rightLimiter}</span>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap origin-center">{sector.bottomLimiter}</span>
                                <Image src={sector.sectorImage} alt="Sector Image" width={400} height={500} className="rounded-2xl shadow-2xl" />
                            </div>
                            {/* <div className="w-full h-full absolute top-0 -left-2 px-12 py-4">
                                <RenderSector parcelas={sector} special={sectorName === 'Sector E'} reversed={sector.bottomLimiter === 'Calle Los Pinos'} />
                            </div> */}
                        </div>

                    }
                    <Divider variant="middle" orientation="horizontal" flexItem sx={{ marginTop: '2rem' }} />
                    <div className="grid grid-cols-3 gap-2 mb-6 px-4 md:px-8 mt-8">
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                            <p className="text-2xl font-bold text-blue-900">{stats.total}</p>
                            <p className="text-xs text-blue-700">Total</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                            <p className="text-2xl font-bold text-green-900">{stats.disponibles}</p>
                            <p className="text-xs text-green-700">Disponibles</p>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                            <p className="text-2xl font-bold text-yellow-900">{stats.vendidas}</p>
                            <p className="text-xs text-yellow-700">Vendidas</p>
                        </div>
                    </div>
                    <div className="flex flex-col px-8 gap-4">

                        {sector &&
                            allParcelas.map(parcelita => (
                                <CollapsableParcela key={parcelita.numero} parcel={parcelita} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const CollapsableParcela = ({ parcel }: { parcel: ParcelaType }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const toggleExpand = () => {
        return setIsExpanded(!isExpanded);
    }


    return (
        <div className="flex flex-col justify-start items-start">
            <div onClick={toggleExpand} className={`w-full p-4 border ${parcel.status==='Vendido' ? 'border-l-6 border-l-accent' : 'border-l-6 border-l-primary'} ${isExpanded && parcel.status === 'Vendido' ? 'bg-yellow-100! border-b-0! rounded-b-none! ' : isExpanded && parcel.status === 'Disponible' ? 'bg-green-100! border-b-0! rounded-b-none!' : ''} border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm flex flex-row justify-between items-center cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg`}>
                <div className="flex flex-col items-start justify-start">
                    <h2 className="tracking-wide text-xs font-regular text-gray-500 font-inter">Parcela</h2>
                    <h3 className="font-bold font-montserrat text-lg">{parcel.numero}</h3>
                </div>
                <span className="material-symbols-outlined">
                    {!isExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
                </span>
                {/* <div className={`w-3 h-3 rounded-full ${parcel.status === 'Vendido' ? 'bg-yellow-300 shadow-yellow-800 shadow-lg' : 'bg-green-400 shadow-green-800 shadow-lg'}`} /> */}
            </div>
            {isExpanded && (
                <div className={`px-4 py-4 border-t border-gray-100  rounded-b-2xl w-full max-h-96 overflow-y-auto ${parcel.status === 'Vendido' ? 'bg-yellow-100 border-l-6 border-l-accent' : 'bg-green-100 border-l-6 border-l-primary'}`}>
                    <div className="grid grid-cols-1 gap-2">
                        <div className="flex flex-row items-center justify-start gap-2">
                            <span className="font-bold text-sm">Parcela:</span>
                            <h3 className="text-sm">{parcel.numero}</h3>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <span className="font-bold text-sm">Medida:</span>
                            <h3 className="text-sm">{parcel.metrosCuadrados} M²</h3>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <span className="font-bold text-sm">Estado:</span>
                            <h3 className="font-bold text-sm">{parcel.status}</h3>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-2">
                            <span className="font-bold text-sm">Fracción:</span>
                            <h3 className="text-sm">{parcel.fraccion}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}