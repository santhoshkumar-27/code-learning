// imports

// inline named exports

// export const name = "Jesse";
// export const age = 40;
const name = "Jesse";
const age = 40;


const message = () => {
    return name + ' is ' + age + 'years old.';
};

// or exports at all once
export {
    name, age
};

// default exports
export default message;