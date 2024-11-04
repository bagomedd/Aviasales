import money from "/svg/money.svg";

export function HotTickets() {
    return (
        <div className="recomendations-section hot-tickets">
            <div className="hot-tickets-title"> Горячие билеты </div>
            <div className="hot-tickets-subtitle"> Ща разберем уже </div>
            <div className="hot-tickets-svg-contatiner">
                <img className="hot-tickets-money" src={money} />
            </div>
        </div>
    );
}
export function CostMap() {
    return (
        <div className="recomendations-section  width-section  cost-map-section">
            {" "}
            cost-map-section{" "}
        </div>
    );
}
export function Journal() {
    return (
        <div className="recomendations-section  width-section  journal">
            {" "}
            journal{" "}
        </div>
    );
}
export function CuteKitty() {
    return (
        <div className="recomendations-section  width-section  cute-kitty">
            {" "}
            Cute-kitty{" "}
        </div>
    );
}
export function HelpSection() {
    return (
        <div className="recomendations-section  width-section  help-section">
            {" "}
            Помогаем{" "}
        </div>
    );
}
