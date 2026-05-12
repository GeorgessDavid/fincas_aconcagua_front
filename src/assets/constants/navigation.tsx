interface LinkInterface {
    title: string;
    path: string;
}

class Link implements LinkInterface{
    title: string;
    path: string;

    constructor(title: string, path: string){
        this.title = title;
        this.path = path;
    }
}

export const Concepto = new Link('Concepto', '/#concepto');
export const Parcelas = new Link('Parcelas', '/#parcelas');
export const Caracteristicas = new Link('Infraestructura', '/#caracteristicas');
export const Galeria = new Link('Galería', '/#galeria');
export const Ubicacion = new Link ('Ubicación', '/#ubicacion')
