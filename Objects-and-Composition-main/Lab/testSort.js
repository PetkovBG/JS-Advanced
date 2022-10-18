function solve(){

let phoneBook = {};

phoneBook['Orlin'] = '5';
phoneBook['Simona'] = '1';
phoneBook['Toni'] = '20';
phoneBook['Stella'] = '15';
phoneBook['Plamen'] = '30';

let result = {};

let sorted = Object    //sorts by name
    .entries(phoneBook)
    .sort((first, second) => {
        if(first[0] > second[0]) return 1;
        if(first[0] < second[0]) return -1;
        return 0;
    })
    .forEach(pair => {
        let key = pair[0];
        let value = pair[1];
        result[key] = value;
    });

    

// let numSort = Object
//     .entries(phoneBook)
//     .sort((first, second) =>{
//         if(Number(first[1]) > Number(second[1])) return 1;
//         if(Number(first[1]) < Number(second[1])) return -1;
//         return 0;
//     });

//     console.log(sorted);
//     console.log(numSort);

console.log(result);


}
solve();