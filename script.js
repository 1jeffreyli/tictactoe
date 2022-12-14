const Player = (name, character) => {
  this.name = name;
  this.character = character;
  function getName() {
    return name;
  }
  function getCharacter() {
    return character;
  }
  return { getName, getCharacter };
};

const displayController = (() => {
  const resetBtn = document.getElementById("reset");
  // displays the gameboard using DOM methods
  function render(array) {
    array.forEach((cell) => {
      const div = document.createElement("div");
      div.classList.add("game-box");
      div.innerText = cell;
      gameBoard.boardContainer.appendChild(div);
    });
  }

  // add reset feature to reset button, resetting the board array, display, and game flow
  resetBtn.addEventListener("click", () => {
    gameBoard.reset();
    gameController.reset();
    render(gameBoard.board);
  });

  return {
    render,
  };
})();

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
        const marker =
          round % 2 ? playerX.getCharacter() : playerO.getCharacter();
        target.innerText = marker;
        gameBoard.updateBoard();
        // go to the next round
        return round++;
      }
    }
  }

  function checkWin() {
    const marker = round % 2 ? playerX.getCharacter() : playerO.getCharacter();
    let gameOver = false;
    let winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    winConditions.forEach((item) => {
      if (
        gameBoard.board[item[0]] === marker &&
        gameBoard.board[item[1]] === marker &&
        gameBoard.board[item[2]] === marker
      ) {
        gameOver = true;
        gameBoard.removePlay();
        alert(`Player ${marker} is the winner!`);
      } else if (
        round === 9 &&
        gameOver === false &&
        gameBoard.board[item[0]] !== marker &&
        gameBoard.board[item[1]] !== marker
      ) {
        gameOver = true;
        alert("Tie");
      }
    });
  }

  function reset() {
    round = 1;
    gameOver = false;
  }

  return {
    playerX,
    playerO,
    play,
    checkWin,
    reset,
  };
})();

const gameBoard = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const boardContainer = document.querySelector(".gameboard");
  const boxes = document.getElementsByClassName("game-box");
  // use event delegation on the container instead of individually adding 9 event listeners
  boardContainer.addEventListener("click", gameController.play);
  // iterate through the DOM to update the board array
  function updateBoard() {
    for (let i = 0; i < 9; i++) {
      board[i] = boxes[i].innerText;
    }
    gameController.checkWin();
  }
  function reset() {
    board.fill("", 0, 9);
    boardContainer.innerHTML = "";
  }

  function addPlay() {
    boardContainer.addEventListener("click", gameController.play);
  }

  function removePlay() {
    boardContainer.removeEventListener("click", gameController.play);
  }

  return {
    board,
    boardContainer,
    boxes,
    updateBoard,
    reset,
    removePlay,
  };
})();

displayController.render(gameBoard.board);
