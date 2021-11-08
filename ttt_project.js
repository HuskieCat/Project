//node ttt_project.js

console.log("~~~Program Start~~~");

var boardSize = 0;
let boardSizePrompt = prompt("Please give a board size:");
getBoardSize();
console.log("Your board size is " + boardSize);

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