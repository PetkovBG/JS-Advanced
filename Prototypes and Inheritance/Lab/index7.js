function Foo(y) {
    this.y = y;
}
Foo.prototype.x = 10;
Foo.prototype.calculate = function (z) {
    return this.x + this.y + z;
};
let b = new Foo(20);
console.log(b.calculate(30)); // 60
