"use strict"

class Person{
  constructor(name, age)
  {
    this._name = name;
    this._age = age;
  }

  get name(){
    return this._name;
  }
  set name(name){
    this._name = name;
  }

  showInfo()
  {
    console.log(this.name + ' is ' + this._age);
  }
}

let p1 = new Person('Quinn', 1);
p1.showInfo();
