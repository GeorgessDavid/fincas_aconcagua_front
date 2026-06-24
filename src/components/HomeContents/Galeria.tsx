'use client';

import { Reveal } from '../Reveal/Reveal';
import { Backdrop, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import { useImages } from '@/hooks/useImages';

type ImageProps = {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

const Galeria = () => {
    const is3xl: boolean = useMediaQuery('(min-width: 1600px');
    const isMd: boolean = useMediaQuery('(min-width: 1200px)');
    const limit = is3xl ? 8 : isMd ? 8 : 6
    const { images, loading } = useImages(limit);

    return (
        <section className="w-full flex flex-col items-center justify-start bg-zinc-200/60 py-8 lg:py-24" id="galeria">
            <Reveal variant='fadeUp' delay={0.1}>
                <h2 className="font-montserrat mb-4 font-semibold text-3xl text-black">Galería</h2>
            </Reveal>
            <Reveal variant='fadeUp' delay={0.15} className="mb-8">
                <p className="w-auto mx-4 text-center font-montserrat font-regular text-xl text-black/80 tracking-wide lg:max-w-3xl">Recorré visualmente el desarrollo y descubrí la amplitud del terreno, su entorno natural y los avances que acompañan al crecimiento.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 2xl:gap-6 gap-y-4 ">
                {!loading &&
                    images?.map((image, index) => {
                        return (
                            <Reveal variant="fadeIn" delay={index * 0.1} key={index} >
                                <ImageCard src={image.link} alt={image.title} height={400} width={400} />
                            </Reveal>
                        )
                    })
                }
            </div>
        </section>
    )
}

const ImageCard = ({ src, alt, width, height }: ImageProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [zoomed, setZoomed] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
        setZoomed(false);
    }

    const handleClose = () => {
        setOpen(false);
        setZoomed(false);
    }
    return (
        <div className="w-full">
            <div className="w-72 h-72 2xl:w-80 2xl:h-80 relative group cursor-pointer rounded-xl overflow-hidden" onClick={handleOpen}>
                <Image src={src} alt={alt} width={width} height={height} className="w-72 h-72 2xl:w-80 2xl:h-80 3xl:w-100 3xl:h-100  absolute object-cover inset-0 rounded-2xl group-hover:scale-105 transition-all duration-300" />
            </div>
            <Backdrop sx={(theme) => ({
                zIndex: theme.zIndex.drawer + 1,
                width: '100%'
            })} open={open} onClick={handleClose}>
                <div
                    className="w-[90%] lg:w-1/2 flex justify-center items-center h-3xl"
                    onClick={(event) => {
                        event.stopPropagation();
                        setZoomed((prev) => !prev);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault();
                            setZoomed((prev) => !prev);
                        }
                    }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className={`w-[90%]! h-full object-contain transition-transform duration-300 ${zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
                    />
                </div>
            </Backdrop>
        </div>
    )
}
export default Galeria;
