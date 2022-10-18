function solve(input){

    let townData = input
        .map(element => {
            let data = element.split(' <-> ');

            return {
                name: data[0],
                population: data[1]
            };
        });

        let registry = {};

        for (let town of townData){
            if(registry[town.name] === undefined){
                registry[town.name] = town.population;
            } else{
                registry[town.name] += town.population;
            }

        }
        return registry;


    }
    let result = solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
    
    console.log(result);