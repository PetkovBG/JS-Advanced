class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
    //The below solution with arrow function also works:
    // toString = () => {
    //     return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    // }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
let res = Array.from(person.firstName);
console.log(res);