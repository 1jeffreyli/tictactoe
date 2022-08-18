const gameBoard = (() => {
  const board = ["", "", "", "", "", "", "", "", ""];
  const boardcontainer = document.querySelector(".gameboard");
  return {
    board,
    boardcontainer
  };
})();

const playerFactory = (() => {
  let turn = true;
  const changeTurn = () => {
    if (turn === true) {
      turn = false;
      currentTurn[0] = "X";
    } else {
      turn = true;
      currentTurn[0] = "O";
    }
  };
  let currentTurn = [];

  return {
    currentTurn,
    changeTurn,
  };
})();

const displayController = (() => {
  const render = (array) => {
    for (let i = 0; i < array.length; i++) {
      const div = document.createElement("div");
      div.classList.add("game-box");
      div.innerHTML = array[i];
      gameBoard.boardcontainer.appendChild(div);
    }
    gameBoard.boardcontainer.addEventListener("click", addMarker);
  };
  const addMarker = (event) => {
    const target = event.target;
    if (target.matches("div")) {
      if (target.innerHTML === "O" || target.innerHTML === "X") {
        alert("Sorry, please choose a different square");
      } else if (target.innerHTML != "O" && target.innerHTML != "X") {
        playerFactory.changeTurn();
        target.innerHTML = playerFactory.currentTurn[0];
      }
    }
  };
  return {
    render,
  };
})();

// iterate through the board array and render it on
// the page
displayController.render(gameBoard.board);
