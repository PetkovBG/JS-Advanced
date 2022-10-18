function solve(){

let name = 'Ruse';
let population = 150000;
let country = 'Bulgaria';

let town = {
    name,
    population,
    country
}
console.log(town);

town.location = {
    lat: 23.642,
    lng: 89.123
}
console.log(town);
}
solve();