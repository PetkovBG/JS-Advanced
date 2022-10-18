function solve(input){

let townObj = {};

for(let el of input){
    el = el.split(' <-> ')
    let key = el[0];
    let value = Number(el[1]);
    if(!townObj.hasOwnProperty(key)){
        townObj[key] = value;
    } else{
        townObj[key] += value;
    }
}

for(let properties in townObj){
    let key = properties;
    let value = townObj[properties];
    console.log(`${key} : ${value}`);
}

}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);