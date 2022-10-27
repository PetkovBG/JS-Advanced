function wordsUppercase(input) {

    let arr = [];
    let pattern = /[a-zA-Z0-9]+/g

    let match = input.match(pattern);
    for (let el of match) {
        el = el.toUpperCase();
        arr.push(el);
    }
    console.log(arr.join(', '));
}
wordsUppercase('Hi, how are you?');
console.log('-----');
wordsUppercase('hello')