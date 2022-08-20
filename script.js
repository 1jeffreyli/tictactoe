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
    reset();
    gameBoard.board.forEach((cell) => {
      const div = document.createElement("div");
      div.classList.add("game-box");
      div.textContent = cell;
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
  function play(event, index) {
    const target = event.target;
    if (target.matches("div")) {
      if (target.textContent === "O" || target.textContent === "X") {
        alert("Sorry, please choose a different square");
      } else if (target.textContent != "O" && target.textContent != "X") {
        const marker = round % 2 ? playerX.getCharacter() : playerO.getCharacter();
        target.textContent = marker;
        // gameBoard.board[index] = marker;
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
  boardContainer.addEventListener("click", gameController.play);
  return {
    board,
    boardContainer,
    
  }
}) ();

displayController.render(gameBoard.board);