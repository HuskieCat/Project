/*
To-do list
Play function to actually... play
win function
print a more real looking tik-tak-toe board
allow user to choose location
allow user to choose X or O for character
make a computer opponent
check to make sure all requirements are met for the project
*/

console.log("~~~Program Start~~~");

var boardSize = 0;
getBoardSize();
console.log("Your board size is " + boardSize);
var board = generateEmptyBoard(boardSize);
printBoard(board);

let input = '';
getCharacter();
console.log("Player character is " + input);

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
  let board = new Array(boardSize);

  for(let i = 0; i < board.length; i++)
    board[i] = new Array(boardSize);

  fillBlank(board);
  return board;
}

function printBoard(board)
{
  for(let row = 0; row < board.length; row++)
  {
    for(let column = 0; column < board[row].length; column++)
    {
      process.stdout.write(board[row][column] + "");
      if(column < board[row].length - 1)
        process.stdout.write(" | ");
    }
    console.log("");
  }
  return;
}

function fillBlank(board)
{
  for(let row = 0; row < board.length; row++)
  {
    for(let column = 0; column < board[row].length; column++)
    {
     board[row][column] = " " ;
    }
  }
  return;
}

function getCharacter()
{
  while(true)
  {
    let inputPrompt = prompt("Please select X or O:");
    input = String(inputPrompt);

    switch(input)
    {
      case "o": case "O": case "x": case "X":
        return;
    }

    console.log("Player character is invalid, please try again.")
  }
}