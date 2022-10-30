function createPerson(firstName, lastName){
    return {
        firstName,
        lastName,
        fullName() {
            return this.firstName + ' ' + this.lastName
        }
    }
}
let person = createPerson('Orlin', 'Petkov');
let secondPerson = createPerson('Simona', 'Petkova');

console.log(person.fullName());
console.log(secondPerson.fullName());