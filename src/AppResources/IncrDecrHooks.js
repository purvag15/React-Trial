import React, {useState} from "react"

function IncrDecrHooks() {
    const [count, setCount] = useState(0)
    const [answer, setAnswer] = useState("Yes")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div><br/>
            <h2>(Using Hooks)</h2>
            <h2>{count}</h2>
            <button onClick={increment}>Increment</button><br/>
            <button onClick={decrement}>Decrement</button>
            <br/><br/>
        </div>
    )
}
export default IncrDecrHooks
