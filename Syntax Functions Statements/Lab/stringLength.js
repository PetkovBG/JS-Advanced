function solve(first, second, third){

    let result = 0;
let firstL = first.length;
let secondL = second.length;
let thirdL = third.length;
result = firstL + secondL + thirdL;
console.log(result);
let avg = Math.floor(result / 3);
console.log(avg);

}
solve('chocolate', 'ice cream', 'cake');