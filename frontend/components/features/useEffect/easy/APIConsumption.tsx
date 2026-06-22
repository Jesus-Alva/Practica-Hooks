"use client";

import { useState, useEffect } from "react";

import CodeBlock from "../../../ui/CodeBlock";
import Image from "next/image";

const APIConsumption: React.FC = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(setUsuarios)
    }, [])

    const codeTxt = `
import { useState, useEffect } from "react";

import CodeBlock from "../../../ui/CodeBlock";
import Image from "next/image";

const APIConsumption: React.FC = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then(setUsuarios)
    }, [])

    return (
        <ul>
            {usuarios.map((u) => (
                <li key={u.id}>
                    {u.name}
                </li>
            ))}
        </ul>
    )

}

export default APIConsumption;

    `

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 py-4 my-auto">
                <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Ejercicio #2: useEffect - Obtener datos de una API
                </span>
                <span className="text-lg font-semibold text-gray-500 mb-4">
                    Reto: Al montar el componente, trae una lista de usuarios de JSONPlaceholder y muéstrala.
                </span>
                <ul className="text-md text-gray-500 grid grid-cols-2 gap-3">
                    {usuarios.map((u, index) => (
                        <li key={index} className="py-3 sm:py-4">
                            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                <div className="relative w-15 h-15 overflow-hidden">
                                    <Image
                                        className="object-fill object-[center_30%]"
                                        fill
                                        src="/avatar.svg"
                                        alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-heading truncate">
                                        {u.name}
                                    </p>
                                    <p className="text-sm text-body truncate ">
                                        {u.email}
                                    </p>
                                </div>
                                <span className="inline-flex items-center bg-success-soft border border-success-subtle text-fg-success-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                                    <span className="w-2 h-2 me-1 bg-success rounded-full"></span>
                                    {u.website}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 m-5 rounded-xl shadow-lg shadow-[#0a0e14]/50 ">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>

        </div>
    )
}

export default APIConsumption;