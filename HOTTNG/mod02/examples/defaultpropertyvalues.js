"use strict"

let p = {firstName: 'Gus', lastName: 'Mitchell'};
let {firstName, lastName, middleInitial = 'Edward'} = p;

console.log(middleInitial);
