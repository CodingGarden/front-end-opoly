# Front-end-opoly

## How it works

* Local 2 Player Game
* Player pawn choices
  * Yellow (JavaScript)
  * Red (Angular)
  * Blue (React)
  * Green (Vue)
* The board generates based on player choices:
  * 1 "Rest from JavaScript Fatigue" square (starting point)
  * Squares with player 1 logo
  * Squares with player 2 logo
  * Face off squares
* Game play:
  * Player rolls dice
  * Player moves forward one square up to the number rolled 
  * If the player lands on their own color square: +1 Point
  * If the player lands on the oponent color square:
    * -1 Point to the Player
    * +1 Point to the Oponent
  * If the player lands on a face off square:
    * Both players roll the dice once
    * The higher roll wins the difference of the 2 rolls as points
  * If the player lands on the "Rest from JavaScript Fatigue", the player rests
* First player to 20 points wins

## TODO

* [x] create-react-app
  * [x] Remove un-needed things
* [ ] Player 1 Chooses a pawn
* [ ] Player 2 Chooses a pawn
* [ ] Generate game board
* [ ] Pawns start at "Rest from JavaScript Fatigue" square
* [ ] Alternate between players
  * [ ] Dice roll
  * [ ] Move forward
  * [ ] Check for points or face off
    * Face off

