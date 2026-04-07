import { useState, useEffect } from "react";
import mockMenuData from "../utils/mockData";

const RestaurantsMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = () => {
        const cards = mockMenuData?.data?.cards;

        const restaurantCard = cards.find((item) => {
            return item?.card?.card?.info;
        });

        const restaurantInfo = restaurantCard?.card?.card?.info;

        setResInfo(restaurantInfo);
    };

    if (resInfo === null) {
        return <h1>Loading...</h1>;
    }

    const { name, cuisines, avgRating, costForTwoMessage, areaName } = resInfo;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <p>{avgRating} ⭐</p>
            <p>{areaName}</p>
        </div>
    );
};

export default RestaurantsMenu;