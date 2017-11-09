"use strict"

function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.showInfo = function(){
  console.log(this.name + ' is ' + this.age);
};

var p1 = new Person('Ann', 39);
var p2 = new Person('Nathan', 41);


p1.showInfo();
p2.showInfo();
console.log(p1.showInfo == p2.showInfo); 
