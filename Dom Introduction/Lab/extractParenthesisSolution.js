function solve(elementId){

    let elementText = document.getElementById(elementId);

    let pattern = /\(([^)]+)\)/g

    let result = elementText.matchAll(pattern);
    let matches = [];

    for(let el of result){
        matches.push(e[1])
    }
console.log(matches);
}
solve('content');