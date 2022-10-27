function solve(...params){

    let obj = {};
    let countObj = {};
    let firstCount = 1;

    for(let el of params){
        let type = typeof el;
        obj[type] = el;
    }
    // for ([key, value] of Object.entries(obj)){
    //     console.log(`${key}: ${value}`);
    // }

    for(let keys of Object.keys(obj)){
        let currentKey = keys;
        if(!countObj.hasOwnProperty(currentKey)){
            countObj[currentKey] = firstCount
        } else{
            countObj[currentKey] = firstCount++;
        }
    }
    // for(let [type, count] of Object.entries(countObj)){
    //     console.log(`${type} = ${count}`);
    // }
    return obj;
    return countObj;


}
solve('cat', 42, function () { console.log('Hello world!'); });