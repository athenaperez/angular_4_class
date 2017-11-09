"use strict"

let obj1 = {
    greeting(name){

        console.log(`Hello ${name}`);
    }

}

obj1.greeting('World');

let obj2 = {
    greeting(name){
        super.greeting(name);
    }

};

Object.setPrototypeOf(obj2, obj1);
obj2.greeting('WORLD');
