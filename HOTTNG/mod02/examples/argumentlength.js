"use strict"

function doSomething(a = 1, b = 2, c = 3)
{
  let sum = a + b + c;
  console.log(sum);               
  console.log(arguments.length);
}

doSomething(5);
