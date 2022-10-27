function extract(elementId){

    let parameter = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    
    let result = [];

    let match = pattern.exec(parameter);
    while(match){
        result.push(match[1]);
        match = pattern.exec(parameter);
    }
    return result.join('; ')

}
extract('content')

// function solve(elementId){

//     let elementText = document.getElementById(elementId);

//     let pattern = /\(([^)]+)\)/g

//     let result = elementText.matchAll(pattern);
//     let matches = [];

//     for(let el of result){
//         matches.push(e[1])
//     }
// console.log(matches);
// }
// solve('content');