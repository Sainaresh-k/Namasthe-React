import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData"
// import { useState, useEffect } from "react";
// const Body = () => {
// const restaurantData = resList[0].data.cards
//     .filter(item => item?.card?.card.info)
//     .map(item => item?.card?.card.info)
// const [restaurants, setlistRestaurants] = useState(restaurantData);
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

// function Body() {
//     const [allRestaurants, setAllRestaurants] = useState([]);
//     const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const data = await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
//         );

//         const jsonData = await data.json();

//         const restList = jsonData?.data?.cards
//             ?.filter((item) => item?.card?.card?.info)
//             ?.map((item) => item?.card?.card?.info);

//         console.log("Full Restaurant List:", restList);

//         setAllRestaurants(restList);
//         setFilteredRestaurants(restList);
//     };

//     return filteredRestaurants.length === 0 ? (
//         <Shimmer />
//     ) : (
//         <div className="body">
//             <div className="search-container">
//                 <div className="search">
//                     <input
//                         className="input-box"
//                         type="text"
//                         value={searchText}
//                         onChange={(e) => {
//                             setSearchText(e.target.value);
//                         }}
//                     />

//                     <button
//                         onClick={() => {
//                             const searchList = allRestaurants.filter((res) =>
//                                 res.name.toLowerCase().includes(searchText.toLowerCase())
//                             );
//                             setFilteredRestaurants(searchList);
//                         }}
//                     >
//                         Search
//                     </button>
//                 </div>

//                 <div className="filter">
//                     <button
//                         className="filter-btn"
//                         onClick={() => {
//                             const filterList = allRestaurants.filter(
//                                 (resto) => resto.avgRating > 4.2
//                             );
//                             setFilteredRestaurants(filterList);
//                         }}
//                     >
//                         Top Rated Restaurants
//                     </button>
//                 </div>
//             </div>

//             <div className="res-container">
//                 {filteredRestaurants.map((res) => (
//                     <RestaurantCard key={res.id} resData={res} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Body;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function Body() {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83646&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );

        const jsonData = await data.json();

        const restList = jsonData?.data?.cards
            ?.filter((item) => item?.card?.card?.info)
            ?.map((item) => item?.card?.card?.info);

        console.log("Full Restaurant List:", restList);

        setAllRestaurants(restList);
        setFilteredRestaurants(restList);
    };

    return filteredRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className=" flex">
                <div className=" px-4">
                    <input
                        className=" px-3 py-1 mx-2 my-1 border border-solid border-black rounded-2xl"
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />

                    <button className=" px-4 py-1 bg-green-200 mx-4 my-2 border border-black rounded-lg"
                        onClick={() => {
                            const searchList = allRestaurants.filter((res) =>
                                res.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(searchList);
                        }}
                    >
                        Search
                    </button>
                </div>

                <div className="filter">
                    <button
                        className="px-4 py-1 m-2 items-center bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition"
                        onClick={() => {
                            const filterList = allRestaurants.filter(
                                (resto) => resto.avgRating > 4.2
                            );
                            setFilteredRestaurants(filterList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className=" flex flex-wrap gap-4 px-6">
                {filteredRestaurants.map((res) => (
                    <Link
                        key={res.id}
                        to={"/restaurants/" + res.id}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <RestaurantCard resData={res} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Body;