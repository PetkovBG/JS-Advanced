function solve(){

    let arr = ['1', '5', '10', '30'];

    let result = arr
    .map(Number)
    .some(n => n < 10) //returns true or false if some of the items meet the criteria

    console.log(result);

}
solve();