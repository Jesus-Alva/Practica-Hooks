'use client'

import { useState } from "react";

import BasicCounter from "../../../components/features/UseState/easy/BasicCounter";
import ToggleButton from "../../../components/features/UseState/easy/ToggleButton";
import Form from "../../../components/features/UseState/easy/Form";
import TaskList from "../../../components/features/UseState/easy/TaskList";


const Page: React.FC = () => {

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

                <Form />

                <TaskList />

            </div>
        </div>
    )
}

export default Page;