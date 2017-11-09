"use strict"

var person = {
  name: 'Devan',
  age: 2,
  showInfo: function(){
    console.log(this.name + ' is ' + this.age);
  }
};

person.showInfo();
