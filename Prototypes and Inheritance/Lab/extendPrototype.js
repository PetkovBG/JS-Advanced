class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}


function extendPrototype(classToExtend){
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am ${this.species}. ${this.toString()}`
    }
}


extendPrototype(Person);
let myNewPerson = new Person('Maria', 'maria@gmail.com')//.toSpeciesString();
console.log(myNewPerson.toSpeciesString());




// Species.prototype.species = 'Human';
// Species.prototype.toSpeciesString() = () => {
//     return `I am ${this.spcies}. ${toSpeciesString()}`
// }
// let newSpecies = new Species('Maria', 'maria@gmail.com').toSpeciesString();
