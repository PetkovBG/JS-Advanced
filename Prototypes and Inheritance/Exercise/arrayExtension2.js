(function solve() {
    //let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        return this.slice(n);
    };
    Array.prototype.take = function (n) {
        return this.slice(0, n); 
    };
    Array.prototype.sum = function () {
        // let sum = 0;
        // for(let el of this){
        //     sum += el;
        // }
        // return sum;
        return this.reduce((total, value) => total + value);
    };
    Array.prototype.average = function () {
        // let avg = 0;
        // let length = this.length;
        // let sum = 0;
        // for(let el of this){
        //     sum += el;
        // }
        // avg = sum / length;
        // return avg;
        return this.sum() / this.length;
    };
    
})();
//solve();
