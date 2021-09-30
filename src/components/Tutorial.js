const Tutorial = (props) => {
  return (
    <div>
      <div>
        <h2>How To Play</h2>
      </div>
      <div>
        <p>Click on a card to pick it up.</p>
        <p>If you click on the same card twice you lose.</p>
        <p>Pick up all 52 cards to win the game!</p>
      </div>
      <div>
        <button onClick = {props.back}>Back</button>
      </div>
    </div>
  )
}

export default Tutorial;
