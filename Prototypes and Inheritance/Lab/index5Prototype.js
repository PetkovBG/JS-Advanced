function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.fullName = function (){
    return this.firstName + ' ' + this.lastName;
}

let person = new Person ('Orlin', 'Petkov');
let secondPerson = new Person ('Toni', 'Petkov');

console.log(person.fullName());
console.log(secondPerson.fullName);

console.log(person); //you can see the [[Prototype]] in debug mode


let teacher = Object.create(person); //the person objects serves as prototype

teacher.firstName = 'Svetla';
teacher.lastName = 'Pavlova';

console.log(teacher.fullName());
console.log('Test');
