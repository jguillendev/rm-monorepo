import { HeaderBar } from "../components/HeaderBar";

export const FlightsPage = () => {
    return <main className="flex flex-col h-screen w-screen">
        <HeaderBar viewName="flights"/>
        <FlightsContent />
    </main>
}

export const FlightsContent = () => {
    return <section className="flex-1 flex flex-col items-center justify-center">
        <div className="text-center">
           flights
        </div>
    </section>
}