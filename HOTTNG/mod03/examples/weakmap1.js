"use strict"

let peopleWeakMap = new WeakMap();

let key1 = {id:1};
let p1 = {name:'Devan Marie', age:2};

peopleWeakMap.set(key1,p1);

let key2 = {id:2};
let p2 = {name:'Alexis Jasmine', age:20};

let key3 = {id:3};
let p3 = {name:'Emma Grace', age:7};


peopleWeakMap.set(key2, p2);

if(peopleWeakMap.has(key2)){
  console.log(peopleWeakMap.get(key2));
}
else{
  console.log('Person not found!');
}
