import React from "react";
import ReactDOM from 'react-dom/client';
import { jsx } from "react/jsx-runtime";
const Headind2 = () => {
    return (
        <h2>
            Hello..sai..!
        </h2>
    )
}
const Title = (
    <h3>
        this is title
    </h3>
)

const Heading1 = () => (
    <div>
        <Headind2 />
        <Headind2></Headind2>
        {Title}
        <h1 className="heading" tabIndex='5'>
            React: FUNCTIONAL COMPONENT
        </h1>
    </div>

);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Heading1 />)



