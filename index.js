console.log("~~~Program Start~~~");

var boardSize = 0;
getBoardSize();
console.log("Your board size is " + boardSize);
var board = generateEmptyBoard(boardSize);
printBoard(board);

console.log("~~~Program End~~~");


//---------Functions-------------
function getBoardSize()
{
  while (true)
  {
    let boardSizePrompt = prompt("Please give a board size:");
    boardSize = Number(boardSizePrompt);
    if(boardSize < 3)
      console.log("Board to small, please try again.");
    else if(boardSize % 2 == 0)
      console.log("Board size not ODD, please try again.");
    else
      return;
  }
}

function generateEmptyBoard(boardSize)
{
  var board = new Array(boardSize);

  for(var i = 0; i < board.length; i++)
    board[i] = new Array(boardSize);
  return board;
}

function printBoard(board)
{
  for(var i = 0; i < board.length; i++)
    console.log(board[i]);
  return;
}