function cookingByNumbers2(number, command1, command2, command3, command4, command5) {

    let num = Number(number);
    num = manipulator(num, command1);
    num = manipulator(num, command2);
    num = manipulator(num, command3);
    num = manipulator(num, command4);
    num = manipulator(num, command5);
    function manipulator(num, command) {
        switch (command) {
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
        return num;
    }


}
cookingByNumbers2('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log(('--------'));
cookingByNumbers2('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
