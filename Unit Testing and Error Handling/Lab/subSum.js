function sum(arr, startIndex, endIndex){

    let type = Array.isArray(arr);
    let sum = 0;
    if (startIndex < 0){
        startIndex = 0;
    }

    let arrLength = arr.length;
    if(endIndex > arrLength - 1){
        endIndex = arrLength - 1;
    }

    if(type){
      for(let i = startIndex; i <= endIndex; i++){
        currentNum = Number(arr[i]);
        sum += currentNum;
      }
    } else{
        sum = NaN;
    }
    return sum;
   
}
sum([10, 20, 30, 40, 50, 60], 3, 300);
console.log('-----');
sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);