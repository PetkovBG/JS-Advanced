function solve(arr){

    return arr
    .filter((el, i) => i % 2 == 1)
    .map(el => el * 2)
    .reverse()
    .join(' ')
    
    }
  let result = solve([10, 15, 20, 25]);
  console.log(result);
    // console.log('-----');
    // let result2 = (solve([3, 0, 10, 4, 7, 3]);
    // console.log(result2);