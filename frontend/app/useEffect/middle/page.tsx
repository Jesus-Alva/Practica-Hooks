"use client";

import { useTranslation } from "../../../lib/hooks/useTranslation";

import SearchDebounce from "../../../components/features/useEffect/middle/SearchDebounce";
import ExplanationComponent from "../../../components/layouts/useState/ExplanationComponent";

import { effect } from "../../../types/typesUseEffect";

const Page: React.FC = () => {
    const {t} = useTranslation();

    const dataMiddle = t("useEffect", {returnObjects: true}) as effect

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-300">
            <div className="container mx-auto px-4 py-16 text-center">
                <ExplanationComponent data={dataMiddle.explanation}/>

                <SearchDebounce data={dataMiddle.middleContent.exercise_4} />

                
                

            </div>
        </div>
    )
}

export default Page;