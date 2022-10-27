function solve(x, y, operator) {
    let result = 0;
    switch (operator) {
        case '+':
        result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '**':
            result = x ** y;
            break;
        default:
            break;

    }
    console.log(result);
}
solve(3, 5.5, '*');