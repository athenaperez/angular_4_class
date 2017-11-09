"use strict"

class Shape{
  constructor(name)
  {
    this.name = name;
  }
  getName(){
    console.log(`${this.name}`);
  }

}


class Rectangle extends Shape{
  constructor(name, length, width){
    super(name);
    this.length = length;
    this.width = width;
  }
  getArea(){
    super.getName();
    let area = this.length * this.width;
    console.log(`A ${this.name} with a length of ${this.length} and a width of ${this.width} has an area of:${area}`);
  }

}

class Circle extends Shape{
  constructor(name, radius){
    super(name);
    this.radius = radius;  }
  getArea(){
    super.getName();
    let area = (Math.PI * Math.pow(this.radius, 2));
    console.log(`A ${this.name} with a radius of ${this.radius} has an area of:${area}`);
  }

}

class Triangle extends Shape{
  constructor(name, base, height){
    super(name);
    this.base = base;
    this.height = height;
  }
  getArea(){
    super.getName();
    let area = (.5 * this.base) * this.height;
    console.log(`A ${this.name} with a base of ${this.base} and a height of ${this.height} has an area of:${area}`);
  }

}


let s = new Shape('shape');
s.getName();


let r = new Rectangle('rectangle', 10, 5);
r.getArea();

let c = new Circle('circle', 5);
c.getArea();

let t = new Triangle('triangle',3, 10);
t.getArea();
