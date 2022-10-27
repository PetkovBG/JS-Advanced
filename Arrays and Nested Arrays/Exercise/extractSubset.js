function solve(array) {

    let biggestNum = 0;
    let res = [];

    for (let num of array) {
        if (num >= biggestNum) {
            biggestNum = num;
            res.push(biggestNum);
        }
    }
    return res;

}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log('====');
console.log(solve([1,
    2,
    3,
    4]));