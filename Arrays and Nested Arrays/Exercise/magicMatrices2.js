function solve(matrix) {

    let matrixL = matrix.length;
    let horSum = 0;
    let verSum = 0;
    let horArr = [];
    let verArr = [];
    let isMagical = false;

    for (let i = 0; i < matrixL; i++) {
        sum = matrix[i].reduce((total, currentNum) => total + currentNum);
        horArr.push(sum);
        sum = 0;
    }

    for (let i = 0; i < matrixL; i++) {

        for (let j = 0; j < matrixL; j++) {
            verSum += matrix[j][i];
            if (j == matrixL - 1) {
                verArr.push(verSum);
                verSum = 0;
            }
        }
    }
    for (k = 0; k < horArr.length; k++) {
        if (horArr[k] === verArr[k]) {
            isMagical = true;
        } else {
            isMagical = false;
        }
    }
    console.log(isMagical);
}
solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);