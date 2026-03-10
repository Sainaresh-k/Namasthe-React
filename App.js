import React from "react";
import ReactDOM from 'react-dom/client';
import { jsx } from "react/jsx-runtime";
/**
 * Header
 *  -Logo
 *  -Nav bar
 * Body
 *  -search
 *  -Restaurant cards
 *     - img
 *     - delivary time
 *     -star rating
 *     -cuisine
 * Footer
 *  -copyright
 *  -address
 *  -contact
 */
const resObj =
{
    "statusCode": 0,
    "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
            "nextOffset": "CJpqEJtYKIDgrNLShP3gNjDIDjgE",
            "widgetOffset": {
                "restaurantCountWidget": "",
                "collectionV5RestaurantListWidget_SimRestoRelevance_food": "8",
                "inlineFacetFilter": "",
                "collectionV5MastheadWidget": ""
            }
        },
        "cards": [
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                        "collectionId": "83649",
                        "title": "Biryani",
                        "description": "Taste these delectable classics, delectable biryanis to make your day.",
                        "imageId": "COLLECTIONS/IMAGES/MERCH/2025/3/7/7debcf9a-054c-4ca7-b4b0-0a8d88023986_biryani nv (3) (1).png",
                        "aspectRatio": "3.44",
                        "cta": {
                            "link": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani,layout_cuisine_biryani,ads_pc_biryani,biryani",
                            "type": "collectionv2"
                        },
                        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
                        "count": "288 restaurants",
                        "navBarConfig": {}
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                        "sortConfigs": [
                            {
                                "key": "relevance",
                                "title": "Relevance (Default)",
                                "selected": true,
                                "defaultSelection": true
                            },
                            {
                                "key": "deliveryTimeAsc",
                                "title": "Delivery Time"
                            },
                            {
                                "key": "modelBasedRatingDesc",
                                "title": "Rating"
                            },
                            {
                                "key": "costForTwoAsc",
                                "title": "Cost: Low to High"
                            },
                            {
                                "key": "costForTwoDesc",
                                "title": "Cost: High to Low"
                            }
                        ],
                        "restaurantCount": 288,
                        "facetList": [
                            {
                                "label": "10 Mins Delivery",
                                "id": "isRestaurantBolt",
                                "selection": "SELECT_TYPE_SINGLESELECT",
                                "facetInfo": [
                                    {
                                        "label": "10 Mins Delivery",
                                        "id": "isRestaurantBoltfacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_FLATTENED",
                                "subLabel": "Filter by",
                                "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
                                "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
                            },
                            {
                                "label": "Veg/Non-Veg",
                                "id": "isVeg",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Non Veg",
                                        "id": "isVegfacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Pure Veg",
                                        "id": "isVegfacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by",
                                "openFilter": true
                            },
                            {
                                "label": "Ratings",
                                "id": "rating",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Ratings",
                                        "id": "ratingfacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Ratings 4.0+",
                                        "id": "ratingfacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Ratings 4.5+",
                                        "id": "ratingfacetquery2",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by",
                                "openFilter": true
                            },
                            {
                                "label": "Delivery Time",
                                "id": "deliveryTime",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Less than 30 mins",
                                        "id": "deliveryTimefacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Less than 45 mins",
                                        "id": "deliveryTimefacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by",
                                "openFilter": true
                            },
                            {
                                "label": "Cost For Two",
                                "id": "costForTwo",
                                "selection": "SELECT_TYPE_MULTISELECT",
                                "facetInfo": [
                                    {
                                        "label": "Less than Rs. 300",
                                        "id": "costForTwofacetquery0",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Rs.300 - Rs.600",
                                        "id": "costForTwofacetquery1",
                                        "analytics": {},
                                        "openFilter": true
                                    },
                                    {
                                        "label": "Greater than Rs. 600",
                                        "id": "costForTwofacetquery2",
                                        "analytics": {},
                                        "openFilter": true
                                    }
                                ],
                                "viewType": "VIEW_TYPE_HALF_CARD",
                                "subLabel": "Filter by",
                                "openFilter": true
                            }
                        ],
                        "widgetId": "inlineFacetFilter"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                        "layout": {
                            "rows": 1,
                            "widgetPadding": {
                                "left": 16,
                                "top": 12,
                                "right": 16
                            },
                            "widgetTheme": {
                                "defaultMode": {
                                    "backgroundColour": "#FFFFFF",
                                    "theme": "THEME_TYPE_LIGHT"
                                },
                                "darkMode": {
                                    "backgroundColour": "#1B3028",
                                    "theme": "THEME_TYPE_DARK"
                                }
                            }
                        },
                        "id": "restaurantCountWidget",
                        "gridElements": {
                            "infoWithStyle": {
                                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                                "text": "288 Restaurants to explore",
                                "headerStyling": {
                                    "textSize": 15,
                                    "textColor": "text_color_highest_emphasis",
                                    "textFontName": "FONT_NAME_HEADER_H5",
                                    "maxLines": 1
                                }
                            }
                        }
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "1194334",
                            "name": "Big Bowl",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/3/a6e60e54-a9bf-472c-92e1-1b0ad2faf923_1194334.jpg",
                            "locality": "Chikkadpally New nallakunta",
                            "areaName": "Oden Mall",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "Chinese",
                                "Tibetan",
                                "Desserts"
                            ],
                            "avgRating": 4,
                            "parentId": "434792",
                            "avgRatingString": "4.0",
                            "totalRatingsString": "146",
                            "promoted": true,
                            "adTrackingId": "cid=5aca3845-c248-42ac-9fe2-1b2993ebdcfd~p=2~adgrpid=5aca3845-c248-42ac-9fe2-1b2993ebdcfd#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1194334~plpr=COLLECTION~eid=4dfa340e-d3b6-456b-9254-12e82a2462c7~srvts=1773069853720~collid=83649",
                            "sla": {
                                "deliveryTime": 50,
                                "lastMileTravel": 6.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-60 mins",
                                "lastMileTravelString": "6.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2026-03-09 23:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "aggregatedDiscountInfoV3": {
                                "header": "ITEMS",
                                "subHeader": "AT ₹119",
                                "logoCtx": {
                                    "text": "BENEFITS"
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "isNewlyOnboarded": true,
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "5aca3845-c248-42ac-9fe2-1b2993ebdcfd"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=1194334&source=collection&query=Biryani",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
                    },
                    "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
                        "sectionId": "MENU_RETURN_FOOD"
                    }
                }
            },]
    },
}

const Header = () => {
    return (
        <div className="header">
            {/*logo*/}
            <div className="logo-container">
                <img className="logo" src='https://static.vecteezy.com/system/resources/thumbnails/055/349/890/small/chef-mascot-logo-design-for-restaurant-cooking-man-tasty-express-food-illustration-vector.jpg'
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {/**navbar */}
        </div>
    )
}
const RestaurantCard = (props) => {

    const { resData } = props;

    const {
        name,
        cuisines,
        avgRating,
        sla,
        cloudinaryImageId
    } = resData;

    return (
        <div className="res-cards">

            <img
                className="res-logo"
                alt="res-logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />

            <div className="res-info">
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <h5>{avgRating} ⭐</h5>
                <h5>{sla.deliveryTime} minutes</h5>
            </div>

        </div>
    );
};
const Body = () => {
    const resInfo = resObj.data.cards[3].card.card.info;

    return (
        <div className="body">
            <div className="search">Search </div>
            <div className="res-container">
                <RestaurantCard resData={resInfo} />
                <RestaurantCard resData={resInfo} />
            </div>
        </div>
    )
}
const App = () => {
    return (
        <div className="app">
            <Header />
            < Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)



