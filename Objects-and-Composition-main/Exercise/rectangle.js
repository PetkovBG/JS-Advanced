function solve(width, height, color){

//let rect = rectangle(width, height, color);

let rect = { width, height, color, calcArea(){
    return width * height;
} };
return rect;

console.log(rect.width);
console.log(rect.height);
let colorL = color.length;
let first = color.charAt(0).toUpperCase();
let rest = color.slice(1, colorL);
let firstUpper = first + rest;
rect.color = firstUpper;
console.log(rect.color);
console.log(rect.calcArea());


}
solve(4, 5, 'red');