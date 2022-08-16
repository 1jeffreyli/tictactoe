const gameBoard = (() => {
  const board = ["X", "X", "O", "O", "X", " ", " ", " ", " "];
  const render = (array) => {
    for (let i = 0; i < array.length; i++) {
      const boardcontainer = document.querySelector(".gameboard");
      const div = document.createElement("div");
      div.classList.add("game-box");
      div.innerHTML = array[i];
      boardcontainer.appendChild(div);
    }
  };

  return {
    board,
    render,
  };
})();

const playerFactory = (name) => {
  const sayName = () => {
    console.log(name);
  };

  return {
    sayName,
  };
};

const displayController = (() => {})();

// iterate through the board array and render it on
// the page

gameBoard.render(gameBoard.board);
