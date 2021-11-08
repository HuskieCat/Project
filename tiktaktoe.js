//To run do node 'tiktaktoe.js' in Shell

console.log("~~~Program Start~~~");

//1d array
let fruits = ['Apple','Banana'];
console.log(fruits.length);

for(let i = 0; i < fruits.length; i++)
{
  console.log(fruits[i] + " " + i);
}

//2d array
var x = new Array(3);

for(var i = 0; i < x.length; i++)
{
  x[i] = new Array(3);
}

//console.log(x);

for(var i = 0; i < x.length; i++)
{
  for(var j = 0; j < x[i].length; j++)
  {
    if(i == 1)
      x[i][j] = 'H';
    else
      x[i][j] = 'T'
  }
}

for(var i = 0; i < x.length; i++)
  console.log(x[i]);

console.log("~~~Program End~~~");