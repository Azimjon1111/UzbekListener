import React, {useState} from 'react'

function Hooks() { 
    const [count, setCount] = useState(0)
    function increase(){
        setCount(count + 1)
    }
    function decrease(){
        setCount(count - 1)
    }
    return(
        <>
        <button onClick={increase}>+</button>
        <span>{count}</span>
        <button onClick={decrease}>-</button>
        </>
    )
 }
export default Hooks
