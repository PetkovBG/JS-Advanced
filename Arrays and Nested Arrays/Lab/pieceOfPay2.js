function pieceOfPay2(arr, flavorOne, flavorTwo){

    let firstIndex = arr.indexOf(flavorOne);
    let secondIndex = arr.indexOf(flavorTwo);
    let sliced = arr.slice(firstIndex, secondIndex + 1);
    return sliced;
    
    }
    console.log(pieceOfPay2(['Pumpkin Pie',
     'Key Lime Pie',
     'Cherry Pie',
     'Lemon Meringue Pie',
     'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));
