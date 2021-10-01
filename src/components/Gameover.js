const Gameover = (props) => {
  return (
    <div className = 'game-over-screen'>
      <h2 className = 'game-over-heading'>Game Over</h2>
      <h2 className = 'game-over-text'>Your best score is {props.highScore}</h2>
      <div className = 'game-over-button-container'>
        <button className = 'app-button' onClick = {props.restart}>Title Screen</button>
      </div>
    </div>
  )
}

export default Gameover;
