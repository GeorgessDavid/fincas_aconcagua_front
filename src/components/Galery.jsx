import { Image } from './Image';
export const Galeria = () => {
    return (
        <section id="galeria">
            <h2>Galería</h2>
            <div className="galery-container">
                <Image alt="fincas_1" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_1.jpeg" />
                <Image alt="fincas_2" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_2.jpeg" />
                <Image alt="fincas_3" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_3.jpeg" />
                <Image alt="fincas_4" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_4.jpeg" />
                <Image alt="fincas_5" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_5.jpeg" />
                <Image alt="fincas_6" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_6.jpeg" />
                <Image alt="fincas_7" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_7.jpeg" />
                <Image alt="fincas_8" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_8.jpg" />
                <Image alt="fincas_9" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_9.jpeg" />
                <Image alt="fincas_10" srcSet="https://media.fincasdeaconcagua.com.ar/fincas_10.jpeg" />
            </div>
        </section>
    )
}