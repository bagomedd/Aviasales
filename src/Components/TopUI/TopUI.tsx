import logo from "../../assets/svg/logo.svg"
import aviasales from "../../assets/svg/aviasales.svg"
import profile from "../../assets/svg/profile.svg"
import support from "../../assets/svg/support.svg"
import currency from "../../assets/svg/currency.svg"
import aviatickets from "../../assets/svg/aviatickets.svg"
import favorites from "../../assets/svg/favorites.svg"
import hotels from "../../assets/svg/hotels.svg"
import gps from "../../assets/svg/gps.svg"
import business from "../../assets/svg/business.svg"
import arrow from "../../assets/svg/arrow.svg"


import "./TopUI.css"

export function TopUI(){

    return(
        <header className="top">
        
        <div className="top-ui">
            <div className="top-ui-logo-group">
                <img className="top-ui-svg " src = {logo}/>
                <img className="top-ui-svg " src = {aviasales}/>
            </div>
            
            <div className="top-ui-scroll-menu">
                
                <div className="top-ui-aviatickets-group">
                    <a className ="top-ui-block">
                        <div className="top-ui-container">
                            <img className="top-ui-svg" src = {aviatickets}/>
                            Авиабилеты
                        </div>
                    </a>
                </div>

                <div className ="top-ui-scroll-group">
                    <a className ="top-ui-block">
                        <div className="top-ui-container">
                            <img className="top-ui-svg" src = {hotels}/>
                            Отели
                        </div>
                    </a>
                    <a className ="top-ui-block">
                        <div className="top-ui-container">
                            <img className="top-ui-svg" src = {gps}/>
                            Короче
                        </div>
                    </a>
                    <a className ="top-ui-block">
                        <div className="top-ui-container">
                            <img className="top-ui-svg" src = {favorites}/>
                            Избранное
                        </div>
                    </a>
                </div>
                    
                <div className="top-ui-business-group">
                    <a className ="top-ui-block">
                        <div className="top-ui-container">
                            <img className="top-ui-svg" src = {business}/>
                            Бизнес
                            <img className="top-ui-svg" src = {arrow}/>
                        </div>
                    </a>
                </div>
            </div>

            <div className="top-ui-static-group">
                <button className="top-ui-block"> 
                    <div className = "top-ui-container">
                        <img className="top-ui-svg" src = {profile}/>
                        Профиль
                    </div>
                </button>
                <a className="top-ui-block"> 
                    <div className = "top-ui-container">
                        <img className="top-ui-svg" src = {support}/>
                        Поддержка
                    </div>
                </a>
                <button className="top-ui-block"> 
                    <div className = "top-ui-container">
                        <img className="top-ui-svg" src = {currency}/>
                        RUB
                    </div>
                </button>
            </div>

        </div>
        <div className="top-ui-title-container">
            <h1 className="top-ui-title"> Тут покупают дешёвые авиабилеты </h1>    
        </div>
        </header>
    )
}