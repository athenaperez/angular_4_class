"use strict"

function doSomethingElse(a, b)
{
  return a + b;
}

function doSomething(a, b)
{
  return a + b;
}

let data = [3, 4];
let result = doSomethingElse(...data);

console.log(result);
