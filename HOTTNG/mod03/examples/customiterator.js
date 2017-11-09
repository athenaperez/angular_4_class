"use strict"

let myIteratorObj = {
  numbers: [2, 4, 6, 8, 10],
  counter: 0,
  next: function(){
    let obj = {};
    if (this.counter <this.numbers.length){
      obj = {value:this.numbers[this.counter++], done: false};
    }
    else{
      obj = {done: true};
    }
    return obj;
  }
};

console.log(myIteratorObj.next());
console.log(myIteratorObj.next());
console.log(myIteratorObj.next());
console.log(myIteratorObj.next());
console.log(myIteratorObj.next());
console.log(myIteratorObj.next());
