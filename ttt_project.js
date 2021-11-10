//node ttt_project.js

console.log("~~~Program Start~~~");

var boardSize = 0;
let boardSizePrompt = prompt("Please give a board size:");
getBoardSize();
console.log("Your board size is " + boardSize);

let input = '';
let boardSizePrompt = prompt("Please select X or O:");
getPiece();
console.log("You are player " + input);

console.log("~~~Program End~~~");


//---------Functions-------------
function getBoardSize()
{
  while (true)
  {
    let boardSizePrompt = prompt("Please give a board size:");
    boardSize = Number(boardSizePrompt);
    if(boardSize % 10 != 0)
      console.log("Board size not ODD, please try again.");
    else
      return;
  }
}

function getPiece()
{
  let inputPrompt = prompt("Please select X or O:");
  input = String(inputPrompt);
  if(input = 'x' || input = 'X')
    console.log(" You are player X.");
  else
    console.log("You are player O.");
  return;
}