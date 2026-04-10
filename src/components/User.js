import { useState } from "react";

const User = (props) => {
    const { name, loc } = props;
    const [count, setCount] = useState(0);
    //const [count2] = useState(2);

    return (
        <div className="user-card">
            <h1>COUNT:{count}</h1>

            {/* <h1>COUNT2:{count2}</h1> */}
            <h2>Name:{name}</h2>
            <h3>Location:{loc}</h3>
            <h3>Contact:ksn@gmail.com</h3>
            <button onClick={() => setCount(prev => prev + 5)}>inc</button>
        </div>
    )
}
export default User;
