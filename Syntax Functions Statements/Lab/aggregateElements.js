function solve(numbers){


    console.log(aggregate(numbers, x => x));
    console.log(aggregate(numbers, x => 1 / x));
    console.log(aggregate(numbers, x => x.toString()));

function aggregate(numbers, func){
    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        result += func(numbers[i]);
    }
    return result;
}

}
solve([1, 2, 4]);