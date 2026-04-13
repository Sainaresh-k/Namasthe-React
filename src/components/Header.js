import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnName, setbtnName] = useState('Login')
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Network:{onlineStatus ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to={"/grosery"}>Grosery</Link></li>
                    <li>Cart</li>
                    <button className="btn" onClick={() => {
                        btnName === "Login" ? setbtnName('Logout') : setbtnName("Login")
                        console.log(btnName)
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
            {/**navbar */}
        </div>
    )
}
export default Header;