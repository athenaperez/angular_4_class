"use strict"

class Person
{
  constructor(name, age)
  {
    this.name = name;
    this.age = age;
  }

  static GetDescription()
  {
    return 'A Person has a name and an age';
  }
}

let p1 = new Person('Devan', 2);
console.log(Person.GetDescription());
