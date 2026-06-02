import MapaParcelasResponsive from '@/components/MapaParcelas/MapaParcelasResponsive';

export default function ParcelasResponsiveDemoPage() {
    return (
        <main className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Mapa de Parcelas Responsivo
                    </h1>
                    <p className="text-gray-600">
                        Prueba el nuevo mapa responsivo que se adapta a todos los tamaños de pantalla
                    </p>
                </div>

                {/* Map Container */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <MapaParcelasResponsive />
                </div>

                {/* Info */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-bold text-lg mb-3">📱 Mobile</h2>
                        <p className="text-gray-600 text-sm">
                            En dispositivos móviles, los sectores se muestran como botones interactivos sobre la imagen. Haz clic en cualquier sector para ver los detalles de las parcelas.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h2 className="font-bold text-lg mb-3">💻 Desktop</h2>
                        <p className="text-gray-600 text-sm">
                            En desktop, el mapa completo se muestra de forma interactiva con todas las parcelas distribuidas sobre la imagen aérea.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
