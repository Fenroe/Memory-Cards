import React from "react";

const TitleScreen = (props) => {
  return (
    <div className = 'title-screen'>
      <div className = 'title-heading-container'>
        <h1 className = 'title-heading'>52 Card Pickup</h1>
      </div>
      <div className = 'title-button-container'>
        <button className = 'app-button'>Start</button>
        <button className = 'app-button' onClick = {props.tutorial}>How To Play</button>
      </div>
    </div>
  )
}

export default TitleScreen;
