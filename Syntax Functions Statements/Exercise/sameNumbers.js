function sameNumbers(number){

let numToStr = number.toString();
let numberLength = numToStr.length;
let isTrue = false;
let sum = 0;

for(let i = numberLength; i > 0; i--){
    sum += Number(numToStr[i-1])
    if(numToStr[i] !== numToStr[i-1]){
        isTrue = false;
    } else{
        isTrue = true;
    }
}
    if (isTrue){
        console.log('true');
    } else{
        console.log('false');
    }
    console.log(sum);
}
sameNumbers(22);