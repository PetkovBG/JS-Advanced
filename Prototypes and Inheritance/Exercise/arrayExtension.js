Array.prototype.last = function () {
    return this[this.length - 1];
};
Array.prototype.skip = function (n) {
    let result = [];
    let modified = this[this.slice(n)];
    result.push(modified);
    return result;
};
Array.prototype.take = function (n) {
    let newArr = [];
    let sliced = this[this.slice(0, n)];
    newArr.push(sliced);
    return newArr;
};
Array.prototype.sum = function () {
    let sum = 0;
    for(let el of this){
        sum += el;
    }
    return sum;
};
Array.prototype.average = function () {
    let avg = 0;
    let length = this[this.length];
    let sum = 0;
    for(let el of this){
        sum += el;
    }
    avg = sum / length;
    return avg;
}