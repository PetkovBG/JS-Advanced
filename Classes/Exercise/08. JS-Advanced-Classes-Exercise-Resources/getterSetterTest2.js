class Solve{
    constructor(r){
        this.r = r;
    }
    get r(){
        return this._r;
    }
    set r(value){
        if(value < 10){
            throw new Error ('Value is under 10 and therefore not valid');
        }
        this._r = value;
    }

}
let newSolve = new Solve(); //it throws and error with value < 10 and it runs fine with value above 10
console.log(newSolve._r);
