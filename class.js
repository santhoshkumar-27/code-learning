/*
* javascript class is different because we can't able declare a property in the class only we declare inside the constructor
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get fullDetails() {
        return {
            name: this.name,
            age: this.age
        };
    }

}

const person = new Person('santhoshkumar', 25);
console.log(person.fullDetails);
console.log(person);
