import { HeroSection, ParcelasSection, ConceptSection, BeneficiosSection, UbicacionSection } from "@/components/HomeContents";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-16">
            <HeroSection />
            <ConceptSection />
            <ParcelasSection />
            <BeneficiosSection />
            <UbicacionSection />
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
        <div className="max-w-sm min-w-24 flex flex-col items-center justify-start gap-6 bg-white border-b-4 border-b-transparent rounded-lg w-1/3 px-4 py-8 shadow-md transition-all duration-200 hover:border-b-primary hover:cursor-pointer hover:translate-y-[-4px]">
            <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary !text-4xl">{service.icon}</span>
            </div>
            <h2 className="text-2xl font-montserrat uppercase tracking-wide text-primary font-extrabold">{service.title}</h2>
            <p className="text-base font-montserrat tracking-wide text-black/80 font-semibold text-center">{service.description}</p>
        </div>
    )
}
