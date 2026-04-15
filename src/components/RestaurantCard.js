import { CDN_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";


const RestaurantCard = ({ resData }) => {
    const { name, cloudinaryImageId, avgRating, cuisines } = resData;
    const { sla } = resData;
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return <h2>Check internet connection</h2>
    }
    return (
        <div className="p-2 w-60 h-80 bg-gray-100 hover:bg-amber-200 rounded-lg flex flex-col">
            <img
                className="w-full h-40 rounded-lg object-cover"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />

            <div className="mt-2">
                <h4 className="font-bold truncate">{name}</h4>
                <h5 className="text-sm truncate">
                    {cuisines.join(", ")}
                </h5>
                <h5>{avgRating} ⭐</h5>
                <h5>{sla.deliveryTime} minutes</h5>
            </div>
        </div>
    );
};
export const withHeader = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="m-2 p-1 rounded-sm absolute bg-black text-white">Top Rated</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export default RestaurantCard;