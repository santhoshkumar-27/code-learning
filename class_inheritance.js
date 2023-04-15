
// Class Inheritance
class Car {
    constructor(company, model) {
        this.company = company;
        this.model = model;
    }
}

class Delivery extends Car {
    constructor(company, model, year, month, date) {
        super(company, model)
    }
}

console.log(new Delivery('TVS', 'XL camp', 2010, 'January', 27))