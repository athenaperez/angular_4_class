"use strict"

function doSomething(x, y)
{
  return x + y;
}

function doSomethingElse(a = 2, b = 3, c = doSomething(a, b))
{
  console.log(a, b, c);
}

doSomethingElse();
