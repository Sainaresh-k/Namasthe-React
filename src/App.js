import React from "react";
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
let fruits = ["apple", "banana", "orange"];


const App = () => {
    return (
        <div className="app">
            {/* <ul>
                {fruits.map((e) => {
                    return (
                        <li key={e}>{e}</li>
                    )
                })}
            </ul> */}
            <Header />
            < Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)



