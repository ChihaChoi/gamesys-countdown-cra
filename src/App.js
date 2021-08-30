import React, { useEffect, useState } from "react";
import "./styling/style.scss";
import Timer from "./components/Timer";

import topImage from "./images/top_image_scale_1x.png";
import topImageHd from "./images/top_image_scale_2x.png";
import backgroundImage from "./images/background_scale_1x.jpeg";
import backgroundImageHd from "./images/background_scale_2x.jpeg";

let initialTime, cashValue, buttonUrl;

if (typeof process.env.REACT_APP_INITIAL_TIME === "undefined") {
  console.log("failed to load process.env.REACT_APP_ variables ");
} else {
  initialTime = process.env.REACT_APP_INITIAL_TIME;
  cashValue = process.env.REACT_APP_CASH_VALUE;
  buttonUrl = process.env.REACT_APP_BUTTON_URL;
}
//load timer from previous session
if (typeof window.localStorage.currentTimer == 'string'){
  initialTime = window.localStorage.currentTimer;
}

const App = () => {
  const [time, setTime] = useState(initialTime);
  const [active, setActive] = useState("");
  useEffect(() => {
    // hide elements when timer reaches 0
    if (time <= 0) {
      setActive("hidden");
      return;
    }
    //Tick the timer
    setTimeout(() => {
      window.localStorage.currentTimer = time - 1
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div className={`App`}>
      <div className={`info__container ${active}`}>
        <img
          className={`top-image`}
          srcset={`${topImage} 1x, ${topImageHd} 2x`}
          src={topImage}
        />
        <p className={`description-text `}>
          Get your <em className={"neonLight"}>free £{cashValue}</em> now
        </p>
        <Timer time={time} />
        <button onClick={()=> window.open(buttonUrl, "_blank")}>
          <p className="button-text">Opt in</p>
        </button>
      </div>
      <img className={`background-image `} src={backgroundImage} srcset={`${backgroundImage} 1x, ${backgroundImageHd} 2x`} />
    </div>
  );
};

export default App;
