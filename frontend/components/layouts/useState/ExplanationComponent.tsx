"use client";

import { CodeText } from "../../ui/CodeText";
import { explanation } from "../../../types/typesUseEffect";

interface ComponentProps {
    data: explanation
}

const ExplanationComponent: React.FC<ComponentProps> = ({data}) => {

    return (
        <div className="w-1/2 mx-auto my-10 selection:bg-emerald-400/20">
            <CodeText title={data?.title} fileName={data?.fileName}>
                <div className="grid grid-cols-1">
                    <span className="text-start">{data?.description}</span>
                    <span className="text-start my-2">{data?.example}</span>
                    <span className="text-start font-bold my-2">Se utiliza para:</span>
                     <ul className="text-start">
                        {data.aplication.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </CodeText>
        </div>
    )
}

export default ExplanationComponent;