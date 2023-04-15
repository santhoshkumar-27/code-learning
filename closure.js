/*
JavaScript Nested Functions
    All functions have access to the global scope.  
    In fact, in JavaScript, all functions have access to the scope "above" them.
    JavaScript supports nested functions. Nested functions have access to the scope "above" them.
    In this example, the inner function plus() has access to the counter variable in the parent function:
*/

// function add() {
//     let counter = 0;
//     function plus() { counter += 1; }
//     plus();
//     return counter;
// }
// closure 
// or parent scope
const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();
console.log(add());
console.log(add());
console.log(add());
console.log(add());