function solve(arr, type){

if(type === 'asc'){
    arr.sort((a, b) => a - b);
} else if(type === 'desc'){
    arr.sort((a, b) => b - a);
}
return arr;

}
solve([14, 7, 17, 6, 8], 'asc');