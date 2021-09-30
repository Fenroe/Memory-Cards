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
// needs a scoreboard to track current score and a best score that displays the highest value the current score has ever had
// card component needs a key and a prop to set background image
// cards need to be displayed in a random order whenever one is clicked
// - function to randomise their order
// - an onClick prop on the cards
// - function should be called when component mounts 
// there should always be the possibility to fail: previously selected cards should appear in the selection
// - store chosen cards in array
// - if selected card is in array of chosen cards, game over
// - if hand doesn't include cards from chosen cards, and there are cards in said array, reshuffle
// - if hand only contains cards from chosen cards, reshuffle 
// 

function App() {
  return (
    <div>

    </div>
  );
}

export default App;
