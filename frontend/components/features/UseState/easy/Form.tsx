"use client";

import { useState } from "react";

import CodeBlock from "../../../ui/CodeBlock";

const Form: React.FC = () => {
    const [texto, setTexto] = useState("");

    const codeTxt = `
import { useState } from "react";

const BasicCounter: React.FC = () => {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <input type="text"
                value={texto}
                placeholder="Ingresa cualquier Texto"
                onChange={(e) => { setTexto(e.target.value) }}/>
            <span>{texto}</span> 
        </div>
    )
}

export default BasicCounter;
    `;

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 m-auto py-4">
                <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Hook #3: useState type Text: Formulario Controlado
                </span>
                <input type="text"
                    value={texto}
                    placeholder="Ingresa cualquier Texto"
                    onChange={(e) => { setTexto(e.target.value) }}
                    className="text-gray-600 w-1/2 mx-auto border border-gray-300 rounded-xl shadow-xs shadow-gray-300 p-2" />
                <span className="text-gray-500 py-2">{texto}</span>
            </div>
            <div className="w-1/2 m-5 rounded-xl shadow-lg shadow-[#0a0e14]/50">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>
        </div>
    )
}

export default Form;