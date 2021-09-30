const Scoreboard = (props) => {
  return (
    <div className = 'game-scoreboard'>
      <div>
        <h2>Score: {props.score}</h2>
      </div>
      <div>
        <h2>Highest Score: {props.highScore}</h2>
      </div>
    </div>
  )
}

export default Scoreboard;
