import React, { useState } from 'react';
import './Counter.css'

function Counter() {

    const [count, setCount] = useState(0); //parte da zero

    const handleClick = () => {
        setCount(count + 1); //aumenta di 1
    }

    return (
        <div className="text-center">
            <h2>Contatore: {count}</h2>
            <button onClick={handleClick}>
                Incrementa
            </button>
        </div>
    )


}

export default Counter;
