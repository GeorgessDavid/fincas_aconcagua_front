'use client';

import { Reveal } from '../Reveal/Reveal';

export default function Ubicacion() {
    return (
        <section className="w-full flex flex-col items-center lg:items-start lg:flex-row justify-around gap-4 py-12 px-8 2xl:py-32 2xl:px-32 bg-white" id="ubicacion">
            <div className="flex flex-col max-w-xl gap-4 items-start justify-center">
                <Reveal variant="fadeUp" delay={0.1}>
                    <h2 className="text-primary font-inter font-bold tracking-widest uppercase text-lg">Ubicación</h2>
                </Reveal>
                <Reveal variant="fadeUp" delay={0.2}>
                    <h1 className="text-2xl font-semibold tracking-wide font-montserrat"><span className="text-primary font-bold">Ingeniero Maschwitz</span>: naturaleza y proyección residencial</h1>
                </Reveal>
                <Reveal variant="fadeUp" delay={0.3}>
                    <p className="text-lg font-regular tracking-wide font-montserrat">
                        Fincas de Aconcagua se encuentra en Ingeniero Maschwitz, Buenos Aires, una zona elegida por quienes buscan tranquilidad, espacios verdes y una vida más conectada con la naturaleza.
                        <br /><br />
                        Su entorno residencial y su crecimiento sostenido la convierten en una ubicación atractiva tanto para proyectar una vivienda como para invertir a futuro.
                    </p>
                </Reveal>
            </div>
            <div className="flex w-full max-w-[560px] flex-col">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6176.691995982524!2d-58.760741077564!3d-34.40997477873774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9f0e1026ada7%3A0xe8b7f69e402e25c5!2sFincas%20de%20Aconcagua!5e0!3m2!1ses-419!2sar!4v1778628764065!5m2!1ses-419!2sar"
                    className="h-[280px] w-full rounded-lg xxxs:h-[320px] sm:h-[340px] md:h-[410px]"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}