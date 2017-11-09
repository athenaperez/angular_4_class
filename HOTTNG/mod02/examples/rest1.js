"use strict"


//ES5
function doSomething(a, b)
{
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
}

doSomething(1, 2, 3, 4, 5);

//ES6
function doSomethingElse(a, b, ...args)
{
  console.log(args);
}

doSomethingElse(1, 2, 3, 4, 5);
