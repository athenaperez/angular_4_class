"use strict"

function *namesGen(){
  yield* ['Bob', 'Stuart', 'Kevin'];
}

let gen = namesGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
