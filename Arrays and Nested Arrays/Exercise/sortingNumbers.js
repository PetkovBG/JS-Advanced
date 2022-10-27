function solve(array){

let sorted = array.sort((a, b) => a - b);

let result = [];
for (let i = 0; sorted.length > 0; i++){
    let first = sorted.shift()
    let last = sorted.pop();

    result.push(first);
    result.push(last);
}
return result;

}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);