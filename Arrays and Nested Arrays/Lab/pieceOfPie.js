function pieceOfPay(arr, flavorOne, flavorTwo){

let firstIndex = arr.indexOf(flavorOne);
let secondIndex = arr.indexOf(flavorTwo);
return arr.slice(firstIndex, secondIndex + 1);

}
let sliced = pieceOfPay(['Pumpkin Pie',
 'Key Lime Pie',
 'Cherry Pie',
 'Lemon Meringue Pie',
 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');
console.log(sliced);