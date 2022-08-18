const gameBoard = (() => {
  const board = ["X", "X", "O", "O", "X", " ", " ", " ", " "];

  return {
    board
  };
})();

const playerFactory = (() => {
  let currentTurn = [];
  const promptPlayer = () => {
    let playerChoice = prompt("X or O?");
    let playerChoiceString = playerChoice.toString();
    currentTurn[0] = playerChoiceString;
  }
    return {
      currentTurn,
      promptPlayer
  };
}) ();

const displayController = (() => {
    const render = (array) => {
        for (let i = 0; i < array.length; i++) {
          const boardcontainer = document.querySelector(".gameboard");
          const div = document.createElement("div");
          div.classList.add("game-box");
          div.innerHTML = array[i];
          boardcontainer.appendChild(div);
        }
        const boardcontainer = document.querySelector(".gameboard");
        boardcontainer.addEventListener("click", changeColor)
    }
    const changeColor = (event) => {
      const target = event.target;
      if (target.matches("div")) {
        // target.style.backgroundColor = "red";
        if (target.innerHTML === "O" || target.innerHTML === "X") {
          alert("Sorry, please choose a different square");
        } else if (target.innerHTML != "O" && target.innerHTML != "X") {
          playerFactory.promptPlayer();
          target.innerHTML = playerFactory.currentTurn[0];
        }
        }
      };
    return {
        render,
        changeColor
    };
}) ();

// iterate through the board array and render it on
// the page
displayController.render(gameBoard.board);