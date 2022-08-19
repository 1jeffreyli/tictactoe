const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const boardcontainer = document.querySelector(".gameboard");
  return {
    board,
    boardcontainer
  };
})();

const playerFactory = (name, character) => {

  return {  };
};

const displayController = (() => {
  const render = (array) => {
    reset();
    gameBoard.board.forEach((cell) => {
      const div = document.createElement("div");
      div.classList.add("game-box");
      div.innerHTML = cell;
      gameBoard.boardcontainer.appendChild(div);
    })
  }
  const reset = () => {
    gameBoard.boardcontainer.innerHTML = "";
  }
  
  // const addMarker = (event) => {
  //   const target = event.target;
  //   if (target.matches("div")) {
  //     if (target.innerHTML === "O" || target.innerHTML === "X") {
  //       alert("Sorry, please choose a different square");
  //     } else if (target.innerHTML != "O" && target.innerHTML != "X") {
  //       playerFactory.changeTurn();
  //       target.innerHTML = playerFactory.currentTurn[0];
  //     }
  //   }
  // };
  return {
    render,
  };
})();

// iterate through the board array and render it on
// the page
// displayController.render(gameBoard.board);
gameBoard.boardcontainer.addEventListener("click", displayController.render(gameBoard.board));
