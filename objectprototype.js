function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Adding method to the constructor after it has been declared
Person.prototype.fullName = 'Sandy kumar';
Person.prototype.getName = function () {
    return this.name;
};
const per = new Person('sandy', 25);
// console.log(per.fullName);
// console.log(per.getName());