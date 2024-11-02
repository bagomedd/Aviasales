import { CarouselElementType } from "./CarouselElement.tsx";
import { CarouselElement } from "./CarouselElement.tsx";
import "./Carousel.css";
import arrowLeft from "/svg/arrowLeftMin.svg"
import { swipeCarouselRight } from "../../../utils.tsx";
import { swipeCarouselLeft } from "../../../utils.tsx";

interface CarouselProps {
    carouselTitle: string,
    elements: Array<CarouselElementType>
    buttonText?: string,
    onButtonClick?: () => void;
}

export function Carousel({ carouselTitle, elements, buttonText, onButtonClick }: CarouselProps) {
    return (
        <div className="recomendations-section  width-section  carousel">
            <div>
                <div className="carousel-content">
                    <div className="carousel-top">
                        <span className="carousel-title">{carouselTitle}</span>
                        <div className="arrows">
                            <button className="arrow" onClick={() => swipeCarouselLeft('carousel-elements-1')}>
                                <img src={arrowLeft} />
                            </button>
                            <button className="arrow " onClick={() => swipeCarouselRight('carousel-elements-1')}>
                                {<img className="arrow-right" src={arrowLeft} />}
                            </button>
                        </div>
                    </div>
                    <ul className="carousel-elements" id="carousel-elements-1">
                        {
                            elements.map((element) =>
                            (
                                <CarouselElement
                                    title={element.title}
                                    imageUrl={element.imageUrl}
                                    city={element.city}
                                    cost={element.cost}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}