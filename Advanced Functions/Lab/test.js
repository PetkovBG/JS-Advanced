let globalVar = 100;

function outter(){

let outterVar = 200;
console.log(globalVar);
console.log(outterVar);

inner();

function inner(){
let innerVar = 5;
console.log(innerVar);
}

}
outter();