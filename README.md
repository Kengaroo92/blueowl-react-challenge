# Blue Owl AI Coding Challenge with ReactJS

  

This is a coding challenge for the [Blue Owl AI](https://www.blueowlai.com/) Software Developer position. The challenge was assigned to [Kenan Bjelosevic](https://www.kenanbjelosevic.com/) on Friday, February 26, 2021, with a deadline of Friday, March 5, 2021. 

  

## The Challenge
The challenge is to create a responsive React application (using either JavaScript or TypeScript) that will display a list of cards on a page as displayed in the graphic below.

![Blue Owl AI - React Challenge](https://github.com/Kengaroo92/blueowl-react-challenge/blob/master/public/BOAI%20React%20Challenge.jpg)

There is a fixed-width pane on the right of the window that remains attached to the right side when the user resizes the window. Inside the pane, is a formatted display of these instructions. If the browser width is small, the pane is hidden.

There is a fixed-height toolbar at the top of the window that has buttons to add cards and to sort the already created cards in numerical order. 

There is a fixed-height footer at the bottom of the window that just shows the text "footer".

The main portion of the challenge is a card container at the center of the window. When a user first opens the application, the quantity of cards will be zero. Cards are added by having a user click the 'add card' button at the top of the toolbar. Once the amount of cards exceeds the window size, a vertical scrollbar will become visible that the user can use to scroll through the cards. Each time the 'add card' button is clicked, a new card will populate the window aligning itself in rows, then wrapping as needed. 

In the mockup pictured above, only two cards are shown per row. If the browser is wider, three or more cards may fit in the window. If narrower, it's possible only one card may fit in the window. 

All the cards will have the same set pixel size of 300 pixels in width by 250 pixels in height. 

Upon addition of a new card, it will be assigned a random number between 0 and 100 that will display at the center of the card.

Each card also has a button at the top-right corner, which a user can click to delete the card.

The user may also click the 'sort cards' button at the top of the page, which will then sort the cards in numerical order.


