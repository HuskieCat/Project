/*
To-do list
check to make sure all requirements are met for the project
*/

console.log("~~~Program Start~~~");

var boardSize = 0;
getBoardSize();
console.log("Your board size is " + boardSize);
var board = generateEmptyBoard(boardSize);

let player = "";
let computer = "";
getCharacter();
console.log("Player character is " + player + " Computer is " + computer);

play();

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
  console.log("");

  for(let row = 0; row < board.length; row++)
  {
    for(let column = 0; column < board[row].length; column++)
    {
      process.stdout.write(board[row][column] + "");
      if(column < board[row].length - 1)
        process.stdout.write(" | ");
    }
    console.log("");
    if(row < board.length - 1)
    {

      for(let column = 0; column < board[row].length; column++)
      {
        process.stdout.write("-");
        if(column < board[row].length - 1)
          process.stdout.write("   ");
      }
      console.log("");
    }
  }
  console.log("");
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
    let input = String(inputPrompt);

    switch(input)
    {
      case "o": case "O": 
        player = "O";
        computer = "X";
        return;
      case "x": case "X":
        player = "X";
        computer = "O";
        return;
    }

    console.log("Player character is invalid, please try again.")
  }
}

function placePiecePlayer()
{
  while(true)
  {
    let playerCordXPrompt = prompt("Enter row location: ")
    let row = Number(playerCordXPrompt);

    if((row < board.length) && (row >= 0))
    {
      while(true)
      {
        let playerCordYPrompt = prompt("Enter column location: ")
        let column = Number(playerCordYPrompt);
        if((column < board[0].length) && (column >= 0))
        {
          if(board[row][column] == " ")
            board[row][column] = player;
          else
            {
              console.log("This location is taken, try again");
              placePiecePlayer(player);
            }
          return;
        }
        else
          console.log(column + " is out of bounds.")
      }
    }
    else
      console.log(row + " is out of bounds.")
  }
  return;
}

function placePieceComputer()
{
  while(true)
  {
    let row = Math.floor(Math.random() * boardSize);
    let column = Math.floor(Math.random() * boardSize);
    if(board[row][column] == " ")
    {
      board[row][column] = computer;
      return;
    }
  }
  return;
}

function play()
{
  if(player == "X")
    printBoard(board);
  while(true)
  {
    //Player
    if(player == "X")
    {
      placePiecePlayer();
      printBoard(board);
      if(winCondition())
      {
        console.log(player + " has won!")
        break;
      }

      //Computer
      placePieceComputer();
      printBoard(board);
      if(winCondition())
      {
        console.log(computer + " has won!")
        break;
      }
    }
    else
    {
      //Computer
      placePieceComputer();
      printBoard(board);
      if(winCondition())
      {
        console.log(computer + " has won!")
        break;
      }

      //Player
      placePiecePlayer();
      printBoard(board);
      if(winCondition())
      {
        console.log(player + " has won!")
        break;
      }
    }
      
  }
}

function winCondition()
{
  let doesWin = false;
  //Top left to bottom right
  if(board[0][0] != " ")
  {
    let piece = board[0][0];
    for(let i = 0; i < board.length; i++)
    {
      if(board[i][i] != piece)
      {
        doesWin = false;
        break;
      }
      else
        doesWin = true;
    }
  }

  if(doesWin)
  {
    return true;
  }
    

  //Bottom left to top right
  if(board[(board.length - 1)][0] != " ")
  {
    let tempRow = (board.length - 1);
    let tempColumn = 0;
    let piece = board[tempRow][tempColumn];
    for(; tempRow > 0; tempRow--, tempColumn++)
    {
      if(board[tempRow][tempColumn] != piece)
      {
        doesWin = false;
        break;
      }
      else
        doesWin = true;
    }
  }

  if(doesWin)
  {
    return true;
  }

  //Columns
  for(let i = 0; i < board.length; i++)
  {
    //Each column top row
    if(board[0][i] != " ")
    {
      let piece = board[0][i];
      for(let j = 0; j < board.length; j++)
      {
        if(board[j][i] != piece)
        {
          doesWin = false;
          break;
        }
        else
          doesWin = true;
      }
    }
  }

  if(doesWin)
  {
    return true;
  }

  //Rows
  for(let i = 0; i < board.length; i++)
  {
    //Each row first column
    if(board[i][0] != " ")
    {
      let piece = board[i][0];
      for(let j = 0; j < board.length; j++)
      {
        if(board[i][j] != piece)
        {
          doesWin = false;
          break;
        }
        else
          doesWin = true;
      }
    }
  }

  if(doesWin)
  {
    return true;
  }
}