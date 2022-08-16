const gameBoard = (() => {
    const playerMove = [];

    return {
        playerMove,

    }
}) ();

const playerFactory = (name) => {
    const sayName = () => {
        console.log(name);
    }

    return {
        sayName
    }
};


const displayController = (() => {


}) ();