'use client'

import { useState } from "react";


const UseStateHook: React.FC = () => {

    const [contador, setContador] = useState(0);

    const [on, setOn] = useState(true)

    return (
        <>
            <div className="border border-gray-400">
                <div className="flex flex-col w-1/3 mx-auto">
                    <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Hook: useState #1
                    </span>
                    <button onClick={() => setContador(contador + 1)}
                        className="border rounded shadow text-gray-600 p-2 hover:bg-gray-400 hover:text-white transform-color duration-300">
                        Da clic para incrementar
                    </button>
                    <p className="text-green-600/50 font-bold m-5 rounded text-2xl mx-auto">{contador}</p>
                </div>
            </div>

            <div className="border border-gray-400">
                <div className="flex flex-col w-1/3 mx-auto">
                    <span className="text-3xl md:text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        Hook: useState #2
                    </span>
                    <div onClick={() => setOn(!on)}
                        className="border rounded shadow w-full felx justify-between">
                        <span className={"w-1/2 text-center mx-auto" + on ? "" : ""}>on</span>
                        <span className="w-1/2">of</span>
                    </div>


                    <p className="text-green-600/50 font-bold m-5 rounded text-2xl mx-auto">{contador}</p>
                </div>
            </div>
        </>
    )
}

export default UseStateHook;