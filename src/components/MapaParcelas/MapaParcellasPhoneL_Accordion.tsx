'use client';
import { useState } from 'react';
import { PARCELAS_SECTOR_A, PARCELAS_SECTOR_B, PARCELAS_SECTOR_C, PARCELAS_SECTOR_D, PARCELAS_SECTOR_E, PARCELAS_SECTOR_F, PARCELAS_SECTOR_G, PARCELAS_SECTOR_H, ParcelaData } from "@/assets/data/parcelas";

const SECTORES = [
  { id: 'A', label: 'Sector A (Frac. 1)', data: PARCELAS_SECTOR_A },
  { id: 'B', label: 'Sector B (Frac. 1)', data: PARCELAS_SECTOR_B },
  { id: 'C', label: 'Sector C (Frac. 1)', data: PARCELAS_SECTOR_C },
  { id: 'D', label: 'Sector D (Frac. 1)', data: PARCELAS_SECTOR_D },
  { id: 'E', label: 'Sector E (Frac. 2)', data: PARCELAS_SECTOR_E },
  { id: 'F', label: 'Sector F (Frac. 2)', data: PARCELAS_SECTOR_F },
  { id: 'G', label: 'Sector G (Frac. 2)', data: PARCELAS_SECTOR_G },
  { id: 'H', label: 'Sector H (Frac. 2)', data: PARCELAS_SECTOR_H },
];

export default function MapaParcellasPhoneL_Accordion() {
  const [expandedSector, setExpandedSector] = useState<string | null>('A');

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Mapa de Parcelas</h1>
        <p className="text-sm text-gray-600 mb-6">Clic en un sector para ver sus parcelas</p>
        
        <div className="space-y-2">
          {SECTORES.map((sector) => (
            <SectorAccordion
              key={sector.id}
              sector={sector}
              isExpanded={expandedSector === sector.id}
              onToggle={() => setExpandedSector(expandedSector === sector.id ? null : sector.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SectorAccordion({ 
  sector, 
  isExpanded, 
  onToggle 
}: { 
  sector: typeof SECTORES[0]; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  const allParcelas = [
    ...sector.data.izquierda,
    ...sector.data.derecha,
    ...(sector.data.center || [])
  ];

  const vendidas = allParcelas.filter(p => p.status === 'Vendido').length;
  const disponibles = allParcelas.filter(p => p.status === 'Disponible').length;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="text-left">
          <h3 className="font-semibold text-gray-900">{sector.label}</h3>
          <p className="text-xs text-gray-600 mt-1">
            {disponibles} disponible{disponibles !== 1 ? 's' : ''} • {vendidas} vendida{vendidas !== 1 ? 's' : ''}
          </p>
        </div>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 py-4 border-t border-gray-100 max-h-96 overflow-y-auto">
          <div className="grid grid-cols-1 gap-2">
            {allParcelas.map((parcela, idx) => (
              <ParcelaCard key={idx} parcela={parcela} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ParcelaCard({ parcela }: { parcela: any }) {
  const isVendido = parcela.status === 'Vendido';
  
  return (
    <div
      className={`p-3 rounded border-l-4 ${
        isVendido
          ? 'bg-yellow-50 border-yellow-400'
          : 'bg-green-50 border-green-400'
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-bold text-lg text-gray-900">Parcela {parcela.numero}</p>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Área:</span> {parcela.metrosCuadrados} M²
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Fracción:</span> {parcela.fraccion}
            </p>
            <p className={`text-sm font-semibold ${
              isVendido ? 'text-yellow-700' : 'text-green-700'
            }`}>
              {parcela.status === 'Vendido' ? '✓ VENDIDO' : '◆ Disponible'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
