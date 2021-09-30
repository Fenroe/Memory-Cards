// needs a scoreboard to track current score
// needs a best score that displays the highest value the scoreboard has ever had
// needs 12 cards with different images on them and a board to place them on
// cards need to be displayed in a random order whenever one is clicked
// - function to randomise their order
// - an onClick prop on the cards
// - function should be called when component mounts 

import cards from './assets/svg-cards.svg';

function App() {
  return (
    <div>
      <svg>
        <use href={cards} />
      </svg>
    </div>
  );
}

export default App;
