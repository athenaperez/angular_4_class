"use strict"

let idMaker = {
  [Symbol.iterator](){
    let nextId = 8000;
    return {
      next(){
        return {
          value: nextId++, done: false
        };
      }
    };
  }
};
let iter = idMaker[Symbol.iterator]();

console.log(iter.next().value);
console.log(iter.next().value);
