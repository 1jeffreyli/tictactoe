# Tic Tac Toe
## Description
Classic tic tac toe game between two players, X and O. The game can end in a win for either player or a tie if all moves are exhausted with no winner. This game was made with vanilla HTML, CSS, and JavaScript. Specifically, this project was to practice writing module patterns and factory functions in JavaScript.
### Challenges
- I originally took a shortcut for the game logic by using an intermediary array variable that would hold the most recent move and displayed on the DOM. However, this created some problems when it came to keeping the original game board’s array up-to-date. This was addressed during refactoring by reconfiguring the logic to dynamically update when players make their moves instead of using an intermediary.
- Proper use of event delegation vs. adding 9 event listeners individually.
- Using .fill method to reset the game board array instead of re-assigning the variable.
- Properly compartmentalizing each module to minimize confusion.