"use strict"

function *gen1()
{
  console.log('Function running...');
  yield 'Hello';
  console.log('Function resume...');
  yield 'World';
  return 'The End';
}

var gen = gen1();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log('---');

for(let value of gen1())
{
  console.log(value);
}
