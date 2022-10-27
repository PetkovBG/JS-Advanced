function solve(){

let arr = [1, 2, 3];
let secondArr = [100, 200, arr];
console.log(secondArr);
console.log(secondArr[2][1]);

let thirdArr = [300, 400, ...arr];
console.log(arr);
console.log(thirdArr);

let firstArr = [10, 20, 30];
let arrTwo = [40, 50, 60];
let mergeArr = [...firstArr, ...arrTwo]
console.log(mergeArr);

}
solve();