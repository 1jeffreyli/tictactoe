const Player = (name, character) => {
  this.name = name;
  this.character = character;
  function getName () {
    return name;
  }
  function getCharacter () {
    return character;
  }
  return { getName, getCharacter }
  }



const displayController = (() => {
  // displays the gameboard using DOM methods
  function render (array) {
    gameBoard.board.forEach((cell) => {
      const div = document.createElement("div");
      div.classList.add("game-box");
      div.innerText = cell;
      gameBoard.boardContainer.appendChild(div);
    })
  }

  function reset () {
    gameBoard.boardContainer.innerHTML = "";
  }
  return {
    render
  }
}) ();

const gameController = (() => {
  // assign X and O roles
  const playerX = Player("Jane", "X");
  const playerO = Player("John", "O");
  // round indicator, starting at 1 and maxing out at 9 because all boxes will be occupied
  let round = 1;
  function play(event) {
    const target = event.target;
    if (target.matches("div")) {
      // logic that blocks further moves on a filled box
      if (target.innerText === "O" || target.innerText === "X") {
        alert("Sorry, please choose a different square");
        // if box is empty, check which player goes then add their marker and update the board
      } else if (target.innerText != "O" && target.innerText != "X") {
        const marker = round % 2 ? playerX.getCharacter() : playerO.getCharacter();
        target.innerText = marker;
        gameBoard.updateBoard();
      }
    }
    // go to the next round
    round++; 
  }

  return{
    playerX,
    playerO,
    play
  }
}) ();

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const boardContainer = document.querySelector(".gameboard");
  const boxes = document.getElementsByClassName("game-box");
  // use event delegation on the container instead of individually adding 9 event listeners
  boardContainer.addEventListener("click", gameController.play);
  // iterate through the DOM to update the board array
  function updateBoard () {
    for (let i = 0; i < 9; i++) {
      board[i] = boxes[i].innerText;
    }
  }
  return {
    board,
    boxes,
    boxesArr,
    boardContainer,
    updateBoard
  }
}) ();

displayController.render(gameBoard.board);