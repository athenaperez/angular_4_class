"use strict"

function Person(name, age)
{
  this.name = name;
  this.age = age;
}
Person.prototype.showInfo = function(){

  console.log(this.name + ' is ' + this.age);

}

var p1 = new Person('Quinn', 1);
var p2 = new Person('Marie', 2);

p1.showInfo();
p2.showInfo();
