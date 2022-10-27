function solve(){

    let arr = [1, 2, 3, 4];
   
    let result = arr.map(n => n * 2);
    console.log(result);

    let arrTwo = ['10', '20', '30']; //original array remains the same
    let toNum = arrTwo
    .map(Number)
    .map(n => n * 2)
    .map(n => n * n)
    .map(n => 'Orlin: ' + n)

    console.log(toNum);

}
solve();