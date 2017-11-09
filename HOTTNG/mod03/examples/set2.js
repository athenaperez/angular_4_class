"use strict"

let mySet = new Set();

mySet.add(12);
mySet.add(29);
mySet.add('Hello World!');
mySet.add(29);

var p = {name:'Gus', age:3};
mySet.add(p);

console.log('Size of set:' + mySet.size);
console.log(mySet.has(36));
console.log(mySet.keys());
console.log(mySet.values());
