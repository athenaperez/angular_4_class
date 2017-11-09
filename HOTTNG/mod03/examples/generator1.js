"use strict"

function *doStuff()
{
  yield 5;
  yield 10;
  yield 15;
}


let myGen = doStuff();
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
