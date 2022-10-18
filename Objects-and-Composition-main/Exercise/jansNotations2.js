function solve(arr){

let res = [];
let number = [];
let operators = [];

let operationEnum = {
    '+': (a, b) => a + b ,
    '-': (a, b) => a - b,
    '*':(a,b) => a * b,
    '/': (a, b) => a / b
};

for (let el of arr){
    if(typeof el === 'number'){
        number.push(el);
    } else {
        operators.push(el);
    }
}

if (operators.length < number.length - 1){
    console.log('Error: too many operands!');
    return;
} else if (number.length === operators.length || number.length === 0){
    console.log('Error: not enough operands!');
    return;
}

for (let element of arr){
    if (typeof element === 'number'){
        res.push(element);
        continue;
    } 
    let numA = res.pop();
    let numB = res.pop();
    let result = operationEnum[element](numB, numA);
    res.push(result);
}
console.log(res.join(''));

}
solve([3,
    4,
    '+']
   );
   console.log('------');
   solve([5,
    3,
    4,
    '*',
    '-']
   );
   console.log('----');
   solve([7,
    33,
    8,
    '-']
   );