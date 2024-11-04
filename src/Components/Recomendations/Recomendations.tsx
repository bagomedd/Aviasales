import * as Sections from "./Sections.tsx";
import { HotPlace } from "./Sections/HotPlace/HotPlace.tsx";
import { Carousel } from "./Sections/Carousel/Carousel.tsx";
import { WeekendSection } from "./Sections/WeekendSection/WeekendSection.tsx";
import "./Recomendations.css";
import "./SectionsGrid.css";
export function Recomendations() {
    return (
        <div className="recomendations-layout">
            <div className="blue-back"></div>
            <div className="recomendations-page">
                {/* <Sections.HotTickets /> */}
                <HotPlace
                    title="Белая Невеста"
                    description="Символ прибрежного города, выражающая чистоту и невинность, находится на фоне Черного моря бла бла бла"
                    city="Геленджик"
                    cost={23418}
                    imageUrl="images/GEL-white-bride.png"
                />
                <HotPlace
                    title="МИЭТ"
                    description="Я тут учусь! аахаххахахахахахахха"
                    city="Зеленоград"
                    cost={17034}
                    imageUrl="images/SVO-miet.png"
                />

                <Carousel
                    carouselTitle="Зимний отдых"
                    elements={[
                        {
                            title: "Увидеть Сулакский каньон",
                            city: "7",
                            imageUrl: "images/pink.png",
                            cost: 3585
                        },
                        {
                            title: "Пожить на острове Ольхон",
                            city: "13",
                            imageUrl: "images/red.png",
                            cost: 8820
                        },
                        {
                            title: "Увидеть Сулакский каньон",
                            city: "Махачкала",
                            imageUrl: "images/MCX-sulac-canion.png",
                            cost: 3585
                        },
                        {
                            title: "Пожить на острове Ольхон",
                            city: "Иркутск",
                            imageUrl: "images/IKT-olkhon.png",
                            cost: 8820
                        },
                        {
                            title: "Увидеть Сулакский каньон",
                            city: "3",
                            imageUrl: "images/orange.png",
                            cost: 3585
                        },
                        {
                            title: "Пожить на острове Ольхон",
                            city: "4",
                            imageUrl: "images/yellow.png",
                            cost: 8820
                        },
                        {
                            title: "Увидеть Сулакский каньон",
                            city: "5",
                            imageUrl: "images/green.png",
                            cost: 3585
                        },
                        {
                            title: "Пожить на острове Ольхон",
                            city: "6",
                            imageUrl: "images/blue.png",
                            cost: 8820
                        },
                        {
                            title: "Увидеть Сулакский каньон",
                            city: "7",
                            imageUrl: "images/pink.png",
                            cost: 3585
                        },
                        {
                            title: "Пожить на острове Ольхон",
                            city: "8",
                            imageUrl: "images/gray.png",
                            cost: 8820
                        },

                        {
                            title: "Увидеть Сулакский каньон",
                            city: "Махачкала",
                            imageUrl: "images/MCX-sulac-canion.png",
                            cost: 3585
                        },
                        {
                            title: "Пожить на острове Ольхон",
                            city: "Иркутск",
                            imageUrl: "images/IKT-olkhon.png",
                            cost: 8820
                        },
                        {
                            title: "Увидеть Сулакский каньон",
                            city: "3",
                            imageUrl: "images/orange.png",
                            cost: 3585
                        },
                        {
                            title: "Пожить на острове Ольхон",
                            city: "4",
                            imageUrl: "images/yellow.png",
                            cost: 8820
                        },
                        {
                            title: "Увидеть Сулакский каньон",
                            city: "5",
                            imageUrl: "images/green.png",
                            cost: 3585
                        },
                    ]}
                />

                <WeekendSection
                    elements={[
                        {
                            cityDeparture: "Москва",
                            cityArrival: "Санкт-петербург",
                            dateDeparture: new Date(2024, 12, 15),
                            dateArrival: new Date(2024, 12, 16),
                            imageUrl: "/images/yellow.png",
                            cost: 12540,
                        },
                        {
                            cityDeparture: "Москва",
                            cityArrival: "Астана",
                            dateDeparture: new Date(2024, 12, 9),
                            dateArrival: new Date(2024, 12, 10),
                            imageUrl: "/images/red.png",
                            cost: 8598,
                        },
                        {
                            cityDeparture: "Москва",
                            cityArrival: "Казань",
                            dateDeparture: new Date(2024, 12, 15),
                            dateArrival: new Date(2024, 12, 16),
                            imageUrl: "/images/blue.png",
                            cost: 1488,
                        },
                        {
                            cityDeparture: "Москва",
                            cityArrival: "Санкт-петербург",
                            dateDeparture: new Date(2024, 12, 15),
                            dateArrival: new Date(2024, 12, 16),
                            imageUrl: "/images/yellow.png",
                            cost: 12540,
                        }
                    ]}
                />

                <Sections.CostMap />
                <Sections.CuteKitty />
                <Sections.HelpSection />
                <div></div>
            </div>
        </div>
    );
}
