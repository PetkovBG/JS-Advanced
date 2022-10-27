function solve2(array) {

    let biggestNum = array[0];
    let res = [];


    res = array.reduce((acc, currentElement) => {
        if (biggestNum <= currentElement) {
            acc.push(currentElement);
            biggestNum = currentElement;
        }
        return acc
    }, []);
    return res;

}
solve2([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);