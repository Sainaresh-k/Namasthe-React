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
const RestaurantCard = () => {
    return (
        <div className="res-cards">
            <img
                className="res-logo"
                alt="res-logo"
                src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"
            />

            <div className="res-info">
                <h3>Meghana Foods</h3>
                <h5>Biryani, South Indian, Asian</h5>
                <h5>4.4 Ratings</h5>
                <h5>35 minutes</h5>
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search </div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />


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



