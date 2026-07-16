import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
 const timer = useRef()
    const dialog = useRef()

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }

   

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTime => prevTime - 10)
        }, 10);
    }

    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>
        <ResultModal ref={dialog} result="lost" targetTime={targetTime} />
        <section className="challenge">
            <h2>{title}</h2>
            {timeRemaining <= 0 && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime !== 1 ? "s" : ""}
            </p>
            <p>
                <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"} Challenge</button>
            </p>
            <p className={timerIsActive ? "active" : ""}>
                {timerIsActive ? "Time is running...." : "Timer inactive"}
            </p>
        </section>
        </> 
    )
}