function sumOfNumbers(n, m){

let nNum = Number(n);
let mNum = Number(m);
let sum = 0;

for(let i = n; i <= m; i++){
    sum += Number(i);
}
console.log(sum);
}
sumOfNumbers('-8', '20');