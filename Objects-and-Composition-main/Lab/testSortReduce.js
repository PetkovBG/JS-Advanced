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
        .reduce((sorted, current) =>{
            let key = current[0];
            let value = current[1];
            sorted[key] = value;
            return sorted;
        }, {});

    console.log(sorted);
}
solve();