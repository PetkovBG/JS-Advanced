function wordsUppercase3(input){

    return input.match(/\w+/g).join(', ').toUpperCase();

}
console.log(wordsUppercase3('Hi, how are you?'));
console.log(('______'));
console.log(wordsUppercase3('hello'));