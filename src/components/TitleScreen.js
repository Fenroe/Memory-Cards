import React from "react";

const TitleScreen = (props) => {
  return (
    <div>
      <div>
        <h1>52 Card Pickup</h1>
      </div>
      <div>
        <button>Start</button>
        <button onClick = {props.tutorial}>How To Play</button>
      </div>
    </div>
  )
}

export default TitleScreen;
