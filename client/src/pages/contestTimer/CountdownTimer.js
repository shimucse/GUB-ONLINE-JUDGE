import React, { useState, useEffect } from "react";
import Timer from "./Timer";

//import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";

document.body.style.background = "#282c34";
export default function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(null);
  // End of Time

  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "Happy coding in 2023",
  });
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
         if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 10);
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      setShowEndScreen({ ...showEndScreen, show: true });
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, isRunning, showEndScreen.show]);

  // Start Pause & Stop functions

  // Start
  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      setIsRunning(true);
      setShowEndScreen({ ...showEndScreen, show: false });
    } else {
      window.alert("Add Time.");
    }
  }

  // Pause
  function pauseTimer() {
    setIsRunning(false);
  }
  // Stop

  function stopTimer() {
    resetTimer();
    setShowEndScreen({ ...showEndScreen, show: false });
  }

  function resetTimer() {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  }
  // Handlers

  const changeSeconds = (e) => {
    setSeconds(e.target.value);
  };
  const changeMinutes = (e) => {
    setMinutes(e.target.value);
  };
  const changeHours = (e) => {
    setHours(e.target.value);
  };
  return (
    <div>
      {showEndScreen.show && (
        <h1 className="title  text-light">{showEndScreen.message}</h1>
      )}
      <Timer
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        changeSeconds={changeSeconds}
        changeMinutes={changeMinutes}
        changeHours={changeHours}
      />
      <br />
      {!isRunning && (
        <button className="btn btn-accept btn-lg" onClick={startTimer}>
         Play
        </button>
      )}
      {isRunning && (
        <button className="btn btn-warning btn-lg" onClick={pauseTimer}>
          pause
        </button>
      )}{" "}
      <button className="btn btn-danger btn-lg" onClick={stopTimer}>
         Stop
      </button>
    </div>
  );
}