"use strict"

let myMap = new Map([['09-02', 'Devan'], ['07-19', 'Emma'],
                    ['11-20', 'Alexis']]);

console.log('Size of map:' + myMap.size);
console.log(myMap.values());

if(myMap.has('09-02')){
  console.log(myMap.get('09-02'));
}
if(myMap.has('02-08')==false){
  console.log('No such key (\'02-08\')');
}

console.log(myMap.entries());
