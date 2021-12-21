'use strict';
const ramazan = {
  firstName: 'Ramazan',
  year: 1995,
  calcAge: function () {
    ///    SOLUTION 1 FOR THIS   ///
    // console.log(2037 - this.year);

    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);

    ///    SOLUTION 2 FOR THIS   ///
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
ramazan.greet();
ramazan.calcAge();

//      arguments           //
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

//argumets do not work in arrow function
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;

console.warn(age); //31
console.warn(oldAge); //30

const me = {
  name: 'Ramazan',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);

const ali = {
  firstName: 'Ali',
  lastName: 'Cetin',
  age: 23,
};

const aliCopy = Object.assign({}, ali);
console.warn(aliCopy);
aliCopy.lastName = 'Smith';
console.warn('Real Ali', ali);
console.warn('Copy Ali', aliCopy);
