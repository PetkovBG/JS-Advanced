function solve(){

    let person = {
        firstName: 'Orlin',
        lastName: 'Petkov',
        age: function(myAge){
            return `My age is ${myAge}`
        }
    };
    console.log(person.age(21));

    let cat = {

        name: 'Kitty',
        age: 3,
        sayHello: function(){
            return 'Mew!';
        }
    };
    console.log(cat.sayHello());

}
solve();