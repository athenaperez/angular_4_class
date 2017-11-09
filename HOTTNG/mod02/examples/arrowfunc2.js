"use strict"

//Standard function
let circleArea = function(r){
  return Math.PI * Math.pow(r, 2);
}

let result = circleArea(3);

console.log(result);

//Arrow function
let circleArea2 =  (r) => Math.PI * Math.pow(r, 2);

let result2 = circleArea2(3);

console.log(result2);
