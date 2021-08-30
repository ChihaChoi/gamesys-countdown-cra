import React, { useEffect, useState } from "react";
import "./style.scss";
import Timer from "./components/Timer";

import topImage from "./images/top_image_scale_1x.png";
import topImageHd from "./images/top_image_scale_2x.png";
import backgroundImage from "./images/background_scale_1x.jpeg";
import backgroundImageHd from "./images/background_scale_2x.jpeg";

let initialTime, cashValue, ButtonUrl;

if (typeof process.env.REACT_APP_INITIAL_TIME === "undefined") {
  console.log("failed to load process.env.REACT_APP_ variables ");
} else {
  initialTime = process.env.REACT_APP_INITIAL_TIME;
  cashValue = process.env.REACT_APP_CASH_VALUE;
  ButtonUrl = process.env.REACT_APP_BUTTON_URL;
}

// initialTime = 3;

const App = () => {
  const [time, setTime] = useState(initialTime);
  const [active, setActive] = useState("");
  useEffect(() => {
    // exit early when we reach 0
    if (time <= 0) {
      setActive("hidden");
      return;
    }
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div className={`App`}>
      <div className={`info__container ${active}`}>
        <img
          className={`top-image`}
          srcset={`${topImage} 1x, ${topImageHd} 2x`}
          // src={topImage}
        />
        <p className={`description-text `}>
          Get your <em className={"neonLight"}>free £{cashValue}</em> now
        </p>
        <Timer time={time} />
        {/* <a href="https://www.jackpotjoy.com/"> */}
        <button>
          <p className="button-text">Opt in</p>
        </button>
        {/* </a> */}
      </div>
      <img className={`background-image `} src={backgroundImage} />
    </div>
  );
};

export default App;
