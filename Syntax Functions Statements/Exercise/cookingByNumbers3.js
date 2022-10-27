function cookingByNumbers3(number, ...commands){

    let num = Number(number);
    
    for (let i = 0; i < commands.length; i++){
        num = manipulator(num, commands[i])
    }
    function manipulator (num, command){
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
cookingByNumbers3('32', 'chop', 'chop', 'chop', 'chop', 'chop');
console.log(('--------'));
cookingByNumbers3('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
