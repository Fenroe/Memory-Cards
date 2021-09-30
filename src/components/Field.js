import { useEffect } from 'react';
import Card from './Card';

const Field = (props) => {

  const renderCards = () => {
    const renderedCards = props.currentCards.map(card => {
      return (
        <Card chooseCard = {props.chooseCard} index = {card} src = {`${process.env.PUBLIC_URL}/assets/images/card_${(card + 1)}.png`}/>
      )
    })
    return renderedCards;
  }

  useEffect(() => {
    props.fillCurrentCards();
  }, [])

  return (
    <div>
      {renderCards()}
    </div>
  )
}

export default Field;
