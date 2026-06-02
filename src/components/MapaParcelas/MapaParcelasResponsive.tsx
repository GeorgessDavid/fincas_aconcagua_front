'use client';
import { PARCELAS_SECTOR_A, PARCELAS_SECTOR_B, PARCELAS_SECTOR_C, PARCELAS_SECTOR_D, PARCELAS_SECTOR_E, PARCELAS_SECTOR_F, PARCELAS_SECTOR_G, PARCELAS_SECTOR_H, ParcelaData } from "@/assets/data/parcelas";
import Parcela from "./Parcela";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ParcelaType } from "@/assets/data/parcelas";

export default function MapaParcelasResponsive() {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // Efecto para detectar cambios de tamaño de ventana
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isDesktop = windowWidth >= 867;

    return (
        <>
            {isDesktop ? (
                // VERSIÓN DESKTOP - Mapa completo interactivo
                <DesktopMapView />
            ) : (
                // VERSIÓN MOBILE/TABLET - Sectores individuales
                <MobileMapView />
            )}
        </>
    );
}

// ============== DESKTOP VIEW ==============
function DesktopMapView() {
    return (
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
            {/* Imagen de fondo */}
            <Image
                src="/fincas_air.png"
                alt="Fincas Aérea"
                fill
                className="object-cover"
                priority
            />

            {/* Etiquetas de calles */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-black shadow-sm text-lg z-10">
                Calle Charrúa
            </span>
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-bold text-black text-lg z-10">
                Calle Los Pinos
            </span>
            <span className="absolute -left-20 top-1/2 -translate-y-1/2 -rotate-90 font-bold text-black text-lg z-10">
                Calle Aconcagua
            </span>
            <span className="absolute -right-20 top-1/2 -translate-y-1/2 rotate-90 font-bold text-black text-lg z-10">
                Calle Felipe Flynt
            </span>

            {/* Sectores posicionados con absolute positioning */}
            {/* Fila Superior */}
            <div className="absolute" style={{ top: '6%', left: '4.5%', width: '23%', height: '45%' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_A} />
            </div>
            <div className="absolute" style={{ top: '6%', left: '28%', width: '23%', height: '45%' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_B} />
            </div>
            <div className="absolute" style={{ top: '6%', left: '51.5%', width: '23%', height: '45%' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_C} />
            </div>
            <div className="absolute" style={{ top: '6%', left: '75%', width: '23%', height: '45%' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_D} />
            </div>

            {/* Fila Inferior */}
            <div className="absolute" style={{ top: '51%', left: '4.5%', width: '23%', height: '45%' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_E} reversed special />
            </div>
            <div className="absolute" style={{ top: '51%', left: '28%', width: '23%', height: '45%' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_F} reversed />
            </div>
            <div className="absolute" style={{ top: '51%', left: '51.5%', width: '23%', height: '45%' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_G} reversed />
            </div>
            <div className="absolute" style={{ top: '51%', left: '75%', width: '23%', height: '45%' }}>
                <RenderSector parcelas={PARCELAS_SECTOR_H} reversed />
            </div>
        </div>
    );
}

// ============== MOBILE VIEW ==============
function MobileMapView() {
    return (
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
            {/* Imagen de fondo */}
            <Image
                src="/fincas_air.png"
                alt="Fincas Aérea"
                fill
                className="object-cover"
                priority
            />

            {/* Grid de botones de sectores - Cuadrados que respetan los límites */}
            <div className="absolute inset-0 grid gap-0" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
                <SectorButton sectorName="Sector A" sector={PARCELAS_SECTOR_A} position="0" />
                <SectorButton sectorName="Sector B" sector={PARCELAS_SECTOR_B} position="1" />
                <SectorButton sectorName="Sector C" sector={PARCELAS_SECTOR_C} position="2" />
                <SectorButton sectorName="Sector D" sector={PARCELAS_SECTOR_D} position="3" />
                <SectorButton sectorName="Sector E" sector={PARCELAS_SECTOR_E} position="4" />
                <SectorButton sectorName="Sector F" sector={PARCELAS_SECTOR_F} position="5" />
                <SectorButton sectorName="Sector G" sector={PARCELAS_SECTOR_G} position="6" />
                <SectorButton sectorName="Sector H" sector={PARCELAS_SECTOR_H} position="7" />
            </div>
        </div>
    );
}

// ============== COMPONENTS ==============

function RenderSector({ parcelas, reversed = false, special = false }: { parcelas: ParcelaData, reversed?: boolean, special?: boolean }) {
    return (
        <div className={`flex ${reversed ? 'flex-col-reverse' : 'flex-col'} h-full w-full border border-gray-200`}>
            {special && (
                <div className="w-full flex gap-1 items-center justify-center text-white bg-gray-900/90">
                    <div className="flex flex-col items-center py-0.5 px-1">
                        <span className="font-bold text-[10px]">ESPACIO PÚBLICO</span>
                        <span className="text-[8px]">2191,08 M²</span>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-2 flex-1 w-full">
                <div className="flex flex-col w-full">
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
                <div className="flex flex-col w-full">
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
                <div className="flex items-center w-full flex-1">
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
    );
}

interface SectorButtonProps {
    sectorName: string;
    sector: ParcelaData;
    position: string;
}

const SectorButton = ({ sectorName, sector, position }: SectorButtonProps) => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const allParcelas = [
        ...sector.izquierda,
        ...sector.derecha,
        ...(sector.center || [])
    ];

    const stats = {
        total: allParcelas.length,
        vendidas: allParcelas.filter(p => p.status === 'Vendido').length,
        disponibles: allParcelas.filter(p => p.status === 'Disponible').length,
    };

    return (
        <>
            {/* Botón overlay - Cubre todo el sector */}
            <div
                onClick={handleOpen}
                className="flex items-center justify-center cursor-pointer group hover:bg-black/10 transition-colors relative w-full h-full border border-green-400/30"
            >
                <div className="text-center">
                    <h3 className="font-bold text-white text-xs md:text-sm drop-shadow-lg">{sectorName}</h3>
                    <p className="text-white text-[10px] md:text-xs drop-shadow-lg">{stats.disponibles} disponibles</p>
                </div>
            </div>

            {/* Modal */}
            <div className={`${open ? 'block' : 'hidden'} fixed top-0 left-0 z-50 w-screen h-screen bg-black/80 flex flex-col justify-center items-center p-4`}>
                <div className="w-full max-w-sm bg-white rounded-lg max-h-[90vh] overflow-y-auto">
                    {/* Header */}
                    <div className="w-full flex flex-row justify-between items-center py-4 px-4 border-b sticky top-0 bg-white rounded-t-lg">
                        <h2 className="font-bold text-xl">{sectorName}</h2>
                        <button
                            onClick={handleClose}
                            className="cursor-pointer hover:scale-110 transition-transform text-gray-600 text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Contenido */}
                    <div className="p-4 space-y-4">
                        {/* Imagen del sector con parcelas */}
                        {sector.sectorImage && (
                            <div className="relative w-full bg-gray-200 rounded-lg overflow-hidden aspect-square">
                                <Image
                                    src={sector.sectorImage}
                                    alt={sectorName}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0">
                                    <RenderSector
                                        parcelas={sector}
                                        special={sectorName === 'Sector E'}
                                        reversed={sector.bottomLimiter === 'Calle Los Pinos'}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Estadísticas */}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-blue-50 rounded p-2 border border-blue-200 text-center">
                                <p className="text-lg font-bold text-blue-900">{stats.total}</p>
                                <p className="text-xs text-blue-700">Total</p>
                            </div>
                            <div className="bg-green-50 rounded p-2 border border-green-200 text-center">
                                <p className="text-lg font-bold text-green-900">{stats.disponibles}</p>
                                <p className="text-xs text-green-700">Disponibles</p>
                            </div>
                            <div className="bg-yellow-50 rounded p-2 border border-yellow-200 text-center">
                                <p className="text-lg font-bold text-yellow-900">{stats.vendidas}</p>
                                <p className="text-xs text-yellow-700">Vendidas</p>
                            </div>
                        </div>

                        {/* Lista de parcelas */}
                        <div className="space-y-2">
                            <h3 className="font-bold text-sm text-gray-700">Parcelas:</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {allParcelas.map((parcela) => (
                                    <CollapsableParcela key={parcela.numero} parcel={parcela} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const CollapsableParcela = ({ parcel }: { parcel: ParcelaType }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div className="flex flex-col">
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full p-2 border rounded cursor-pointer transition-colors ${
                    parcel.status === 'Vendido'
                        ? 'bg-yellow-100 border-yellow-300'
                        : 'bg-green-100 border-green-300'
                } hover:opacity-80`}
            >
                <div className="flex justify-between items-center">
                    <div>
                        <h4 className="font-bold text-sm">Parcela {parcel.numero}</h4>
                        <p className="text-xs text-gray-600">{parcel.metrosCuadrados} M²</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${parcel.status === 'Vendido' ? 'bg-yellow-500' : 'bg-green-500'}`} />
                </div>
            </div>
            {isExpanded && (
                <div className={`p-2 text-xs border-t border-l border-r rounded-b ${
                    parcel.status === 'Vendido'
                        ? 'bg-yellow-50 border-yellow-300'
                        : 'bg-green-50 border-green-300'
                }`}>
                    <p><strong>Estado:</strong> {parcel.status}</p>
                    <p><strong>Fracción:</strong> {parcel.fraccion}</p>
                </div>
            )}
        </div>
    );
};
