import money from "../../assets/svg/money.svg";
import * as Sections from "./Sections.tsx";
import "./Recomendations.css";
export function Recomendations(){
    return(
        <div className ="recomendations-layout">
            <div className = "blue-back"></div>
            <div className="recomendations-page">

                <Sections.HotTickets/>
                <Sections.HotPlace/>
                <Sections.Carousel/>
                <Sections.WeekendSection/>
                <Sections.Carousel/>
                <Sections.HotPlace/>
                <Sections.HotPlace/>
                <Sections.CostMap/>
                <Sections.Carousel/>
                <Sections.Carousel/>
                <Sections.CuteKitty/>
                <Sections.HelpSection/>
            </div>
        </div>
    )
}