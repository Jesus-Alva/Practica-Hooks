"use client";

import { useTranslation } from "../../../lib/hooks/useTranslation";
import { effect } from "../../../types/typesUseEffect";

import ExplanationComponent from "../../../components/layouts/useState/ExplanationComponent";

const Page: React.FC = () => {
    const {t} = useTranslation()

    const dataHard = t("useEffect", {returnObjects: true}) as effect;
    return (
        <div className="">
            <div className="container mx-auto px-4 py-16 text-center">
                <ExplanationComponent data={dataHard.explanation} />
            </div>
        </div>
    )
}
export default Page;