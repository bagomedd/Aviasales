import "./WeekendSection.css";
import { weekendElementType } from "./WeekendElement.tsx";
import { WeekendElement } from "./WeekendElement.tsx";
import { useState, useEffect } from 'react';

interface weekendSectionProps {
    elements: Array<weekendElementType>;
}


export function WeekendSection({ elements }: weekendSectionProps) {
    const [lastOffset, setLastOffset] = useState(0);
    const [uniqueNumber, setUniqueNumber] = useState(elements.length - 1);
    const offset = 600;
    useEffect(() => {
        const move = async () => {
            console.log(uniqueNumber);
            if (uniqueNumber == 1) {

                let movingElement = document.getElementById("weekend-element" + uniqueNumber);
                setUniqueNumber(prev => prev - 1);
                movingElement!.style.transform = `translate(${offset}px,0px) rotate(20deg)`;
                setLastOffset(prev => prev + offset);

                for (let i = elements.length - 1; i > 0; i--) {
                    let movingElement = document.getElementById("weekend-element" + i);
                    let defaultTransition = getComputedStyle(movingElement!).transition;
                    setTimeout(() => {
                        requestAnimationFrame(() => {
                            movingElement!.style.transition = "none";
                            movingElement!.style.transform = `translate(0px,0px) rotate(0deg)`;
                            requestAnimationFrame(() => {
                                movingElement!.style.transition = defaultTransition;
                            })
                        })
                    }, 500)
                }
                setUniqueNumber(() => (elements.length - 1));
                console.log(uniqueNumber);
            }
            else {
                let movingElement = document.getElementById("weekend-element" + uniqueNumber);
                setUniqueNumber(prev => prev - 1);
                movingElement!.style.transform = `translate(${offset}px,0px) rotate(20deg)`;
                setLastOffset(prev => prev + offset);
            }
        }
        const intervalId = setInterval(move, 6000);
        return () => clearInterval(intervalId);
    }, [lastOffset, uniqueNumber])



    return (
        <div className="recomendations-section  width-section  weekend-section">
            <div className="text">

            </div>

            {/*<img src = "">*/}
            <div className="weekend-elements">
                {
                    elements.map((element, index) => {
                        return (<WeekendElement
                            key={index}
                            uniqueNumber={index}
                            cityDeparture={element.cityDeparture}
                            cityArrival={element.cityArrival}
                            dateDeparture={element.dateDeparture}
                            dateArrival={element.dateArrival}
                            imageUrl={element.imageUrl}
                            cost={element.cost}
                        />)
                    })
                }
            </div>
        </div>
    );
}