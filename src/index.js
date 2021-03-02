import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Card } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const generateId = (seed = 0) => () => seed++;

const getRandomNumber = function (min, max) {
  let getRandom = Math.floor(Math.random() * max + min);
  return getRandom;
};

const MainCard = ({ number, onRemove }) => {
  return (
    <div>
      {number}
      <button onClick={onRemove} className="ui mini red basic icon button">
        <i
          style={{
            position: "relative",
            top: "0",
            right: "0",
          }}
        >
          x
        </i>
      </button>
    </div>
  );
};

export default function App() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards((cards) => [
      ...cards,
      {
        id: generateId(),
        number: getRandomNumber(0, 101),
      },
    ]);
  };

  const removeCard = (id) => {
    setCards((cards) => cards.filter((el) => el.id !== id));
  };

  return (
    <body>
      <header>
        <div className="ui buttons">
          <button
            type="button"
            onClick={addCard}
            className="ui button mb-1 mt-1"
          >
            <i className="plus icon"></i>
            Add Card
          </button>
          <div className="or mb-1 mt-1"></div>
          <button className="ui positive button mb-1 mt-1">
            <i className="sort numeric down icon"></i>
            Sort All
          </button>
        </div>
      </header>

      <div className="card-container">
        {cards.map((cardNumber, index) => (
          <MainCard
            number={cardNumber.number}
            key={cardNumber.id}
            onRemove={() => removeCard(cardNumber.id)}
          />
        ))}
      </div>

      <aside className="showHide">
        <ul>
          <h6>React Coding Challenge Formatted Instructions:</h6>
          <li className="list-item">
            Create a responsive React application using either JavaScript or
            TypeScript.
          </li>
          <li className="list-item">
            The main portion of the application will contain a list of cards
            with a randomly generated number between 0-100 within each card.
          </li>
          <li className="list-item">
            The right pane has a fixed-width that remains attached to the right
            side when the user resizes the window. Once the browser width is
            small, the pane will be hidden.
          </li>
          <li className="list-item">
            The top pane is a fixed-heigth toolbar that has a button to add
            additional cards as well as a button to sort all the cards in
            ascending numerical order based on the number within each card.
          </li>
          <li className="list-item">
            The bottom pane is a fixed-heigth footer that just contains the text
            "footer".
          </li>
          <li className="list-item">
            The center pane is the card container. It starts out with zero
            cards. The user will click the "Add Card" button in the top toolbar
            to add a card in the center container.
          </li>
          <li className="list-item">
            The center pane has a vertical scrollbar that will become visible
            once enough cards are displayed. The user can use the scrollbar to
            scroll through all the added cards.
          </li>
          <li className="list-item">
            The cards are added vertically into rows which will wrap as needed.
            The amount of visible cards per row is dependant on the width of the
            browser.
          </li>
          <li className="list-item">
            Each card has a set pixel size of 300 pixels in width and 250 pixels
            in heigth.
          </li>
          <li className="list-item">
            Upon instantiation of a new card, a random number will be generated
            between 0 and 100 and then displayed in the center of each new card.
          </li>
          <li className="list-item">
            Each card has a button present in the top-right corner that the user
            may click to remove the card.
          </li>
        </ul>
      </aside>

      <footer>
        <h3 className="text-center text-muted">Footer</h3>
      </footer>
    </body>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
