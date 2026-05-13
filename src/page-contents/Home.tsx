import { HeroSection, ParcelasSection, ConceptSection, BeneficiosSection, UbicacionSection, ContactoSection, GaleriaSection } from "@/components/HomeContents";

export default function Home() {
    return (
        <div className="flex flex-col">
            <HeroSection />
            <ConceptSection />
            <ParcelasSection />
            <BeneficiosSection />
            <GaleriaSection />
            <UbicacionSection />
            <ContactoSection />
        </div>
    );
}

