console.log("~~~Program Start~~~");

let testSum = 1 + 2;
console.log(testSum);
let testA = 1;
let testB = 2;
console.log(testA + testB);

console.log("Hello World");
let myVariable = 'Chicken Nuggets';
console.log(myVariable);
myVariable = "Chicken the double";
console.log(myVariable);

//User Input
let startIndexInput = prompt("Give starting index: ");
var startIndex = Number(startIndexInput);
let endIndexInput = prompt("Give ending index: ");
var endIndex = Number(endIndexInput);
console.log("Start Index: " + startIndex);
console.log("End Index: " + endIndex);

myFunction(startIndex, endIndex);

console.log("~~~Program Finished~~~");

//~~~~Methods~~~~

function myFunction(startIndex, endIndex)
{
  if(startIndex > endIndex)
  {
    console.error(startIndex + ' is bigger then ' + endIndex + " can't complete.");
    return;
  }

  console.log(myVariable); //The things above act like global variables

  let currentSum = 0;
  for(let i = startIndex; i < endIndex; i++)
  {
    currentSum = i + i;
    console.log(i + ' + ' + i + ' = ' + (i + i) + ' | ' + currentSum); //math
    console.log(i + ' + ' + i + ' = ' + i + i + ' | ' + currentSum); //no math
  }
  //return; //Apparently not needed
}

console.log(currentSum); //Does not exist outside of myFunction