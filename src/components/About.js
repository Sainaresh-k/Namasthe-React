import User from "./User"
import UserClass from "./UserClass"
const About = () => {
    return (
        <div className="about-container">
            <h2>this is About page</h2>
            {/* <User name={"SAI-fun"} loc={"hyd"} /> */}
            <UserClass name={"Jassi-Class"} loc={"BNG"} />
        </div>
    )
}
export default About;