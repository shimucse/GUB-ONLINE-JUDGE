import React, { useState, useEffect } from "react";
import Timer from "./Timer";


export default function CountdownTimer(props) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [day, setDay] = useState(0);
  const [callOnece, setCallOnce]= useState(0);
  const [showEndScreen, setShowEndScreen] = useState({
    show: false,
    message: "Happy coding in 2023",
  });


  let setTime =()=>{
     let truncNum = Math.trunc(props.day);
     console.log("truncNum"+truncNum);
     setDay(truncNum);
    
    if(day<1){

          let dayNum = Math.abs(props.day);
          let hour = (dayNum - Math.floor(dayNum));
          hour = hour*24;
          if(hour<1){
                  let min = hour*60;
                  if(min<1){

                      let snd = min*60;
                      let truncNum = Math.trunc(snd);
                      setSeconds(truncNum);
                      console.log("second inside setTime"+seconds);

                  }
                  else{

                      let truncNum = Math.trunc(min);
                      setMinutes(truncNum);
                       min = Math.abs(min);

                      let sec = (min - Math.floor(min));
                      sec = sec*60;
                      let truncSec = Math.trunc(sec);
                      setSeconds(truncSec);

                      console.log("minute Inside setTime:"+minutes);

                  }
          }else{

                console.log("hour inside setTime"+hour);
                let truncNum = Math.trunc(hour);
                setHours(truncNum);
                let hour = Math.abs(hour);
                let min1 = (hour - Math.floor(hour));
                min1 = min1*60;
                setMinutes(min1);
          }
    }
    
   
      
 
  }
  


  useEffect(() => {
   
    if(callOnece===0){
      setTime();
      setCallOnce(1);
      console.log("executed callOnece");

    }
   
    let interval;
   if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        }
      }, 10);
    }

    if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1) {
      setShowEndScreen({ ...showEndScreen, show: true });
      resetTimer();
    }
    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, hours, isRunning, showEndScreen.show]);

  // Start Pause & Stop functions

  // Start
  function startTimer() {
    if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
      setIsRunning(true);
      setShowEndScreen({ ...showEndScreen, show: false });
    } else {
      window.alert("Add Time.");
    }
  }

  

  function resetTimer() {
    setIsRunning(false);
    setMilliseconds(0);
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
      <div>
        <h1>Remaining days {day}</h1>
      </div>
      <Timer
        milliseconds={milliseconds}
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        changeSeconds={changeSeconds}
        changeMinutes={changeMinutes}
        changeHours={changeHours}
      />
      <br />
    
    </div>
  );
}