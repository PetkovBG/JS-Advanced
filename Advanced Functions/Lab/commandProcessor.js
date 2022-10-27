function solve(n1, n2){

let str = 'Orlin';

let append = (function (){
str += 'str';
})();

let removeStart = (function(n){
    str = str.substring(0, n);
})();

let removeEnd = (function(n){
str = str.substring(-n);
})();

let print = (function(){
    console.log(str);
})();

}
solve(2, 3);