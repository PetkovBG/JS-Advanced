function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}
Person.prototype.nationality = "Bulgarian";

let student = new Person('Ivan', 'Georgiev', 20);
console.log(student.nationality);

for(let prop in student){
    console.log(prop);
}


class CoolPerson {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName = () =>{
        return this.firstName + ' ' + this.lastName + ' is a great person.'
    }
}

let personInformation = new CoolPerson('Plamen', 'Stefanov');

// let output = personInformation.fullName(); //returns the same result as the one below
// console.log(output);
console.log(personInformation.fullName());
