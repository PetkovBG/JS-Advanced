function solve(arr){

let mainIndex = 0;
//let firstRow = arr[0];
let secondaryIndex = arr[0].length - 1;//firstRow[firstRow.length -1];

let mainSum = 0;
let secondarySum = 0;

for(let row = 0; row < arr.length; row++){
    mainSum += arr[row][mainIndex];
    secondarySum += arr[row][secondaryIndex];

    mainIndex++;
    secondaryIndex--;
}
console.log(mainSum + ' ' + secondarySum);

}
solve([[20, 40],
 [10, 60]]);