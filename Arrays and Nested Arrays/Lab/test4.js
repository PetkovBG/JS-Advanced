function solve(arr){

arr.sort();
console.log(arr);
let names = ['Ivan', 'Anna', 'Maria'];
names.sort();
console.log(names);
arr.sort((first, second) =>{ //(a, b) => a - b (or b - a)
    return first - second;
});
console.log(arr);

}
solve([1, 2, 3, 4, 5, - 10, 200, 100, -1, 10]);