import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{ border: '2px solid blue', margin: '20px', padding: '10px' }}>
            <button className="Btn" onClick={handleAdd}>Add</button>
            <button className="Btn" onClick={handleReduce}>Reduce</button>
            <h3>Counter: {count}</h3>
        </div>
    )
}

