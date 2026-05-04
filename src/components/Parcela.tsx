type ParcelaProps = {
    className?: string;
    numero: string;
    metrosCuadrados: number;
    status: 'Vendido' | 'Disponible' | 'Reservado';
    forma: 'rectangle' | 'square';
}

export default function Parcela({ className, metrosCuadrados, numero, forma, status }: ParcelaProps) {

    const baseClasses = 'flex flex-col items-center justify-center text-white cursor-pointer border-2 border-gray-200';
    const formaClasses = forma === 'rectangle' ? 'w-48 h32 px-8 py-4' : 'w-32 h-32 px-4 py-12';


    return (
        <div className="group relative w-full h-full">
            <div className={
                `
            ${formaClasses} 
            ${className}
            ${status === 'Disponible' ? 'bg-text-primary/30 hover:bg-text-primary/50' :
                    status === 'Reservado' ? 'bg-yellow-500/30 hover:bg-yellow-500/50' :
                        'bg-red-500/30 hover:bg-red-500/50'}
                ${baseClasses} 
                `
            } >
                <span className="text-xl font-montserrat font-bold">{metrosCuadrados} M²</span>
                <span className="text-lg font-montserrat">{numero}</span>
            </div>
            <div className="hidden w-fit h-fit group-hover:flex group-hover:absolute group-hover:flex-col items-center justify-center bg-gray-300 px-8 py-4 border-2 border-gray-400">
                <div className="flex justify-start gap-2">
                    <span className="text-black font-bold font-montserrat">Metros Cuadrados:</span>
                    <span className="text-black font-montserrat">{metrosCuadrados}</span>
                </div>
                <div className="flex justify-start gap-2">
                    <span className="text-black font-bold font-montserrat">Estado:</span>
                    <span className="text-black font-montserrat">{status}</span>
                </div>
            </div>
        </div>
    )
}