'use client';
import { useState } from 'react';
import Image from 'next/image';
import MapaParcellasPhoneL_Accordion from '@/components/MapaParcelas/MapaParcellasPhoneL_Accordion';
import MapaParcellasPhoneL_Cards from '@/components/MapaParcelas/MapaParcellasPhoneL_Cards';

export default function page() {
  const [activeView, setActiveView] = useState<'accordion' | 'cards'>('accordion');

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Tabs */}
      <div className="fixed top-0 z-1000 bg-white border-b border-gray-200 shadow-sm z-10   ">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-4">
          <button
            onClick={() => setActiveView('accordion')}
            className={`px-4 py-2 rounded font-semibold transition-all ${
              activeView === 'accordion'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📑 Acordeón
          </button>
          <button
            onClick={() => setActiveView('cards')}
            className={`px-4 py-2 rounded font-semibold transition-all ${
              activeView === 'cards'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🎴 Tarjetas
          </button>
          <div className="ml-auto text-sm text-gray-600 py-2">
            <span className="bg-yellow-100 px-2 py-1 rounded">Mobile L (480px-639px)</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <Image src="/fincas_air.png" alt="fincas Air" width={200} height={200} className="w-full" />
        {activeView === 'accordion' && <MapaParcellasPhoneL_Accordion />}
        {activeView === 'cards' && <MapaParcellasPhoneL_Cards />}
      </div>
    </div>
  );
}
