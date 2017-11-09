"use strict"

function Person(){
  this.name = 'Devan';
}

var p = new Person();
console.log(p.__proto__.constructor == Person);
console.log(p.__proto__ == Person.prototype);
