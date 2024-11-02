import { TopUI } from "./Components/TopUI/TopUI.tsx";
import { FindTickets } from "./Components/FindTickets/FindTickets.tsx";
import { Recomendations } from "./Components/Recomendations/Recomendations.tsx";
export function App() {
    return (
        <>
            <TopUI />
            <FindTickets />
            <Recomendations />
        </>
    );
}
