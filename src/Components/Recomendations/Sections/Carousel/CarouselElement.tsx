import "./CarouselElement.css";
import plane from "/svg/plane.svg";
export interface CarouselElementType{
    title: string,
    imageUrl: string,
    city: string,
    cost: number;
    
}
export function CarouselElement({title,imageUrl,city,cost}:CarouselElementType)
{
    return(
    <li className="carousel-element">
        <div className="image-container">
            <img className= "image" src = {imageUrl}/>
        </div>
        <div className="title"> {title} </div>
        <div className="city"> {city} </div>
        <div className="ticket">
            <span className="svg-container">
                <img className="svg" src = {plane}/> 
            </span>
            <span className="cost"> от {cost} RUB </span>  
        </div>
        
    </li>
    );
}