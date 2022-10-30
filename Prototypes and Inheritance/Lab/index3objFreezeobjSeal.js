//'use strict';
let student = {
    name: 'Kubrat',
    major: 'IT'
}

Object.freeze(student);

student.major = 'History'; //not valid, this throws an error with 'use strict' at the top
student.name = 'Asparuh' //not valid, this throws an error with 'use strict' at the top

console.log(student); //object remains unchanged

let fruit = {
    name: 'Appricot',
    color: 'Orange'
}
Object.seal(fruit);
fruit.name = 'Peach';
fruit.season = 'Summer'
console.log(fruit);
delete fruit.name; //not valid, throws an error in 'strict mode'
console.log(fruit);
