import { Image } from './Image';
import { useImages } from '../hooks/useImages';
import { LoadingView } from './LoadingView'
export const Galeria = () => {
    const { loading, images, progress } = useImages();
    return (
        <section id="galeria">
            {
                loading ?
                    <LoadingView progress={progress}/>
                    :
                    <>
                        <h2>Galería</h2>
                        <div className="galery-container">
                            {images.map((image, index) => (<Image key={index} alt={image.title} srcSet={image.link} />))}
                        </div>
                    </>
            }
        </section>
    )
}