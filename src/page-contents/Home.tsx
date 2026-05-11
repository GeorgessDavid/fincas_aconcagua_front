import { HeroSection, ParcelasSection } from "@/components/HomeContents";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-16">
            <HeroSection />
            <ParcelasSection />

            <div className="w-full h-screen bg-zinc-100 flex flex-col items-center justify-center gap-4">
                <h1 className="text-5xl font-montserrat uppercase tracking-widest text-primary font-extrabold">Servicios</h1>
                <div className="flex gap-4">
                    <ServicesCard
                        service={{
                            title: "Agua potable",
                            description: "Agua potable",
                            icon: "water"
                        }}
                    />
                    <ServicesCard
                        service={{
                            title: "Alumbrado público",
                            description: "Infraestructura confiable con tendido eléctrico de media y baja tensión (Edenor)",
                            icon: "light"
                        }}
                    />
                    <ServicesCard
                        service={{
                            title: "Cercado perimetral",
                            description: "Cercado perimetral",
                            icon: "outdoor_garden"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}


const ServicesCard = ({ service }: {
    service: {
        title: string;
        description: string;
        icon: string;
    }
}) => {
    return (
        <div className="max-w-lg min-w-24 flex flex-col items-center justify-center gap-4 bg-white rounded-lg w-1/3 px-4 py-8 shadow-md transition-all duration-200 hover:border-b-4 hover:border-b-primary hover:translate-y-0.5 hover:cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary !text-4xl">{service.icon}</span>
            </div>
            <h2 className="text-2xl font-montserrat uppercase tracking-wide text-primary font-extrabold">{service.title}</h2>
            <p className="text-base font-montserrat tracking-wide text-primary">{service.description}</p>
        </div>
    )
}
