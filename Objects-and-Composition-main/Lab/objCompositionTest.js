function solve(){

let dog = {
    name: 'Linda',
    age: 5,
    breedSpecifics: {
        breed: 'Newfoundland',
        color: 'black',
        address: {
            country: 'Bulgaria',
            town: 'Brashlen'
        }
    }
}
console.log(dog.breedSpecifics.address.town);
}
solve();