import {useState} from 'react'

function  Counter() {
    const [count, setCount] = useState(0);

    function countIncrement() {
        setCount(count + 1);
    }

    function countDecrement() {
        setCount(count - 1);
    }


    return(
        <div>
            <button onClick ={countIncrement}>+</button>
            <span style={{fontSize: '40px'}}>{count}</span>
            <button onClick ={countDecrement}>-</button>
        </div>
    )
}

export default Counter