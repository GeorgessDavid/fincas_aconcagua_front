import { useMediaQuery } from "../hooks/useMediaQueries";
import ZoomableImage from "./ZoomableImage";

export const Lotes = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <section id="lotes">
            <h2>Parcelas</h2>
            {isMobile ? 
                <>
                    <ZoomableImage src="https://media.fincasdeaconcagua.com.ar/lotes.png" alt="Lotes" height="200px" width="auto" style={{ borderRadius: '8px' }} />
                </>
            :
                <>
                    <ZoomableImage src="https://media.fincasdeaconcagua.com.ar/lotes.png" alt="Lotes" height="400px" width="auto" style={{ borderRadius: '0', marginBottom: '2rem' }} />
                </>
            }
            <p>
                Características principales:
                <br />
                <li>Barrio abierto con cerco perimetral.</li>
                <li>Ubicación privilegiada en una zona residencial vecina de barrios cerrados.</li>
                <li>Cercanía y accesibilidad: acceso pavimentado, 2km desde RP. 26.</li>
                <li>Parcelas desde 1000 m², diseñadas para brindarte privacidad y espacio.</li>
                <li>Infraestructura confiable con tendido eléctrico de media y baja tensión (EDENOR).</li>
                <li>Aprovechá nuestras opciones de financiación.</li>
                <br />
                Fincas de Aconcagua es el lugar ideal para construir tu hogar y disfrutar de la vida que mereces. ¡Consultanos y empezá a planificar tu futuro hoy mismo!</p>
        </section>
    )
}