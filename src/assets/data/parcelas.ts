export type ParcelaType = {
    numero: string;
    metrosCuadrados: number;
    status: 'Vendido' | 'Disponible';
    forma: 'rectangle' | 'square';
    fraccion: 1 | 2;
}

export type ParcelaData = {
    topLimiter: string;
    bottomLimiter: string;
    leftLimiter: string;
    rightLimiter: string;
    sectorImage?: string;
    izquierda: ParcelaType[];
    derecha: ParcelaType[];
    center?: ParcelaType[];
}

class Parcela implements ParcelaType {
    numero: string;
    metrosCuadrados: number;
    status: 'Vendido' | 'Disponible';
    forma: 'rectangle' | 'square';
    fraccion: 1 | 2;
    constructor(numero: string, metrosCuadrados: number, status: 'Vendido' | 'Disponible', forma: 'rectangle' | 'square', fraccion: 1 | 2) {
        this.numero = numero;
        this.metrosCuadrados = metrosCuadrados;
        this.status = status;
        this.forma = forma;
        this.fraccion = fraccion;
    }
}

export const PARCELAS_SECTOR_A: ParcelaData = {
    sectorImage: '/fincas_air_sector_a.png',
    topLimiter: 'Calle Charrúa',
    bottomLimiter: 'Sector E',
    leftLimiter: 'Calle Aconcagua',
    rightLimiter: 'Sector B',
    izquierda: [
        {
            numero: '38',
            metrosCuadrados: 1074.02,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '37',
            metrosCuadrados: 1067.70,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '36',
            metrosCuadrados: 1030.60,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '35',
            metrosCuadrados: 1030.60,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '34',
            metrosCuadrados: 1074.40,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        }
    ],
    derecha: [
        {
            numero: '29',
            metrosCuadrados: 1028.59,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '30',
            metrosCuadrados: 1032.13,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '31',
            metrosCuadrados: 1030.60,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '32',
            metrosCuadrados: 1030.60,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '33',
            metrosCuadrados: 1074.40,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        }
    ]
}

export const PARCELAS_SECTOR_B: ParcelaData = {
    sectorImage: '/fincas_air_sector_b.png',
    topLimiter: 'Calle Charrúa',
    bottomLimiter: 'Sector F',
    leftLimiter: 'Sector A',
    rightLimiter: 'Sector C',
    izquierda: [
        {
            numero: '28',
            metrosCuadrados: 1072.34,
            status: 'Vendido',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '27',
            metrosCuadrados: 1000.49,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '26',
            metrosCuadrados: 1002.43,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        }
    ],
    derecha: [
        {
            numero: '20',
            metrosCuadrados: 1016.43,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '21',
            metrosCuadrados: 1018.57,
            status: 'Vendido',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '22',
            metrosCuadrados: 1018.57,
            status: 'Vendido',
            forma: 'rectangle',
            fraccion: 1
        }
    ],
    center: [
        { numero: '25', metrosCuadrados: 1257.43, status: 'Disponible', forma: 'square', fraccion: 1 },
        { numero: '24', metrosCuadrados: 1209.00, status: 'Disponible', forma: 'square', fraccion: 1 },
        { numero: '23', metrosCuadrados: 1161.44, status: 'Disponible', forma: 'square', fraccion: 1 }
    ]
}

export const PARCELAS_SECTOR_C: ParcelaData = {
    sectorImage: '/fincas_air_sector_c.png',
    topLimiter: 'Calle Charrúa',
    bottomLimiter: 'Sector G',
    leftLimiter: 'Sector B',
    rightLimiter: 'Sector D',
    izquierda: [
        {
            numero: '19',
            metrosCuadrados: 1016.43,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '18',
            metrosCuadrados: 1000.49,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '17',
            metrosCuadrados: 1032.13,
            status: 'Vendido',
            forma: 'rectangle',
            fraccion: 1
        }
    ],
    derecha: [
        {
            numero: '11',
            metrosCuadrados: 1016.43,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '12',
            metrosCuadrados: 1000.49,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '13',
            metrosCuadrados: 1002.43,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        }
    ],
    center: [
        { numero: '16', metrosCuadrados: 1161.44, status: 'Disponible', forma: 'square', fraccion: 1 },
        { numero: '15', metrosCuadrados: 1209.00, status: 'Disponible', forma: 'square', fraccion: 1 },
        { numero: '14', metrosCuadrados: 1257.43, status: 'Disponible', forma: 'square', fraccion: 1 }
    ]
}

export const PARCELAS_SECTOR_D: ParcelaData = {
    sectorImage: '/fincas_air_sector_d.png',
    topLimiter: 'Calle Charrúa',
    bottomLimiter: 'Sector H',
    rightLimiter: 'Calle Felipe Flynt',
    leftLimiter: 'Sector C',
    izquierda: [
        {
            numero: '10',
            metrosCuadrados: 1005.36,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '09',
            metrosCuadrados: 1039.74,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '08',
            metrosCuadrados: 1026.80,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '07',
            metrosCuadrados: 1026.80,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        },
        {
            numero: '06',
            metrosCuadrados: 1026.80,
            status: 'Disponible',
            forma: 'rectangle',
            fraccion: 1
        }
    ],
    derecha: [
        new Parcela('01', 1054.50, 'Disponible', 'rectangle', 1),
        new Parcela('02', 1083.56, 'Disponible', 'rectangle', 1),
        new Parcela('03', 1030.77, 'Disponible', 'rectangle', 1),
        new Parcela('04', 1029.60, 'Disponible', 'rectangle', 1),
        new Parcela('05', 1078.12, 'Disponible', 'rectangle', 1),
    ]
}

export const PARCELAS_SECTOR_E: ParcelaData = {
    sectorImage: '/fincas_air_sector_e.png',
    topLimiter: 'Sector A',
    bottomLimiter: 'Calle Los Pinos',
    leftLimiter: 'Calle Aconcagua',
    rightLimiter: 'Sector F',
    izquierda: [
        new Parcela('35', 1000.40, 'Disponible', 'rectangle', 2),
        new Parcela('36', 1000.40, 'Disponible', 'rectangle', 2)
    ],
    derecha: [
        new Parcela('31', 1000.40, 'Disponible', 'rectangle', 2),
        new Parcela('30', 1000.40, 'Disponible', 'rectangle', 2)
    ],
    center: [
        new Parcela('34', 1000.40, 'Disponible', 'square', 2),
        new Parcela('33', 1000.40, 'Disponible', 'square', 2),
        new Parcela('32', 1000.40, 'Disponible', 'square', 2),
    ]
}

export const PARCELAS_SECTOR_F: ParcelaData = {
    sectorImage: '/fincas_air_sector_f.png',
    topLimiter: 'Sector B',
    bottomLimiter: 'Calle Los Pinos',
    leftLimiter: 'Sector E',
    rightLimiter: 'Sector G',
    center: [
        new Parcela('25', 1018.54, 'Vendido', 'square', 2),
        new Parcela('24', 1163.12, 'Disponible', 'square', 2),
        new Parcela('23', 1110.94, 'Disponible', 'square', 2),
    ],
    izquierda: [
        new Parcela('26', 1001.45, 'Disponible', 'rectangle', 2),
        new Parcela('27', 1001.92, 'Disponible', 'rectangle', 2),
        new Parcela('28', 1006.21, 'Disponible', 'rectangle', 2),
    ],
    derecha: [
        new Parcela('22', 1001.45, 'Disponible', 'rectangle', 2),
        new Parcela('21', 1001.92, 'Disponible', 'rectangle', 2),
        new Parcela('20', 1006.21, 'Disponible', 'rectangle', 2),
    ]
}

export const PARCELAS_SECTOR_G: ParcelaData = {
    sectorImage: '/fincas_air_sector_g.png',
    topLimiter: 'Sector C',
    bottomLimiter: 'Calle Los Pinos',
    leftLimiter: 'Sector F',
    rightLimiter: 'Sector H',
    center: [
        new Parcela('16', 1110.94, 'Disponible', 'square', 2),
        new Parcela('15', 1163.12, 'Disponible', 'square', 2),
        new Parcela('14', 1209.42, 'Disponible', 'square', 2),
    ],
    izquierda: [
        new Parcela('17', 1001.45, 'Disponible', 'rectangle', 2),
        new Parcela('18', 1001.92, 'Disponible', 'rectangle', 2),
        new Parcela('19', 1006.21, 'Disponible', 'rectangle', 2),
    ],
    derecha: [
        new Parcela('13', 1001.45, 'Disponible', 'rectangle', 2),
        new Parcela('12', 1001.92, 'Disponible', 'rectangle', 2),
        new Parcela('11', 1006.21, 'Disponible', 'rectangle', 2),
    ]
}

export const PARCELAS_SECTOR_H: ParcelaData = {
    sectorImage: '/fincas_air_sector_h.png',
    topLimiter: 'Sector D',
    bottomLimiter: 'Calle Los Pinos',
    leftLimiter: 'Sector G',
    rightLimiter: 'Calle Felipe Flynt',
    izquierda: [
        new Parcela('06', 1018.67, 'Disponible', 'rectangle', 2),
        new Parcela('07', 1026.40, 'Disponible', 'rectangle', 2),
        new Parcela('08', 1026.40, 'Disponible', 'rectangle', 2),
        new Parcela('09', 1006.31, 'Disponible', 'rectangle', 2),
        new Parcela('10', 1010.77, 'Disponible', 'rectangle', 2)
    ],
    derecha: [
        new Parcela('05', 1018.96, 'Disponible', 'rectangle', 2),
        new Parcela('04', 1025.57, 'Disponible', 'rectangle', 2),
        new Parcela('03', 1024.41, 'Disponible', 'rectangle', 2),
        new Parcela('02', 1040.63, 'Disponible', 'rectangle', 2),
        new Parcela('01', 1049.74, 'Disponible', 'rectangle', 2)
    ]
}