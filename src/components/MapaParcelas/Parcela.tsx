type ParcelaProps = {
    className?: string;
    numero: string;
    metrosCuadrados: number;
    status: 'Vendido' | 'Disponible';
    forma: 'rectangle' | 'square';
    rightSector: boolean;
    fraccion: 1 | 2
}

export default function Parcela({ className, metrosCuadrados, numero, forma, status, fraccion, rightSector }: ParcelaProps) {

    const baseClasses = 'flex  text-white cursor-pointer border-2 border-gray-200 transition-all duration-200';
    const formaClasses = forma === 'rectangle' ? 'w-full md:py-3 xl:py-0.5 2xl:py-2 3xl:py-4' : 'w-full h-full';
    const flexProperties = forma === 'square' ? 'flex-col items-center justify-center': 'lg:flex-row lg:items-center lg:justify-evenly 3xl:flex-col 3xl:items-center 3xl:justify-center';

    return (
        <div className="group relative w-full h-full">
            <div className={
                `
            ${formaClasses} 
            ${className}
            ${flexProperties}
            ${status === 'Disponible' ? 'bg-primary/30 hover:bg-primary/80 hover:scale-105' :
                    'bg-yellow-500/30 hover:bg-yellow-500/80 hover:scale-105'}
                ${baseClasses} 
                `
            } >
                {/* <span className="text-xl font-bold font-montserrat">{numero}</span>
                <span className="text-sm font-montserrat ">{status === 'Disponible' ? 'DISPONIBLE' : 'VENDIDO'}</span> */}
                <span className="text-sm font-montserrat 3xl:block">Parcela</span>
                <span className="text-2xl font-bold font-montserrat">{numero}</span>
            </div>
            <div className={`hidden w-fit ${status === 'Disponible' ? 'bg-green-100 border-l-6 border-l-primary' : 'bg-amber-100 border-l-6 border-l-accent'} min-w-xs h-fit group-hover:flex z-50 group-hover:absolute ${rightSector ? 'top-10 right-20' :'top-10 left-30'} group-hover:flex-col items-start justify-start rounded-lg px-4 py-4`}>
                <div className="flex justify-start gap-2">
                    <span className="text-black font-bold font-montserrat">Parcela:</span>
                    <h2 className="text-black font-montserrat">{numero}</h2>
                </div>
                <ParcelaDatadisplay label="Fracción" value={fraccion}/>
                <div className="flex justify-start gap-1 2xl:gap-2">
                    <span className="text-black font-bold font-montserrat">Metros Cuadrados:</span>
                    <span className="text-black font-montserrat">{metrosCuadrados} m²</span>
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