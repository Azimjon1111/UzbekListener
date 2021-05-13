import React, {useEffect, useState} from 'react'
const UseEffect = ()=> {
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>Siz {count} marta bosdingiz</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <button onClick={()=>setCount(count-1)}>decrease</button>
        </div>
    )
}

export default UseEffect