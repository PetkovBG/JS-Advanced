function wordsUppercase2(input){

let arr = [];
let buff = '';

for(let i = 0; i < input.length; i++){
    let currentChar = input[i];
    let chASCII = input[i].charCodeAt();
   if(chASCII >= 65 && chASCII <= 90 || (chASCII >= 97 && chASCII <= 122)){
    currentChar = currentChar.toUpperCase();
    buff += currentChar;
    // arr.push(currentChar);
   } else{
    arr.push(buff);
    buff = '';
    // arr.push('');
   }
}
if(buff){
    arr.push(buff)
}
console.log(arr.join(', '))
}
wordsUppercase2('Hi, how are you?');
console.log('______');
wordsUppercase2('hello')
