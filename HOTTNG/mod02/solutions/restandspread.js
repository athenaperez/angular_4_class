"use strict"

const defaultColors = ['red', 'blue', 'yellow'];
const userChoices = ['orange', 'green'];

const merged =[...defaultColors, ...userChoices];
console.log(merged);


console.log('---------------------');


function getSum(total, num){
    return total + num;
}

/*
//Function expecting an array

function addNumbers(numbers){
  return numbers.reduce(getSum,0);
}

console.log(addNumbers([1,2,3,4,5,6,7,8,9]));
*/

//Function using rest operator
function addNumbers(...numbers){
  return numbers.reduce(getSum,0);
}

console.log(addNumbers(1,2,3,4,5,6,7,8,9));
