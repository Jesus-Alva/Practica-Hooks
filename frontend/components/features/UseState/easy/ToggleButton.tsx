"use client";

import { useState } from "react";

import CodeBlock from "../../../ui/CodeBlock";

const ToggleButton: React.FC = () => {
    const [on, setOn] = useState(true);

    const codeTxt = `
import { useState } from "react";

const ToggleButton: React.FC = () => {
    const [on, setOn] = useState(true);

    return (
        <div>
            <button oonClick={() => setOn(!on)}>
                Da clic para encender/apagar
            </button>
            <p>
                {encendido ? "Encendido" : "Apagado"}
            </p>    
        </div>
    )
}

export default ToggleButton;
        `;

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 m-auto py-2">
                <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Hook #2: useState type Boolean: Toggle (interruptor)
                </span>
                <div
                    onClick={() => setOn(!on)}
                    className={`
                            relative w-20 h-10 rounded-full cursor-pointer transition-all duration-300 mx-auto
                            ${on ? 'bg-green-400 shadow-inner' : 'bg-gray-300 shadow-inner'}
                        `}
                >
                    <div
                        className={`
                        absolute top-0.5 left-0.5 w-9 h-9 bg-white rounded-full shadow-md
                        transition-all duration-300 transform
                        ${on ? 'translate-x-10' : 'translate-x-0'}
                        `}
                    />

                    <span className="absolute inset-0 flex items-center justify-between px-3 text-xs font-bold text-gray-600">
                        <span className={on ? 'text-white' : 'text-gray-300'}>ON</span>
                        <span className={!on ? 'text-white' : 'text-gray-300'}>OFF</span>
                    </span>
                </div>

            </div>
            <div className="w-1/2 m-5 rounded-xl shadow-lg shadow-[#0a0e14]/50">
                <CodeBlock code={codeTxt} language="javascript"/>
            </div>
        </div>
    )
}

export default ToggleButton;