type ParcelaProps = {
    className?: string;
    numero: string;
    metrosCuadrados: number;
    status: 'Vendido' | 'Disponible';
    forma: 'rectangle' | 'square';
}

export default function Parcela({ className, metrosCuadrados, numero, forma, status }: ParcelaProps) {

    const baseClasses = 'flex flex-col items-center justify-center text-white cursor-pointer border-2 border-gray-200 transition-all duration-200';
    const formaClasses = forma === 'rectangle' ? 'w-[150px] h-[64px]' : 'w-[100px] h-[128px]';


    return (
        <div className="group relative w-full h-full">
            <div className={
                `
            ${formaClasses} 
            ${className}
            ${status === 'Disponible' ? 'bg-primary/30 hover:bg-primary/80 hover:scale-105' :
                    'bg-yellow-500/30 hover:bg-yellow-500/80 hover:scale-105'}
                ${baseClasses} 
                `
            } >
                <span className="text-xl font-bold font-montserrat">{numero}</span>
                <span className="text-sm font-montserrat ">{status === 'Disponible' ? `${metrosCuadrados} M²` : 'VENDIDO'}</span>
            </div>
            <div className="hidden w-fit min-w-xs h-fit group-hover:flex z-50 group-hover:absolute top-10 left-30 group-hover:flex-col items-start justify-start bg-zinc-100 rounded-lg px-8 py-4 shadow-md shadow-gray-200 ">
                <div className="flex justify-start gap-2">
                    <span className="text-black font-bold font-montserrat">Parcela:</span>
                    <h2 className="text-black font-montserrat">{numero}</h2>
                </div>
                <div className="flex justify-start gap-2">
                    <span className="text-black font-bold font-montserrat">Metros Cuadrados:</span>
                    <span className="text-black font-montserrat">{metrosCuadrados}</span>
                </div>
                <div className="flex justify-start gap-2">
                    <span className="text-black font-bold font-montserrat">Estado:</span>
                    <span className={`text-black font-montserrat font-semibold ${status === 'Disponible' ? 'text-green-800' : 'text-yellow-800'}`}>{status}</span>
                </div>
            </div>
        </div>
    )
}