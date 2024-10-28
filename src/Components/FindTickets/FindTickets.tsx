import "./FindTickets.css"
import aviatickets from "../../assets/svg/aviatickets.svg"
import favorites from "../../assets/svg/favorites.svg"
import hotels from "../../assets/svg/hotels.svg"
import gps2 from "../../assets/svg/gps2.svg"
import business from "../../assets/svg/business.svg"
import arrow from "../../assets/svg/arrow.svg"
import calendar from "../../assets/svg/calendar.svg"
import complexRoute from "../../assets/svg/complexRoute.svg"
import checkmark from "../../assets/svg/checkmark.svg"
import checkbox from "../../assets/svg/checkbox.svg"

export function FindTickets(){
    return(
        <div className="find-tickets"> 
            <div className="find-tickets-page">
                {/* <div className="top-ui-title-container">
                    <h1 className="top-ui-title"> Тут покупают дешёвые авиабилеты </h1>    
                </div> */}
                <ul className="find-tickets-category-bar">
                    <li className="find-tickets-category-group">
                        <ul className="find-tickets-category-group">
                            <li className="choosen-block category-block">
                                <a className="category-block-link">
                                    <div className="svg-container">
                                        <img className="choosen-svg svg" src={aviatickets}/>
                                            
                                    </div>
                                    <div className="text">Авиабилеты</div>
                            </a></li>
                            <li className="unchoosen-block category-block">
                                <a className="category-block-link">
                                <div className="svg-container">
                                    <img className="unchoosen-svg svg" src={hotels}/>
                                </div>
                                <div className="text">Отели</div>
                            </a></li>
                            <li className="unchoosen-block category-block">
                                <a className="category-block-link">
                                <div className="svg-container">
                                    <img className="unchoosen-svg svg" src={gps2}/>
                                </div>
                                <div className="text">Короче </div>
                            </a></li>
                            <li className="unchoosen-block category-block">
                                <a className="category-block-link">
                                <div className="svg-container">
                                    <img className="unchoosen-svg svg" src={favorites}/>
                                </div>
                                <div className="text">Избранное</div>
                            </a></li>
                        </ul>
                    </li>
                    <div className="find-tickets-business">
                        <li className="category-block">
                            <a className="category-block-link">
                                <div className="svg-container">
                                    <img className="find-tickets-business-svg svg" src = {business}/>
                                </div>
                                <div className="text">Для бизнеса</div>
                                <img className="find-tickets-arrow-svg" src = {arrow}/>
                            </a>                    
                        </li>
                    </div>
                </ul>
            
            
                <form className="find-tickets-input-form">
                    <div className="find-tickets-input-group">
                        
                        <div className="find-tickets-input-block ">
                            <input id="departure-input" className="find-tickets-input l-corner" placeholder="Откуда"/>
                            <div className="find-tickets-short-name"></div>
                        </div>
                        <div className="find-tickets-input-block">
                            <input className="find-tickets-input" placeholder="Куда"/>
                            <div className="find-tickets-short-name"></div>
                        </div>
                        <div className="find-tickets-input-block">
                            <button className="find-tickets-button" type="button">
                                <img className="find-tickets-button-svg" src={calendar}/> 
                                <div className="find-tickets-date-button">
                                    Когда
                                    <div className="find-tickets-short-name"> 
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="find-tickets-input-block">
                            <button className="find-tickets-button" type="button">
                                <div className="find-tickets-date-button">
                                    Обратно
                                    <div className="find-tickets-short-name"> 
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="find-tickets-input-block">
                            <button className="find-tickets-button r-corner" type="button"> 
                                <div className="find-tickets-passenger-button">
                                    <div className="find-tickets-passenger-count"> 1 пассажир</div>
                                    <div className="find-tickets-class"> Эконом </div>
                                </div>
                            </button>
                        </div>
                        <button className="find-tickets-button find-tickets-button-confirm"> Найти билеты </button>
                    </div>

                </form>

                <div className="find-tickets-under-input">
                    <div className="complex-route-button-container">
                        <button className="complex-route-button">
                            <img className="complex-route-button-svg" src={complexRoute}/>
                            <span className="complex-route-text">
                                Составить сложный маршрут
                            </span>
                        </button>
                    </div>
                    <label className="open-ostrovok">
                        <input className = "under-input-checkbox" type="checkbox"/>
                        <span className = "under-input-checkmark">
                            <img className="checkmark" src={checkmark}/> 
                        </span>
                        <span className="ostrovok-text"> 
                            Открыть Ostrovok.ru в новой вкладке
                        </span>
                    </label>
                </div>
            </div>
        </div>

    )
}