"use strict"

class Person{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  showInfo(){
    console.log(`${this.name} is ${this.age}`);
  }
}

class Employee extends Person{
  constructor(name, age, jobTitle, salary){
    super(name, age);
    this.jobTitle = jobTitle;
    this.salary = salary;
  }
    showInfo(){
      super.showInfo();
      console.log(`${this.name} makes ${this.salary} as a ${this.jobTitle}`);
  }
}


let p1 = new Person('Ann', 39);
let e1 = new Employee('Nathan', 41, 'Doctor', 125000);

console.log(p1);
p1.showInfo();
console.log('---');
console.log(e1);
e1.showInfo();
