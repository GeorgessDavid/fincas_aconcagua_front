import { Image } from './Image';
export const Galeria = () => {
    return (
        <section id="galeria">
            <h2>Galería</h2>
            <div className="galery-container">
                <Image alt="fincas_1" srcSet="/public/fincas_imgs/fincas_1.jpeg" />
                <Image alt="fincas_2" srcSet="/public/fincas_imgs/fincas_2.jpeg" />
                <Image alt="fincas_3" srcSet="/public/fincas_imgs/fincas_3.jpeg" />
                <Image alt="fincas_4" srcSet="/public/fincas_imgs/fincas_4.jpeg" />
                <Image alt="fincas_5" srcSet="/public/fincas_imgs/fincas_5.jpeg" />
                <Image alt="fincas_6" srcSet="/public/fincas_imgs/fincas_6.jpeg" />
                <Image alt="fincas_7" srcSet="/public/fincas_imgs/fincas_7.jpeg" />
                <Image alt="fincas_8" srcSet="/public/fincas_imgs/fincas_8.jpg" />
                <Image alt="fincas_9" srcSet="/public/fincas_imgs/fincas_9.jpeg" />
                <Image alt="fincas_10" srcSet="/public/fincas_imgs/fincas_10.jpeg" />
            </div>
        </section>
    )
}