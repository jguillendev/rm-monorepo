import React from "react";
import {HeaderBar} from "./HeaderBar";

export const AdminHomePage = () => {
    return <main className="flex flex-col h-screen w-screen">
        <HeaderBar viewName="home"/>
        <HomeContent />
    </main>
}

export const HomeContent = () => {
    return <section className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center">
            <p className="text-2xl text-yellow-500 font-bold">Bienvenidos</p>
            <p className="text-xl font-extralight text-gray-300">seleccione el menu para empezar</p>
            <p className="text-sm mt-2 text-gray-500">{process.env.REACT_APP_VERSION}</p>
        </div>
    </section>
}