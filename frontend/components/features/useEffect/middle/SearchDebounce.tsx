"use client";

import { useState, useEffect } from "react";

import CodeBlock from "../../../ui/CodeBlock";
import MiddleTitle from "../../../ui/MiddleTitle";
import ChalengeText from "../../../ui/ChalengeText";

import { content } from "../../../../types/typesUseEffect";

interface ComponentProps {
    data: content;
}

const SearchDebounce: React.FC<ComponentProps> = ({data}) => {
    const [termino, setTermino] = useState("");
    const [resultado, setResultado] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setResultado(`Buscando ${termino}`), 500)
        return () => clearTimeout(timer);
    }, [termino])

    const codeTxt = `
import { useState, useEffect } from "react";

const SearchDebounce: React.FC = () => {
    const [termino, setTermino] = useState("");
    const [resultado, setResultado] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setResultado(Buscando ________),500)
        return () => clearTimeout(timer);
    },[_______])

    return (
        <div>
            <input type="text"
                value={termino}
                placeholder="Ingresa cualquier Texto"
                onChange={(e) => { setTermino(e.target.value) }}/>
            <span>_______</span>
        </div>
    )
}

export default SearchDebounce;
`

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 py-4 my-auto">
                <MiddleTitle title={data.title} />
                <ChalengeText chalenge={data.chalenge} />

                <input type="text"
                    value={termino}
                    placeholder="Ingresa texto a buscar"
                    onChange={(e) => { setTermino(e.target.value) }}
                    className="text-gray-600 w-1/2 mx-auto border border-gray-300 rounded-xl shadow-xs shadow-gray-300 p-2" />
                <span className="text-gray-500 py-2">{resultado}</span>
            </div>
            <div className="w-1/2 m-5 rounded-xl shadow-lg shadow-[#0a0e14]/50 ">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>

        </div>
    )
}

export default SearchDebounce;