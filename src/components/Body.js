import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData"
const Body = () => {
    const restaurants = resList[0].data.cards
        .filter(item => item?.card?.card.info)
        .map(item => item?.card?.card.info)
    console.log(restaurants)

    return (
        <div className="body">
            <div className="search">Search </div>
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