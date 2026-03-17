import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    const [btnName, setbtnName] = useState('Login')
    return (
        <div className="header">
            {/*logo*/}
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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