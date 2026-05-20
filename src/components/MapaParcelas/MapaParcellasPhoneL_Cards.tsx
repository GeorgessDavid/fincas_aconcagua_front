'use client';
import { useState } from 'react';
import { PARCELAS_SECTOR_A, PARCELAS_SECTOR_B, PARCELAS_SECTOR_C, PARCELAS_SECTOR_D, PARCELAS_SECTOR_E, PARCELAS_SECTOR_F, PARCELAS_SECTOR_G, PARCELAS_SECTOR_H, ParcelaData } from "@/assets/data/parcelas";

const SECTORES = [
  { id: 'A', label: 'Sector A', fraccion: 1, data: PARCELAS_SECTOR_A },
  { id: 'B', label: 'Sector B', fraccion: 1, data: PARCELAS_SECTOR_B },
  { id: 'C', label: 'Sector C', fraccion: 1, data: PARCELAS_SECTOR_C },
  { id: 'D', label: 'Sector D', fraccion: 1, data: PARCELAS_SECTOR_D },
  { id: 'E', label: 'Sector E', fraccion: 2, data: PARCELAS_SECTOR_E },
  { id: 'F', label: 'Sector F', fraccion: 2, data: PARCELAS_SECTOR_F },
  { id: 'G', label: 'Sector G', fraccion: 2, data: PARCELAS_SECTOR_G },
  { id: 'H', label: 'Sector H', fraccion: 2, data: PARCELAS_SECTOR_H },
];

export default function MapaParcellasPhoneL_Cards() {
  const [selectedFraccion, setSelectedFraccion] = useState<1 | 2 | null>(null);
  const [statusFilter, setStatusFilter] = useState<'todos' | 'disponibles' | 'vendidos'>('todos');

  const filteredSectores = SECTORES.filter(s => 
    selectedFraccion === null || s.fraccion === selectedFraccion
  );

  const allParcelas = filteredSectores.flatMap(s => [
    ...s.data.izquierda,
    ...s.data.derecha,
    ...(s.data.center || [])
  ]).filter(p => {
    if (statusFilter === 'disponibles') return p.status === 'Disponible';
    if (statusFilter === 'vendidos') return p.status === 'Vendido';
    return true;
  });

  const stats = {
    total: allParcelas.length,
    vendidas: allParcelas.filter(p => p.status === 'Vendido').length,
    disponibles: allParcelas.filter(p => p.status === 'Disponible').length,
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen p-4">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Mapa de Parcelas</h1>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-6">
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

        {/* Filters */}
        <div className="mb-6 space-y-3">
          {/* Fracción Filter */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Fracción</p>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedFraccion(null)}
                className={`flex-1 py-2 px-3 rounded font-medium transition-all ${
                  selectedFraccion === null
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Todas
              </button>
              <button
                onClick={() => setSelectedFraccion(1)}
                className={`flex-1 py-2 px-3 rounded font-medium transition-all ${
                  selectedFraccion === 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Frac. 1
              </button>
              <button
                onClick={() => setSelectedFraccion(2)}
                className={`flex-1 py-2 px-3 rounded font-medium transition-all ${
                  selectedFraccion === 2
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Frac. 2
              </button>
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <p className="text-sm font-semibold text-gray-700 mb-2">Estado</p>
            <div className="flex gap-2">
              <button
                onClick={() => setStatusFilter('todos')}
                className={`flex-1 py-2 px-3 rounded font-medium text-sm transition-all ${
                  statusFilter === 'todos'
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setStatusFilter('disponibles')}
                className={`flex-1 py-2 px-3 rounded font-medium text-sm transition-all ${
                  statusFilter === 'disponibles'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Disponibles
              </button>
              <button
                onClick={() => setStatusFilter('vendidos')}
                className={`flex-1 py-2 px-3 rounded font-medium text-sm transition-all ${
                  statusFilter === 'vendidos'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                Vendidos
              </button>
            </div>
          </div>
        </div>

        {/* Parcelas Grid */}
        <div className="grid grid-cols-2 gap-3">
          {allParcelas.map((parcela, idx) => (
            <ParcelaCard key={idx} parcela={parcela} />
          ))}
        </div>

        {allParcelas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">No hay parcelas que coincidan con los filtros</p>
          </div>
        )}
      </div>
    </div>
  );
}

function ParcelaCard({ parcela }: { parcela: any }) {
  const isVendido = parcela.status === 'Vendido';
  
  return (
    <div
      className={`p-3 rounded-lg border-2 transition-all hover:shadow-md cursor-pointer ${
        isVendido
          ? 'bg-yellow-50 border-yellow-300 hover:bg-yellow-100'
          : 'bg-green-50 border-green-300 hover:bg-green-100'
      }`}
    >
      <div className="space-y-2">
        <p className="font-bold text-base text-gray-900">#{parcela.numero}</p>
        
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600">Área:</span>
            <span className="font-semibold text-gray-900">{parcela.metrosCuadrados} M²</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Frac:</span>
            <span className="font-semibold text-gray-900">{parcela.fraccion}</span>
          </div>
        </div>

        <div className={`pt-2 border-t text-center font-semibold text-xs rounded ${
          isVendido
            ? 'text-yellow-700 bg-yellow-100'
            : 'text-green-700 bg-green-100'
        }`}>
          {isVendido ? 'VENDIDO' : 'DISPONIBLE'}
        </div>
      </div>
    </div>
  );
}
