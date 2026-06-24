'use client';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function NotFound() {
    const { push } = useRouter();

    const handleBack = () => {
        push('/');
    }
    return (
        <div className="bg-white h-full flex flex-col items-center justify-center flex-1 gap-4 mt-12">
            <h1 className="text-primary text-9xl font-montserrat font-bold">404</h1>
            <h2 className="font-montserrat text-2xl">Lo sentimos, no encontramos esta página.</h2>
            <button className="bg-primary text-white rounded-xl py-4 px-8 text-center font-bold cursor-pointer hover:bg-primary/70 transition-all duration-300" onClick={handleBack}>Volver</button>
        </div>
    )
}