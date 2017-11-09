"use strict"

let person = {name: 'Devan', dateOfBirth: [9,2]};
let {name, dateOfBirth: [month, day]} = person;

console.log(name);  
console.log(month);
