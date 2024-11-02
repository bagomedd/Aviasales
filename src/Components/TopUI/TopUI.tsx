import logo from "/svg/logo.svg";
import aviasales from "/svg/aviasales.svg";
import profile from "/svg/profile.svg";
import support from "/svg/support.svg";
import currency from "/svg/currency.svg";
import aviatickets from "/svg/plane.svg";
import favorites from "/svg/favorites.svg";
import hotels from "/svg/hotels.svg";
import gps from "/svg/gps.svg";
import business from "/svg/business.svg";
import arrow from "/svg/arrow.svg";

import { showTopMenu } from "../utils.tsx";
showTopMenu();
import "./TopUI.css";

export function TopUI() {

    return (
        <header className="top">
            <div className="fixed-header">
                <div className="top-ui">
                    <div className="top-ui-logo-group">
                        <img className="top-ui-svg " src={logo} />
                        <img className="top-ui-svg " src={aviasales} />
                    </div>

                    <div id="top-ui-scroll-menu-id" className="top-ui-scroll-menu">
                        <div className="top-ui-aviatickets-group">
                            <a className="top-ui-block">
                                <div className="top-ui-container">
                                    <img
                                        className="top-ui-svg"
                                        src={aviatickets}
                                    />
                                    Авиабилеты
                                </div>
                            </a>
                        </div>

                        <div className="top-ui-scroll-group">
                            <a className="top-ui-block">
                                <div className="top-ui-container">
                                    <img className="top-ui-svg" src={hotels} />
                                    Отели
                                </div>
                            </a>
                            <a className="top-ui-block">
                                <div className="top-ui-container">
                                    <img className="top-ui-svg" src={gps} />
                                    Короче
                                </div>
                            </a>
                            <a className="top-ui-block">
                                <div className="top-ui-container">
                                    <img
                                        className="top-ui-svg"
                                        src={favorites}
                                    />
                                    Избранное
                                </div>
                            </a>
                        </div>

                        <div className="top-ui-business-group">
                            <a className="top-ui-block">
                                <div className="top-ui-container">
                                    <img
                                        className="top-ui-svg"
                                        src={business}
                                    />
                                    Бизнес
                                    <img className="top-ui-svg" src={arrow} />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="top-ui-static-group">
                        <button className="top-ui-block">
                            <div className="top-ui-container">
                                <img className="top-ui-svg" src={profile} />
                                Профиль
                            </div>
                        </button>
                        <a className="top-ui-block">
                            <div className="top-ui-container">
                                <img className="top-ui-svg" src={support} />
                                Поддержка
                            </div>
                        </a>
                        <button className="top-ui-block">
                            <div className="top-ui-container">
                                <img className="top-ui-svg" src={currency} />
                                RUB
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="top-ui-title-container">
                <h1 className="top-ui-title">
                    {" "}
                    Тут покупают дешёвые авиабилеты{" "}
                </h1>
            </div>
        </header>
    );
}
