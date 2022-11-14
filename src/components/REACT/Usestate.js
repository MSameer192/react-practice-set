import React, { useState } from 'react';

export default function Usestate() {

    const [count, setCount] = useState(0);

    function increas() {
        setCount(count + 1)
    }

    function decreas() {
        setCount(count - 1)
    }

    function clear() {
        setCount(0)
    }

    const [time, setTime] = useState('TIME');


    function getTime() {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }


    return (

    <>
        <div className="container">
            <h1>{count}</h1>
            <button className='btn-primary' onClick={increas}>ADD</button>
            <button className='btn-primary' onClick={decreas}>SUBTRACT</button>
            <button className='btn-primary' onClick={clear}>CLEAR</button>
        </div>

        <div className="container">
            <h1>{time}</h1>
            <button onClick={getTime} className='btn-primary'>Get Time</button>
        </div>
        </>        
    );

}
