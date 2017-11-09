"use strict"

function Person(name, age){
  this.name = name;
  this.age = age;
}
Person.prototype.showInfo = function(){
  console.log(this.name + ' is ' + this.age);
};

function Employee(name, age, jobTitle, salary){
  this.jobTitle = jobTitle;
  this.salary = salary;
  Person.call(this, name, age);
}
Employee.prototype.showInfo= function(){
  console.log(this.name + ' makes ' + this.salary + ' as a '
              + this.jobTitle);
};
var p1 = new Person('Ann', 39);
var e1 = new Employee('Nathan', 41, 'Doctor', 125000);

p1.showInfo(); 
e1.showInfo();
