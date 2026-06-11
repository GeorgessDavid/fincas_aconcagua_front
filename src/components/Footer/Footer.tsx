'use client';
import { Facebook, Instagram, WhatsApp, Mail, OpenInNew } from '@mui/icons-material';
import { WhatsApp as WhatsAppLink, Facebook as FacebookLink, goTo, Instagram as InstagramLink, Mail as MailLink } from '@/assets/constants/links';
import { Divider } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-secondary-black w-full h-full relative bottom-0 z-50">
            <div className="w-full h-full flex flex-col-reverse gap-16 lg:flex-row items-center lg:items-start lg:gap-8 justify-between px-8 py-12 2xl:px-64 py-32">
                <div className="flex flex-col items-center lg:items-start justify-start gap-2 text-center">
                    <h2 className="text-white text-xl font-montserrat font-bold uppercase tracking-widest">Fincas de Aconcagua</h2>
                    <span className="text-white/80 text-md italic font-noto-serif">Viví la tranquilidad que te merecés</span>
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-start lg:items-center lg:gap-2">
                        <p className="text-white text-lg font-montserrat">Un proyecto de </p>
                        <span className="font-bold text-white text-lg">Urbanizadora Tres Pinos S.A. </span>

                    </div>
                    <div className="flex justify-center lg:justify-start gap-6 mt-10 w-full">
                        <IconBox title="Enviar Correo" onClick={() => goTo(MailLink)}>
                            <Mail className='!text-4xl !text-white !rounded-full !p-1.5' />
                        </IconBox>
                        <IconBox title="Enviar Mensaje" onClick={() => goTo(WhatsAppLink)}>
                            <WhatsApp className='!text-4xl !text-white !rounded-full !p-1.5' />
                        </IconBox>
                        <IconBox title="Instagram" onClick={() => goTo(InstagramLink)}>
                            <Instagram className='!text-4xl !text-white !rounded-full !p-1.5' />
                        </IconBox>
                        <IconBox title="Facebook" onClick={() => goTo(FacebookLink)}>
                            <Facebook className='!text-4xl !text-white !rounded-full !p-1.5' />
                        </IconBox>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-start gap-2 text-center">
                    <h2 className="text-white text-xl font-montserrat font-bold uppercase tracking-widest">Información</h2>
                    <Link href="#" className="text-white text-lg font-montserrat hover:text-white/50 transition-colors duration-200">Terminos y Condiciones</Link>
                    <Link href="#" className="text-white text-lg font-montserrat hover:text-white/50 transition-colors duration-200">Política de Privacidad</Link>
                    <Link href="/#contacto" className="text-white text-lg font-montserrat hover:text-white/50 transition-colors duration-200">Contacto</Link>
                    <Link href="/#concepto" className="text-white text-lg font-montserrat hover:text-white/50 transition-colors duration-200">Sobre Nosotros</Link>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-start gap-2 text-center">
                    <h2 className="text-white text-xl font-montserrat font-bold uppercase tracking-widest">Desarrollo</h2>
                    <div className="flex gap-1 text-white/80">
                        <span>Desarrollado por </span>
                        <Link href="https://www.georgesdavid.dev/" target='_blank' className="font-ubuntu cursor-pointer hover:text-white transition-all duration-300">Georges David</Link>
                    </div>
                    <Link href="https://github.com/GeorgessDavid/fincas_aconcagua_front" target="_blank" className="font-montserrat text-white/80 ">GitHub <OpenInNew sx={{ fontSize: '1.25rem', marginBottom: '2px' }} /></Link>
                </div>
            </div>
            <Divider variant="middle" sx={{ backgroundColor: '#ffffff40' }} />
            <div className="w-full flex items-center justify-center py-4">
                <span className="text-white/60 text-xs mx-4 lg:text-md text-center font-montserrat">Todos los derechos reservados © 2026 - Fincas de Aconcagua</span>
            </div>
        </footer>
    )
}

const IconBox = ({ children, title, onClick }: { children: React.ReactNode, title: string, onClick: () => void }) => {
    return (
        <div
            title={title}
            onClick={onClick}
            className="flex items-center gap-2 bg-white/10 rounded-full p-1 cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-200">
            {children}
        </div>
    )
}