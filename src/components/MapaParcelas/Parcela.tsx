type ParcelaProps = {
    className?: string;
    numero: string;
    metrosCuadrados: number;
    status: 'Vendido' | 'Disponible';
    forma: 'rectangle' | 'square';
    fraccion: 1 | 2
}

export default function Parcela({ className, metrosCuadrados, numero, forma, status, fraccion }: ParcelaProps) {

    const baseClasses = 'flex flex-col items-center justify-center text-white cursor-pointer border-2 border-gray-200 transition-all duration-200';
    const formaClasses = forma === 'rectangle' ? 'w-full md:py-3 xl:py-0.5 2xl:py-2 3xl:py-4' : 'w-full h-full';


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
                {/* <span className="text-xl font-bold font-montserrat">{numero}</span>
                <span className="text-sm font-montserrat ">{status === 'Disponible' ? 'DISPONIBLE' : 'VENDIDO'}</span> */}
                <span className="text-sm font-montserrat">Parcela</span>
                <span className="text-2xl font-bold font-montserrat">{numero}</span>
            </div>
            <div className={`hidden w-fit ${status === 'Disponible' ? 'bg-green-100 border-l-6 border-l-primary' : 'bg-amber-100 border-l-6 border-l-accent'} min-w-xs h-fit group-hover:flex z-50 group-hover:absolute top-10 left-30 group-hover:flex-col items-start justify-start rounded-lg px-8 py-4`}>
                <div className="flex justify-start gap-2">
                    <span className="text-black font-bold font-montserrat">Parcela:</span>
                    <h2 className="text-black font-montserrat">{numero}</h2>
                </div>
                <ParcelaDatadisplay label="Fracción" value={fraccion}/>
                <div className="flex justify-start gap-2">
                    <span className="text-black font-bold font-montserrat">Metros Cuadrados:</span>
                    <span className="text-black font-montserrat">{metrosCuadrados} M²</span>
                </div>
                <ParcelaDatadisplay label="Estado" value={status} />
            </div>
        </div>
    )
}

const ParcelaDatadisplay = ({label, value}: {label: string, value: string | number}) => {
    return (
        <div className="flex justify-start gap-2">
            <span className="text-black font-bold font-montserrat">{label}: </span>
            <span className="text-black font-montserrat">{value}</span>
        </div>
    )
}