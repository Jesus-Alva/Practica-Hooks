interface image {
    idImg: number;
    src: string;
    alt: string;
}

export interface products {
    id: number;
    name: string;
    price: number;
    stock: number;
    images: image[];
}