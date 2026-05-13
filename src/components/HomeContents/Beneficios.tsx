'use client';

import { Reveal } from '../Reveal/Reveal';

type BenefitProps = {
    icon: string;
    title: string;
    description: string;
}

export default function Beneficios() {
    return (
        <section className="px-64 relative my-16 w-full flex flex-col items-center justify-center gap-8 bg-zinc-100 py-28" id="caracteristicas">
            <Reveal variant="fadeUp" delay={0.1}>
                <h2 className="text-4xl font-montserrat text-main-black font-semibold">Infraestructura</h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.2}>
                <p className="text-lg font-montserrat text-main-black/80 font-medium max-w-4xl text-center tracking-wide">Fincas de Aconcagua reúne atributos pensados para quienes buscan espacio, tranquilidad y la posibilidad de proyectar su vivienda en un entorno residencial en crecimiento.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                <Reveal variant="slideLeft" delay={0.3}>
                    <BenefitsCard benefit={{ icon: 'landscape', title: 'Parcelas residenciales', description: 'Espacios amplios para proyectar una vivienda propia, con libertad de diseño y una mayor conexión con el entorno.' }} />
                </Reveal>
                <Reveal variant="fadeUp" delay={0.28}>
                    <BenefitsCard benefit={{ icon: 'forest', title: 'Entorno natural', description: 'Un ambiente tranquilo, rodeado de verde, ideal para quienes buscan alejarse del ritmo urbano sin perder conexión.' }} />
                </Reveal>
                <Reveal variant="slideRight" delay={0.3} >
                    <BenefitsCard benefit={{ icon: 'road', title: 'Acceso pavimentado', description: 'Acceso fácil y cercano a 2km desde RP. 26.' }} />
                </Reveal>
                <Reveal variant="slideLeft" delay={0.35}>
                    <BenefitsCard benefit={{ icon: 'light', title: 'Alumbrado público', description: 'Infraestructura confiable con tendido eléctrico de media y baja tensión (EDENOR).' }} />
                </Reveal>
                <Reveal variant="fadeUp" delay={0.3}>
                    <BenefitsCard benefit={{ icon: 'fence', title: 'Cercado perimetral', description: 'Delimitación clara del predio, aportando orden, estructura y privacidad al desarrollo.' }} />
                </Reveal>
                <Reveal variant="slideRight" delay={0.34}>
                    <BenefitsCard benefit={{ icon: 'trending_up', title: 'Proyección de crecimiento', description: 'Una oportunidad para quienes buscan construir a futuro o invertir en una zona residencial en evolución.' }} />
                </Reveal>
            </div>
        </section>
    )
}

const BenefitsCard = ({ benefit }: { benefit: BenefitProps }) => {
    return (
        <div className="bg-white h-full p-8 rounded-xl border border-zinc-300/30 hover:border-primary/30 transition-colors group duration-200 shadow-md">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined  text-primary!">{benefit.icon}</span>
            </div>
            <h3 className="font-montserrat text-2xl font-semibold text-main-black mb-3">{benefit.title}</h3>
            <p className="text-base font-montserrat text-main-black/80 font-medium">{benefit.description}</p>
        </div>
    )
}