import { Image } from './Image';
import { useImages } from '../hooks/useImages';
export const Galeria = () => {
    const { loading, images } = useImages();
    return (
        <section id="galeria">
            <h2>Galería</h2>
            <div className="galery-container">
                {loading && <p>Cargando...</p>}
                {images.map((image, index) => ( <Image key={index} alt={image.title} srcSet={image.link} /> ))}
            </div>
        </section>
    )
}