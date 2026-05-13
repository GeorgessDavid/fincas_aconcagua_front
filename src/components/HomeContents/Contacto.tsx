'use client';

import { Reveal } from '../Reveal/Reveal';
import { TextField } from '@mui/material';


const Contacto = () => {
    return (
        <section className="w-full flex flex-row justify-around bg-zinc-50 py-32 px-42">
            <Reveal variant="slideLeft" delay={0.1}>
                <div className="flex flex-col items-start max-w-3xl gap-6">
                    <h2 className="font-inter tracking-widest font-bold text-xl uppercase text-primary">Contacto</h2>
                    <h3 className="font-montserrat tracking-wide font-semibold text-3xl">Empezá a proyectar tu lugar en Maschwitz</h3>
                    <p className="tracking-wide font-regular text-black/80 text-lg">Solicitá información sobre las parcelas disponibles en Fincas de Aconcagua y conocé más sobre esta oportunidad para construir o invertir en un entorno residencial.</p>
                    <div className="flex flex-col mt-8 gap-6">
                        <div className="flex justify-start gap-6">
                            <span className="material-symbols-outlined text-primary!">location_on</span>
                            <span className="font-inter">Aconcagua 450, Maquinista Savio, Buenos Aires.</span>
                        </div>
                        <div className="flex justify-start gap-6">
                            <span className='material-symbols-outlined text-primary!'>mail</span>
                            <span className="font-inter">u3pinfo@gmail.com</span>
                        </div>
                    </div>
                    <button className="px-12 py-4 bg-transparent border-2 border-primary text-primary rounded-xl font-bold cursor-pointer hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200">Contactar por WhatsApp</button>
                </div>
            </Reveal>
            <Reveal variant="slideRight" delay={0.1}>
                <form className="flex flex-col w-3xl gap-6 bg-white border-2 border-outlined border-gray-400/20 shadow-xl rounded-xl px-8 py-8">
                    <TextField variant="filled" color='success' margin="normal" type='text' size='small' label='Nombre' fullWidth required />
                    <TextField variant="filled" color='success' margin="normal" type='text' size='small' label='Apellido' fullWidth required />
                    <TextField variant="filled" color='success' margin="normal" type='text' size='small' label='Correo electrónico' fullWidth required />
                    <TextField variant="filled" color='success' margin="normal" type='text' size='small' label='Teléfono' fullWidth required />
                    <TextField variant="filled" color='success' margin="normal" type='text' multiline rows={4} size='small' label='Mensaje' fullWidth required />
                    <button className="w-full bg-primary rounded-2xl font-bold text-white font-montserrat py-4 cursor-pointer">Solicitar información</button>
                </form>
            </Reveal>
        </section>
    )
}

export default Contacto;