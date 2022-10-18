function solve(input) {

    let res = [];
    let instruction = [];
    let obj = {};

    for (let i = 0; i < input.length; i++) {
        let currentEl = input[i];
        if (typeof currentEl === 'number') {
            res.push(currentEl);
        } else {
            instruction.push(currentEl);
        }
    }
    let notEnough = false;
    if (res.length <= 1 && instruction.length > 0) {
        notEnough = true;
        console.log('Error: not enough operands!');
    }

    while (res.length > 1) {
        let lastNum = res.pop();
        let secondToLast = res.pop();
        if (lastNum === undefined || secondToLast === undefined) {
            notEnough = true;
            console.log('Error: not enough operands!');
            break;
        }
        let outcome = 0;
        let operator = instruction.shift();
        if (operator === undefined) {
            notEnough = true;
            console.log('Error: too many operands!');
            break;
        }
        switch (operator) {
            case '+':
                outcome = secondToLast + lastNum;
                res.push(outcome);
                break;
            case '-':
                outcome = secondToLast - lastNum;
                res.push(outcome);
                break;
            case '*':
                outcome = secondToLast * lastNum;
                res.push(outcome);
                break;
            case '/':
                outcome = secondToLast / lastNum;
                res.push(outcome);
                break;

        }
    }

    if (!notEnough) {
        console.log(Math.ceil(res.join('')));
    }

}
// solve(
//     [
//     3,
//     4,
//     '+'
//     ]   
//     );
console.log('--------');
// solve([15,
//     '/']
//    );
// solve([5,
//     3,
//     4,
//     '*',
//     '-']
//    );
// solve([7,
//     33,
//     8,
//     '-']
// );
solve([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']);