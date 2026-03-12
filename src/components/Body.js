import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
import { useState, useEffect } from "react";
const Body = () => {
    const restaurantData = resList[0].data.cards
        .filter(item => item?.card?.card.info)
        .map(item => item?.card?.card.info)
    const [restaurants, setlistRestaurants] = useState(restaurantData);
    useEffect(() => {
        console.log('useEffect called')
    }, [])
    console.log(" test")

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = restaurants.filter((res) => res.avgRating > 4.2)
                    setlistRestaurants(filteredList)
                }}>Top Reated Restaurants</button>

            </div>
            <div className="res-container">
                {restaurants.map(restaurant => {
                    return (
                        <RestaurantCard key={restaurant.id}
                            resData={restaurant} />
                    )
                }
                )}

            </div>
        </div>
    )
}
export default Body;