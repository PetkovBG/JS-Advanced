function solve(matrix){

let isMagical = false;
let horizontalSum = 0;
let verticalSum = 0;
let sum = 0;
let horizontalArr = [];
let verticalArr = [];
let l = matrix.length;
let matrixEnd = matrix[l - 1].length;
let startMatrix = 0;
let startIndex = 0;

console.log(matrixEnd);
console.log(l);
console.log(matrix[l - 1].length);


for(let i = 0; i < matrix[l - 1].length; i++){
    sum = matrix[i].reduce((total, currentNum) => total + currentNum);
    horizontalArr.push(sum);
    sum = 0;
}


for(let i = 0; i < matrixEnd; i++){
    verticalSum += matrix[startMatrix][startIndex];
    startMatrix++;
    if(i === matrixEnd - 1){
        verticalArr.push(verticalSum);
        startIndex++;
        startMatrix = startIndex;
        verticalSum = 0;
        i = -1;
    }
    }

console.log(horizontalArr);
console.log(verticalArr);

}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);