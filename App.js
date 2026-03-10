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
const resList = [
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
                                "adTrackingId": "cid=5aca3845-c248-42ac-9fe2-1b2993ebdcfd~p=3~adgrpid=5aca3845-c248-42ac-9fe2-1b2993ebdcfd#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1194334~plpr=COLLECTION~eid=d233b099-dacc-4f4b-a58e-314a7c494007~srvts=1773074896430~collid=83649",
                                "sla": {
                                    "deliveryTime": 42,
                                    "lastMileTravel": 6.2,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "40-45 mins",
                                    "lastMileTravelString": "6.2 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2026-03-09 23:00:00",
                                    "opened": true
                                },
                                "badges": {

                                },
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "textBased": {

                                        },
                                        "imageBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
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
                                    "title": {

                                    },
                                    "subTitle": {

                                    },
                                    "message": {

                                    },
                                    "customIcon": {

                                    },
                                    "commsStyling": {

                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                                    }
                                },
                                "reviewsSummary": {

                                },
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "isNewlyOnboarded": true,
                                "restaurantOfferPresentationInfo": {

                                },
                                "externalRatings": {
                                    "aggregatedRating": {
                                        "rating": "--"
                                    }
                                },
                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                "campaignId": "5aca3845-c248-42ac-9fe2-1b2993ebdcfd"
                            },
                            "analytics": {

                            },
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
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            "info": {
                                "id": "4138",
                                "name": "Grand Hotel",
                                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/11bab9a5-1cd7-4e69-b837-f7ec3150c493_80f7ff85-05a4-4f94-8525-bf9f2713fbce.jpg",
                                "locality": "Banjara Hills",
                                "areaName": "Abids",
                                "costForTwo": "₹300 for two",
                                "cuisines": [
                                    "Biryani",
                                    "Chinese",
                                    "Kebabs",
                                    "Tandoor"
                                ],
                                "avgRating": 4.3,
                                "parentId": "4001",
                                "avgRatingString": "4.3",
                                "totalRatingsString": "354K+",
                                "promoted": true,
                                "adTrackingId": "cid=d7e678d0-572f-4237-bf34-5ec865d73686~p=6~adgrpid=d7e678d0-572f-4237-bf34-5ec865d73686#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=4138~plpr=COLLECTION~eid=2eab896e-36ea-4c64-af90-47c86f318e83~srvts=1773074896430~collid=83649",
                                "sla": {
                                    "deliveryTime": 26,
                                    "lastMileTravel": 3.7,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "25-30 mins",
                                    "lastMileTravelString": "3.7 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2026-03-10 03:00:00",
                                    "opened": true
                                },
                                "badges": {

                                },
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "textBased": {

                                        },
                                        "imageBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "ITEMS",
                                    "subHeader": "AT ₹149",
                                    "logoCtx": {
                                        "text": "BENEFITS"
                                    }
                                },
                                "orderabilityCommunication": {
                                    "title": {

                                    },
                                    "subTitle": {

                                    },
                                    "message": {

                                    },
                                    "customIcon": {

                                    },
                                    "commsStyling": {

                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                                    }
                                },
                                "reviewsSummary": {

                                },
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {

                                },
                                "externalRatings": {
                                    "aggregatedRating": {
                                        "rating": "4.1",
                                        "ratingCount": "32K+"
                                    },
                                    "source": "GOOGLE",
                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                },
                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                "campaignId": "d7e678d0-572f-4237-bf34-5ec865d73686"
                            },
                            "analytics": {

                            },
                            "cta": {
                                "link": "swiggy://menu?restaurant_id=4138&source=collection&query=Biryani",
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
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            "info": {
                                "id": "370411",
                                "name": "Pista House Haleem",
                                "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/1/d983c668-295b-4f00-ae93-65df262a7ff4_370411.jpg",
                                "locality": "Nayapul",
                                "areaName": "Charminar",
                                "costForTwo": "₹400 for two",
                                "cuisines": [
                                    "Haleem",
                                    "Biryani"
                                ],
                                "avgRating": 4.5,
                                "parentId": "21968",
                                "avgRatingString": "4.5",
                                "totalRatingsString": "820",
                                "promoted": true,
                                "adTrackingId": "cid=109e3920-3a37-43fe-be47-20d577a15569~p=9~adgrpid=109e3920-3a37-43fe-be47-20d577a15569#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=370411~plpr=COLLECTION~eid=b637b50a-c5be-448d-a98f-685fac629826~srvts=1773074896430~collid=83649",
                                "sla": {
                                    "deliveryTime": 31,
                                    "lastMileTravel": 3.8,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "30-35 mins",
                                    "lastMileTravelString": "3.8 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2026-03-09 23:59:00",
                                    "opened": true
                                },
                                "badges": {

                                },
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "textBased": {

                                        },
                                        "imageBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "40% OFF",
                                    "subHeader": "UPTO ₹80",
                                    "logoCtx": {
                                        "text": "BENEFITS"
                                    }
                                },
                                "orderabilityCommunication": {
                                    "title": {

                                    },
                                    "subTitle": {

                                    },
                                    "message": {

                                    },
                                    "customIcon": {

                                    },
                                    "commsStyling": {

                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                                    }
                                },
                                "reviewsSummary": {

                                },
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {

                                },
                                "externalRatings": {
                                    "aggregatedRating": {
                                        "rating": "--"
                                    }
                                },
                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                "campaignId": "109e3920-3a37-43fe-be47-20d577a15569"
                            },
                            "analytics": {

                            },
                            "cta": {
                                "link": "swiggy://menu?restaurant_id=370411&source=collection&query=Biryani",
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
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            "info": {
                                "id": "100942",
                                "name": "Lucky Multicuisine Restaurant",
                                "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/13/6e4fbf54-fd7f-48c0-97ba-f46e27ed5853_c054b482-581f-468f-9800-38402f10fb78.jpg_compressed",
                                "locality": "Somajiguda",
                                "areaName": "Somajiguda",
                                "costForTwo": "₹350 for two",
                                "cuisines": [
                                    "Biryani",
                                    "Tandoor",
                                    "South Indian"
                                ],
                                "avgRating": 4.1,
                                "parentId": "18963",
                                "avgRatingString": "4.1",
                                "totalRatingsString": "72K+",
                                "promoted": true,
                                "adTrackingId": "cid=af372134-6780-492c-8d90-d92e1ceb26e6~p=10~adgrpid=af372134-6780-492c-8d90-d92e1ceb26e6#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=100942~plpr=COLLECTION~eid=324e4258-e25e-4c20-bf2a-f9b8dcd06098~srvts=1773074896430~collid=83649",
                                "sla": {
                                    "deliveryTime": 34,
                                    "lastMileTravel": 6.4,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "30-35 mins",
                                    "lastMileTravelString": "6.4 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2026-03-09 23:59:00",
                                    "opened": true
                                },
                                "badges": {

                                },
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "textBased": {

                                        },
                                        "imageBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "₹100 OFF",
                                    "subHeader": "ABOVE ₹199",
                                    "discountTag": "FLAT DEAL",
                                    "logoCtx": {
                                        "text": "BENEFITS"
                                    }
                                },
                                "orderabilityCommunication": {
                                    "title": {

                                    },
                                    "subTitle": {

                                    },
                                    "message": {

                                    },
                                    "customIcon": {

                                    },
                                    "commsStyling": {

                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                                    }
                                },
                                "reviewsSummary": {

                                },
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {

                                },
                                "externalRatings": {
                                    "aggregatedRating": {
                                        "rating": "3.8",
                                        "ratingCount": "4.7K+"
                                    },
                                    "source": "GOOGLE",
                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                },
                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                "campaignId": "af372134-6780-492c-8d90-d92e1ceb26e6"
                            },
                            "analytics": {

                            },
                            "cta": {
                                "link": "swiggy://menu?restaurant_id=100942&source=collection&query=Biryani",
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
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            "info": {
                                "id": "1135383",
                                "name": "Rice Bowl",
                                "cloudinaryImageId": "cgkenu9elejxh8x5l1wq",
                                "locality": "Himayath Nagar",
                                "areaName": "Himayath Nagar",
                                "costForTwo": "₹450 for two",
                                "cuisines": [
                                    "South Indian"
                                ],
                                "avgRating": 4.3,
                                "parentId": "169302",
                                "avgRatingString": "4.3",
                                "totalRatingsString": "1.1K+",
                                "promoted": true,
                                "adTrackingId": "cid=476bae39-c260-4f10-b0e0-6c2baab143ca~p=11~adgrpid=476bae39-c260-4f10-b0e0-6c2baab143ca#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1135383~plpr=COLLECTION~eid=9af02774-6177-4d53-85ff-e9c3af3d84ba~srvts=1773074896430~collid=83649",
                                "sla": {
                                    "deliveryTime": 33,
                                    "lastMileTravel": 4.9,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "30-35 mins",
                                    "lastMileTravelString": "4.9 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2026-03-10 03:00:00",
                                    "opened": true
                                },
                                "badges": {

                                },
                                "isOpen": true,
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "textBased": {

                                        },
                                        "imageBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                                    }
                                },
                                "aggregatedDiscountInfoV3": {
                                    "header": "ITEMS",
                                    "subHeader": "AT ₹99",
                                    "logoCtx": {
                                        "text": "BENEFITS"
                                    }
                                },
                                "orderabilityCommunication": {
                                    "title": {

                                    },
                                    "subTitle": {

                                    },
                                    "message": {

                                    },
                                    "customIcon": {

                                    },
                                    "commsStyling": {

                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                                    }
                                },
                                "reviewsSummary": {

                                },
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {

                                },
                                "externalRatings": {
                                    "aggregatedRating": {
                                        "rating": "--"
                                    }
                                },
                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                "campaignId": "476bae39-c260-4f10-b0e0-6c2baab143ca"
                            },
                            "analytics": {

                            },
                            "cta": {
                                "link": "swiggy://menu?restaurant_id=1135383&source=collection&query=Biryani",
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
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            "info": {
                                "id": "4810",
                                "name": "Hotel Sitara Grand - Dhanturi Group of hotels",
                                "cloudinaryImageId": "fup8lrzrx0anyztp0frk",
                                "locality": "Banjara Hills",
                                "areaName": "Banjara Hills",
                                "costForTwo": "₹300 for two",
                                "cuisines": [
                                    "Biryani",
                                    "Chinese",
                                    "South Indian",
                                    "Tandoor"
                                ],
                                "avgRating": 4.2,
                                "parentId": "351561",
                                "avgRatingString": "4.2",
                                "totalRatingsString": "20K+",
                                "promoted": true,
                                "adTrackingId": "cid=d168b228-54b1-4634-a06e-4f4954b48741~p=12~adgrpid=d168b228-54b1-4634-a06e-4f4954b48741#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=4810~plpr=COLLECTION~eid=70106876-117a-4b42-8dfc-dcb50ad44be0~srvts=1773074896430~collid=83649",
                                "sla": {
                                    "deliveryTime": 39,
                                    "lastMileTravel": 5.7,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "35-40 mins",
                                    "lastMileTravelString": "5.7 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2026-03-09 23:59:00",
                                    "opened": true
                                },
                                "badges": {

                                },
                                "isOpen": true,
                                "aggregatedDiscountInfoV2": {

                                },
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "textBased": {

                                        },
                                        "imageBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                                    }
                                },
                                "orderabilityCommunication": {
                                    "title": {

                                    },
                                    "subTitle": {

                                    },
                                    "message": {

                                    },
                                    "customIcon": {

                                    },
                                    "commsStyling": {

                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                                    }
                                },
                                "reviewsSummary": {

                                },
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {

                                },
                                "externalRatings": {
                                    "aggregatedRating": {
                                        "rating": "3.4",
                                        "ratingCount": "302"
                                    },
                                    "source": "GOOGLE",
                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                },
                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                "campaignId": "d168b228-54b1-4634-a06e-4f4954b48741"
                            },
                            "analytics": {

                            },
                            "cta": {
                                "link": "swiggy://menu?restaurant_id=4810&source=collection&query=Biryani",
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
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                            "info": {
                                "id": "25251",
                                "name": "Meridian Restaurant",
                                "cloudinaryImageId": "hqilwii7tokkileglhq4",
                                "locality": "Panjagutta",
                                "areaName": "Panjagutta",
                                "costForTwo": "₹400 for two",
                                "cuisines": [
                                    "Biryani",
                                    "Chinese",
                                    "Kebabs"
                                ],
                                "avgRating": 4.4,
                                "parentId": "19276",
                                "avgRatingString": "4.4",
                                "totalRatingsString": "258K+",
                                "promoted": true,
                                "adTrackingId": "cid=8da56a06-d70d-455c-b453-abff299ca05c~p=15~adgrpid=8da56a06-d70d-455c-b453-abff299ca05c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=25251~plpr=COLLECTION~eid=a5f49e36-5d6a-4735-a63e-e6fdc962c4da~srvts=1773074896430~collid=83649",
                                "sla": {
                                    "deliveryTime": 34,
                                    "lastMileTravel": 7.1,
                                    "serviceability": "SERVICEABLE",
                                    "slaString": "30-35 mins",
                                    "lastMileTravelString": "7.1 km",
                                    "iconType": "ICON_TYPE_EMPTY"
                                },
                                "availability": {
                                    "nextCloseTime": "2026-03-10 01:00:00",
                                    "opened": true
                                },
                                "badges": {

                                },
                                "isOpen": true,
                                "aggregatedDiscountInfoV2": {

                                },
                                "type": "F",
                                "badgesV2": {
                                    "entityBadges": {
                                        "textBased": {

                                        },
                                        "imageBased": {

                                        },
                                        "textExtendedBadges": {

                                        }
                                    }
                                },
                                "orderabilityCommunication": {
                                    "title": {

                                    },
                                    "subTitle": {

                                    },
                                    "message": {

                                    },
                                    "customIcon": {

                                    },
                                    "commsStyling": {

                                    }
                                },
                                "differentiatedUi": {
                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                    "differentiatedUiMediaDetails": {
                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                        "lottie": {

                                        },
                                        "video": {

                                        }
                                    }
                                },
                                "reviewsSummary": {

                                },
                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                "restaurantOfferPresentationInfo": {

                                },
                                "externalRatings": {
                                    "aggregatedRating": {
                                        "rating": "3.9",
                                        "ratingCount": "24K+"
                                    },
                                    "source": "GOOGLE",
                                    "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                                },
                                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                                "campaignId": "8da56a06-d70d-455c-b453-abff299ca05c"
                            },
                            "analytics": {

                            },
                            "cta": {
                                "link": "swiggy://menu?restaurant_id=25251&source=collection&query=Biryani",
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
                }
            ],
        }
    }
]
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
const RestaurantCard = ({ resData }) => {
    const { name, cloudinaryImageId, avgRating, cuisines } = resData;
    const { sla } = resData;




    return (
        <div className="res-cards">

            <img
                className="res-logo"
                alt="res-logo"
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId
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



