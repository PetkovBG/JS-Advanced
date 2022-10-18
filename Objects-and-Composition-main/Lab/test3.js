function solve(){

    let student = {
        name: 'Ivan',
        age: '20',
        mark: 6
    };

    let student2 = {...student}; //makes a copy of the Object but it is not reference type, it is a shallow copy

    student.age = '21';

    console.log(student);
    console.log(student2);

}
solve();