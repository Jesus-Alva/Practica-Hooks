"use client";

import { useState, useEffect } from "react";

import MiddleTitle from "../../../ui/MiddleTitle";
import ChalengeText from "../../../ui/ChalengeText";

import CodeBlock from "../../../ui/CodeBlock";

import { content } from "../../../../types/typesUseEffect";

interface ComponentProps {
    data: content;
}

const StateConection: React.FC<ComponentProps> = ({ data }) => {
    const [online, setOnline] = useState(false);

    useEffect(() => {
        const alConectar = () => setOnline(true);
        const alDesconectar = () => setOnline(false);

        setOnline(navigator.onLine)

        window.addEventListener("online", alConectar);
        window.addEventListener("offline", alDesconectar);

        return () => {
            window.removeEventListener("online", alConectar);
            window.removeEventListener("offline", alDesconectar);
        }
    })

    const codeTxt = `
"use client";

import { useState, useEffect } from "react";

const StateConection: React.FC = () => {
    const [online, setOnline] = useState(false);

    useEffect(() => {
        const alConectar = () => setOnline(true);
        const alDesconectar = () => setOnline(false);

        setOnline(navigator.onLine)

        window.addEventListener("online", alConectar);
        window.addEventListener("offline", alDesconectar);

        return () => {
            window.removeEventListener("online", alConectar);
            window.removeEventListener("offline", alDesconectar);
        }
    })
        return (
        <div>
            <p>{online ? "Conectado a Internet" : "Sin conexión"}</p>
        </div>
    )
}

export default StateConection;
    `

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 py-4 my-auto">
                <MiddleTitle title={data.title} />
                <ChalengeText chalenge={data.chalenge} />
                <p className={`text-lg font-semibold border rounded-lg w-1/2 mx-auto
                    ${online ? "text-green-800 border-green-800 shadow-green-900" : "text-red-800 border-red-800 shadow-red-800"}`} >
                        {online ? "Conectado a Internet" : "Sin conexión"}
                </p>
            </div>
            <div className="w-1/2 m-5 rounded-xl shadow-lg shadow-[#0a0e14]/50 ">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>
        </div>
    )
}

export default StateConection;