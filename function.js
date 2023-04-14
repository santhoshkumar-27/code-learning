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
