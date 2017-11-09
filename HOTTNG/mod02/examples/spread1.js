"use strict"

function doSomething(a, b)
{
  return a + b;
}

var data = [3, 4];
var result = doSomething.apply(null, data);

console.log(result);
