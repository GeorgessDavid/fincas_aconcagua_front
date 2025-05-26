import { useMediaQuery } from '@mui/material';
import { MobileHeader } from './MobileHeader';
import { useMediaScroll } from '../hooks/useMediaScroll';

export const Header = () => {
    const { scrolled } = useMediaScroll(50);
    const mobile = useMediaQuery('(max-width: 768px)');

    if (mobile) return <MobileHeader/>

    return (
        <header className={scrolled ? 'scrolled' : null}>
            <nav>
                <ul>
                    <li><a href="/#lotes">Parcelas</a></li>
                    <li><a href="/#galeria">Galería</a></li>
                </ul>
            </nav>
            <a href='/'><img src='/fincas_cut.svg' /></a>
            <nav>
                <ul>
                    <li><a href="/#contacto">Contacto</a></li>
                    <li><a href="/#ubicacion">Ubicación</a></li>
                </ul>
            </nav>
        </header>
    )
}