"use client";

import { useEffect, useState } from "react";

import CodeBlock from "../../../ui/CodeBlock";

const Listener: React.FC = () => {

    const [msg, setMsg] = useState("");

    useEffect(() => {
        const handler = (e: KeyboardEvent) => e.key === "Escape" && setMsg("Escapaste XD!");
        window.addEventListener("keydown", handler);

        return () => { window.removeEventListener("keydown", handler) }

    }, [])

    const codeTxt = `
import { useEffect, useState } from "react";

const Listener: React.FC = () => {

    const [msg, setMsg] = useState("");

    useEffect(() => {
        const handler = (e) => e.key === "Escape" && setMsg("Escape!");
        window.addEventListener("keydown", handler);
        
        return window.removeEventListener("keydown", handler)
    },[])

    return (
        <div>
            <span>{msg || "Presiona Escape"}</span>
        </div>
    )
}

export default Listener;

    `
    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 py-4 my-auto">
                <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Ejercicio #3: useEffect - Listener de teclado con limpieza
                </span>
                <div className="text-green-600/50 font-bold m-5 rounded text-2xl mx-auto">
                    <span>{msg || "Presiona Escape"}</span>
                </div>
            </div>
            <div className="w-1/2 m-5 rounded-xl shadow-lg shadow-[#0a0e14]/50 ">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>

        </div>
    )
}

export default Listener;