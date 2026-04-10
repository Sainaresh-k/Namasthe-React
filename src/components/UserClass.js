import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)

    };
    render() {
        return (
            <div className="userClass-card">
                <h2>Name:{this.props.name}</h2>
                <h3>Location: Hyd</h3>
                <h3>Contact: ksn@gmail.com</h3>
            </div>
        );
    }
}

export default UserClass;