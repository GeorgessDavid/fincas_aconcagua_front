'use client';

import Image from 'next/image';

const LoadingScreen = () => {
    return (
        <div className="absolute z-1000 bg-white/90 backdrop-blur-2xl flex w-full flex-col items-center justify-center top-0 h-full">
            <Image src="/logo.png" width={300} height={300} alt="fincas_logo.png" />
            <span className="text-2xl font-bold text-primary">Cargando...</span>
            <p className="tracking-wide font-semibold text-lg">Por favor, espere un momento.</p>
        </div>
    );
};

export default LoadingScreen;
