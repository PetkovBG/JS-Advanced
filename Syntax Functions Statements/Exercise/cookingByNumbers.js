function cookingByNumbers(number, opOne, opTwo, opThree, opFour, opFive) {

    let num = Number(number);

    let arr = [];
    arr.push(opOne);
    arr.push(opTwo);
    arr.push(opThree);
    arr.push(opFour);
    arr.push(opFive);
    for (let el of arr) {
        switch (el) {
            case 'chop':
                num /= 2;
                console.log(num);
                break;
            case 'dice':
            num = Math.sqrt(num);
            console.log(num);
                break;
            case 'spice':
                num += 1;
                console.log(num);
                break;
            case 'bake':
                num *= 3;
                console.log(num);
                break;
            case 'fillet':
                num = (num * 0.80);
                console.log(num);
                break;
                default:
                    break;
        }
    }

}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');