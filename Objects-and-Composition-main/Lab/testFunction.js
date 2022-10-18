function solve(){

let person = {
    firstName: 'John',
    lastName: 'Avery',
    age: function (myAge) {
        return `My age is ${myAge}`
    }
}
console.log(person.age(28));

}
solve();