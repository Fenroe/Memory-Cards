/* eslint-disable react-hooks/exhaustive-deps */
import Card from './Card';

const Field = (props) => {

  const renderCards = () => {
    const renderedCards = props.currentCards.map(card => {
      return (
        <Card key = {card} chooseCard = {props.chooseCard} index = {card} src = {`${process.env.PUBLIC_URL}/assets/images/card_${(card + 1)}.png`}/>
      )
    })
    return renderedCards;
  }

  return (
    <div className = 'game-field'>
      {renderCards()}
    </div>
  )
}

export default Field;
