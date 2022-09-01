import React, { useEffect, useState } from "react";
import "./timer.css";

const Timer = () => {
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(2);
    const [hours, setHours] = useState(0);
    const [formMinutes, setformMinutes] = useState(0);


    const [start, setStart] = useState(false);
    useEffect(() => {
        if (start) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
            if (seconds === 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
            if (minutes === 0 && hours > 0) {
                setHours(hours - 1)
                setMinutes(59)
                setSeconds(59)        
            }
        }
    }, [start, seconds, minutes, hours]);


    const handleReset=()=> {
        setStart(false);
        setSeconds(59);
        setMinutes(2);
        setHours(0)
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
        if (formMinutes === 0) {
            setStart(false)
            setMinutes(0)
            setSeconds(59)
        }
        if (formMinutes > 0) {
            setStart(false)
            setHours(0)
            setMinutes(formMinutes)
            setSeconds(0)
        }
        if (formMinutes > 60) {
            setStart(false)
            setHours(formMinutes / 60)
            setMinutes(0)
            setSeconds(0)
        }

    }

    return (
        <>
            <div className="counter">
                {hours} : {minutes} : {seconds}
            </div>
            <div className="counter-btn">
                <button onClick={()=>{setStart(true)}}>start</button>
                <button onClick={()=>{setStart(false);}}>stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className="counter-form">
                <form action="" onSubmit={(e) => { handleSubmit(e) }}>
                    <label htmlFor="">set Timer</label>
                    <input value={formMinutes} onChange={(e) => { setformMinutes(e.target.value) }} type='number' />
                    <button type="submit">set Timer</button>
                </form>
            </div>

        </>
    );
};

export default Timer;
