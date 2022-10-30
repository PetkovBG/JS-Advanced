let dog = {
    name: 'Linda',
    age: 5
}

Object.defineProperty(dog, 'color', {
    enumerable: false,
    value: 'Black'
    //writable: if you don't specify true here it will take it as being false by default
    //if we put 'use strict' at the top it will throw an error when we try to modify this property
});

Object.defineProperty(dog, 'location', {
    writable: false,
    value: 'Brashlen',
    enumerable: true // if you don't specify this it takes it as false by default
});

Object.defineProperty(dog, 'food', {
    value: 'bone',
    configurable: true //by default if we don't set to true this setting is set to false
})

dog.location = 'Ruse';
delete dog.food; //we can delete when the configurable setting is set to true
console.log(dog);

for(let prop in dog){
    console.log(prop + ' ' + dog[prop]);
}