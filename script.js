const gameBoard = (() => {
  const board = ["X", "X", "O", "O", "X", " ", " ", " ", " "];

  return {
    board
  };
})();

const playerFactory = () => {
    return {

  };
};

const displayController = (() => {
    const render = (array) => {
        for (let i = 0; i < array.length; i++) {
          const boardcontainer = document.querySelector(".gameboard");
          const div = document.createElement("div");
          div.classList.add("game-box");
          div.innerHTML = array[i];
          boardcontainer.appendChild(div);
        }
    }

    return {
        render
    };
}) ();

// iterate through the board array and render it on
// the page
displayController.render(gameBoard.board);