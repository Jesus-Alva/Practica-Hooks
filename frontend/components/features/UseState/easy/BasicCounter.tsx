"use client";

import { useState } from "react";

import CodeBlock from "../../../ui/CodeBlock";

const BasicCounter: React.FC = () => {
    //#1
    const [contador, setContador] = useState(0);

    const codeTxt = `
import { useState } from "react";

const BasicCounter: React.FC = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <button onClick={() => setContador(contador + 1)}>
                Da clic para incrementar
            </button>
            <p>
                {contador}
            </p>    
        </div>
    )
}

export default BasicCounter;
        `;

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 py-4 my-auto">
                <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Hook #1: useState type Number: Contador Basico
                </span>
                <button onClick={() => setContador(contador + 1)}
                    className="w-[50vh] mx-auto border border-gray-300 rounded-xl shadow-xs text-gray-600 p-2 bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:via-cyan-400 hover:to-teal-400 hover:bg-gray-400 hover:text-white transform-color duration-400 font-bold">
                    Da clic para incrementar
                </button>
                <p className="text-green-600/50 font-bold m-5 rounded text-2xl mx-auto">{contador}</p>
            </div>
            <div className="w-1/2 m-5">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>

        </div>
    )
}

export default BasicCounter;