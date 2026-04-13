import { CDN_URL } from "../utils/constants"
import useOnlineStatus from "../utils/useOnlineStatus";


const RestaurantCard = ({ resData }) => {
    const { name, cloudinaryImageId, avgRating, cuisines } = resData;
    const { sla } = resData;
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return
        <h2>Check internet connection</h2>
    }
    return (
        <div className="res-cards">

            <img
                className="res-logo"
                alt="res-logo"
                src={
                    CDN_URL + cloudinaryImageId
                }
            />

            <div className="res-info">
                <h4>{name}</h4>
                <h5>{cuisines.join(", ")}</h5>
                <h5>{avgRating} ⭐</h5>
                <h5>{sla.deliveryTime} minutes</h5>
            </div>

        </div>
    );
};
export default RestaurantCard;