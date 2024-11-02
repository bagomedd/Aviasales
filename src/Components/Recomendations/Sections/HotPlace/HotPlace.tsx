import "./HotPlace.css"
import plane from "/svg/plane.svg";
interface HotPlaceProps{
    title:string;
    description:string;
    city:string;
    cost:number;
    imageUrl:string;
}
export function HotPlace({title,description,city,cost,imageUrl}:HotPlaceProps) {
    return (
    <button className="recomendations-section hot-place">
        <div className="hot-place-section" style={{backgroundImage: `url(${imageUrl})` }}> 
            <div className="hot-place-content">
                <div className = "cost-block">
                    <span className="cost-block-text">
                    <div className="svg-container">
                        <img src={plane}/> 
                    </div>
                    {city} от {cost} RUB
                </span>
                </div>
                

                <div className="info-block">
                    <div className="title"> {title} </div>
                    <div className="description"> {description} </div>
                </div>
            </div>
        </div>
    </button>
    );
}