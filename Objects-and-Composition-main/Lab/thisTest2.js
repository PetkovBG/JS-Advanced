function solve(){

const getFullName = person.fullName;
console.log(getFullName);

const anotherPerson = {
firstName: 'Bob',
lastName: 'Petrov'
};

anotherPerson.fullName = getFullName;
console.log(anotherPerson.fullName());

}
solve();