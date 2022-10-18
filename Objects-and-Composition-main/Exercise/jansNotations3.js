function solve(input) {

    let res = [];
    let instruction = [];
    let obj = {};
    let notEnough = false;
    let tooMany = false;

    for (let i = 0; i < input.length; i++) {
        let currentEl = input[i];
        if (typeof currentEl === 'number') {
            res.push(currentEl);
        } else {
            instruction.push(currentEl);
            if (res.length < 1 && instruction.length > 0) {
                notEnough = true;
               continue;
            }
        
            while (res.length > 1) {
              
                let outcome = 0;
                let operator = instruction.shift();
                if (operator === undefined) {
                    tooMany = true;
                    break;
                }

                let lastNum = res.pop();
                let secondToLast = res.pop();
                if (lastNum === undefined || secondToLast === undefined) {
                    notEnough = true;
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

        }
    }
    
    if (tooMany) {
        console.log('Error: too many operands!');
    }          

    if (!notEnough && !tooMany) {
        console.log(Math.ceil(res.join('')));
    }  else if (notEnough){
        console.log('Error: not enough operands!');
    }

}
// solve(
//     [
//     3,
//     4,
//     '+'
//     ]   
//     );
// console.log('--------');
solve([15,
    '/']
   );
   console.log('-----');
solve([5,
    3,
    4,
    '*',
    '-']
   );
   console.log('--------');
solve([7,
    33,
    8,
    '-']
);
// console.log('-------');
// solve([-1,
//     1,
//     '+',
//     101,
//     '*',
//     18,
//     '+',
//     3,
//     '/']);