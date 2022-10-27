function solve(input) {

    let newArr = [];
    let inputL = input.length
    for (let i = 0; i < inputL; i++) {
        if (input[i] < 0) {
            newArr.unshift(input[i]);
        } else {
            newArr.push(input[i])
        }
    }
    for (let el of newArr) { //or newArr.join('\n');
        console.log(el);
    }
}
solve([7, -2, 8, 9]);
console.log('-----');
solve([3, -2, 0, -1]);