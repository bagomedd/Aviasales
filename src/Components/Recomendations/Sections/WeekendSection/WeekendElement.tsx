
import "./WeekendElement.css";
import { convertDate } from "../../../utils.tsx";
export interface weekendElementType {

    cityDeparture: string,
    cityArrival: string,
    dateDeparture: Date,
    dateArrival: Date,
    imageUrl: string,
    cost: number;
}

export function WeekendElement({ uniqueNumber, cityDeparture, cityArrival, dateDeparture, dateArrival, imageUrl, cost }: { uniqueNumber: number } & weekendElementType) {


    return (
        <div className="weekend-element" id={"weekend-element" + uniqueNumber} >
            <div className="image-container">
                <img className="image" src={imageUrl} />
            </div>
            <div className="text">
                <div className="cost"> {cost} RUB </div>
                <div className="route"> {cityDeparture} - {cityArrival} </div>
                <div className="dates"> {convertDate(dateDeparture)} - {convertDate(dateArrival)} </div>
            </div>
        </div>
    );
}