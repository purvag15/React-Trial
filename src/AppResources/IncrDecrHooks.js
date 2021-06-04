import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function IncrDecrHooks() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        setColor(randomcolor())
    }, [count])

    //if 2nd parameter is an empty array, useEffect works as componentDidMount
    //else, as soon as any element of the array changes, useEffect comes into play (i.e. componentDidUpdate)

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
