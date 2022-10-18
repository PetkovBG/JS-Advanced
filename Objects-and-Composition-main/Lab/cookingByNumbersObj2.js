function solve(input) {

    //this solution is not working

    let startingPoint = Number(input.shift());

    let command = {
        chop() { return startingPoint / 2; },
        dice() { return Math.sqrt(startingPoint); },
        spice() { return startingPoint + 1; },
        bake() { return startingPoint * 3; },
        fillet() { return startingPoint * 0.80; }
    };
  

    for (let el of input) {
        command[el]();
        console.log(startingPoint);
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);