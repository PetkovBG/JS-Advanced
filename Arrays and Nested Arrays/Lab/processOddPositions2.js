function solve(arr){

    let result = arr
    .filter((el, i) => i % 2 == 1)
    .map(el => el * 2)
    .reverse()
    .join(' ')
    
    return result;
    
    }
    console.log(solve([10, 15, 20, 25]));
    console.log('-----');
    console.log(solve([3, 0, 10, 4, 7, 3]));