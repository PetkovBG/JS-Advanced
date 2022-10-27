function biggerHalf2(arr){

    arr.sort((a, b) => a-b);
   return arr.slice(arr.length / 2)

}
let result = biggerHalf2([4, 7, 2, 5]);
console.log(result);
console.log('_____');
let result2 = biggerHalf2([3, 19, 14, 7, 2, 19, 6]);
console.log(result2);