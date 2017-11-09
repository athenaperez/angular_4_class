"use strict"

class Person{
  constructor(name, age)
  {
    this.name = name;
    this.age = age;
  }
  showInfo()
  {
    console.log(this.name + ' is ' + this.age);
  }
}
let p1 = new Person('Quinn', 1);
p1.showInfo();
