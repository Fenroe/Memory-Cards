import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import Field from "./Field";

const Game = (props) => {
  const [score, setScore] = useState(0);

  const [currentCards, setCurrentCards] = useState([]);

  const [pickedCards, setPickedCards] = useState([]);

  const fillCurrentCards = () => {
    const cards = [];
    for (let i = 0; i < 12; i += 1) {
      const card  = Math.floor(Math.random() * 52);
      if (!cards.includes(card)) {
        cards.push(card);
      } else {
        i -= 1;
      }
    }
    if (notAllPickedCards(cards) && hasPickedCard(cards)) {
      setCurrentCards(cards);
    } else {
      fillCurrentCards();
    }
  }

  const notAllPickedCards = (cards) => {
    let notAllPickedCards = false;
    cards.forEach(card => {
      if (!pickedCards.includes(card)) {
        notAllPickedCards = true;
      }
    })
    return notAllPickedCards;
  }

  const hasPickedCard = (cards) => {
    let hasPickedCard = false;
    if (pickedCards.length === 0) {
      hasPickedCard = true;
    }
    cards.forEach(card => {
      if (pickedCards.includes(card)) {
        hasPickedCard = true;
      }
    })
    return hasPickedCard;
  }

  const chooseCard = (card) => {
    if (!pickedCards.includes(card)) {
      setPickedCards(pickedCards.concat([card]));
      setScore(score + 1);
      if (score + 1 > props.highScore) {
        props.setHighScore(score + 1);
      }
      if (pickedCards.length === 52) {
        props.declareWinner();
      } else {
        fillCurrentCards();
      }    
    } else {
      props.endGame();
    }
  }

  return (
    <div className = 'game-screen'>
      <Scoreboard score = {score} highScore = {props.highScore}/>
      <Field currentCards = {currentCards} fillCurrentCards = {fillCurrentCards} chooseCard = {chooseCard}/>
    </div>
  )
}

export default Game;
