import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
    const [btnName, setbtnName] = useState('Login')
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);


    return (

        <div className="flex justify-between bg-pink-50 " >
            <div className="logo-container">
                <img className="w-30" src={LOGO_URL}
                />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className=" px-4">Network:{onlineStatus ? "✅" : "🔴"}</li>
                    <li className=" px-4"><Link to="/">Home</Link></li>
                    <li className=" px-4"><Link to="/about">About</Link></li>
                    <li className=" px-4"><Link to="/contact">Contact</Link></li>
                    <li className=" px-4"><Link to={"/grosery"}>Grosery</Link></li>
                    <li className=" px-4">Cart</li>
                    <li className="px-4 font-bold">
                        User: {loggedInUser}
                    </li>
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