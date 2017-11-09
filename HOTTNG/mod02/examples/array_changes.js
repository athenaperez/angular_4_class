"use strict"

let array1 = Array.of(2);
console.log('Length of array1:' + array1.length);

array1.fill(4);
console.log(array1);

let array2=Array.from('Hello World');
console.log('Length of array2:' + array2.length);

let products = [{id: 1, name: 'apples'},
                {id: 2, name: 'bananas'},
                {id: 3, name: 'oranges'}]

function findBananas(product){
 return product.id===2;
}

console.log(products.find(findBananas));
