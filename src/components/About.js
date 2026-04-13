import User from "./User"
import React from "react"
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
// class About extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log("parent constructor")
//     }
//     componentDidMount() {
//         console.log("parent componentDidMount")
//     }
//     render() {
//         console.log("parent render")
//         return (
//             <div>
//                 <h1>this is About Class parent component</h1>
//                 {/* <UserClass name={"first"} loc={"hyd"} /> */}
//             </div>
//         )
//     }
// }
// export default About;