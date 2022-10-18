function solve(){

const person = {
    firstName: 'Toni',
    lastName: 'Petkov',
    fullName(){
        return this.firstName + ' ' + this.lastName;
    }
};
    console.log(person.fullName());

    const getFullName = person.fullName;
    console.log(getFullName());
    
    const anotherPerson = {
    firstName: 'Bob',
    lastName: 'Petrov'
    };
    
    anotherPerson.fullName = getFullName;
    console.log(anotherPerson.fullName());
    

}
solve();