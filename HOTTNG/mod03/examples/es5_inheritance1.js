"use strict"

var person1 = {
  name: 'Grace',
__proto__: {age: 7}
}

var person2 = {name:'Jasmine'};

Object.setPrototypeOf(person2, {age: 20});

console.log(person1.name + ' is ' + person1.age);
console.log(person2.name + ' is ' + person2.age);
