'use client'

import { useState } from "react";
import { useTranslation } from "../../../lib/hooks/useTranslation";
import { state } from "../../../types/typesUseState";

import BasicCounter from "../../../components/features/UseState/easy/BasicCounter";
import ToggleButton from "../../../components/features/UseState/easy/ToggleButton";
import Form from "../../../components/features/UseState/easy/Form";
import ExplanationComponent from "../../../components/layouts/useState/ExplanationComponent";


const Page: React.FC = () => {
    const {t} = useTranslation();

    const dataState = t("useState", {returnObjects: true}) as state;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-300">
            <div className="container mx-auto px-4 py-16 text-center">
                <ExplanationComponent data={dataState.explanation}/>

                <BasicCounter />

                <ToggleButton />

                <Form />
            </div>
        </div>
    )
}

export default Page;