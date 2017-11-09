"use strict"

function *gen1(){
  yield 4;
  yield 6;
  yield 8;
}
function *gen2(){
  yield 2;
  yield* gen1();
  yield 10;
}

let myGen = gen2();

for(let num of myGen)
{
  console.log(num);
}
