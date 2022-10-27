function solve2(array) {

    let biggestNum = array.shift();
    let res = [];
    res.push(biggestNum);

    for(let el of array){
        if (el >= biggestNum){
            res.push(el);
            biggestNum = el;
        }
    }
    return res;

}
console.log(solve2([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log('====');
console.log(solve2([1,
    2,
    3,
    4]));