function solve(input) {

    return input
        .map(element => {
            let data = element.split(' <-> ');

            return {
                name: data[0],
                population: data[1]
            };
        })
        .reduce((result, town) => {
            if (result[town.name] === undefined) {
                result[town.name] = town.population;
            } else {
                result[town.name] += town.population;
            }
            return result;
        }, {});
}
let result = solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

console.log(result);