function solve(array) {

    let result = array.sort((a, b) =>  {
        a.length - b.length;
        if(a.length === b.length){
            result.sort((a, b) => a.localeCompare(b));
        }
    });

    console.log(result.join('\n'));
    
}
solve(['alpha',
    'beta',
    'gamma']);