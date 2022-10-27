function nthElement(array, number) {

    return array.filter((el, i) => {
        if (i % number === 0) {
            return el
        }
    });

}
nthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);