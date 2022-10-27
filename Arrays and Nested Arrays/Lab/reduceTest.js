function solve(){

let arr = [1, 2, 3, 4, 5, 6, 7];

let result = arr.reduce((total, current) => total + current);

console.log(result);

let arr2 = [1, 2, 3, 4, 5, 6, 7];

let result2 = arr.reduce((total, current) => total + current, 100); //we can provide a starting point at the end

console.log(result2);

}
solve();