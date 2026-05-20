'use client';
import { Facebook, Instagram, WhatsApp, Mail } from '@mui/icons-material';
import { Divider } from '@mui/material';
export default function Footer() {
    return (
        <footer className="bg-secondary-black w-full h-full relative bottom-0 z-50">
            <div className="w-full h-full flex flex-col lg:flex-row items-center lg:items-start gap-8 justify-between px-8 py-12 2xl:px-64 py-32">
                <div className="flex flex-col items-center lg:items-start justify-start gap-2 text-center">
                    <h2 className="text-white text-xl font-montserrat font-bold uppercase tracking-widest">Fincas de Aconcagua</h2>
                    <span className="text-white/80 text-md italic font-noto-serif">Viví la tranquilidad que te merecés</span>
                    <p className="text-white text-lg font-montserrat">Un proyecto de <strong>Urbanizadora Tres Pinos S.A.</strong></p>
                    <div className="flex justify-center lg:justify-start gap-6 mt-10 w-full">
                        <IconBox title="Enviar Correo" onClick={() => console.log('Enviar Correo')}>
                            <Mail className='!text-4xl !text-white !rounded-full !p-1.5' />
                        </IconBox>
                        <IconBox title="Enviar Mensaje" onClick={() => console.log('Enviar Mensaje')}>
                            <WhatsApp className='!text-4xl !text-white !rounded-full !p-1.5' />
                        </IconBox>
                        <IconBox title="Instagram" onClick={() => console.log('Instagram')}>
                            <Instagram className='!text-4xl !text-white !rounded-full !p-1.5' />
                        </IconBox>
                        <IconBox title="Facebook" onClick={() => console.log('Facebook')}>
                            <Facebook className='!text-4xl !text-white !rounded-full !p-1.5' />
                        </IconBox>
                    </div>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-start gap-2 text-center">
                    <h2 className="text-white text-xl font-montserrat font-bold uppercase tracking-widest">Información</h2>
                    <a href="#" className="text-white text-lg font-montserrat hover:text-white/50 transition-colors duration-200">Terminos y Condiciones</a>
                    <a href="#" className="text-white text-lg font-montserrat hover:text-white/50 transition-colors duration-200">Política de Privacidad</a>
                    <a href="#" className="text-white text-lg font-montserrat hover:text-white/50 transition-colors duration-200">Contacto</a>
                    <a href="#" className="text-white text-lg font-montserrat hover:text-white/50 transition-colors duration-200">Sobre Nosotros</a>
                </div>
                <div className="flex flex-col items-center lg:items-start justify-start gap-2 text-center">
                    <h2 className="text-white text-xl font-montserrat font-bold uppercase tracking-widest">Desarrollo</h2>
                    {/* TODO => Include Developed by Toia and GeorgessDavid */}
                </div>
            </div>
            <Divider variant="middle" sx={{ backgroundColor: '#ffffff40' }} />
            <div className="w-full flex items-center justify-center py-4">
                <span className="text-white/60 text-md font-noto-serif">Todos los derechos reservados © 2026 - Fincas de Aconcagua</span>
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