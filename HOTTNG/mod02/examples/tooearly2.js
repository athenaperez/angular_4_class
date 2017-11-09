"use strict"

{
  if(typeof(a) === "undefined")
  {
    console.log('a is undefined');
  }
  if(typeof(b) === "undefined")  //throws a ReferenceError
  {
    console.log('b is undefined');
  }

  var a = 4;
  let b = 5;
}
