import { useMediaQuery } from "../hooks/useMediaQueries";
import ZoomableImage from "./ZoomableImage";

export const Lotes = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section id="lotes">
            <h2>Lotes</h2>
            {isMobile ? 
                <>
                    <ZoomableImage src="https://media.fincasdeaconcagua.com.ar/lotes.png" alt="Lotes" height="200px" width="auto" style={{ borderRadius: '8px' }} />
                </>
            :
                <>
                    <img src="https://media.fincasdeaconcagua.com.ar/lotes.png" alt="Lotes" className="lotes-img" />
                </>
            }
            <p>
                Características principales:
                <br />
                <li>Lotes desde 1000 m², diseñados para brindarte privacidad y espacio.</li>
                <li>Ubicación privilegiada en una zona residencial vecina de barrios cerrados.</li>
                <li>Infraestructura confiable con tendido eléctrico de EDENOR.</li>
                <li>Cercanía y accesibilidad con acceso pavimentado a solo unas cuadras de la ruta 26.</li>
                <li>Barrio abierto con cerco perimetral para tu tranquilidad.</li>
                <li>Aprovechá nuestros precios de preventa y opciones de financiación.</li>
                <br />
                Fincas de Aconcagua es el lugar ideal para construir tu hogar y disfrutar de la vida que mereces. ¡Consultanos y empezá a planificar tu futuro hoy mismo!</p>
        </section>
    )
}