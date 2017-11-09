"use strict"

let prefix = 'value_';
let num = 0;

let obj = {
  [prefix + ++num]: num,
  [prefix + ++num]: num,
  [prefix + ++num]: num
};
console.log(obj); 
console.log(obj[prefix+num]);
