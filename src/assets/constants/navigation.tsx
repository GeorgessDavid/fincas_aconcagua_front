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

export const Inicio = new Link('Inicio', '/');
export const Parcelas = new Link('Parcelas', '/#parcelas');
export const Servicios = new Link('Servicios', '/#servicios');
export const Galeria = new Link('Galería', '/#galeria');
