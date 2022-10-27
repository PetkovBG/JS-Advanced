function squareOfStars(number){

    let specialEl = '*';
    let result = '';

    if(number === undefined){
        number = 5;
    }
   

for(let i = 0; i < number; i++){
    for(let j = 0; j < number; j++){
        result += ' *';
    }
    let finalRes = result;
    console.log(finalRes);
    result = '';
}

}
squareOfStars(1);
console.log('___');
squareOfStars(2);