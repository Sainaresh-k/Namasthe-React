import { useState, useEffect } from "react";
import mockMenuData from "../utils/mockData";
import { useParams } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantsMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantsMenu(resId);

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