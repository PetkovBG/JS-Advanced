function solve(){

const compareNumbers = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
};

let numbers = [1, 3, 40, 2, 50];

numbers.sort(compareNumbers.ascending);
console.log(numbers);

numbers.sort(compareNumbers.descending);
console.log(numbers);

}
solve();