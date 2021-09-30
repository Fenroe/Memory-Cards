const Tutorial = (props) => {
  return (
    <div className = 'tutorial-screen'>
      <div className = 'tutorial-heading-container'>
        <h2 className = 'tutorial-heading'>How To Play</h2>
      </div>
      <div className = 'tutorial-text-container'>
        <p className = 'tutorial-text'>Click on a card to pick it up.</p>
        <p className = 'tutorial-text'>If you click on the same card twice you lose.</p>
        <p className = 'tutorial-text'>Pick up all 52 cards to win the game!</p>
      </div>
      <div className = 'tutorial-button-container'>
        <button className = 'app-button' onClick = {props.back}>Back</button>
      </div>
    </div>
  )
}

export default Tutorial;
