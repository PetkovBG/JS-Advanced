function sameNumbers2(number){

let numAsString = number.toString();
let firstDigit = numAsString[0];
let isSame = true;
let sum = Number(firstDigit);
for(let i = 1; i < numAsString.length; i++){
    if(numAsString[i] !== firstDigit){
        isSame = false;
    }
    sum += Number(numAsString[i])
}
console.log(isSame);
console.log(sum);
}
sameNumbers2(2222222);