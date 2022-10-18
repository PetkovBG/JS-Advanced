function solve(input) {

    let startingPoint = Number(input.shift());

    let command = {
        chop() { startingPoint = startingPoint / 2; },
        dice() { startingPoint = Math.sqrt(startingPoint); },
        spice() { startingPoint = startingPoint + 1; },
        bake() { startingPoint = startingPoint * 3; },
        fillet() { startingPoint = startingPoint * 0.80; }
    };

    for (let el of input) {
        command[el]();
        console.log(startingPoint);
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);