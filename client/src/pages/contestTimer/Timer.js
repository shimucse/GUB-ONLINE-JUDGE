import React from "react";
import "./css/Timer.css"
export default function Timer({
    seconds,
    minutes,
    hours,
    changeSeconds,
    changeMinutes,
    changeHours,
  }) {
    return (
      <div className="TimerWrapper">
        <div className="d-flex flex-column">
          <label>hh</label>
          <input value={hours} onChange={changeHours} />
        </div>{" "}
        <div className="d-flex flex-column">
          <label>mm</label>
          <input value={minutes} onChange={changeMinutes} />
        </div>{" "}
        <div className="d-flex flex-column">
          <label>ss</label>
          <input value={seconds} onChange={changeSeconds} />
        </div>{" "}
        
      </div>
    );
  }