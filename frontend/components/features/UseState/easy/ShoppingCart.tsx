"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "../../../../types/typesUseState";
import { FaCartShopping } from "react-icons/fa6";
import CodeBlock from "../../../ui/CodeBlock";

interface ComponentProps {
    data: products[];
}

type ProductWithQuantity = products & { quantity: number }

const ShoppingCart: React.FC<ComponentProps> = ({ data }) => {
    const [showModal, setShowModal] = useState(false)
    const [imageIndices, setImageIndices] = useState<{ [key: number]: number }>({});

    const handlePrev = (productId: number, total: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setImageIndices((prev) => ({
            ...prev,
            [productId]: prev[productId] === 0 ? total - 1 : (prev[productId] ?? 0) - 1,
        }));
    };

    const handleNext = (productId: number, total: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setImageIndices((prev) => ({
            ...prev,
            [productId]: prev[productId] === total - 1 ? 0 : (prev[productId] ?? 0) + 1,
        }));
    };

    const goToImage = (productId: number, index: number) => {
        setImageIndices((prev) => ({ ...prev, [productId]: index }));
    };

    const [carrito, setCarrito] = useState<ProductWithQuantity[]>([])
    const sizeCarrito = carrito.length

    const agregarProducto = (product: products) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find((item) => item.id === product.id);

            if (existe) {
                return prevCarrito.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                    
                );
            } else {
                return [...prevCarrito, { ...product, quantity: 1 }];
            }
        })
    }

    const codeTxt = `
    // Código de ejemplo
  `;

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 m-auto space-y-2 py-4">
                <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Hook #5: useState type Array: Carrito de Compras
                </span>
                <div className="border border-gray-200">
                    <div className="w-full border border-gray-200 shadow-md shadow-gray-200 m-auto">
                        <div className="relative container flex justify-between p-4">
                            <span className="text-black my-auto">Carrito de compras</span>
                            <button onClick={() => setShowModal(!showModal)}  className="w-10 h-10 text-center hover:cursor-pointer hover:shadow-md transform duration-300 rounded-sm border border-gray-200">
                                <FaCartShopping className="text-gray-400 mx-auto w-6 h-6" />
                            </button>
                            {showModal && (
                                <div className="absolute right-0 top-full mt-2 w-80 h-auto bg-white shadow-xl rounded-md overflow-hidden z-20">
                                {carrito.length === 0 ? (
                                    <span className="text-gray-600">Carrito Vacio</span>
                                ) : (
                                    <ul className="divide-y divide-gray-300 px-4">
                                        {carrito.map((currentProduct, index) => (
                                            <li key={index} className="  text-gray-600 h-20 flex justify-between align-middle">
                                                <div className="relative w-20 h-20 overflow-hidden">
                                                    <Image
                                                        key={currentProduct.images[0].idImg}
                                                        src={currentProduct.images[0].src}
                                                        alt={currentProduct.images[0].src}
                                                        fill
                                                        className="absolute object-contain p-1 w-max-25 h-auto"
                                                    />
                                                </div>
                                                <span className="my-auto mr-auto">{currentProduct.name}</span>
                                                <div className="grid grid-cols-1">
                                                    <button className="text-white font-bold cursor-pointer mx-2 w-5 m-auto border border-gray-300 rounded bg-linear-to-b from-red-700 via-red-500 to-red-300 hover:scale-105 transform duration-300">^</button>
                                                    <span className="text-xs font-light my-auto rounded border border-gray-300">{currentProduct.quantity}</span>
                                                    <button className="text-white font-bold cursor-pointer mx-2 w-5 m-auto rotate-180 border border-gray-300 rounded bg-linear-to-b from-red-700 via-red-500 to-red-300 hover:scale-105 transform duration-300">^</button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                            </div>
                            )}
                            
                        </div>

                    </div>

                    <div className="text-gray-600 grid grid-cols-2 p-2 gap-2">
                        {data.map((product) => {
                            const images = product.images || [];
                            const totalImages = images.length;
                            const currentIdx = imageIndices[product.id] ?? 0;

                            return (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col h-full"
                                >
                                    <div className="relative aspect-square overflow-hidden transition-all group cursor-pointer">
                                        {totalImages > 0 ? (
                                            <>
                                                <Image
                                                    key={images[currentIdx].idImg}
                                                    src={images[currentIdx].src}
                                                    alt={images[currentIdx].alt || product.name}
                                                    fill
                                                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                />
                                                {totalImages > 1 && (
                                                    <>
                                                        <button
                                                            onClick={(e) => handlePrev(product.id, totalImages, e)}
                                                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 z-10"
                                                        >
                                                            ‹
                                                        </button>
                                                        <button
                                                            onClick={(e) => handleNext(product.id, totalImages, e)}
                                                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 z-10"
                                                        >
                                                            ›
                                                        </button>
                                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                                                            {images.map((_, idx) => (
                                                                <button
                                                                    key={idx}
                                                                    onClick={() => goToImage(product.id, idx)}
                                                                    className={`w-2 h-2 rounded-full transition-colors ${idx === currentIdx ? "bg-white" : "bg-white/50"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </>
                                                )}
                                            </>
                                        ) : (
                                            <Image
                                                src="/images/products/default.png"
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            />
                                        )}
                                    </div>
                                    <div className="p-2 px-4 flex flex-col grow justify-items-start border border-gray-200">
                                        <p className="flex justify-start">
                                            <span className="font-normal text-sm text-gray-600">
                                                {product.name}
                                            </span>
                                        </p>
                                        <p className="flex justify-end text-xs">
                                            <span>En stock:</span>
                                            <span className="font-light text-gray-600">
                                                {product.stock}
                                            </span>
                                        </p>
                                        <p className="flex justify-start">
                                            <span className="text-xl font-bold text-black">
                                                $ {product.price}
                                            </span>
                                        </p>
                                        <button onClick={() => agregarProducto(product)} className="bg-linear-to-r from-blue-600 to-purple-600 rounded p-1 text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                                            Agragar al carrito
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="w-1/2 m-5">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>
        </div>
    );
};

export default ShoppingCart;