import { useState, useEffect } from 'react';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 870) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
    
    return (
        <header className={scrolled ? 'scrolled' : null}>
            <nav>
                <ul>
                    <li><a href="#lotes">Lotes</a></li>
                    <li><a href="#">Galería</a></li>
                    <li><a href="#">Novedades</a></li>
                </ul>
            </nav>
            <a href='#'><img src='/fincas_cut.svg' /></a>
            <nav>
                <ul>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Ubicación</a></li>
                </ul>
            </nav>
        </header>
    )
}