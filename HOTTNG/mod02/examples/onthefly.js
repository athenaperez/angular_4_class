"use strict"

let p = {firstName:'Dakota', lastName:'Quinn'};
({firstName, lastName} = p);  //this line fails in Node.js

console.log(firstName);
