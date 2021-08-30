import React, { useState, useEffect } from "react";

function numberToTime(timeNumber) {
  let hours = Math.floor(timeNumber / 3600);
  let minutes = Math.floor((timeNumber % 3060) / 60);
  let seconds = timeNumber % 60;
  return { hours, minutes, seconds };
}

function Example(props) {
  let time = props.time;
  let [formattedTime, setFormattedTime] = useState(numberToTime(time));
  useEffect(() => {
    setFormattedTime(numberToTime(time));
  }, [time]);
  return (
    <div className="timer__container">
      <div className="number-block">
        <p className="number hour neonLight">
          {("0" + formattedTime.hours).slice(-2)}
        </p>
        <p className="timer-label">hours</p>
      </div>
      <p className="colon">:</p>
      <div className="number-block">
        <p className="number minute neonLight">
          {("0" + formattedTime.minutes).slice(-2)}
        </p>
        <p className="timer-label">minutes</p>
      </div>
      <p className="colon">:</p>
      <div className="number-block">
        <p className="number second neonLight">
          {("0" + formattedTime.seconds).slice(-2)}
        </p>
        <p className="timer-label ">seconds</p>
      </div>
    </div>
  );
}

export default Example;
