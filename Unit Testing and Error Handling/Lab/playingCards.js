function solve(paramOne, paramTwo){

let cardEnum = {
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    J: '',
    Q: '',
    K: '',
    A: ''
};

let suitEnum = {
    S: '\u2660',
    H: '\u2665',
    D: '\u2666',
    C: '\u2663'
};

let res = {};

if(!cardEnum.hasOwnProperty(paramOne)){
    throw new Error('Error')
} else if (!suitEnum.hasOwnProperty(paramTwo)) {
    throw new Error('Error')
} else {
    paramOne = paramOne.toUpperCase();
    paramTwo = suitEnum[paramTwo];
    //paramTwo = paramTwo.toUpperCase();
    cardEnum[paramOne] = paramTwo;
    res = {
        paramOne: paramTwo,
        toString(){
            console.log(paramOne + paramTwo);
        }
    }
}
return res.toString();
}
solve('A', 'S');
solve('10', 'H');
solve('1', 'C');