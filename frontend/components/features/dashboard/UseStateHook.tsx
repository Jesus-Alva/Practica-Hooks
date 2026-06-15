'use client'

import { useState } from "react";


const UseStateHook: React.FC = () => {
    //#1
    const [contador, setContador] = useState(0);
    //#2
    const [on, setOn] = useState(true)
    //#3
    const [texto, setTexto] = useState("")
    //#4
    const [tareas, setTareas] = useState<string[]>([])
    const [nuevo, setNuevo] = useState<string>("")

    const agregar = () => {
        if(nuevo.trim()){
            setTareas([...tareas, nuevo]);
            setNuevo("");
        }
    }

    return (
        <>
            <div className="border border-gray-400">
                <div className="flex flex-col w-1/3 mx-auto py-2">
                    <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Hook: useState #1 Number: Contador Basico
                    </span>
                    <button onClick={() => setContador(contador + 1)}
                        className="border border-gray-300 rounded-xl shadow-xs text-gray-600 p-2 bg-linear-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:from-emerald-400 hover:via-cyan-400 hover:to-teal-400 hover:bg-gray-400 hover:text-white transform-color duration-400 font-bold">
                        Da clic para incrementar
                    </button>
                    <p className="text-green-600/50 font-bold m-5 rounded text-2xl mx-auto">{contador}</p>
                </div>
            </div>

            <div className="border border-gray-400">
                <div className="flex flex-col w-1/3 mx-auto py-2">
                    <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Hook: useState #2 Boolean: Toggle (interruptor)
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
            </div>

            <div className="border border-gray-400">
                <div className="flex flex-col w-1/3 mx-auto py-2">
                    <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Hook: useState #3 Text: Formulario Controlado
                    </span>
                    <input type="text" 
                            value={texto} 
                            onChange={(e) => {setTexto(e.target.value)}} 
                            className="text-gray-600 border border-gray-300 rounded-xl shadow-xs shadow-gray-300 p-2"/>
                    <span className="text-gray-500">{texto}</span>
                </div>
            </div>

            <div className="border border-gray-400">
                <div className="flex flex-col w-1/3 mx-auto py-2">
                    <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Hook: useState #4 Array: Lista de Tareas Simple
                    </span>
                    <input type="text" value={nuevo} onChange={(e) => {setNuevo(e.target.value)}} className="text-gray-600 border border-gray-300 rounded-xl shadow-xs shadow-gray-300 p-2"/>
                    <button onClick={agregar}
                            className="border border-gray-300 rounded-xl shadow-xs text-gray-600 p-2 bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 hover:from-orange-400 hover:via-pink-400 hover:to-purple-400 hover:text-white transform-color duration-400 font-bold">
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
        </>
    )
}

export default UseStateHook;