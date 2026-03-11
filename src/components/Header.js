import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
                </ul>
            </div>
            {/**navbar */}
        </div>
    )
}
export default Header;