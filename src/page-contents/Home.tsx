import MapaParcelas from "@/components/MapaParcelas/MapaParcelas";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-16">
            <h1 className="text-7xl font-montserrat uppercase tracking-widest text-text-primary font-extrabold">Fincas de Aconcagua</h1>
            <h2 className="text-2xl font-montserrat uppercase tracking-wide text-text-primary font-extrabold">Viví la tranquilidad que merecés</h2>
            <div className="px-64 relative my-16 w-full">
                <MapaParcelas />
            </div>
        </div>
    );
}
