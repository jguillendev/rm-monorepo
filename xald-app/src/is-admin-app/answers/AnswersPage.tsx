import React from "react";
import { HeaderBar } from "../HeaderBar";
import { AnswersFour } from "./AnswersFour";
import { AnswersOne } from "./AnswersOne";
import { AnswersThree } from "./AnswersThree";
import { AnswersTwo } from "./AnswersTwo";

export const AnswersPage = () => {
    return <main className="flex flex-col h-screen w-screen">
        <HeaderBar viewName="answers"/>
        <h1 className="text-center font-bold text-4xl pt-4 pb-3">Respuestas</h1>
        <AnswersContent />
    </main>
}

export const AnswersContent = () => {
    return <section className="flex-1 flex flex-wrap gap-2 md:gap-4 items-center justify-center px-2">
        <AnswersOne />
        <AnswersTwo />
        <AnswersThree />
        <AnswersFour />
    </section>
}