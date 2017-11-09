"use strict"

let nameSet = new Set(['Devan', 'Emma', 'Alexis']);

nameSet.add('Joe');

console.log('Size of set:' + nameSet.size);
console.log(nameSet.values());

if(nameSet.has('Joe')){
  nameSet.delete('Joe');
  console.log('Item deleted!');
  console.log('Size of set:' + nameSet.size);
}
console.log(nameSet.entries());
