function getPersons(){
class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    static information (first, last, currentAge, currentEmail) {
        let name = first;
        let surname = last;
        let ageParam = currentAge;
        let emailParam = currentEmail;
      
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}
return [
    new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
    new Person('SoftUni'),
    new Person('Stephan', 'Johnson', 25),
    new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com')
];
}

// let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
// console.log(person.toString());
// let res = Array.from(person.firstName);
// console.log(res);

console.log(Person.information('Ivan', 10, 'ivan@youremail.net'))

// class Student extends Person {
//     constructor(university){
//         super(true)
//         this.name = 'Milen';
//     }
// }