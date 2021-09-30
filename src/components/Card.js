const Card = (props) => {
  return (
    <div className = 'game-card'>
      <img src = {props.src} alt = 'card' onClick = {() => props.chooseCard(props.index)}/>
    </div>
  )
}

export default Card;
