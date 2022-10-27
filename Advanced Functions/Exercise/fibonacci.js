function solve(){

    let a = 0;
    let b = 1;
    let sum = a + b;

   function getFibonator() {
        let fib = getFibonator(a + b)
        let sum = a + b;
            console.log(fib());
    };

}
solve();