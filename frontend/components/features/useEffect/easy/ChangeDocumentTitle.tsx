"use client";

import { useEffect, useState } from "react";

import CodeBlock from "../../../ui/CodeBlock";

const ChangeDocumentTitle: React.FC = () => {
    const [clics, setClics] = useState(0)

    useEffect(() => {
        document.title = `clics ${clics}`
    }, [clics])

    const codeTxt = `
import { useEffect } from "react";

const BasicCounter: React.FC = () => {
    
    useEffect(() => {
        document.title = "# de clics"
    }, [parametro que lanzara el evento al cambiar])

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

`

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 py-4 my-auto">
                <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Ejercicio #1: useEffect - Cambio de titulo del documento
                </span>
                <span className="text-lg font-semibold text-gray-500 mb-4">
                    Reto: Implementa el contador usando useState
                </span>
                <button onClick={() => setClics(clics + 1)}
                    className="w-[50vh] mx-auto border border-gray-300 rounded-xl shadow-xs text-gray-600 p-2 bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:via-cyan-400 hover:to-teal-400 hover:bg-gray-400 hover:text-white transform-color duration-400 font-bold">
                    Da clic para incrementar
                </button>
                <p className="text-green-600/50 font-bold m-5 rounded text-2xl mx-auto">{clics}</p>
            </div>
            <div className="w-1/2 m-5 rounded-xl shadow-lg shadow-[#0a0e14]/50 ">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>

        </div>
    )
}

export default ChangeDocumentTitle