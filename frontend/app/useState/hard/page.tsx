"use client";

import { useTranslation } from "../../../lib/hooks/useTranslation";
import { products } from "../../../types/typesUseState";

import ShoppingCart from "../../../components/features/UseState/easy/ShoppingCart";

const Page: React.FC = () => {
    const {t} = useTranslation();
    
    const shoppindCartData = t('useState.easy.products', {returnObjects: true}) as products[];
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-300">
            <div className="container mx-auto px-4 py-16 text-center">
                <ShoppingCart data={shoppindCartData} />
            </div>
        </div>
    );
}

export default Page;