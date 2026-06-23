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

export interface explanation {
    title: string;
    fileName: string;
    description: string;
    example: string;
    pathern: string;
    aplication: string[];
}
export interface state {
    explanation: explanation;
    products: products;
}