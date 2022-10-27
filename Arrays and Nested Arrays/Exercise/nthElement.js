function nthElement(array, number) {

    let result = [];

    for (let i = 0; i < array.length; i += number) {
        result.push(array[i]);
    }
    return result;
}
nthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);
// console.log('----');
// nthElement(['dsa',
// 'asd', 
// 'test', 
// 'tset'], 
// 2
// );