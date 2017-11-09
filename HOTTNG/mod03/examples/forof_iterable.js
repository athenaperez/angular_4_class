"use strict"

let myIterable = {
                  [Symbol.iterator](){
                    return {
                      x: 0,
                      next() {
                        if(this.x < 5){
                          return {value: this.x++, done: false};
                        }
                        return {value: undefined, done: true};
                      }
                    };
                  }
};

for(let value of myIterable){
  console.log(value);
}
