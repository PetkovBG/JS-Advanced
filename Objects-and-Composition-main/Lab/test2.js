function solve(){

    let student = {
        name: 'Ivan',
        age: '20',
        mark: 6
    };

    let anotherStudent = Object.assign({}, student);

    student.name = 'Ivan Ivanov';

    console.log(student);
    console.log(anotherStudent);

}
solve();