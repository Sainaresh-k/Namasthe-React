import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log("child constructor")
        this.state = {
            count: 1,
            count2: 2,
        }
    };
    render() {
        console.log("child render")
        const { name, loc } = this.props;
        // const { count, count2 } = this.state;
        const { count } = this.state;
        return (
            <div className="userClass-card">
                {/* <h1>COUNT:{count}</h1>
                <button onClick={() => {
                    this.setState(
                        { count: this.state.count + 1, }
                    )
                }}>Increase</button>
                <h1>COUNT2:{count2}</h1> */}

                <h2>Name:{name}</h2>
                <h3>Location: {loc}</h3>
                <h3>Contact: ksn@gmail.com</h3>
            </div>
        );
    }
}
export default UserClass;