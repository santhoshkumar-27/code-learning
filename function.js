name();
// function declaration and definition
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