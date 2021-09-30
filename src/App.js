// '52 card pickup': memory game, clicking on a card gives a point, click on the same card twice and game over
// loading app comes to a title screen.
// - start button sets the game state to true, starting the game
// - how to play sets the tutorial state to true, showing the rules of the game. 
// - a back button will set the tutorial state to false, returning to title screen
// game component needs a scoreboard and card table
// - scoreboard should track current score
// - scoreboard should show the highest score ever earned by the player
// - card table serves as a container for the cards
// when game starts call a function that fills an array with numbers from 0-51
// - if n is already in array, don't add it again 
// - if array length = 12, stop
// use this array to generate an equal number of card components 
// - card components are divs with an image
// - the src of this image will be '../assets/card_' + (item+1) +'.png'
// cards also need a key (the array item)
// cards need an addClick that adds their key to an array of chosen cards
// - if key is already in chosen cards, game over
// after this, cards will be reshuffled
// because there needs to be a chance of failing, the hand should always have a card from chosen cards
// - if after hand array is full there is no card from chosen cards and chosen cards isn't empty, reshuffle
// because there always needs to be a chance of success, the hand should not solely consist of cards from chosen cards
// - if after hand array is full there is nothing but chosen cards in hand, reshuffle
// if score is 52 then player has won 
import React, { useState } from "react";
import TitleScreen from "./components/TitleScreen";
import Tutorial from "./components/Tutorial";
import Game from "./components/Game";
import Gameover from "./components/Gameover";
import Winner from "./components/Winner";


function App() {
  const [game, setGame] = useState(false);

  const [tutorial, setTutorial] = useState(false);

  const [highScore, setHighScore] = useState(0);

  const [gameover, setGameover] = useState(false);

  const [winner, setWinner] = useState(false);

  const startGame = () => {
    setGame(true);
  };

  const endGame = () => {
    setGame(false);
    setGameover(true);
  }

  const startTutorial = () => {
    setTutorial(true);
  };

  const endTutorial = () => {
    setTutorial(false);
  };

  const declareWinner = () => {
    setGame(false);
    setWinner(true);
  }

  return (
    <div className = 'app-screens'>
      {!game && !tutorial && !gameover && !winner ? <TitleScreen game = {startGame} tutorial = {startTutorial} /> : null}
      {tutorial ? <Tutorial back = {endTutorial}/> : null}
      {game ? <Game highScore = {highScore} setHighScore = {setHighScore} endGame = {endGame} declareWinner = {declareWinner}/> : null}
      {gameover ? <Gameover highScore = {highScore}/> : null}
      {winner ? <Winner /> : 0}
    </div>
  );
}

export default App;
