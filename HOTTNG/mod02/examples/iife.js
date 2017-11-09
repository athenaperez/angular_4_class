"use strict"

var x = 5;
(function myIIFE(){
   var x = 10;
   console.log(x);
 })();

console.log(x); 
