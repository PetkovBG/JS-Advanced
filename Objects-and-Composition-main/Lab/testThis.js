function solve(){

let cat = {
    name: 'Sharo',
    age: 5,
    sayHello(){
        return this.name + ': Mew!';
    }
};

let func = cat.sayHello;
console.log(func());
console.log(cat.sayHello());

let dog = {
    name: 'Linda',
    color: 'Black'
};

dog.bark = func;

console.log(dog.bark());


}
solve();