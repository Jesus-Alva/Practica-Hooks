"use client";

import { useTranslation } from "../../../lib/hooks/useTranslation";

import SearchDebounce from "../../../components/features/useEffect/middle/SearchDebounce";
import ExplanationComponent from "../../../components/layouts/useState/ExplanationComponent";
import DarkMode from "../../../components/features/useEffect/middle/DarkMode";

import { effect } from "../../../types/typesUseEffect";

const Page: React.FC = () => {
    const {t} = useTranslation();

    const dataMiddle = t("useEffect", {returnObjects: true}) as effect

    return (
        <div className="">
            <div className="container mx-auto px-4 py-16 text-center">
                <ExplanationComponent data={dataMiddle.explanation}/>

                <SearchDebounce data={dataMiddle.middleContent.exercise_4} />

                <DarkMode data={dataMiddle.middleContent.exercise_5}/>
                

            </div>
        </div>
    )
}

export default Page;