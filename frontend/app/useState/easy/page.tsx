'use client'

import { useState } from "react";
import { useTranslation } from "../../../lib/hooks/useTranslation";

import BasicCounter from "../../../components/features/UseState/easy/BasicCounter";
import ToggleButton from "../../../components/features/UseState/easy/ToggleButton";
import Form from "../../../components/features/UseState/easy/Form";


const Page: React.FC = () => {


    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-16 text-center">
                <BasicCounter />

                <ToggleButton />

                <Form />
            </div>
        </div>
    )
}

export default Page;