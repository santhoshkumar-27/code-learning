
// Class Inheritance
class Car {
    constructor(company, model) {
        this.company = company;
        this.model = model;
    }
    get companyNameAndModel() {
        return this.company + ' ' + this.model
    }
}

class Delivery extends Car { // extends use to inherit the another class of method or properties
    constructor(company, model, year, month, date) {
        super(company, model);
        /*
            The super() method refers to the parent class.
            By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
        */
        this.year = year;
        this.month = month;
        this.date = date;
    }
    /*
        Classes also allows you to use getters and setters.
        It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.
    */
    get fullDateOfDelivery() {
        return new Date(this.year, this.month, this.date).toString();
    }
}
const bike1 = new Delivery('TVS', 'XL camp', 2010, 0, 27);
console.log(bike1.companyNameAndModel)
console.log(bike1.fullDateOfDelivery)
/*
    Hoisting
    Unlike functions, and other JavaScript declarations, class declarations are not hoisted.
    That means that you must declare a class before you can use it:
*/

/*
    Static class methods are defined on the class itself.
    You cannot call a static method on an object, only on an object class.
*/

// class Static methods
/*
    Static class methods are defined on the class itself.
    You cannot call a static method on an object, only on an object class.
*/
class BigCar {
    constructor(name) {
        this.name = name;
    }
    // static hello() {
    //     return "Hello!!";
    // }
    static hello(data) {
        return "Hello!! " + data.name;
    }
}
// console.log(BigCar.hello())
const newbig = new BigCar('sant');
// newbig.hello() // is not a function
console.log(BigCar.hello(newbig))