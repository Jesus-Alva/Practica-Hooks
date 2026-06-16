"use client";

import CodeBlock from "../../../ui/CodeBlock";
import { useState } from "react";

const TaskList: React.FC = () => {
    const [nuevo, setNuevo] = useState<string>("")
    const [tareas, setTareas] = useState<string[]>([])

    const agregar = () => {
        if (nuevo.trim()) {
            setTareas([...tareas, nuevo])
            setNuevo("")
        }
    }

    const codeTxt = `
import { useState } from "react";

const BasicCounter: React.FC = () => {
    const [nuevo, setNuevo] = useState<string>("")
    const [tareas, setTareas] = useState<string[]>([])

    const agregar = () => {
        if(nuevo.trim()){
            setTareas([...tareas, nuevo])
            setNuevo("")
        }
    }

    return (
        <div>
            <input type="text" value={nuevo} onChange={(e) => { setNuevo(e.target.value) }}/>
            <button onClick={agregar}>
                Agregar Tarea Nueva
            </button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea}
                    </li>
                ))}
            </ul> 
        </div>
    )
}

export default BasicCounter;
    `;

    return (
        <div className="border border-gray-200 flex align-middle">
            <div className="flex flex-col w-1/2 m-auto space-y-2 py-4">
                <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    Hook #4: useState type Array: Lista de Tareas Simple
                </span>
                <input type="text" value={nuevo} onChange={(e) => { setNuevo(e.target.value) }} className="w-1/2 mx-auto text-gray-600 border border-gray-300 rounded-xl shadow-xs shadow-gray-300 p-2" />
                <button onClick={agregar}
                    className="w-1/2 mx-auto border border-gray-300 rounded-xl shadow-xs text-gray-600 p-2 bg-linear-to-r from-purple-400 via-pink-400 to-orange-400 hover:from-orange-400 hover:via-pink-400 hover:to-purple-400 hover:text-white transform-color duration-400 font-bold">
                    Agregar Tarea Nueva
                </button>
                <ul className="text-gray-400 w-1/2 mx-auto space-y-2">
                    {tareas.map((tarea, index) => (
                        <li key={index} className="border-0 border-b-2 border-gray-200">
                            {tarea}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 m-5">
                <CodeBlock code={codeTxt} language="javascript" />
            </div>
        </div>
    )
}

export default TaskList;