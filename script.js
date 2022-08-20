const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const boardcontainer = document.querySelector(".gameboard");
  const boxes = document.querySelectorAll(".game-box");
  // const updateBoard = () => {
  //   const boxesArr = Array.from(boxes);
  //   boxesArr.forEach(box => {
  //     box.addEventListener("click", event => {
  //       let index = boxesArr.indexOf(box);
  //     })
  //   }
  // }
  return {
    board,
    boardcontainer,
    boxes,
    // updateBoard
  };
})();

const playerFactory = (() => {
  let turn = true;
  function changeTurn() {
    if (turn === true) {
      turn = false;
      currentTurn[0] = "X";
    } else {
      turn = true;
      currentTurn[0] = "O";
    }
  }
  let currentTurn = [];

  return {
    currentTurn,
    changeTurn,
  };
})();

const displayController = (() => {
  function render(array) {
    reset();
    gameBoard.board.forEach((cell) => {
      const div = document.createElement("div");
      div.classList.add("game-box");
      div.innerHTML = cell;
      gameBoard.boardcontainer.appendChild(div);
    });
    gameBoard.boardcontainer.addEventListener("click", addMarker);
  }
  function reset() {
    gameBoard.boardcontainer.innerHTML = "";
  }
  
  function addMarker(event) {
    const target = event.target;
    if (target.matches("div")) {
      if (target.innerHTML === "O" || target.innerHTML === "X") {
        alert("Sorry, please choose a different square");
      } else if (target.innerHTML != "O" && target.innerHTML != "X") {
        playerFactory.changeTurn();
        target.innerHTML = playerFactory.currentTurn[0];
      }
    }
  }
  return {
    render,
  };
})();

// iterate through the board array and render it on
// the page
// displayController.render(gameBoard.board);
gameBoard.boardcontainer.addEventListener("click", displayController.render(gameBoard.board));
