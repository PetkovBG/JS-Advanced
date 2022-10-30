let map = new Map();

map.set('four', 4);
map.set('one', 1);
map.set('two', 2);
map.set('five', 5);
map.set('three', 3);

// for (let [key, value] of map){
//     console.log(`${key}: ${value}`);
// }

let sorted = Array.from(map.entries())
            .sort((a, b)=> a[1] - b[1]);
        
            for (let el of sorted){
                let key = el[0];
                let value = el[1];
                console.log(`${key}: ${value}`);
            };
