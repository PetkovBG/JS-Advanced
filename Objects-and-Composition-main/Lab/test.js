function solve(){

let student = {
    name: 'Orlin',
    age: '28',
    mark: 5
};

let { name, age, mark} = student;
console.log(name);
console.log(age);
console.log(mark);

let student2 = {
    studentName: 'Ivan',
    studentAge: '20',
    studentMark: 6
};
let { studentName, ...rest} = student2;
console.log(studentName);
console.log(rest);


}
solve();