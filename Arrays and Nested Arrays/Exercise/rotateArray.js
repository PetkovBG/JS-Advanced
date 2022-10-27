function solve(array, number){

for(let i = 0; i < number; i++){
    let currentEl = array[array.length - 1];
    array.pop(currentEl);
    array.unshift(currentEl);
}
console.log(array.join(' '));
}
solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);