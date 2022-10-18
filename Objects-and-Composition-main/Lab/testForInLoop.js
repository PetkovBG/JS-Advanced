function solve(){

let cat = {
    name: 'Kitty',
    age: 3,
    color: 'White'
};

for(let key in cat){
    // console.log(key);
    // console.log(cat[key]);
    console.log(`${key}: ${cat[key]}`);
}

console.log(Object.keys(cat));
console.log(Object.values(cat));

let entries = Object.entries(cat);
console.log(entries);
console.log(entries[0]);

}
solve();