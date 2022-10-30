class Person {
    constructor(name){
        this.name = name;
    }
}
// let newPerson = new Person('Orlin');
// console.log(newPerson);

class Student extends Person {
    constructor(university){
        super(true)
        this.name = 'Milen';
    }
}
console.log(newPerson);