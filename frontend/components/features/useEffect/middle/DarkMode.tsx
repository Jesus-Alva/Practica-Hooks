"use client";

import { useState, useEffect } from "react";

import MiddleTitle from "../../../ui/MiddleTitle";
import ChalengeText from "../../../ui/ChalengeText";
import CodeBlock from "../../../ui/CodeBlock";

import { content } from "../../../../types/typesUseEffect";

interface ComponentProps {
    data: content;
}

const DarkMode: React.FC<ComponentProps> = ({ data }) => {
    const [oscuro, setOscuro] = useState<boolean | null>(null);

    // Leer preferencia desde localStorage solo en cliente
    useEffect(() => {
        if (typeof window === "undefined") return;
        const tema = localStorage.getItem("tema");
        setOscuro(tema === "oscuro");
    }, []);

    useEffect(() => {
        document.documentElement.style.backgroundColor = oscuro ? "#0a0e14" : "#ffffff";
        document.documentElement.style.color = oscuro ? "#f7fafc" : "#0a0e14";
        document.body.style.backgroundColor = oscuro ? "#0a0e14" : "#ffffff";
        document.body.style.color = oscuro ? "#f7fafc" : "#0a0e14";
        localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
    }, [oscuro]);

    const codeTxt = `
import { useState, useEffect } from "react";

export default function TemaOscuro() { 
    const [oscuro, setOscuro] = useState(() => {
        return localStorage.getItem("tema") === "oscuro";
    });

    useEffect(() => {
        document.body.style.backgroundColor = oscuro ? "#333" : "#FFF";
        document.body.style.color = oscuro ? "#FFF" : "#000";
        localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
    }, [oscuro]);

    return (
        <button onClick={() => setOscuro(!oscuro)}>
            {oscuro ? "Modo Claro" : "Modo Oscuro"}
        </button>
    );
}
    `
    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 py-4 my-auto">
                <MiddleTitle title={data.title} />
                <ChalengeText chalenge={data.chalenge} />
                <div
                    onClick={() => setOscuro(!oscuro)}
                    className={`
                            relative w-20 h-10 shadow-lg hover:scale-105 transform rounded-full cursor-pointer transition-all duration-300 mx-auto
                            ${oscuro ? 'bg-green-400 shadow-inner' : 'bg-gray-300 shadow-inner'}
                        `}
                >
                    <div
                        className={`
                        absolute top-0.5 left-0.5 w-9 h-9 bg-white rounded-full shadow-md
                        transition-all duration-300 transform
                        ${oscuro ? 'translate-x-10' : 'translate-x-0'}
                        `}
                    />

                    <span className="absolute inset-0 flex items-center justify-between px-3 text-xs font-bold text-gray-600">
                        <span className={oscuro ? 'text-white' : 'text-gray-300'}>ON</span>
                        <span className={!oscuro ? 'text-white' : 'text-gray-300'}>OFF</span>
                    </span>
                </div>
            </div>
            <div className="w-1/2 m-5 rounded-xl shadow-lg shadow-[#0a0e14]/50 ">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>

        </div>
    )
}

export default DarkMode;