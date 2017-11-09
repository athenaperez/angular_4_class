"use strict"

let wSet = new WeakSet();

let p1 = {name:'Christina', age:43};
let p2 = {name:'Keith', age:46};

wSet.add(p1);


if(wSet.has(p1)){
  console.log(`${p1.name} is present in the WeakSet`);
}
else{
  console.log(`${p2.name} is not present in the WeakSet`);
}
if(wSet.has(p2)){
  console.log(`${p2.name} is present in the WeakSet`);
}
else{
  console.log(`${p2.name} is not present in the WeakSet`);
}
