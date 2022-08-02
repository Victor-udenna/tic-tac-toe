let origBoard;
const huplayer = "0";
const aiPlayer = "x";
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
// All possible winnig combination

const cells = document.querySelectorAll(".cell");

let startgame_btn = document.querySelector("#startgame");
let endgame = document.querySelector(".endgame");

function startGame() {
  endgame = document.querySelector(".endgame").style.display = "none";
  // makes the array every number from zero to nine
  origBoard = Array.from(Array(9).keys());
  console.log(origBoard);
  // when game restarts in removes all the x and os from the box
  // when game restarts, it removes all the x and o in the game
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

function turnClick(square) {
  // its the human player thats clicking
  turn(square.target.id, huplayer);
}

function turn(squareId, player) {
  // sets the board array at the id being clicked to player
  origBoard[squareId] = player;
  // update the display
  document.getElementById(squareId).innerText = player;

  let gameWon = checkWin(origBoard, player);
  if (gameWon) gameOver(gameWon);
}

// DECLARING A WINNER

function checkWin(board, player) {
  let = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
  let gameWon = null;
  // loping through the win cumbo

  for (let [index, win] of winCombos.entries()) {
    if (win.every((elem) => plays.indexof(elem) > -1)) {
      gameWon = { index: index, player: player };
      break;
    }
  }

  return gameWon;
}

// gameOver function
function gameOver(gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == huplayer ? "blue" : "red";
  }

  for (let i; i < cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false);
  }
}
