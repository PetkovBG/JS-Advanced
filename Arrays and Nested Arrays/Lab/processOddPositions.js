function solve(arr){

let result = arr
.filter(el => arr.indexOf(el) % 2 === 1)
.map(el => el * 2)
.reverse()

return result;

}
console.log(solve([10, 15, 20, 25]));
console.log('-----');
console.log(solve([3, 0, 10, 4, 7, 3]));