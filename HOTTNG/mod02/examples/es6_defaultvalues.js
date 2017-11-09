"use strict"

function doSomethingElse(a = 1, b = 2, c = 3)
{
  console.log(a, b, c); 
}

doSomethingElse(4, undefined, 2);
