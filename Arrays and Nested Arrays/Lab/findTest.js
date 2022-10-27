function solve(){

let arr = ['Orlin', 'Simona', 'Toni', 'Stella'];

let result = arr.find(n => n = 'Orlin')
console.log(result);

let arrTwo = ['1', '2', '3'];
let res = arrTwo
.map(Number)
.find(n => n < 10);
console.log(res); //finds and returns the first element that meets the criteria

}
solve();