'use client';

import { Reveal } from '../Reveal/Reveal';
import { TextField, useMediaQuery, Button } from '@mui/material';
import { WhatsApp } from '@/assets/constants/links';
import { useContact, Contact } from '@/hooks/useContact';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Contacto = () => {
    const goToWhatsApp = () => {
        window.open(WhatsApp);
    }

    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    const { sendContact, sent, error, loading } = useContact();
    const isMobile = useMediaQuery('(max-width: 768px)');

    useEffect(() => {
        if (sent) toast(<Message
            materialIcon='verified'
            text="Mensaje enviado con éxito!"
            iconClasses='text-base! text-green-400'
            textClasses='text-green-400'
        />, {
            hideProgressBar: true,
            closeButton: false,
            position: 'bottom-center',
            style: !isMobile ? undefined : { position: 'fixed', bottom: '5rem', maxWidth: '90%' }
        })
    }, [sent, isMobile])

    useEffect(() => {
        if (error) toast(<Message materialIcon='cancel' text={error} iconClasses='text-base! text-red-500' textClasses='text-red-500 font-bold' />, {
            hideProgressBar: true,
            closeButton: false,
            position: 'bottom-center',
            style: !isMobile ? undefined : { position: 'fixed', bottom: '5rem', maxWidth: '90%' }
        })
    }, [error, isMobile])



    return (
        <section className="w-full flex flex-col gap-4  lg:flex-row justify-around lg:justify-between bg-zinc-50 py-24 px-8 2xl:py-32 2xl:px-28" id="contacto">
            <Reveal variant="slideLeft" delay={0.1}>
                <div className="flex flex-col items-start max-w-3xl gap-6">
                    <h2 className="font-inter tracking-widest font-bold text-xl uppercase text-primary">Contacto</h2>
                    <h3 className="font-montserrat tracking-wide font-semibold text-3xl">Empezá a proyectar tu hogar</h3>
                    <p className="font-regular tracking-wide  text-black/80 text-lg">Solicitá información sobre las parcelas disponibles en Fincas de Aconcagua y conocé más sobre esta oportunidad para construir o invertir en un entorno residencial.</p>
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
                    <button onClick={goToWhatsApp} className="px-12 py-4 bg-transparent border-2 border-primary text-primary rounded-xl font-bold cursor-pointer hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200">Contactar por WhatsApp</button>
                </div>
            </Reveal>
            <Reveal variant="slideRight" delay={0.1}>
                <form className="flex flex-col 3xl:w-3xl lg:w-xl gap-6 bg-white border-2 border-outlined border-gray-400/20 shadow-xl rounded-xl px-8 py-8" onSubmit={handleSubmit(values => {
                    sendContact(values as Contact);
                })}>
                    <TextField variant="filled" color='success' margin="normal" type='text' size='small' label='Nombre' fullWidth
                        {...register('name', {
                            required: 'Debe introducir su nombre.',
                            pattern: {
                                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s\'\-]+$/i,
                                message: 'El campo no puede contener números.'
                            }
                        })}
                        error={!!errors.name}
                        helperText={errors?.name?.message as string}
                    />
                    <TextField variant="filled" color='success' margin="normal" type='text' size='small' label='Apellido' fullWidth
                        {...register('lastname', {
                            required: 'Debe introducir su apellido.',
                            pattern: {
                                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s\'\-]+$/i,
                                message: 'El campo no puede contener números.'
                            }
                        })}
                        error={!!errors.lastname}
                        helperText={errors?.lastname?.message as string}
                    />
                    <TextField variant="filled" color='success' margin="normal" type='email' size='small' label='Correo electrónico' fullWidth
                        {...register('email', {
                            required: 'Debe introducir una dirección de correo electrónico.',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "La dirección de correo electrónico es inválida."
                            }
                        })}
                        error={!!errors.email}
                        helperText={errors?.email?.message as string}
                    />
                    <TextField variant="filled" color='success' margin="normal" type='text' size='small' label='Teléfono' fullWidth
                        {...register('phone', {
                            required: 'Debe introducir un número de teléfono',
                            pattern: {
                                value: /^\+?[\d\s\-().]{7,15}$/,
                                message: "Número de teléfono inválido",
                            }
                        })}
                        error={!!errors.phone}
                        helperText={errors?.phone?.message as string}
                    />
                    <TextField variant="filled" color='success' margin="normal" type='text' multiline rows={4} size='small' label='Mensaje' fullWidth
                        {...register('message', { required: 'Este campo es obligatorio.' })}
                        error={!!errors.message}
                        helperText={errors?.message?.message as string}
                    />
                    <Button type='submit' color='success' variant='contained' disabled={loading} loading={loading}>Solicitar información</Button>
                </form>
            </Reveal>
        </section>
    )
}

const Message = ({ materialIcon, text, textClasses, iconClasses }: { materialIcon: string, text: string, textClasses: string, iconClasses: string }) => {
    return (
        <div className="flex items-center justify-center w-full gap-2 font-montserrat">
            <span className={`material-symbols-outlined ${iconClasses}`}>{materialIcon}</span>
            <span className={`${textClasses} text-sm tracking-wide`}>{text}</span>
        </div>
    )
}
export default Contacto;