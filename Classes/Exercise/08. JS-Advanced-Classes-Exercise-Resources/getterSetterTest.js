class Solve{
    constructor(r){
        this.r = r;
    }
    get r(){
        return this._r;
    }
    set r(value){
        this._r = 5;
    }

}
let newSolve = new Solve();
console.log(newSolve._r);

