/*
 * @description javascript class is different because we can't able declare a property in the class only we declare inside the constructor
 * It has to have the exact name "constructor"
 * It is executed automatically when a new object is created
 * It is used to initialize object properties
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.superName;
    }
    /**
     * @param {any} value
     */
    set superNameOfPerson(value) {
        this.superName = value;
    }
    get fullDetails() {
        return {
            name: this.name,
            age: this.age
        };
    }
    getNewDate() {
        return new Date().toString();
    }
    printNamefromOutside(print) {
        console.log(print);
    }

}

const person = new Person('santhoshkumar', 25);
console.log(person.fullDetails);
console.log(person.getNewDate());
person.printNamefromOutside('this is from the outside scope');
person.superNameOfPerson = 'sandy';
setTimeout(() => {
    console.log(person.superName);
}, 2000);
