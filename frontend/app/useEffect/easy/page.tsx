"use client";

import { useTranslation } from "../../../lib/hooks/useTranslation";
import ExplanationComponent from "../../../components/layouts/useState/ExplanationComponent";
import ChangeDocumentTitle from "../../../components/features/useEffect/easy/ChangeDocumentTitle";
import APIConsumption from "../../../components/features/useEffect/easy/APIConsumption";

import { effect } from "../../../types/typesUseEffect";

const Page: React.FC = () => {
    const {t} = useTranslation();

    const dataEffect = t("useEffect", {returnObjects: true}) as effect;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-300">
            <div className="container mx-auto px-4 py-16 text-center">
                <ExplanationComponent data={dataEffect.explanation}/>

                <ChangeDocumentTitle />

                <APIConsumption />
            </div>
        </div>
    )
}

export default Page;