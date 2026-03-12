import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData"
// import { useState, useEffect } from "react";
// const Body = () => {
//     // const restaurantData = resList[0].data.cards
//     //     .filter(item => item?.card?.card.info)
//     //     .map(item => item?.card?.card.info)
//     // const [restaurants, setlistRestaurants] = useState(restaurantData);
//     const [restaurants, setRestaurants] = useState([]);

//     useEffect(() => {
//         fetchData()

//     }, [])
//     const fetchData = async () => {
//         const data = await fetch("https://www.swiggy.com/restaurants");
//         const json = await data.json();
//         setRestaurants(json)
//     }
//     return (
//         <div className="body">
//             <div className="filter">
//                 <button className="filter-btn" onClick={() => {
//                     const filteredList = restaurants.filter((res) => res.avgRating > 4.2)
//                     setRestaurants(filteredList)
//                 }}>Top Reated Restaurants</button>

//             </div>
//             <div className="res-container">
//                 {restaurants.map(restaurant => {
//                     return (
//                         <RestaurantCard key={restaurant.id}
//                             resData={restaurant} />
//                     )
//                 }
//                 )}

//             </div>
//         </div>
//     )
// }
// export default Body;
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer'

function Body() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const jsonData = await data.json();
        const restList =
            jsonData?.data?.cards
                ?.filter(item => item?.card?.card?.info)
                ?.map(item => item?.card?.card?.info);
        setRestaurants(restList);
    };
    if (restaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filterList = restaurants.filter((resto) => resto.avgRating > 4.2)
                        setRestaurants(filterList)
                    }}>Top Reated Restaureants</button>
            </div>

            <div className="res-container">
                {restaurants.map((res) => (
                    <RestaurantCard
                        key={res.id}
                        resData={res}
                    />
                ))}
            </div>
        </div>

    );
}

export default Body;