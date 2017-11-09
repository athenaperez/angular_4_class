"use strict"

let nameMap = new Map();

nameMap.set(0, 'Kelly');
nameMap.set(1, 'Jim');
nameMap.set(2, 'Bobbi');
nameMap.set(3, 'Paul');
nameMap.set(4, 'Neil');
nameMap.set(5, 'Susan');

console.log('Size of map:' + nameMap.size);
console.log(nameMap.values());

if(nameMap.has(4)){
  nameMap.delete(4);
  console.log('Item deleted!');
  console.log('Size of map:' + nameMap.size);
}
console.log(nameMap.entries());
