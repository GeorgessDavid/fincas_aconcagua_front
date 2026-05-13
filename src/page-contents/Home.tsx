import { HeroSection, ParcelasSection, ConceptSection, BeneficiosSection, UbicacionSection, ContactoSection } from "@/components/HomeContents";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-16">
            <HeroSection />
            <ConceptSection />
            <ParcelasSection />
            <BeneficiosSection />
            <UbicacionSection />
            <ContactoSection />
        </div>
    );
}

