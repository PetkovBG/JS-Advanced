function biggerHalf(arr) {

    let sorted = arr.sort((a, b) => {
        return a - b
    });
    let sortedLength = sorted.length;
    let cutPortion = 0;
    if (sortedLength % 2 === 0) {
        cutPortion = sortedLength / 2;
    } else {
        cutPortion = Math.floor(sortedLength / 2);
    }

    let res = sorted.slice(cutPortion);
    console.log(res);

}
biggerHalf([4, 7, 2, 5]);
console.log('_____');
biggerHalf([3, 19, 14, 7, 2, 19, 6]);