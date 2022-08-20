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
  function render (array) {
    // reset();
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
  const playerX = Player("Jane", "X");
  const playerO = Player("John", "O");
  let round = 1;
  function play(event) {
    const target = event.target;
    if (target.matches("div")) {
      if (target.innerText === "O" || target.innerText === "X") {
        alert("Sorry, please choose a different square");
      } else if (target.innerText != "O" && target.innerText != "X") {
        const marker = round % 2 ? playerX.getCharacter() : playerO.getCharacter();
        target.innerText = marker;
        gameBoard.updateBoard();
      }
    }
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
  const boxesArr = Array.from(boxes);
  boardContainer.addEventListener("click", gameController.play);
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