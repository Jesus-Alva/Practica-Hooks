'use client'

import { useState } from "react";

import BasicCounter from "../../../components/features/UseState/easy/BasicCounter";
import ToggleButton from "../../../components/features/UseState/easy/ToggleButton";


const Page: React.FC = () => {
    //#3
    const [texto, setTexto] = useState("")
    //#4
    const [tareas, setTareas] = useState<string[]>([])
    const [nuevo, setNuevo] = useState<string>("")

    const agregar = () => {
        if (nuevo.trim()) {
            setTareas([...tareas, nuevo]);
            setNuevo("");
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-16 text-center">
                <BasicCounter />

                <ToggleButton />

                <div className="border border-gray-200">
                    <div className="flex flex-col w-1/3 mx-auto py-4">
                        <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Hook: useState #3 Text: Formulario Controlado
                        </span>
                        <input type="text"
                            value={texto}
                            onChange={(e) => { setTexto(e.target.value) }}
                            className="text-gray-600 border border-gray-300 rounded-xl shadow-xs shadow-gray-300 p-2" />
                        <span className="text-gray-500">{texto}</span>
                    </div>
                </div>

                <div className="border border-gray-200">
                    <div className="flex flex-col w-1/3 mx-auto space-y-2 py-4">
                        <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                            Hook: useState #4 Array: Lista de Tareas Simple
                        </span>
                        <input type="text" value={nuevo} onChange={(e) => { setNuevo(e.target.value) }} className="text-gray-600 border border-gray-300 rounded-xl shadow-xs shadow-gray-300 p-2" />
                        <button onClick={agregar}
                            className="border border-gray-300 rounded-xl shadow-xs text-gray-800 p-2 bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 hover:from-orange-400 hover:via-pink-400 hover:to-purple-400 hover:text-white transform-color duration-400 font-bold">
                            Agregar Tarea Nueva
                        </button>
                        <ul className="text-gray-400">
                            {tareas.map((tarea, index) => (
                                <li key={index}>
                                    {tarea}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;