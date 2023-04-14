name();
// function declaration and defined
// this is function can be invoked the before the declaration
function name() {
    return 'function declaration is hoisted';
}

function withNameParameter(a, b) {
    return a * b;
}

// function expression
// this is function expression can't be called before the declaration
// a();
const funcExpression = () => 'function expression ends with a ; and it didn"t hoisted';
const funcExpresWithDeclaration = (a, b) => a * b;
// self invoking function
(function () {
    console.log('this is self invoking function because')
})();


function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(x);

// call apply bind
// call apply is for a write method to the object which is passed in the arguments
const getFullName = {
    fullName: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

const person1 = {
    firstName: 'sandy',
    lastName: 'kumar'
}
getFullName.fullName.call(person1)
// getFullName.fullName.call(person1, 'working', 25); // work with parameters

// getFullName.fullName.apply(person1, ['working', 25]) // work with parameters and 
/*
    The Difference Between call() and apply()
    The difference is:
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.
*/

// Borrow a method from the another objects - bind
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);