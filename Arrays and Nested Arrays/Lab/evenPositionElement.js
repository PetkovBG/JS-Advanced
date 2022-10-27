function evenPosition(arr){

    let result = '';
for(let i = 0; i < arr.length; i+=2){
    result += ' ' + arr[i];
}
console.log(result); //we can use result.trim if we need to remove unesseccery spaces
}
evenPosition(['20', '30', '40', '50', '60']);