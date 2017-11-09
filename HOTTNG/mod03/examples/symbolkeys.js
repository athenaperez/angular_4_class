"use strict"

let uid = Symbol.for("uid");
let user1 = {
    [uid]: "12345"
};

console.log(user1[uid]);        
console.log(uid);
