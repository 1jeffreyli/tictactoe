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

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const boardContainer = document.querySelector(".gameboard");
  
  return {
    board,
    boardContainer,
    
  }
}) ();

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

}) ();

displayController.render(gameBoard.board);