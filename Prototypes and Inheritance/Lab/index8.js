class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, course){
        super(firstName, lastName);

        this.course = course;
    }

    calculateScore(students){
        //.logic

        return 42;
    }
}

let teacher = new Teacher('Orlin', 'Petkov', 'JS Advanced');
console.log(teacher.fullName());