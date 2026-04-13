import { useState } from "react"

export default function InputText() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    const [input, setInput] = useState({
        name: "",
        email: "",
    })


    console.log(input.name);
    console.log(input.email)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }
    // console.log("Keys:", Object.keys(input));
    return (
        <div style={{ display: 'flex', gap: "10px" }}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={input.name}
                onChange={handleChange}
            />
            <input type="text"
                placeholder="email"
                name="email"
                value={input.email}
                onChange={handleChange} />
        </div >
    )
}