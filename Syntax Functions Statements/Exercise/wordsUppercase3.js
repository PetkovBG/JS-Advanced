function wordsUppercase3(input){

    let pattern = /\w+/g;
    let match = input.match(pattern);
    let result = [];
    
    for(let el of match){
        el = el.toUpperCase();
        result.push(el);
    }
    console.log(result.join(', '));



}
wordsUppercase3('Hi, how are you?');
console.log(('______'));
wordsUppercase3('hello');