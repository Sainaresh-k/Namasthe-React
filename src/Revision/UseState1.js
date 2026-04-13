import { useState } from "react"

export default function UseState1() {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount((prev) => prev + 1)
        // setCount(count + 1);
        // setCount(count + 1);
        setCount((prev) => prev + 1)

    }
    console.log(count)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Inc</button>
        </div>
    )
}