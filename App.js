import React from "react";
import ReactDOM from "react-dom/client";

/* 
  Header
    Logo
    Nav items
  Body
    Search
    RestaurantContainer
      RestaurantCard
        Img
        Name of restaurant, Rating, Cuisines, delivery time

  Footer
    Copyright
    Links
    Address
    Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://cdn3.f-cdn.com/contestentries/65564/6172369/53425530d8141_thumb900.jpg" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  const {resData} = props;
  console.log(props);
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
  return (
    <div className="res-card">
      <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + cloudinaryImageId} alt="res-logo"/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
}

const resList = [
  {
              "info": {
                "id": "327763",
                "name": "Tea Time",
                "cloudinaryImageId": "w4ozzcui7nieffmcqjjy",
                "locality": "Bajanai Koil St",
                "areaName": "Srm Nagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Beverages",
                  "Snacks",
                  "Indian"
                ],
                "avgRating": 1.7,
                "feeDetails": {
                  "restaurantId": "327763",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3300
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3300
                },
                "parentId": "202784",
                "avgRatingString": "1.7",
                "totalRatingsString": "50+",
                "sla": {
                  "deliveryTime": 56,
                  "lastMileTravel": 2.5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "56 mins",
                  "lastMileTravelString": "2.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-21 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹50",
                  "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
                  
                }
              },
              "analytics": {
                "context": "seo-data-e9471d43-e687-4e1a-9b0b-5db0a77b9ca1"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/tea-time-bajanai-koil-st-srm-nagar-chennai-327763",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "343262",
                "name": "The Pizza Box",
                "cloudinaryImageId": "h7yvm3oqnsyp4emoyihd",
                "locality": "Urapakkam",
                "areaName": "Srm Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Pizzas",
                  "Desserts"
                ],
                "avgRating": 3,
                "veg": true,
                "feeDetails": {
                  "restaurantId": "343262",
                  "fees": [
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3300
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3300
                },
                "parentId": "212550",
                "avgRatingString": "3.0",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 55,
                  "lastMileTravel": 2.5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "55 mins",
                  "lastMileTravelString": "2.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-21 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹249",
                  "discountTag": "FLAT DEAL",
                  "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
                  
                }
              },
              "analytics": {
                "context": "seo-data-e9471d43-e687-4e1a-9b0b-5db0a77b9ca1"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/the-pizza-box-urapakkam-srm-nagar-chennai-343262",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "594583",
                "name": "Yumlane Pizza",
                "cloudinaryImageId": "foyuowplum65gjwiijmy",
                "locality": "Maraimalai Nagar",
                "areaName": "Guduvancherry",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Pizzas",
                  "Beverages",
                  "Desserts",
                  "Snacks"
                ],
                "avgRating": 3.2,
                "feeDetails": {
                  "restaurantId": "594583",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 4100
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 4100
                },
                "parentId": "6532",
                "avgRatingString": "3.2",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 53,
                  "lastMileTravel": 3.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "53 mins",
                  "lastMileTravelString": "3.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-21 01:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "40% OFF",
                  "subHeader": "UPTO ₹80",
                  "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
                  
                }
              },
              "analytics": {
                "context": "seo-data-e9471d43-e687-4e1a-9b0b-5db0a77b9ca1"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/yumlane-pizza-maraimalai-nagar-guduvancherry-chennai-594583",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "590926",
                "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
                "cloudinaryImageId": "fhfyeqvvekvdeh7bgx9h",
                "locality": "Kancheepuram",
                "areaName": "Kancheepuram",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Beverages",
                  "Desserts",
                  "Ice Cream",
                  "Waffle",
                  "Bakery",
                  "Healthy Food"
                ],
                "avgRating": 4,
                "feeDetails": {
                  "restaurantId": "590926",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 4100
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 4100
                },
                "parentId": "5655",
                "avgRatingString": "4.0",
                "totalRatingsString": "500+",
                "sla": {
                  "deliveryTime": 48,
                  "lastMileTravel": 3.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "48 mins",
                  "lastMileTravelString": "3.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-21 01:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "25% OFF",
                  "subHeader": "UPTO ₹100",
                  "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
                  
                }
              },
              "analytics": {
                "context": "seo-data-e9471d43-e687-4e1a-9b0b-5db0a77b9ca1"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-kancheepuram-chennai-590926",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "481121",
                "name": "Fry N Eat",
                "cloudinaryImageId": "zit0hkd4hf6kn2ygnsb4",
                "locality": "Srm Nagar",
                "areaName": "Urapakkam",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Fast Food",
                  "Snacks",
                  "Beverages"
                ],
                "avgRating": 3.2,
                "feeDetails": {
                  "restaurantId": "481121",
                  "fees": [
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3300
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3300
                },
                "parentId": "259565",
                "avgRatingString": "3.2",
                "totalRatingsString": "50+",
                "sla": {
                  "deliveryTime": 49,
                  "lastMileTravel": 2.5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "49 mins",
                  "lastMileTravelString": "2.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-21 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹249",
                  "discountTag": "FLAT DEAL",
                  "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
                  
                }
              },
              "analytics": {
                "context": "seo-data-e9471d43-e687-4e1a-9b0b-5db0a77b9ca1"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/fry-n-eat-srm-nagar-urapakkam-chennai-481121",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "300690",
                "name": "Heena Biryani",
                "cloudinaryImageId": "j64yeq33hsloysgsibml",
                "locality": "SRM Backgate",
                "areaName": "Srm Nagar",
                "costForTwo": "₹160 for two",
                "cuisines": [
                  "Biryani",
                  "Chinese",
                  "Chettinad",
                  "South Indian",
                  "Indian",
                  "Andhra",
                  "Seafood",
                  "Beverages",
                  "Desserts"
                ],
                "avgRating": 3.4,
                "feeDetails": {
                  "restaurantId": "300690",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3300
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3300
                },
                "parentId": "16894",
                "avgRatingString": "3.4",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 54,
                  "lastMileTravel": 2.1,
                  "serviceability": "SERVICEABLE",
                  "slaString": "54 mins",
                  "lastMileTravelString": "2.1 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-21 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹299",
                  "discountTag": "FLAT DEAL",
                  "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
                  
                }
              },
              "analytics": {
                "context": "seo-data-e9471d43-e687-4e1a-9b0b-5db0a77b9ca1"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/heena-biryani-srm-backgate-srm-nagar-chennai-300690",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "268606",
                "name": "Maggi Point",
                "cloudinaryImageId": "nrfeyxk9uduxyvmawfgs",
                "locality": "Urapakkam",
                "areaName": "Srm Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Indian"
                ],
                "avgRating": 2.3,
                "feeDetails": {
                  "restaurantId": "268606",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3300
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3300
                },
                "parentId": "5553",
                "avgRatingString": "2.3",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 51,
                  "lastMileTravel": 2.5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "51 mins",
                  "lastMileTravelString": "2.5 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-21 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹249",
                  "discountTag": "FLAT DEAL",
                  "discountCalloutInfo": {
                    "message": "Free Delivery",
                    "logoCtx": {
                      "logo": "v1655895371/free_delivery_logo_hqipbo.png"
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
                  
                }
              },
              "analytics": {
                "context": "seo-data-e9471d43-e687-4e1a-9b0b-5db0a77b9ca1"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/maggi-point-urapakkam-srm-nagar-chennai-268606",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* Passing props to component */
        /* <RestaurantCard resData={resList[0]}/> 
        <RestaurantCard resData={resList[1]}/> 
        <RestaurantCard resData={resList[2]}/> 
        <RestaurantCard resData={resList[3]}/> 
        <RestaurantCard resData={resList[4]}/> 
        <RestaurantCard resData={resList[5]}/> 
        <RestaurantCard resData={resList[6]}/>  */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);